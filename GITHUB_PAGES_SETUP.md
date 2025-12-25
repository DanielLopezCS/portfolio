# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages with automatic CI/CD.

## Step-by-Step Setup

### Step 1: Enable GitHub Pages in Your Repository

1. Go to your repository on GitHub: `https://github.com/DanielLopezCS/portfolio`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Click **Save**

### Step 2: Configure Vite for GitHub Pages

**Option A: Using Custom Domain (Recommended)**
- If you're using a custom domain, keep `base: '/'` in `vite.config.ts` (already set)
- Your site will be at `yourdomain.com`

**Option B: Using Default GitHub Pages URL**
- If you want to use `username.github.io/portfolio`, update `vite.config.ts`:
  ```ts
  base: '/portfolio/',
  ```
- Your site will be at `danielopezcs.github.io/portfolio`

### Step 3: Push Your Code

The GitHub Actions workflow is already set up! Just commit and push:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

### Step 4: Check Deployment Status

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see a workflow run called "Deploy to GitHub Pages"
4. Wait for it to complete (green checkmark)
5. Your site will be live!

### Step 5: Find Your Site URL

**If using default GitHub Pages:**
- Go to Settings → Pages
- Your site URL will be shown (e.g., `https://danielopezcs.github.io/portfolio`)

**If using custom domain:**
- Your site will be at your custom domain
- See Step 6 for domain setup

### Step 6: Set Up Custom Domain (Optional)

1. **In your repository:**
   - Go to Settings → Pages
   - Under "Custom domain", enter your domain (e.g., `yourdomain.com`)
   - Click Save

2. **Create CNAME file** (if not using root domain):
   ```bash
   # Create public/CNAME file with your domain
   echo "yourdomain.com" > public/CNAME
   ```
   Or create `public/CNAME` manually with just your domain name

3. **Configure DNS:**
   - Add a CNAME record in your domain's DNS settings:
     - **Name**: `@` or `www` (depending on your preference)
     - **Value**: `danielopezcs.github.io`
   - Or add A records:
     - Point to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

4. **Wait for DNS propagation** (5 minutes to 48 hours)

5. **Enable HTTPS:**
   - GitHub Pages automatically enables HTTPS for custom domains
   - Check "Enforce HTTPS" in Settings → Pages

### Step 7: Verify Automatic Deployment

1. Make a small change to your portfolio
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test automatic deployment"
   git push
   ```
3. Go to Actions tab and watch the deployment
4. Your changes should be live in 1-2 minutes!

## Troubleshooting

### Build Fails
- Check the Actions tab for error messages
- Ensure `pnpm-lock.yaml` is committed
- Verify all dependencies are in `package.json`

### Site Shows 404
- Check that GitHub Pages is set to "GitHub Actions" (not "Deploy from branch")
- Verify the base path in `vite.config.ts` matches your setup
- Wait a few minutes after first deployment

### Assets Not Loading
- If using default GitHub Pages URL, ensure `base: '/portfolio/'` in `vite.config.ts`
- Check that image paths start with `/` not `./`
- Verify all assets are in the `public/` folder

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check that CNAME file is in `public/` folder
- Ensure "Enforce HTTPS" is enabled

## File Structure

Your project should have:
```
.github/
  workflows/
    deploy.yml          ← GitHub Actions workflow (already created)
public/
  CNAME                ← Custom domain file (create if needed)
vite.config.ts         ← Vite configuration (update base if needed)
```

## Quick Reference

**Default GitHub Pages URL:**
- Update `vite.config.ts`: `base: '/portfolio/'`
- Site: `https://danielopezcs.github.io/portfolio`

**Custom Domain:**
- Keep `vite.config.ts`: `base: '/'`
- Create `public/CNAME` with your domain
- Configure DNS records
- Site: `https://yourdomain.com`

## Next Steps

1. ✅ Enable GitHub Pages (Settings → Pages → GitHub Actions)
2. ✅ Push your code (triggers first deployment)
3. ✅ Wait for deployment to complete
4. ✅ Visit your site!
5. ✅ Set up custom domain (optional)

Your portfolio will automatically deploy every time you push to `main`! 🚀

