# S3XY Detailers — Website

Premium mobile Tesla & EV detailing site for Brevard County, FL.

## Files

| File | What it is |
|------|------------|
| `index.html` | Main landing page (home, pricing, services, 3D process viewer, gallery, reviews, about, contact) |
| `member-login.html` | Member portal — login screen + customer dashboard preview |
| `assets/hero-background.mp4` | Hero background video |
| `assets/*.glb` | 3D car models for the "Feel the Process" viewer |

This is a **static website** — just HTML/CSS/JS. No build step required.

The 3D models and video live in the `assets/` folder and load from the same site
(same-origin), so there are no CORS issues. The roadster model is meshopt-compressed
(27 MB → 7 MB) so it fits under GitHub's 25 MB upload limit. Keep all files together.

## Preview it locally

Double-click `index.html` to open it in your browser. (The 3D models load best when served over a local web server — see below — but the rest works from a double-click.)

Optional local server (shows the 3D models reliably):
```powershell
# From inside this folder, with Python installed:
python -m http.server 8080
# then open http://localhost:8080 in your browser
```

## Putting it online (recommended: Netlify — free)

1. Go to https://app.netlify.com/drop
2. Drag this **entire folder** onto the page.
3. It publishes instantly to a free `*.netlify.app` address.
4. Later: connect your custom domain `s3xydetailing.com` in **Site settings → Domain management**.

## Status of features

- ✅ All pages + styling + 3D viewer — done
- ⏳ Email / "Special Offers" signups — needs a form service connected (see roadmap)
- ⏳ Member login (real accounts) — needs an auth provider (e.g. Supabase)
- ⏳ Appointment scheduling — needs a scheduler (e.g. Square/Calendly) or custom system
- ⏳ Custom domain — point `s3xydetailing.com` at the host once chosen
