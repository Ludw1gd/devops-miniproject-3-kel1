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
*(Akan diupdate setelah Terraform selesai)*

az login

pertama

az group create --name rg-tfstate --location "East US"

kedua

az storage account create --name satfstatedevopskel1 ^
  --resource-group rg-tfstate ^
  --sku Standard_LRS ^
  --encryption-services blob

ketiga

az storage container create --name tfstate ^
  --account-name satfstatedevopskel1

## 🚀 Panduan Eksekusi (Langkah demi Langkah)
*(Akan diupdate: Cara menjalankan Terraform -> Ansible -> Memicu Pipeline)*

Terraform

jalankan terraform

pertama

terraform init

kedua

terraform validate

ketiga

terraform plan

keempat

terraform apply
