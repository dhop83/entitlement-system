# entitlement-system
AI entitlement management system
### Automated Deployment

1. **Configure Docker Hub:**
   - Create repositories for:
     - `entitlement-backend`
     - `entitlement-frontend`

2. **Add GitHub Secrets:**
   - Go to your repository settings.
   - Add the following secrets:
     - **DOCKER_USERNAME** - Your Docker Hub username.
     - **DOCKER_PASSWORD** - Your Docker Hub password.

3. **Push to Deploy:**
   - Every time you push to the main branch, your app will automatically build and deploy.
