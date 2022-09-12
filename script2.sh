cd mc
wget https://download.oracle.com/java/18/latest/jdk-18_linux-x64_bin.tar.gz
tar -xzf jdk-18_linux-x64_bin.tar.gz
mv jdk-18.0.2.1/ java/
rm jdk-18_linux-x64_bin.tar.gz
wget https://api.papermc.io/v2/projects/paper/versions/1.19.2/builds/135/downloads/paper-1.19.2-135.jar
mv paper-1.19.2-135.jar server.jar
echo eula=true > eula.txt