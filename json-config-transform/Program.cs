using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using Newtonsoft;
using Newtonsoft.Json.Linq;

namespace docker_config_transform
{
    class Program
    {
        static void Main(string[] args)
        {
            // Generate the EXE for this project: 'dotnet publish -c Release -r win10-x64'
            // Usage: 'json-config-transform.exe -sourceFile .\config-source.json -targetFile .\config-target.json -targetOutputFile .\config-modified.json'
            // CLI Arg format: -[arg name] [value]
            // Parse them in pairs.
            var argPairs = new Dictionary<string, string>();

            for(int index=0; index < args.Length; index += 2)
            {
                argPairs.Add(args[index], args[index+1]);
            }

            if (argPairs.ContainsKey("-sourceFile") == false
            || argPairs.ContainsKey("-targetFile") == false
            || argPairs.ContainsKey("-targetFile") == false)
            {
                Console.WriteLine("A required file was not specified. Please provide '-sourceFile', '-targetFile', and '-targetOutputFile' values.");
                return;
            }

            var sourceFile = argPairs["-sourceFile"];
            var targetFile = argPairs["-targetFile"];
            var targetOutputFile = argPairs["-targetOutputFile"];


            // var sourceFile = @".\config-source.json";
            // var targetFile = @".\config-target.json";
            // var targetOutputFile = @".\config-modified.json";

            // Here is the RegEx for HCL files in case they are needed at some point.
            // var appSettingsRegEx = "(APPSETTING_.*)=(.*)";
            // var connStrRegEx = "(CONNSTR_.*)=(.*)";

            JObject sourceConfigAsJObject = JObject.Parse(File.ReadAllText(sourceFile));
            JObject targetConfigAsJObject = JObject.Parse(File.ReadAllText(targetFile));

            TransformJObject(sourceConfigAsJObject, targetConfigAsJObject);

            File.WriteAllText(targetOutputFile, sourceConfigAsJObject.ToString());

            // Console.ReadLine();
        }

        private static void TransformJObject(JObject sourceConfigAsJObject, JObject targetConfigAsJObject)
        {            
            var sourceJsonPath = sourceConfigAsJObject.Path;

            foreach (var item in sourceConfigAsJObject)
            {
                var itemToModify = sourceConfigAsJObject[item.Key];
                if (itemToModify is JValue)
                {
                    var mergeConfigItem = targetConfigAsJObject.SelectToken(item.Value.Path);
                    itemToModify = mergeConfigItem;
                    sourceConfigAsJObject[item.Key] = itemToModify;
                }
                else if (itemToModify is JObject)
                {
                    TransformJObject(itemToModify as JObject, targetConfigAsJObject);
                }
                else if (itemToModify is JArray)
                {
                    // Handles arrays of only values or only objects, but not a mix of the two
                    var arrayModified = new JArray();
                    var arrayContainerModified = new JObject(new JProperty(item.Key, arrayModified));
                    foreach (var arrayItem in itemToModify)
                    {
                        if (arrayItem is JValue)
                        {
                            var result = TransformJArrayItem(arrayItem, targetConfigAsJObject, itemToModify);
                            sourceConfigAsJObject[item.Key]  = new JArray(new JValue[] { result });
                            arrayModified.Add(result);
                        }
                        else
                        {
                            TransformJObject(arrayItem as JObject, targetConfigAsJObject);
                        }
                    }
                }
            }
        }

        private static JValue TransformJArrayItem(JToken arrayItem, JObject targetConfigAsJObject, JToken itemToModify)
        {
            return targetConfigAsJObject.SelectToken(itemToModify.Path).First as JValue;
        }
    }
}
