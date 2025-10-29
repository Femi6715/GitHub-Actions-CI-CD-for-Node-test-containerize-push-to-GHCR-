# gha-node-ci-cd-docker

Node HTTP app with GitHub Actions pipeline: install, test (Mocha), build container, push to **GHCR** on `main`.

## Use

- Create a repo with this folder structure.
- Ensure GHCR is enabled for your org/user.
- Push to `main`; Actions will publish `ghcr.io/<owner>/node-app:latest`.
