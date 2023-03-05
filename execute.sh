#!/bin/bash
cd autosys/

param=$1
if [ $1 = "-h" ]; then
    echo "Usage: ./execute.sh -d"
    echo "       ./execute.sh -p"
    echo "       ./execute.sh -h"
    echo "       ./execute.sh"
    echo "       -d: Development mode"
    echo "       -p: Production mode"
    echo "       -h: Help"
    echo "       No parameter: Production mode"
    exit 0
fi
if [ $1 = "" ]; then
    echo "No parameter: Production mode"
    PORT=7000
fi
if [ $1 = "-d" ]; then
    echo "Development mode"
    PORT=7001
fi
if [ $1 = "-p" ]; then
    echo "Production mode"
    PORT=7000
fi


echo
echo "***************************************"
echo "******Generating environment file******"
echo "***************************************"
cat <<EOF >.env
PORT=$PORT
REACT_APP_IP_ADDRESS=http://146.190.144.220:4000/api/v1/
EOF


echo
echo "***************************************"
echo "*++++++AutoSys Generation Date*********"
echo "***************************************"
echo $(date)

echo
echo "***************************************"
echo "*++++++Executing BUILD and run ********"
echo "***************************************"
# npm install
# npm audit fix --force

echo
echo "***************************************"
echo "****** Running AutoSys PM2 ************"
echo "***************************************"

echo

echo "Stop Module"
pm2 stop AutoSys-Frontend:7000

echo "Stop Module"
pm2 delete AutoSys-Frontend:7000

echo "Starting"
pm2 start --name=AutoSys-Frontend:7000 npm -- start

cd ../

echo "url: http://146.190.144.220:$PORT/"