# Stoneman Services — Admin CMS Setup Guide

The site now has a content management panel at `/admin` powered by **DecapCMS**.  
Matt can edit text and photos through a simple web editor — no code needed.

---

## 🔑 One-Time Setup (Developer)

Before Matt can log in, you need to create a **GitHub OAuth App** and add it to Vercel.

### Step 1: Create GitHub OAuth App

1. Go to: https://github.com/settings/applications/new
2. Fill in:
   - **Application name:** `Stoneman Services CMS`
   - **Homepage URL:** `https://stonemanservicestn.com`
   - **Authorization callback URL:** `https://stonemanservicestn.com/api/auth/callback`
3. Click **Register application**
4. Copy the **Client ID**
5. Click **Generate a new client secret** and copy it

### Step 2: Add to Vercel Environment Variables

In the Vercel dashboard for this project, go to **Settings → Environment Variables** and add:

| Variable | Value |
|---|---|
| `GITHUB_CLIENT_ID` | (from step 4 above) |
| `GITHUB_CLIENT_SECRET` | (from step 5 above) |
| `NEXT_PUBLIC_SITE_URL` | `https://stonemanservicestn.com` |

Set these for **Production** (and optionally Preview/Development).

### Step 3: Give Matt GitHub Access

Matt needs a GitHub account with **write access** to the `TheeJesse/stoneman-services` repo.

- Go to the repo on GitHub → **Settings → Collaborators → Add people**
- Add Matt's GitHub username with **Write** access

---

## 📝 How Matt Uses the CMS

1. Go to: **https://stonemanservicestn.com/admin/**
2. Click **"Login with GitHub"**
3. Authorize the app (one-time)
4. Edit content in the left panel, see a preview on the right
5. Click **"Publish"** — changes go to GitHub automatically
6. **Vercel auto-deploys** the site within ~1 minute

### What Matt Can Edit

| Section | What's Editable |
|---|---|
| **⚙️ Global Settings** | Phone numbers, hours, address |
| **🏠 Home Page** | Hero text, services grid, before/after photos, why-us items |
| **👥 About Page** | Team story paragraphs, team photo, why-families list |
| **🔧 Services Page** | All service descriptions and photos |
| **📞 Contact Page** | Phone numbers, hours, form URL |
| **❓ FAQ Page** | All questions and answers (add/edit/delete) |
| **🖼️ Media Library** | Upload photos (accessible from any image field) |

---

## 🏗️ How It Works (Technical)

- Content is stored as JSON files in `/content/pages/` in the GitHub repo
- DecapCMS edits those files and commits them back to GitHub
- Vercel detects the commit and rebuilds the site (~60 seconds)
- The Next.js pages import the JSON at build time — fast, static output

---

## 🛠️ Troubleshooting

**"Login with GitHub" does nothing or shows error:**
- Check that `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` are set in Vercel
- Verify the callback URL in the GitHub OAuth App matches exactly: `https://stonemanservicestn.com/api/auth/callback`

**Matt can't save/publish:**
- Make sure Matt's GitHub account has **Write** access to the repo

**Changes don't appear on the site:**
- Check Vercel deployments — a new deploy should appear after each CMS save
- If no deploy triggered, check GitHub for the commit

---

## 📂 File Structure

```
content/
  settings.json          ← Global business info
  pages/
    home.json            ← Home page content
    about.json           ← About page content
    services.json        ← Services page content
    contact.json         ← Contact page content
    faq.json             ← FAQ questions & answers

public/admin/
  index.html             ← DecapCMS admin panel
  config.yml             ← CMS configuration

app/api/auth/
  route.ts               ← GitHub OAuth proxy (start)
  callback/route.ts      ← GitHub OAuth proxy (callback)
```
