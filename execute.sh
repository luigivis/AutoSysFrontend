#!/bin/bash
echo "***************************************"
echo "*++++++AutoSys Generation Date*********"
echo "***************************************"
echo $(date)

echo
echo "***************************************"
echo "*++++++Executing BUILD and run ********"
echo "***************************************"
cd autosys/
npm install

echo
echo "***************************************"
echo "******Generating environment file******"
echo "***************************************"
cat <<EOF >.env
PORT=7000
EOF

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
pm2 start autosys/.app.config.json

cd ../
