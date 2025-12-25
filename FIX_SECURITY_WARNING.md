# Fix "Dangerous Site" Warning on GitHub Pages

This warning usually appears when HTTPS isn't properly configured. Here's how to fix it:

## Quick Fix Steps

### Step 1: Enable HTTPS in GitHub Pages
1. Go to your repository: `https://github.com/DanielLopezCS/portfolio/settings/pages`
2. Scroll down to find **"Enforce HTTPS"** checkbox
3. ✅ **Check the box** to enable HTTPS
4. Click **Save**

### Step 2: Wait for SSL Certificate
- GitHub Pages automatically provisions SSL certificates
- This can take a few minutes to a few hours
- You'll see a green checkmark when it's ready

### Step 3: Clear Browser Cache
- Clear your browser cache and cookies
- Or try an incognito/private window
- Visit your site again

## Common Causes & Solutions

### Issue 1: HTTP Instead of HTTPS
**Solution:** Always use `https://` when visiting your site
- ✅ Correct: `https://danielopezcs.github.io/portfolio`
- ❌ Wrong: `http://danielopezcs.github.io/portfolio`

### Issue 2: Mixed Content
If you're loading resources over HTTP, browsers will block them.

**Check your code for:**
- Images loaded with `http://` instead of `https://`
- External scripts or stylesheets using `http://`
- API calls using `http://`

**Solution:** Ensure all external resources use `https://` or relative paths

### Issue 3: Custom Domain Not Configured
If using a custom domain:
1. Make sure DNS is properly configured
2. Wait for DNS propagation (can take 24-48 hours)
3. Enable "Enforce HTTPS" in GitHub Pages settings
4. Check that your domain has valid SSL certificate

### Issue 4: Site Not Fully Deployed
**Check:**
1. Go to **Actions** tab in your repo
2. Verify the deployment workflow completed successfully
3. Wait a few minutes after deployment completes

## Verify Your Site is Secure

1. Visit your site with `https://`
2. Click the lock icon in the address bar
3. Check that it says "Connection is secure"
4. Certificate should be valid

## If Warning Persists

1. **Check GitHub Pages Status:**
   - Settings → Pages
   - Verify site is published
   - Check for any error messages

2. **Verify Deployment:**
   - Actions tab → Check latest workflow run
   - Ensure it completed successfully (green checkmark)

3. **Test in Different Browser:**
   - Try Firefox, Edge, or Safari
   - If it works in other browsers, it's a Chrome-specific cache issue

4. **Check for Malicious Content:**
   - Review your code for any suspicious scripts
   - Ensure all dependencies are from trusted sources

## Security Best Practices

✅ Always use HTTPS
✅ Enable "Enforce HTTPS" in GitHub Pages
✅ Use relative paths for internal resources
✅ Only load external resources from trusted HTTPS sources
✅ Keep dependencies updated

## Still Having Issues?

1. Check GitHub Pages documentation: https://docs.github.com/en/pages
2. Verify your domain's DNS settings
3. Contact GitHub Support if SSL certificate isn't provisioning

