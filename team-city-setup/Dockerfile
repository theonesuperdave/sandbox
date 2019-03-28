FROM jetbrains/teamcity-agent:latest-windowsservercore
ADD NodeJsInstaller.ps1 /Windows/Temp/NodeJsInstaller.ps1
RUN powershell -executionpolicy bypass C:\Windows\Temp\NodeJsInstaller.ps1 -RunNative