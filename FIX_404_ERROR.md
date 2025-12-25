# Fix GitHub Pages 404 Error

## Step-by-Step Fix

### Step 1: Verify Workflow File is Pushed
The workflow file should be in your repo. Let's make sure it's pushed:

```bash
git add .github/workflows/deploy.yml
git add GITHUB_PAGES_SETUP.md
git add GITHUB_PAGES_QUICK_START.md
git commit -m "Add GitHub Pages deployment files"
git push
```

### Step 2: Enable GitHub Pages
1. Go to: `https://github.com/DanielLopezCS/portfolio/settings/pages`
2. Under **"Source"**, select **"GitHub Actions"** (NOT "Deploy from a branch")
3. If you don't see "GitHub Actions" option:
   - Make sure the workflow file is pushed first
   - Refresh the page
   - Wait a few minutes after pushing
4. Click **Save**

### Step 3: Trigger the Workflow
After enabling GitHub Actions as the source:

**Option A: Push a change**
```bash
# Make a small change (like updating README)
echo "" >> README.md
git add .
git commit -m "Trigger GitHub Pages deployment"
git push
```

**Option B: Manual trigger**
1. Go to **Actions** tab in your repo
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select "main" branch
5. Click "Run workflow"

### Step 4: Check Deployment Status
1. Go to **Actions** tab
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (green checkmark = success)
4. If it fails, click on it to see error messages

### Step 5: Verify Site URL
After successful deployment:
1. Go to Settings → Pages
2. Your site URL will be shown at the top
3. It should be: `https://danielopezcs.github.io/portfolio`

## Common Issues & Solutions

### Issue 1: "GitHub Actions" Option Not Showing
**Solution:**
- Make sure `.github/workflows/deploy.yml` is pushed to GitHub
- Wait a few minutes after pushing
- Refresh the Settings → Pages page
- Try pushing a small change to trigger it

### Issue 2: Workflow Not Running
**Solution:**
- Check Actions tab for any workflow runs
- Make sure you're on the `main` branch
- Push a change to trigger it
- Or manually trigger from Actions tab

### Issue 3: Workflow Fails
**Check the error:**
- Go to Actions tab → Click on failed workflow
- Look at the error message
- Common issues:
  - Build errors (check build logs)
  - Missing dependencies
  - Wrong build command

### Issue 4: Still Getting 404 After Deployment
**Check:**
1. Wait 5-10 minutes after deployment completes
2. Clear browser cache
3. Try incognito/private window
4. Verify the URL is correct
5. Check if base path needs to be updated (see below)

### Issue 5: Wrong Base Path
If your site is at `username.github.io/portfolio` but assets don't load:

Update `vite.config.ts`:
```ts
base: '/portfolio/',
```

Then rebuild and redeploy.

## Quick Checklist

- [ ] `.github/workflows/deploy.yml` is pushed to GitHub
- [ ] GitHub Pages is enabled (Settings → Pages)
- [ ] Source is set to "GitHub Actions"
- [ ] Workflow has run (check Actions tab)
- [ ] Deployment completed successfully (green checkmark)
- [ ] Waited a few minutes after deployment
- [ ] Using correct URL with `https://`

## Still Not Working?

1. **Check Actions Tab:**
   - Is the workflow running?
   - Did it complete successfully?
   - Any error messages?

2. **Check Settings:**
   - Settings → Pages
   - Is it enabled?
   - What does it say under "Source"?

3. **Verify Files:**
   - Make sure workflow file is in `.github/workflows/`
   - Make sure it's committed and pushed

4. **Try Manual Trigger:**
   - Actions tab → "Deploy to GitHub Pages" → "Run workflow"

