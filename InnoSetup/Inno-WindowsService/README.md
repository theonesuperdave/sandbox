# Inno Setup
[Inno Setup](http://www.jrsoftware.org/isinfo.php) is a free installer for Windows programs. First introduced in 1997, Inno Setup today 
rivals and even surpasses many commercial 
installers in feature set and stability.

For first-time users, the easiest way to get started is to download and run the **QuickStart Pack**. It comes with a file editor 
(_Inno Setup Studio_) and a handy utility to get things going manually.

## QuickStart Pack
The [Inno Setup QuickStart Pack](http://www.jrsoftware.org/isdl.php#qsp) includes Inno Setup itself and additionally includes an option to
install the **Inno Script Studio** script editor. This script editor is not official and is not required for general usage, but make Inno Setup easier to use. See the Third-Party
Files page for more information.

The Inno Setup QuickStart Pack also includes an option to download and install official encryption support.

#### Practical Usage
Overall, it's very well built, intuitive, and only opinionated where it needs to be. There is a lot of stuff out of the box, but it is 
easily extended in a few ways. The recommended customization is using Pascal Script built into the `[Code]` section of the file. This is 
great if you want to bring back the 1980's, but I've found it easier to implement and maintain by running scripts from the `[Run]` and/or 
`[Uninstall]` sections. Since we are targeting Windows machines, it's easy enough to plug in Powershell scripts or simply Windows CLI.

#### Automation
In order to expedite generation of the installer for code changes, it is now generated automatically for each successful build. This is 
done as a Visual Studio post-build event: `"$(ProjectDir)install\Inno Setup 5\iscc" "$(ProjectDir)install\*.iss"`

The Inno Setup Compiler is included in the `install` directory of the Windows Service project. We simply call this from the command-line to create the installer using the `.iss` file present for the product.

## Resources
[Inno Setup Help](http://www.jrsoftware.org/ishelp/)

[Example .iss file](https://github.com/jrsoftware/issrc/blob/master/Examples/CodeDlg.iss)

[Command -Line Compiler Execution](http://www.jrsoftware.org/ishelp/index.php?topic=compilercmdline)
