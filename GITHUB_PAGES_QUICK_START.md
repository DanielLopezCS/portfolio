# GitHub Pages Quick Start

## 🚀 3 Steps to Deploy

### Step 1: Enable GitHub Pages
1. Go to: `https://github.com/DanielLopezCS/portfolio/settings/pages`
2. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
3. Click **Save**

### Step 2: Push Your Code
```bash
git add .
git commit -m "Setup GitHub Pages"
git push
```

### Step 3: Wait & Visit
1. Go to **Actions** tab in your repo
2. Wait for deployment to complete (~2 minutes)
3. Visit your site at: `https://danielopezcs.github.io/portfolio`

**Note:** If you get a 404, you may need to update `vite.config.ts` base to `/portfolio/` (see below)

---

## 🌐 Custom Domain Setup (Optional)

### If you want to use your own domain:

1. **Create `public/CNAME` file:**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```
   Or manually create the file with just your domain name

2. **In GitHub:**
   - Settings → Pages → Custom domain
   - Enter your domain
   - Save

3. **Configure DNS:**
   - Add CNAME: `yourdomain.com` → `danielopezcs.github.io`
   - Or A records to GitHub IPs

4. **Keep `base: '/'` in vite.config.ts** (already set)

---

## ⚙️ Configuration Options

### Option A: Custom Domain (Recommended)
- `vite.config.ts`: `base: '/'` ✅ (already set)
- Site: `https://yourdomain.com`

### Option B: Default GitHub Pages URL
- `vite.config.ts`: Change to `base: '/portfolio/'`
- Site: `https://danielopezcs.github.io/portfolio`

---

## ✅ Automatic Deployments

Every time you push to `main`:
1. GitHub Actions automatically builds your site
2. Deploys to GitHub Pages
3. Your site updates in ~2 minutes!

**Test it:**
```bash
# Make a small change
git add .
git commit -m "Test auto-deploy"
git push
# Check Actions tab to see it deploy!
```

---

## 📋 Checklist

- [ ] Enable GitHub Pages (Settings → Pages → GitHub Actions)
- [ ] Push code to trigger first deployment
- [ ] Check Actions tab for deployment status
- [ ] Visit your site
- [ ] (Optional) Set up custom domain

See `GITHUB_PAGES_SETUP.md` for detailed instructions.

