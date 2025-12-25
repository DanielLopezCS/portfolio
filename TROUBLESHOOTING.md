# GitHub Pages Troubleshooting

## Current Issue: 404 Error

If you're still getting a 404, follow these steps in order:

### Step 1: Verify GitHub Pages is Enabled
1. Go to: `https://github.com/DanielLopezCS/portfolio/settings/pages`
2. Check that:
   - **Source** is set to **"GitHub Actions"** (NOT "Deploy from a branch")
   - Status shows "Your site is live at..."
   - If not, select "GitHub Actions" and Save

### Step 2: Check Workflow Status
1. Go to **Actions** tab
2. Look for "Deploy to GitHub Pages" workflow
3. Check if it:
   - ✅ Completed successfully (green checkmark)
   - ❌ Failed (red X) - click to see errors
   - ⏳ Still running (yellow circle) - wait for it to finish

### Step 3: Verify Deployment
1. In Actions tab, click on the latest workflow run
2. Scroll to the bottom
3. Look for "Deploy to GitHub Pages" step
4. Check if it says "Deployment successful"
5. Note the deployment URL shown

### Step 4: Check the Correct URL
Your site should be at:
- ✅ `https://danielopezcs.github.io/portfolio` (with `/portfolio` at the end)
- ❌ NOT `https://danielopezcs.github.io` (without `/portfolio`)

### Step 5: Wait and Clear Cache
1. Wait 5-10 minutes after deployment completes
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private window
4. Try a different browser

### Step 6: Manual Workflow Trigger
If workflow hasn't run:
1. Go to Actions tab
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select "main" branch
5. Click "Run workflow"
6. Wait for it to complete

### Step 7: Verify Files Are Pushed
Make sure these files are in your GitHub repo:
- `.github/workflows/deploy.yml` ✅
- `vite.config.ts` with `base: '/portfolio/'` ✅
- `public/404.html` ✅

Check by visiting:
- `https://github.com/DanielLopezCS/portfolio/tree/main/.github/workflows`
- `https://github.com/DanielLopezCS/portfolio/blob/main/vite.config.ts`

## Common Error Messages

### "Workflow not found"
- Make sure `.github/workflows/deploy.yml` is pushed
- Check it's in the `main` branch

### "Build failed"
- Check Actions tab for error details
- Common issues:
  - pnpm version mismatch (should be fixed)
  - Missing dependencies
  - TypeScript errors

### "Deployment failed"
- Check the deploy step in Actions
- Verify permissions are set correctly
- Make sure GitHub Pages is enabled

## Still Not Working?

1. **Double-check Settings → Pages:**
   - Source MUST be "GitHub Actions"
   - Not "Deploy from a branch"
   - Not "None"

2. **Check Actions Tab:**
   - Is there ANY workflow run?
   - What's the status?
   - Any error messages?

3. **Verify URL:**
   - Are you visiting `https://danielopezcs.github.io/portfolio`?
   - Not `http://` (must be `https://`)
   - Not missing `/portfolio` at the end

4. **Try Fresh Deployment:**
   ```bash
   # Make a small change
   echo "<!-- test -->" >> index.html
   git add .
   git commit -m "Trigger fresh deployment"
   git push
   ```

## Quick Diagnostic Checklist

- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Source is "GitHub Actions"
- [ ] Workflow file exists in `.github/workflows/`
- [ ] Workflow has run (check Actions tab)
- [ ] Workflow completed successfully
- [ ] Using correct URL: `https://danielopezcs.github.io/portfolio`
- [ ] Waited 5-10 minutes after deployment
- [ ] Cleared browser cache
- [ ] Tried incognito window

