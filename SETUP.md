# S3XY Detailers — Setup Guide

Follow these in order. Each one is free. When you finish a step that gives you a
value to paste (a form ID, a link), send it to me and I'll plug it in — or follow
the "Where to paste it" note yourself.

## What's in this project

Everything goes into ONE GitHub repository now — every file is under GitHub's
25 MB upload limit (the big roadster model was compressed from 27 MB to 7 MB):

- `index.html`, `member-login.html`, `README.md`, `SETUP.md`
- `assets/` folder → the 3D models + hero video (loaded from the same site, so no
  CORS problems)

> Note: an earlier setup used a GitHub **Release** to host the models. That's no
> longer needed — you can leave or delete that release; the site now loads
> everything from the `assets/` folder in the repo.

---

## 1. Get the site LIVE (GitHub Pages)

1. Create a free account at https://github.com/signup
2. Click the **+** (top right) → **New repository**.
   - Repository name: `s3xy-detailers-website` (use exactly this — the asset links depend on it)
   - Set it to **Public** → **Create repository**
3. On the new repo page, click **uploading an existing file**.
4. Drag in **all the files**, including the **`assets` folder** (with the 3 models
   + video). You can drag the whole set at once. Every file is under 25 MB.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under **Branch**, choose `main` and `/ (root)` → **Save**.
7. Wait ~1 minute, refresh — your live address appears:
   `https://YOUR-USERNAME.github.io/REPO-NAME/`
   (for your repo that's `https://s3xyenterprise.github.io/S3xyDetailers/`)

✅ The site, 3D models, and video all load from this one repo. No extra steps.

> ⚠️ Keep the `assets` folder and its filenames exactly as they are — the site
> looks for those names.

---

## 2. Email "Special Offers" signups (Formspree)

1. Sign up free at https://formspree.io
2. **+ New Form**, name it "Special Offers", set the destination to your own email.
3. Formspree gives an endpoint like `https://formspree.io/f/abcdwxyz` — the part
   after `/f/` is your **Form ID**.

**Where to paste it:** in `index.html`, replace `YOUR_FORM_ID` with your Form ID.
(Or send it to me.) Until set, signups only save in the visitor's browser.

---

## 3. Appointment scheduling (Calendly)

1. Sign up free at https://calendly.com
2. Create an event type (e.g. **"Book a Detail"**) with your availability.
3. Copy your event link, e.g. `https://calendly.com/s3xydetailers/book-a-detail`.

**Where to paste it:** in `member-login.html`, replace
`YOUR-CALENDLY/detail-appointment` with your real Calendly link. (Or send it to me.)

---

## 4. Member login with real accounts (Supabase) — next build step

The biggest piece (real, secure accounts + database). When ready:

1. Sign up free at https://supabase.com → create a project.
2. In **Project Settings → API**, copy the **Project URL** and **anon public key**.
3. Send me those two values and I'll build real login/signup into `member-login.html`.

---

## 5. Custom domain (later)

Once you own `s3xydetailing.com`: GitHub repo **Settings → Pages → Custom domain**,
enter it, and follow the DNS steps from your domain registrar.

---

### Quick status

- [ ] 1. Live on GitHub Pages (all files + `assets` folder uploaded)
- [ ] 2. Formspree Form ID pasted
- [ ] 3. Calendly link pasted
- [ ] 4. Supabase keys sent (member login)
- [ ] 5. Custom domain connected
