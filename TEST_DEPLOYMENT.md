# Testing Your Deployment Locally

## Quick Answer

✅ **Yes, GitHub Pages uses the `dist` folder**
- The workflow automatically builds and uploads it
- **You don't need to upload `dist` manually**
- The workflow does everything for you

## How to Test Your Build Locally

### Method 1: Using Vite Preview (Recommended)
```bash
# Build your project
pnpm build

# Preview the built site (serves dist folder)
pnpm preview
```

This will:
- Serve your `dist` folder at `http://localhost:4173`
- Test exactly what will be deployed
- Show you if there are any issues before deploying

### Method 2: Serve with a Simple HTTP Server
```bash
# After building
pnpm build

# Install a simple server (one-time)
npm install -g http-server

# Serve the dist folder
cd dist
http-server -p 8080
```

Then visit: `http://localhost:8080/portfolio/`

### Method 3: Python HTTP Server
```bash
# After building
pnpm build

# Serve with Python
cd dist
python -m http.server 8000
```

Then visit: `http://localhost:8000/portfolio/`

## What the Workflow Does

1. **Builds** your project → Creates `dist` folder
2. **Uploads** `dist` folder as artifact
3. **Deploys** to GitHub Pages automatically

You don't need to:
- ❌ Manually upload `dist` folder
- ❌ Commit `dist` folder to git
- ❌ Push `dist` folder

## Testing Checklist

Before deploying, test locally:

```bash
# 1. Build
pnpm build

# 2. Preview
pnpm preview

# 3. Check in browser
# Visit: http://localhost:4173/portfolio/
# (Note the /portfolio/ path matches GitHub Pages)
```

Check:
- [ ] Site loads correctly
- [ ] All images display
- [ ] Navigation works
- [ ] All sections are visible
- [ ] No console errors

## Important Notes

1. **Don't commit `dist` folder**
   - It's in `.gitignore` (should be)
   - It's built automatically by the workflow

2. **Base path matters**
   - When testing locally with `pnpm preview`, use `/portfolio/` in the URL
   - This matches your GitHub Pages URL structure

3. **Workflow handles everything**
   - Builds on GitHub's servers
   - Uploads `dist` automatically
   - Deploys to GitHub Pages

## Troubleshooting

### Preview shows blank page?
- Check browser console for errors
- Verify `base: '/portfolio/'` in `vite.config.ts`
- Make sure you're visiting the correct URL with `/portfolio/`

### Assets not loading?
- Check that paths use `/portfolio/` prefix
- Verify `vite.config.ts` has correct base path
- Rebuild: `pnpm build`

### Want to test without base path?
Temporarily change `vite.config.ts`:
```ts
base: '/',  // For local testing
```
Then change back to `/portfolio/` before pushing.

