# Deploying This Project to Vercel

This repository contains a single-page presentation (`index.html`) that can be
served as a static site. The instructions below explain how to publish it on
[Vercel](https://vercel.com) directly from GitHub.

## 1. Prepare the Repository

1. Fork or clone the repository locally:
   ```bash
   git clone https://github.com/<your-account>/<your-repo>.git
   cd <your-repo>
   ```
2. Review `index.html` and make any content adjustments you need for the
   presentation.
3. Commit and push your changes so GitHub reflects exactly what you want to
   deploy:
   ```bash
   git add index.html README.md
   git commit -m "Atualizar apresentação"
   git push origin main
   ```

## 2. Create a Vercel Project from GitHub

1. Sign in to Vercel and click **Add New… → Project**.
2. Choose the GitHub organization/account that hosts your repository and grant
   Vercel access if prompted.
3. Select the repository; Vercel automatically detects it as a **Static Site**
   because there is an `index.html` at the repository root.
4. Leave the default settings:
   - **Framework Preset:** `Other` (static).
   - **Build Command:** leave empty.
   - **Output Directory:** leave empty (Vercel will publish the repository root).
5. Click **Deploy** to trigger the first deployment.

## 3. Monitor the Initial Deployment

- The deployment log should be short—Vercel simply copies the repository files
  to the CDN.
- When the deployment finishes you receive a Production URL such as
  `https://<project-name>.vercel.app`.
- Visit the URL to confirm that the interactive presentation loads correctly.

## 4. Ongoing Updates

Vercel creates a new deployment every time you push to the default branch.

1. Edit `index.html` locally.
2. Commit the changes with a descriptive message.
3. Push to GitHub. Vercel automatically redeploys and publishes a new preview
   URL for each commit.

## 5. Troubleshooting

- **Content not updating?** Make sure your latest commit is on the branch Vercel
  is watching (default is `main`).
- **404 error?** Ensure `index.html` is located at the repository root. Vercel
  needs this file to serve your site as a static project.
- **Custom domain:** Configure custom domains under **Project → Settings →
  Domains** in the Vercel dashboard.

Once configured, deployments take only a few seconds, making it easy to keep the
presentation synchronized with the repository.
