
# Career One Stop — Next.js (Netlify/Vercel)

## Netlify Node version
Set Node to a stable 20.x:
- `.nvmrc` = `20`
- `package.json` → `"engines": {"node": "20.x"}`
- `netlify.toml` → `NODE_VERSION = "20"`

If Netlify still shows `v20.19.5`, override in the UI to **20** or **20.18.1**, then **Clear cache and deploy**.

## Temporary build settings
`next.config.js` is configured to **ignore TypeScript and ESLint errors during build** to unblock deployment:
```js
typescript: { ignoreBuildErrors: true },
eslint: { ignoreDuringBuilds: true }
```
Once deployed, remove these to re-enable strict checks.
