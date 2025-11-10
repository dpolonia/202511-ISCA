# Deploying This Project to Vercel

This guide walks you through exporting (deploying) the contents of this GitHub repository to [Vercel](https://vercel.com). The instructions assume you have a GitHub account and can push changes to a repository.

## 1. Prepare the Repository

1. Clone the project locally:
   ```bash
   git clone https://github.com/<your-account>/<your-repo>.git
   cd <your-repo>
   ```
2. Install dependencies (if your environment allows npm registry access):
   ```bash
   npm install
   ```
3. Commit and push any local changes so the GitHub repository reflects what you want to deploy:
   ```bash
   git add .
   git commit -m "Prepare deployment"
   git push origin main
   ```

> **Note:** This project uses Next.js 14 with the App Router and Tailwind CSS. Vercel detects this automatically—no extra configuration is required.

## 2. Create a Vercel Project from GitHub

1. Sign in to Vercel and click **Add New... → Project**.
2. When prompted, choose the GitHub account/organization that hosts your repository. Grant Vercel access if you have not done so previously.
3. Select the repository you just pushed. Vercel will import it and prefill the configuration based on the `package.json` and framework detection.
4. Leave the defaults for most settings:
   - **Framework Preset:** `Next.js` (auto-detected).
   - **Root Directory:** `/` (since `package.json` is at the repository root).
   - **Build Command:** `npm run build` (auto-detected).
   - **Output Directory:** `.vercel/output` (managed internally by Vercel for Next.js).
5. If your project needs runtime configuration (e.g., API keys), add them under **Environment Variables** now. You can provide different values for Production, Preview, and Development.
6. Click **Deploy** to trigger the first build.

## 3. Monitor the Initial Deployment

- Vercel installs dependencies and runs `npm run build` inside a managed environment.
- Build logs stream in real time; verify there are no errors.
- When the build completes, Vercel automatically provisions a Production deployment with a live URL like `https://<project-name>.vercel.app`.

## 4. Ongoing Updates

Vercel listens to pushes on the default branch (typically `main`):

1. Make changes locally and commit them.
2. Push to GitHub. Vercel immediately creates a new production deployment and, if you work on feature branches, preview deployments for pull requests.
3. Each deployment has its own URL, accessible from the Vercel dashboard.

## 5. Optional Project Settings

- **Custom Domains:** Assign a custom domain through **Settings → Domains**.
- **Environment Variables:** Update secrets without redeploying by editing them in the Vercel dashboard; triggers a rebuild when necessary.
- **Analytics & Logs:** Use Vercel Analytics or connect third-party logging for observability.
- **Serverless & Edge Functions:** The project can include API routes or edge functions in `app/api`—Vercel deploys them automatically.

## 6. Local Verification (Optional)

Before pushing changes, you can run the Next.js app locally:

```bash
npm run dev
```

Visit `http://localhost:3000` to preview your site.

If you encounter the npm registry 403 error noted in the repository history, try:

- Using a personal access token or different registry mirror.
- Installing dependencies on a machine with full npm access and committing the lockfile (`package-lock.json` or `pnpm-lock.yaml`).

## 7. Troubleshooting Deployment Issues

- **Build Failures:** Check that `npm run build` succeeds locally. Ensure Node.js 18+ (Vercel’s default) is compatible with your dependencies.
- **Missing Assets:** Confirm static assets are stored within the repository and referenced via Next.js conventions (e.g., `/public` folder).
- **Environment Variables:** If runtime secrets are missing, define them in Vercel and redeploy.
- **Routing Problems:** Review `app/page.jsx` and other route files to ensure they export valid components for the App Router.

Once configured, every push to GitHub keeps Vercel deployments in sync, making it easy to publish updates to your presentation site.
