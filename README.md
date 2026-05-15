# UnBound Malaysia — LMS

A full Learning Management System covering three digital skills courses.

---

## Local development

Open **two terminals** in the `unbound-lms` folder.

**Terminal 1 — Backend**
```bash
cd backend
npm install
npm start
# runs at http://localhost:3001
```

**Terminal 2 — Frontend**
```bash
cd frontend
npm install
npm run dev
# runs at http://localhost:5173
```

Logo files go in `frontend/public/`:
- `UB_Black.png`
- `UB_White__1_.png`

---

## Deploying to Railway (backend) + Vercel (frontend)

### Step 1 — Push to GitHub

1. Create a new repository on [github.com](https://github.com) (private or public)
2. In your terminal, from the `unbound-lms` folder:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

### Step 2 — Deploy backend to Railway

1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click **New Project → Deploy from GitHub repo**
3. Select your repository
4. In the service settings, set **Root Directory** to `backend`
5. Railway will auto-detect Node.js and use the start command from `railway.json`
6. Add a **Volume** (for persistent SQLite storage):
   - Go to your service → **Volumes** → **Add Volume**
   - Mount path: `/data`
7. Set these **environment variables** in Railway:
   ```
   DATABASE_PATH=/data/unbound.db
   CORS_ORIGIN=https://YOUR-APP.vercel.app
   ```
   *(you'll get the Vercel URL in Step 3 — come back and add it)*
8. Deploy. Copy your Railway service URL (e.g. `https://unbound-lms-backend.up.railway.app`)

---

### Step 3 — Deploy frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**, import your repository
3. Set **Root Directory** to `frontend`
4. Under **Environment Variables**, add:
   ```
   VITE_API_URL=https://YOUR-RAILWAY-URL.up.railway.app
   ```
   (use the URL from Step 2)
5. Click **Deploy**
6. Copy your Vercel URL and go back to Railway to set `CORS_ORIGIN` to it

---

### Step 4 — Done

Your app is live. Share the Vercel URL with users.  
View registrations at: `https://YOUR-RAILWAY-URL.up.railway.app/api/registrations`

---

## Database

SQLite — auto-created on first run.

**Local:** `data/unbound.db`  
**Railway:** `/data/unbound.db` (on the mounted volume)

```
POST /api/register-interest   — save a registration
GET  /api/registrations       — view all registrations
```
