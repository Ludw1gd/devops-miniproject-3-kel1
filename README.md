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

## 🏗️ Deployment Infrastruktur (Terraform)
Masuk ke folder terraform:
```
cd terraform
```

Jalankan:
```
terraform init
terraform validate
terraform plan
terraform apply
```

Setelah selesai, kamu akan mendapatkan:
- IP Jenkins VM
- IP Worker VM (target deployment)

## ⚙️ Setup Server (Ansible)
