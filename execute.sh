#!/bin/bash
cd autosys/

echo
echo "***************************************"
echo "******Generating environment file******"
echo "***************************************"
cat <<EOF >.env
PORT=7000
REACT_APP_IP_ADDRESS={IPADDRESS}
EOF

echo
echo "***************************************"
echo "*++++++Executing Python Script*********"
echo "***************************************"
cd ../
python3 get_server_info.py
cd autosys/

echo
echo "***************************************"
echo "*++++++AutoSys Generation Date*********"
echo "***************************************"
echo $(date)

echo
echo "***************************************"
echo "*******Removing nodeModule ************"
echo "***************************************"
rm -rf node_modules/

echo
echo "***************************************"
echo "*++++++Executing BUILD and run ********"
echo "***************************************"
npm install
npm audit fix --force

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
