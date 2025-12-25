# Deployment Guide: Portfolio with CI/CD

This guide will help you deploy your portfolio with automatic CI/CD using Vercel (recommended) or Netlify.

## Option 1: Vercel (Recommended - Easiest)

### Step 1: Prepare Your Repository
✅ Your code is already on GitHub at `https://github.com/DanielLopezCS/portfolio.git`

### Step 2: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and sign in with your GitHub account
3. Authorize Vercel to access your GitHub repositories

### Step 3: Deploy Your Portfolio
1. In Vercel dashboard, click "Add New Project"
2. Import your `DanielLopezCS/portfolio` repository
3. Vercel will auto-detect it's a Vite project
4. Configure settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `pnpm build` (or `npm run build`)
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install` (or `npm install`)
5. Click "Deploy"

### Step 4: Set Up Custom Domain
1. After deployment, go to your project settings
2. Click "Domains" in the sidebar
3. Enter your domain (e.g., `yourdomain.com`)
4. Follow the DNS configuration instructions:
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or add A records if using apex domain (root domain)
5. Vercel will automatically configure SSL (HTTPS)

### Step 5: Enable Automatic Deployments
✅ **Already enabled by default!** 
- Every push to `main` branch automatically triggers a new deployment
- Preview deployments are created for pull requests

### Step 6: Configure Environment Variables (if needed)
- Go to Project Settings → Environment Variables
- Add any API keys or secrets if your app needs them

---

## Option 2: Netlify (Alternative)

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub

### Step 2: Deploy Your Portfolio
1. Click "Add new site" → "Import an existing project"
2. Connect to GitHub and select your `portfolio` repository
3. Configure build settings:
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist`
   - **Base directory**: `./` (leave empty)
4. Click "Deploy site"

### Step 3: Set Up Custom Domain
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS instructions:
   - Add CNAME record pointing to your Netlify subdomain
   - Or configure A records for apex domain

### Step 4: Enable Automatic Deployments
✅ **Already enabled!**
- Netlify automatically deploys on push to main branch

---

## Option 3: GitHub Pages (Free but More Setup)

### Step 1: Install GitHub Actions
Create `.github/workflows/deploy.yml` (see below)

### Step 2: Configure GitHub Pages
1. Go to your repo → Settings → Pages
2. Source: GitHub Actions
3. Save

### Step 3: Set Up Custom Domain
1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS records as instructed by GitHub

---

## Required Configuration Files

### For Vercel/Netlify: `vercel.json` (optional but recommended)
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install"
}
```

### For GitHub Pages: `.github/workflows/deploy.yml`
See the file created below.

---

## Post-Deployment Checklist

- [ ] Test the deployed site
- [ ] Verify custom domain is working
- [ ] Check HTTPS is enabled
- [ ] Test automatic deployment by making a small change
- [ ] Update any hardcoded URLs if needed
- [ ] Verify all images and assets load correctly

---

## Troubleshooting

### Build Fails
- Check build logs in deployment platform
- Ensure `pnpm-lock.yaml` is committed
- Verify all dependencies are in `package.json`

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain settings in deployment platform

### Images Not Loading
- Ensure image paths use `/` not `./`
- Check that images are in `public/` folder
- Verify build output includes public assets

---

## Making Changes

1. Make changes locally
2. Test with `pnpm dev`
3. Commit and push to `main`:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
4. Deployment happens automatically! 🚀

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Actions: https://docs.github.com/en/actions

