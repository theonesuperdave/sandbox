
# Linux
# docker run -it --name teamcity-server-instance -v "C:/team-city/linux/data:/data/teamcity_server/datadir" -v "C:/team-city/linux/data:/opt/teamcity/logs" -p 8111:8111 jetbrains/teamcity-server

# Windows
# https://blog.jetbrains.com/teamcity/2017/10/teamcity-docker-images-for-windows/
docker run -it --name teamcity-server-instance -m 4GB -v "C:/team-city/data:C:/ProgramData/JetBrains/TeamCity" -v "C:/team-city/logs:C:/TeamCity/logs" -p 8111:8111 jetbrains/teamcity-server:latest-nanoserver
