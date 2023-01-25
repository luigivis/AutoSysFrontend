import socket
import public_ip as ip

hostname = socket.gethostname()
ip_address = socket.gethostbyname(hostname)

ip_public = ip.get();

ip_replace = "localhost"

print(f"Hostname: {hostname}")
print(f"IP Address: {ip_address}")
print(f"IP Public: {ip_public}")

if ip_public == "146.190.144.220":
    ip_replace = "146.190.144.220"

with open('autosys/.env', 'r') as file :
  filedata = file.read()

filedata = filedata.replace('{IPADDRESS}', ip_replace)

with open('autosys/.env', 'w') as file:
  file.write(filedata)
