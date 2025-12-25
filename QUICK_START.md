# Quick Start: Deploy Your Portfolio

## 🚀 Fastest Way: Vercel (5 minutes)

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

2. **Click "Add New Project"**
   - Select your `portfolio` repository
   - Vercel auto-detects Vite settings

3. **Click "Deploy"** (no configuration needed!)

4. **Add Custom Domain:**
   - Project Settings → Domains
   - Add your domain
   - Follow DNS instructions

✅ **Done!** Every push to `main` auto-deploys.

---

## 📋 What Happens Next

- ✅ Your site gets a free `.vercel.app` URL immediately
- ✅ HTTPS is automatically configured
- ✅ Every `git push` to `main` triggers a new deployment
- ✅ Preview deployments for pull requests

## 🔄 Making Updates

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push
# Deployment happens automatically! 🎉
```

## 🌐 Custom Domain Setup

### For Vercel:
1. Add domain in Vercel dashboard
2. Add CNAME record: `yourdomain.com` → `cname.vercel-dns.com`
3. Or A records for apex domain (see Vercel docs)

### DNS Propagation:
- Usually takes 5-60 minutes
- Can take up to 48 hours in rare cases

---

## 📁 Files Created

- `vercel.json` - Vercel configuration (optional)
- `netlify.toml` - Netlify configuration (if using Netlify)
- `.github/workflows/deploy.yml` - GitHub Pages deployment (if using GitHub Pages)
- `DEPLOYMENT_GUIDE.md` - Full detailed guide

---

## 🆘 Need Help?

See `DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.

