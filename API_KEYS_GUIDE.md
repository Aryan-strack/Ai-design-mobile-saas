# 🔑 API Keys & Credentials - Step by Step Guide

This guide provides **direct links** and **exact steps** to get all required API keys.

---

## 1️⃣ MongoDB Database Setup

### Get DATABASE_URL

**Time Required:** ~5 minutes

#### Step-by-Step:

1. **Sign Up**: https://www.mongodb.com/cloud/atlas/register
   - Use Google/GitHub for quick signup

2. **Create Cluster**:
   - Choose: **M0 Free Tier**
   - Cloud Provider: **AWS** (or any)
   - Region: Choose closest to you
   - Cluster Name: `XDesign-Cluster`
   - Click **"Create Cluster"**

3. **Create Database User**:
   - Go to: **Database Access** (left sidebar)
   - Click: **"Add New Database User"**
   - Authentication Method: **Password**
   - Username: `xdesign-admin`
   - Password: Click **"Autogenerate Secure Password"** (SAVE THIS!)
   - Database User Privileges: **"Read and write to any database"**
   - Click: **"Add User"**

4. **Whitelist IP**:
   - Go to: **Network Access** (left sidebar)
   - Click: **"Add IP Address"**
   - Click: **"Allow Access from Anywhere"**
   - Click: **"Confirm"**

5. **Get Connection String**:
   - Go to: **Database** (left sidebar)
   - Click: **"Connect"** button
   - Select: **"Connect your application"**
   - Driver: **Node.js**
   - Version: **5.5 or later**
   - Copy the connection string
   - **Replace** `<password>` with your saved password
   - Add database name: Replace `<database>` with `xdesign`

   Final format:
   ```
   mongodb+srv://xdesign-admin:YOUR_PASSWORD_HERE@cluster0.xxxxx.mongodb.net/xdesign?retryWrites=true&w=majority
   ```

6. **Add to .env**:
   ```env
   DATABASE_URL="mongodb+srv://xdesign-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/xdesign?retryWrites=true&w=majority"
   ```

---

## 2️⃣ Kinde Authentication Setup

### Get KINDE_* Variables

**Time Required:** ~3 minutes

#### Step-by-Step:

1. **Sign Up**: https://app.kinde.com/register
   - Use Google/GitHub for quick signup

2. **Create Business**:
   - Business name: `XDesign`
   - Continue setup

3. **Create Application**:
   - Click: **"Add application"**
   - Name: `XDesign AI`
   - Type: Choose **"Back-end web"**
   - Click: **"Save"**

4. **Get Credentials**:
   - You'll see **Quick start** page
   - Choose framework: **Next.js**
   - Copy these values:

   ```env
   KINDE_CLIENT_ID="your_client_id_here"
   KINDE_CLIENT_SECRET="your_client_secret_here"
   KINDE_ISSUER_URL="https://yourname.kinde.com"
   ```

5. **Configure Callbacks**:
   - Go to: **Application** → **Settings**
   - Scroll to **"Allowed callback URLs"**
   - Add: `http://localhost:3000/api/auth/kinde_callback`
   - Scroll to **"Allowed logout redirect URLs"**
   - Add: `http://localhost:3000`
   - Click: **"Save"**

6. **Complete .env**:
   ```env
   KINDE_SITE_URL="http://localhost:3000"
   KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
   KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000/project"
   ```

---

## 3️⃣ OpenRouter AI Setup

### Get OPENROUTER_API_KEY

**Time Required:** ~2 minutes

⚠️ **Note**: This requires adding credits (minimum $5 recommended)

#### Step-by-Step:

1. **Sign Up**: https://openrouter.ai/
   - Click **"Sign In"** → Use Google

2. **Add Credits**:
   - Click: **"Credits"** (top right)
   - Click: **"Add credits"**
   - Minimum: **$5** (recommended: $10-20)
   - Complete payment

