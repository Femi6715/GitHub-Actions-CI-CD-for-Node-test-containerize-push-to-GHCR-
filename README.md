
---

## ⚙️ **3️⃣ gha-node-ci-cd-docker**
```markdown
# GitHub Actions CI/CD for Node.js + Docker

This project implements a full **CI/CD pipeline** for a Node.js service using **GitHub Actions**.  
The workflow runs automated tests, builds a Docker image, and pushes it to **GitHub Container Registry (GHCR)**.

---


## 🧱 Pipeline Overview
1. **Build & Test** (on every push/pull request to `main`)
2. **Docker Build** and **Push** to GHCR
3. Tagged as `ghcr.io/<username>/node-app:latest`

---

## 🧪 Run Locally
```bash
cd app
npm install
npm test
npm start
