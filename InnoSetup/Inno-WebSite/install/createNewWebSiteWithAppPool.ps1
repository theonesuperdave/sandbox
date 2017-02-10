#powershell -File ".\createNewWebSiteWithAppPool.ps1" -physicalPath "C:\Program Files (x86)\web site" -appPoolName "website"

param(
    [Parameter(Mandatory=$true)][string]$physicalPath = $null,
    [Parameter(Mandatory=$true)][string]$appPoolName = $null
)

# pre-requisites
Import-Module WebAdministration

#setup the application pool
if(Test-Path IIS:\AppPools\$appPoolName)  
{
    echo "App pool exists ($appPoolName) - removing"
    Remove-WebAppPool $appPoolName
    gci IIS:\AppPools
}
$pool = New-Item IIS:\AppPools\$appPoolName

#Read-Host -prompt 'hold...'

if(Test-Path IIS:\Sites\$appPoolName)  
{
    echo "Website exists ($appPoolName) - removing"  
    Remove-WebSite $appPoolName  
    gci IIS:\Sites  
}

echo "Creating new website ($appPoolName)"  
$webSite = New-Website -name $appPoolName -PhysicalPath $physicalPath -ApplicationPool $appPoolName -IPAddress "*" -Port "8081"

#Read-Host -prompt 'hold...'
