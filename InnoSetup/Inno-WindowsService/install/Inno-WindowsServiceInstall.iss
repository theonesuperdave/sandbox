#define MyAppName "Inno Windows Service"
#define MyAppVersion GetFileVersion('..\bin\Debug\Inno-WindowsService.exe')
#define MyAppPublisher "Dave"
#define MyAppExeName "Inno-WindowsService.exe"
#define MyAppServiceName "Inno-WindowsService"
#define MyAppCopyright "Copyright 2017"

[Setup]
; NOTE: The value of AppId uniquely identifies this application.
; Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{13A0B258-E3D6-419B-B894-D7D575E8FDD4}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
DefaultDirName={pf}\{#MyAppName}
DefaultGroupName={#MyAppName}
DisableProgramGroupPage=yes
OutputBaseFilename=Inno-WindowsService
Compression=lzma
SolidCompression=yes

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "..\bin\Debug\{#MyAppExeName}"; DestDir: "{app}"; Flags: ignoreversion
Source: "..\bin\Debug\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"

[Run]
Filename: {sys}\sc.exe; Parameters: "stop {#MyAppServiceName}" ; Flags: runhidden
Filename: {sys}\sc.exe; Parameters: "delete {#MyAppServiceName}" ; Flags: runhidden
Filename: {sys}\sc.exe; Parameters: "create {#MyAppServiceName} start= auto binPath= ""{app}\{#MyAppExeName}""" ; Flags: runhidden
Filename: {sys}\sc.exe; Parameters: "start  {#MyAppServiceName}" ; Flags: runhidden

[UninstallRun]
Filename: {sys}\sc.exe; Parameters: "stop {#MyAppServiceName}" ; Flags: runhidden
Filename: {sys}\sc.exe; Parameters: "delete {#MyAppServiceName}" ; Flags: runhidden