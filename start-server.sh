#!/bin/bash
# Actualizar paquetes
sudo yum update -y       # o apt-get update -y si usas Ubuntu

# Instalar Node.js (versión 16 como ejemplo)
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs

# Clonar tu repo (reemplaza con tu usuario y repo)
cd /home/ec2-user
git clone https://github.com/nelsonbarrera430/aws-scalable-app.git
cd aws-scalable-app

# Instalar dependencias y arrancar app
npm install
nohup node server.js > app.log 2>&1 &
