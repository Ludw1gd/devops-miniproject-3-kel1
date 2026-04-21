# devops-miniproject-3-kel1

# 🚀 Enterprise CI/CD Pipeline - End-to-End DevOps Automation

## 🎯 Gambaran Proyek
Proyek ini mengimplementasikan alur CI/CD otomatis, tangguh, dan aman menggunakan prinsip *Infrastructure as Code* (IaC), *Configuration as Code* (CaC), dan *DevSecOps*. 

Setiap perubahan kode (*commit*) akan melewati proses build otomatis, pemindaian kerentanan keamanan (Docker Scout), dan deployment tanpa campur tangan manusia ke Azure Cloud.

## 🏗️ Arsitektur Sistem
* **Source Code:** GitHub
* **CI/CD Orchestrator:** Jenkins (Containerized via JCasC)
* **Image Registry:** Docker Hub
* **Infrastructure Provisioning:** Terraform (Azure: 2 VM, VNet, Subnet, NSG)
* **Configuration Management:** Ansible
* **Security Scanning:** Docker Scout
* **Target Environment:** Docker Engine pada Azure Worker VM

## 📂 Struktur Repositori
- `/app` - Source code aplikasi beserta Dockerfile (Multi-stage).
- `/terraform` - Skrip provisioning infrastruktur Azure.
- `/ansible` - Playbook untuk instalasi dependencies dan JCasC.
- `/jenkins` - Jenkinsfile untuk logika CI/CD pipeline.

## 🛠️ Persiapan Menjalankan (Prerequisites)
Pastikan sudah terinstall:
- Docker
- Git
- Terraform
- Azure CLI
- Ansible
- Jenkins (atau akan dibuat via Ansible)

## ☁️ Setup Azure (Terraform Backend)
**1.1 Login ke Azure**
```
az login
```

**1.2 Buat Resource Group**
```
az group create --name rg-tfstate --location "East US"
```

**1.3 Buat Storage Account** 
```
az storage account create --name satfstatedevopskel1 ^
  --resource-group rg-tfstate ^
  --sku Standard_LRS ^
  --encryption-services blob
```

**1.4 Buat Container**
```
az storage container create --name tfstate ^
  --account-name satfstatedevopskel1
```

## 🐳 Tahap 1: Kontainerisasi & DevSecOps
**🎯 Tujuan**
- Membuat Docker image dari aplikasi
- Integrasi security scanning
- Pipeline gagal jika ada vulnerability

**🧱 Dockerfile**
```
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Stage 2: Production (Minimal Image)
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./   
USER node                      
EXPOSE 3000
CMD ["node", "main.js"]
```

**🔁 Pipeline Flow**

**📌 Output Tahap 1**

## ☁️ Tahap 2: Infrastructure as Code (Terraform)
**🎯 Tujuan**

Provision infrastructure secara otomatis di Azure.

**🔧 Resource**
- 1 VM Jenkins
- 1 VM Deployment
- VNet + Subnet
- Network Security Group

**▶️ Eksekusi**
```
cd terraform
terraform init
terraform validate
terraform plan
terraform apply
```

**📌 Output Tahap 2**

## ⚙️ Tahap 3: Configuration as Code (Ansible + JCasC)
**🎯 Tujuan**

Mengotomatisasi setup server & Jenkins.

**🔧 Implementasi**
**Setup Node**
- Install Docker
- Install dependencies
**Setup Jenkins**
- Install Jenkins container
- Install plugin
**JCasC**
- Setup pipeline
- Setup credentials (Docker Hub & SSH)

**▶️ Eksekusi**

**🚀 Deployment Otomatis**

**📌 Output Tahap 3**

## 🔍 Traceability

## 🔁 Rollback Automation
```
docker run -d -p 80:3000 --name myapp-prod ${DOCKER_IMAGE}:latest
```

## 🌐 Akses Aplikasi

