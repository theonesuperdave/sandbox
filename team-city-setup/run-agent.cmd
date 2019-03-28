# Linux
# docker run -it --name teamcity-agent-instance-linux -e SERVER_URL="http://[IPADDRESS]:8111" -e AGENT_NAME="Dave's Taco Stand #2" -v "C:/BuildAgent/linux/conf:data/teamcity_agent/conf" jetbrains/teamcity-agent

# Windows
# https://blog.jetbrains.com/teamcity/2017/10/teamcity-docker-images-for-windows/
# docker run -it --name teamcity-agent-instance-win -e SERVER_URL="http://[IPADDRESS]:8111" -e AGENT_NAME="Dave's Taco Stand" -v "C:/BuildAgent/windows/conf:C:/BuildAgent/conf" -v "C:/BuildAgent/windows/logs:C:/BuildAgent/logs" jetbrains/teamcity-agent:latest-nanoserver

docker run -it --name teamcity-agent-instance-win-nodejs -e SERVER_URL="http://[IPADDRESS]:8111" -e AGENT_NAME="Dave's Taco Stand" -v "C:/BuildAgent/windows/conf-nodejs:C:/BuildAgent/conf" -v "C:/BuildAgent/windows/logs-nodejs:C:/BuildAgent/logs" team-city-agent-nodejs:latest