3. **Create API Key**:
   - Go to: https://openrouter.ai/keys
   - Click: **"Create Key"**
   - Name: `XDesign AI Development`
   - Credit limit: *Optional* (leave blank for no limit)
   - Click: **"Create"**
   - **Copy the key** (you won't see it again!)

4. **Add to .env**:
   ```env
   OPENROUTER_API_KEY="sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   ```

**Cost Estimate**: 
- ~$0.05 per 4-screen generation
- $5 credit = ~100 generations

---

## 4️⃣ Inngest Background Jobs

### Get INNGEST_* Variables

**Time Required:** ~3 minutes

#### Step-by-Step:

1. **Sign Up**: https://app.inngest.com/sign-up
   - Use Google/GitHub

2. **Create App**:
   - App name: `XDesign AI`
   - Click: **"Create app"**

3. **Get Keys**:
   - Go to: **"Settings"** → **"Event Keys"** (left sidebar)
   - You'll see:
     - **Event Key**: `inngest-xxxx...`
     - **Signing Key**: `signkey-prod-xxxx...`
   
4. **Add to .env**:
   ```env
   INNGEST_EVENT_KEY="inngest-xxxxxxxxxxxxxxxxxxxxxx"
   INNGEST_SIGNING_KEY="signkey-prod-xxxxxxxxxxxxxxxxxxxxxx"
   INNGEST_BASE_URL="http://localhost:3000"
   ```

**Note**: For production, update `INNGEST_BASE_URL` to your deployed URL.

---

## 5️⃣ Unsplash Images API

### Get UNSPLASH_ACCESS_KEY

**Time Required:** ~3 minutes

#### Step-by-Step:

1. **Sign Up**: https://unsplash.com/join
   - Or login if you have account

2. **Go to Developer Portal**: https://unsplash.com/oauth/applications

3. **Create New Application**:
   - Click: **"New Application"**
   - Read and accept terms
   - Application name: `XDesign AI`
   - Description: `AI-powered mobile design generator using Unsplash for images`
   - Click: **"Create application"**

4. **Get Access Key**:
   - Scroll down to **"Keys"** section
   - Copy **"Access Key"**

5. **Add to .env**:
   ```env
   UNSPLASH_ACCESS_KEY="your_access_key_here"
   ```

**Rate Limits** (Free tier):
- 50 requests per hour
- 1000 requests per month

---

## ✅ Verification Checklist

After getting all keys, your `.env` should look like:

```env
# Database
DATABASE_URL="mongodb+srv://xdesign-admin:..."

# Auth
KINDE_CLIENT_ID="xxxxx"
KINDE_CLIENT_SECRET="xxxxx"
KINDE_ISSUER_URL="https://yourname.kinde.com"
KINDE_SITE_URL="http://localhost:3000"
KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000/project"

# AI
OPENROUTER_API_KEY="sk-or-v1-xxxxx"

# Background Jobs
INNGEST_EVENT_KEY="inngest-xxxxx"
INNGEST_SIGNING_KEY="signkey-prod-xxxxx"
INNGEST_BASE_URL="http://localhost:3000"

# Images
UNSPLASH_ACCESS_KEY="xxxxx"

# Config
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## 🧪 Test Your Setup

Run these commands to verify everything works:

```bash
# 1. Generate Prisma Client (tests DATABASE_URL)
npx prisma generate

# 2. Test database connection
npx prisma db push

# 3. Start dev server
npm run dev

# 4. Start Inngest dev server (in new terminal)
npx inngest-cli@latest dev
```

### Quick Test Flow:

1. Open http://localhost:3000
2. Click **"Sign In"** (tests Kinde)
3. Create account / Login
4. Enter prompt: `"Create a simple dashboard"`
5. Click **"Design"**
6. Watch Inngest dashboard at http://localhost:8288 (tests Inngest)
7. Screens should generate (tests OpenRouter + Unsplash)

---

## 💰 Total Cost Summary

| Service | Setup Cost | Monthly Cost |
|---------|-----------|--------------|
| MongoDB Atlas | Free | Free (M0 tier) |
| Kinde Auth | Free | Free (<10.5K users) |
| **OpenRouter** | **$5-20** | **$10-50** (usage based) |
| Inngest | Free | Free (starter) |
| Unsplash | Free | Free (1K requests) |
| **TOTAL** | **$5-20** | **$10-50** |

💡 **Tip**: Main cost is AI usage. Monitor OpenRouter credits!

---

## 🔒 Security Best Practices

1. **Never commit .env file** to Git
2. **Use different keys** for development and production
3. **Rotate keys** regularly (every 3-6 months)
4. **Set API key limits** when possible
5. **Monitor usage** to detect unauthorized access

---

## 🆘 Troubleshooting

### MongoDB Connection Fails
- ✅ Check password has no special characters causing issues
- ✅ Verify IP whitelist includes `0.0.0.0/0`
- ✅ Ensure cluster is active (not paused)

### Kinde Auth Redirect Loop
- ✅ Verify callback URLs exactly match (including protocol)
- ✅ Check `KINDE_SITE_URL` has no trailing slash
- ✅ Clear browser cookies and try again

### OpenRouter "Unauthorized"
- ✅ Verify API key is correct (check for extra spaces)
- ✅ Ensure you have credits in account
- ✅ Check API key hasn't been revoked

### Inngest Events Not Triggering
- ✅ Make sure `inngest-cli dev` is running
- ✅ Verify both keys are correct
- ✅ Check Inngest dashboard for errors

### Unsplash Images Not Loading
- ✅ Verify Access Key (not Application ID)
- ✅ Check you haven't exceeded rate limit (50/hr)
- ✅ Ensure application is active (not in demo mode)

---

## 📞 Support Links

- **MongoDB Support**: https://www.mongodb.com/support
- **Kinde Support**: https://docs.kinde.com
- **OpenRouter Discord**: https://discord.gg/openrouter
- **Inngest Discord**: https://www.inngest.com/discord
- **Unsplash Help**: https://help.unsplash.com

---

**Setup Time: ~15-20 minutes total** ⏱️

Good luck! 🚀
