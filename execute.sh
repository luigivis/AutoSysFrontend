#!/bin/bash

NODE=$(node -v)
if [ "$NODE" != "v18.14.0" ]; then
  echo "NODE VERSION DISTINCT v18.14.0" >&2
  echo "RUN nvm install --v18.14.0"
  exit 2;
fi

# shellcheck disable=SC2034
param=$1
if [ "$1" = "-h" ]; then
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
if [ "$1" = "" ]; then
  echo "No parameter: Production mode"
  MODE=PROD
  PORT=7000
fi
if [ "$1" = "-d" ]; then
  echo "Development mode"
  PORT=7001
  MODE=DEV
fi
if [ "$1" = "-p" ]; then
  echo "Production mode"
  PORT=7000
  MODE=PROD
fi

BRANCH=$(git branch | sed -nr 's/\*\s(.*)/\1/p')
echo "CURRENT BRANCH:" $BRANCH;
if [ "$BRANCH" != "main" ]; then
  echo "NO PROD BRANCH"
  PORT=7001
  MODE=DEV
fi

cd autosys/ || exit

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
# shellcheck disable=SC2046
# shellcheck disable=SC2005
echo $(date)

echo
echo "***************************************"
echo "*++++++Executing BUILD and run ********"
echo "***************************************"
rm -rf node_modules/
npm install
npm audit fix --force

echo
echo "***************************************"
echo "****** Running AutoSys PM2 ************"
echo "***************************************"

echo

echo "Stop Module"
pm2 stop $MODE-AutoSys-Frontend:7000

echo "Stop Module"
pm2 delete $MODE-AutoSys-Frontend:7000

echo "Starting"
pm2 start --name=$MODE-AutoSys-Front:$PORT npm -- start

cd ../

echo "url: http://146.190.144.220:$PORT/"
