# S3XY Detailers — Setup Guide

Follow these in order. Each one is free. When you finish a step that gives you a
value to paste (a form ID, a link), send it to me and I'll plug it in — or follow
the "Where to paste it" note yourself.

## How the files are split

- **Repo root** (`index.html`, `member-login.html`, `README.md`, `SETUP.md`) →
  uploaded to your GitHub **repository**. Small, loads your site.
- **`release-assets/` folder** (the 3D models + hero video) → uploaded to a GitHub
  **Release**, because some are bigger than GitHub's 25 MB web-upload limit. Your
  site fetches them from there.

---

## 1. Get the site LIVE (GitHub Pages)

1. Create a free account at https://github.com/signup
2. Click the **+** (top right) → **New repository**.
   - Repository name: `s3xy-detailers-website` (use exactly this — the asset links depend on it)
   - Set it to **Public** → **Create repository**
3. On the new repo page, click **uploading an existing file**.
4. Drag in ONLY the **repo-root files**: `index.html`, `member-login.html`,
   `README.md`, `SETUP.md`. **Do NOT upload the `release-assets` folder here.**
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under **Branch**, choose `main` and `/ (root)` → **Save**.
7. Wait ~1 minute, refresh — your live address appears:
   `https://YOUR-USERNAME.github.io/s3xy-detailers-website/`

---

## 2. Host the heavy assets (GitHub Releases)

1. On your repo page, click **Releases** (right sidebar) → **Create a new release**.
2. In **Choose a tag**, type `assets` and click **Create new tag: assets**.
3. Release title: `assets` (anything is fine).
4. Drag the **four files inside the `release-assets` folder** into the
   "Attach binaries" box:
   `hero-background.mp4`, `tesla-model-3.glb`, `tesla_model_s_blue.glb`, `tesla-roadster.glb`
   *(the 27 MB model is fine here — Releases allow up to 2 GB per file.)*
5. Wait for the uploads to finish, then click **Publish release**.

**One edit to connect them:** in `index.html`, find `YOUR-USERNAME` and replace it
with your real GitHub username. (It appears once. Or send me your username and I'll
do it.) That's what makes the video + 3D models load.

> ⚠️ Keep the filenames exactly as they are — the site looks for those names.

---

## 3. Email "Special Offers" signups (Formspree)

1. Sign up free at https://formspree.io
2. **+ New Form**, name it "Special Offers", set the destination to your own email.
3. Formspree gives an endpoint like `https://formspree.io/f/abcdwxyz` — the part
   after `/f/` is your **Form ID**.

**Where to paste it:** in `index.html`, replace `YOUR_FORM_ID` with your Form ID.
(Or send it to me.) Until set, signups only save in the visitor's browser.

---

## 4. Appointment scheduling (Calendly)

1. Sign up free at https://calendly.com
2. Create an event type (e.g. **"Book a Detail"**) with your availability.
3. Copy your event link, e.g. `https://calendly.com/s3xydetailers/book-a-detail`.

**Where to paste it:** in `member-login.html`, replace
`YOUR-CALENDLY/detail-appointment` with your real Calendly link. (Or send it to me.)

---

## 5. Member login with real accounts (Supabase) — next build step

The biggest piece (real, secure accounts + database). When ready:

1. Sign up free at https://supabase.com → create a project.
2. In **Project Settings → API**, copy the **Project URL** and **anon public key**.
3. Send me those two values and I'll build real login/signup into `member-login.html`.

---

## 6. Custom domain (later)

Once you own `s3xydetailing.com`: GitHub repo **Settings → Pages → Custom domain**,
enter it, and follow the DNS steps from your domain registrar.

---

### Quick status

- [ ] 1. Live on GitHub Pages (root files uploaded)
- [ ] 2. Assets uploaded to a Release + `YOUR-USERNAME` replaced
- [ ] 3. Formspree Form ID pasted
- [ ] 4. Calendly link pasted
- [ ] 5. Supabase keys sent (member login)
- [ ] 6. Custom domain connected
