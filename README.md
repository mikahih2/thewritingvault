# Story Atelier

A personal writing workspace — characters, timeline, wiki, moodboard, and manuscript, all in one place, all cross-linked.

## What changed from the in-chat version

The only real change from the version you tested in Claude is the storage layer:
Claude's chat environment gives artifacts a special `window.storage` API to save
data. A real website doesn't have that, so this version uses the browser's own
`localStorage` instead, through a small shim at the top of `src/App.jsx`. Everything
else — every feature, every fix — is identical to what you've been using.

**Heads up:** because it now uses localStorage, your projects live in *this specific
browser* on *this specific device*, the same way the Shift and Cycle apps do. There's
no built-in sync between devices. If you want your data on your phone too, you'd
open the same URL there and it would start fresh (its own local storage) — writing
would need to happen wherever you want it saved, or we can talk about adding real
cross-device sync later if that becomes worth it.

## Running it locally

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

Same shape as your Shift and Cycle deployments, just for a Vite project instead of a plain PWA:

1. **Create the repo.** On GitHub, create a new repository — e.g. `story-atelier`.

2. **Push this project to it:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/mikahih2/story-atelier.git
   git push -u origin main
   ```

3. **Deploy.** The `deploy` script builds the app and pushes the result to a `gh-pages` branch automatically:
   ```bash
   npm install
   npm run deploy
   ```

4. **Turn on Pages.** In the repo on GitHub: Settings → Pages → set the source branch to `gh-pages` (root). Give it a minute, then your app will be live at:
   ```
   https://mikahih2.github.io/story-atelier/
   ```

5. **Future updates.** Any time you want to push changes (from a chat with Claude or edited yourself), just run `npm run deploy` again from this folder.

## Word export

The Manuscript tab's export now produces a real `.doc` file that Word opens with proper heading formatting (title, chapter breaks, scene headings) — not just plain text. The Story Bible export is still a plain `.txt` file, since that one's more for your own reference than for submitting anywhere.
