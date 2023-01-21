#!/bin/bash
echo "AutoSys"
echo $(date)

echo

echo "Generating .app.config.json"
cat <<EOF >autosys/.app.config.json
{
  apps : [
    {
      name      : "autosys-frontend",
      script    : "npm",
      interpreter: "none",
      args: "serve -s build -p 7000"
    }
  ]
}
EOF

pm2 start autosys/.app.config.json
