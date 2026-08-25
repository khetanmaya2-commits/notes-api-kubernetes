# 🚀 Notes API — Docker + Kubernetes + GitHub Actions

A beginner-friendly DevOps project built to understand how **Git, Docker, Docker Hub, GitHub Actions, and Kubernetes** work together in a practical workflow.

This is my **first project combining Docker + Kubernetes + GitHub Actions**, and the main focus was learning containerization, CI, and basic Kubernetes orchestration through hands-on implementation.

---

## 📌 About the Project

The project is a simple **Notes REST API** built using Node.js and Express.

The application itself is intentionally lightweight so that the focus stays on the DevOps side of the project.

The complete workflow is:

```text
Source Code
     ↓
   GitHub
     ↓
GitHub Actions
     ↓
Docker Build
     ↓
Docker Hub
     ↓
 Kubernetes
     ↓
   Pods
     ↓
  Service
     ↓
Application
```

---

## 🛠️ Tech Stack

* **Node.js & Express** — REST API
* **Git & GitHub** — Version control and source code management
* **Docker** — Application containerization
* **Docker Hub** — Container image registry
* **GitHub Actions** — CI automation
* **Kubernetes** — Container orchestration
* **Minikube** — Local Kubernetes cluster

---

## 🏗️ Architecture

```text
                       GitHub
                          │
                       git push
                          │
                          ▼
                 ┌─────────────────┐
                 │ GitHub Actions   │
                 │                 │
                 │ Docker Build    │
                 │ Image Tagging   │
                 │ Docker Push     │
                 └────────┬────────┘
                          │
                          ▼
                    Docker Hub
                          │
                          ▼
                      Minikube
                          │
                    Kubernetes
                          │
                   ┌──────▼──────┐
                   │ Deployment  │
                   └──────┬──────┘
                          │
                ┌─────────┼─────────┐
                ▼         ▼         ▼
              Pod 1     Pod 2     Pod 3
                │         │         │
                └─────────┼─────────┘
                          ▼
                       Service
                          │
                          ▼
                       Browser
```

---

## ✨ What I Built

### 🔹 REST API

Created a simple Notes API with endpoints for:

```text
GET /
GET /health
GET /notes
```

### 🔹 Dockerized Application

Created a Dockerfile to package the Node.js application into a portable Docker image.

The application can be built and run using Docker without requiring Node.js dependencies to be installed directly inside the container environment.

### 🔹 Docker Hub Integration

The Docker image is published to Docker Hub so that it can be pulled and deployed by Kubernetes.

I also implemented **automatic image tagging using the Git commit SHA**, allowing each image to be associated with a specific version of the source code.

Example:

```text
notes-api:latest
notes-api:ddf26d2
```

### 🔹 Kubernetes Deployment

Deployed the application to a local Kubernetes cluster using Minikube.

The project uses:

* Deployment
* Pods
* ReplicaSets
* Service
* NodePort

The application was scaled to multiple replicas to understand how Kubernetes manages multiple instances of an application.

### 🔹 Self-Healing

Tested Kubernetes' self-healing behavior by manually deleting a running Pod.

Kubernetes automatically created a replacement Pod to maintain the desired number of replicas.

### 🔹 Rolling Updates

Tested updating the application version through Kubernetes and observed how Kubernetes gradually replaces existing Pods rather than stopping the entire application at once.

---

## ⚙️ CI Pipeline

GitHub Actions automates the Docker image build and publishing process.

```text
git push
    ↓
GitHub Actions
    ↓
Checkout Code
    ↓
Docker Login
    ↓
Generate Git SHA Tag
    ↓
Build Docker Image
    ↓
Push to Docker Hub
```

This removes the need to manually build and push the Docker image after every code change.

---

## 🧠 Key Concepts Learned

Through this project, I gained practical experience with:

* Git and GitHub workflow
* Dockerfiles and containerization
* Docker images and containers
* Docker image tagging
* Docker Hub
* GitHub Actions and CI
* Kubernetes Pods and Deployments
* ReplicaSets and Services
* Kubernetes scaling
* Desired state and self-healing
* Rolling updates
* Local Kubernetes development using Minikube

---

## 🎯 Learning Objective

The main objective of this project was to understand how different DevOps tools connect together rather than learning each tool independently.

The key workflow I learned is:

> **Code → GitHub → CI → Docker Image → Docker Hub → Kubernetes → Running Application**

This project serves as a foundation for exploring more advanced topics such as **Kubernetes health probes, ConfigMaps, Secrets, Ingress, monitoring, and cloud-based Kubernetes deployments**.

---

## 🚀 Future Improvements

* Kubernetes readiness and liveness probes
* ConfigMaps and Secrets
* Resource limits
* Kubernetes Ingress
* Horizontal Pod Autoscaling
* Monitoring with Prometheus and Grafana
* Automated Kubernetes deployment
* Cloud deployment using AWS

---

⭐ **Built as a hands-on project while learning DevOps and Kubernetes.**
