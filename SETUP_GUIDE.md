# 🚀 XDesign AI - Complete Setup Guide

This guide will help you set up the XDesign AI project from scratch.

---

## 📋 Prerequisites

Before starting, make sure you have:

- **Node.js** 18+ installed ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** installed
- A **MongoDB Atlas** account (free tier works)
- Basic knowledge of Next.js and React

---

## 🛠️ Step 1: Clone & Install

```bash
# Clone the repository (if not already done)
git clone <repository-url>
cd XDesign-Mobile-Agent-SaaS-main

# Install dependencies
npm install
```

---

## 🔑 Step 2: Environment Variables Setup

### 2.1 Create Environment File

```bash
# Copy the example file
copy .env.example .env
```

Now open `.env` and fill in the required values following the steps below.

---

## 🗄️ Step 3: MongoDB Database Setup

### 3.1 Create MongoDB Atlas Account

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a **Free Account**
3. Create a new **Cluster** (select Free tier - M0)
4. Wait for cluster creation (2-3 minutes)

### 3.2 Setup Database Access

1. Click **"Database Access"** in left sidebar
2. Click **"Add New Database User"**
   - Username: `xdesign-admin` (or any name)
   - Password: Generate a **strong password** (save it!)
   - User Privileges: **Read and write to any database**
3. Click **"Add User"**

### 3.3 Setup Network Access

1. Click **"Network Access"** in left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development)
   - This adds `0.0.0.0/0`
4. Click **"Confirm"**

### 3.4 Get Connection String

1. Click **"Database"** in left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string
5. **Replace** `<password>` with your actual password
6. **Replace** `<database>` with `xdesign`

Example:
```
mongodb+srv://xdesign-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/xdesign?retryWrites=true&w=majority
```

7. Paste this in `.env` as `DATABASE_URL`

---

## 🔐 Step 4: Kinde Authentication Setup

### 4.1 Create Kinde Account

1. Go to [https://kinde.com/](https://kinde.com/)
2. Sign up for **Free Account**
3. Create a new **Business**

### 4.2 Create Application

1. In Kinde dashboard, click **"Add Application"**
2. Choose **"Back-end web"**
3. Name it: `XDesign AI`
4. Click **"Save"**

### 4.3 Configure Application

1. Go to **"View details"** of your application
2. Click **"Quick start"** → Choose **"Next.js"**
3. Copy these values to your `.env`:
   - `KINDE_CLIENT_ID`
   - `KINDE_CLIENT_SECRET`
   - `KINDE_ISSUER_URL`

### 4.4 Set Callback URLs

1. In application settings, find **"Allowed callback URLs"**
2. Add:
   ```
   http://localhost:3000/api/auth/kinde_callback
   ```
3. Find **"Allowed logout redirect URLs"**
4. Add:
   ```
   http://localhost:3000
   ```
5. Click **"Save"**

### 4.5 Update .env

```env
KINDE_CLIENT_ID="your_actual_client_id"
KINDE_CLIENT_SECRET="your_actual_client_secret"
KINDE_ISSUER_URL="https://your-business.kinde.com"
KINDE_SITE_URL="http://localhost:3000"
KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000/project"
```

---

## 🤖 Step 5: OpenRouter AI Setup

### 5.1 Create OpenRouter Account

1. Go to [https://openrouter.ai/](https://openrouter.ai/)
2. Sign up / Login with Google
3. Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)

### 5.2 Create API Key

1. Click **"Create Key"**
2. Name it: `XDesign AI`
3. Copy the API key
4. Add to `.env`:
   ```env
   OPENROUTER_API_KEY="sk-or-v1-xxxxxxxxxxxxx"
   ```

### 5.3 Add Credits (Important!)

1. Go to **"Credits"** in OpenRouter
2. Add at least **$5** credits
3. This is needed for AI model usage (Google Gemini 3 Pro)

---

## ⚡ Step 6: Inngest Background Jobs Setup

### 6.1 Create Inngest Account

1. Go to [https://www.inngest.com/](https://www.inngest.com/)
2. Sign up for **Free Account**
3. Create a new **App**
4. Name it: `XDesign AI`

### 6.2 Get Keys

1. In Inngest dashboard, go to **"Settings"** → **"Keys"**
2. Copy these values to `.env`:
   ```env
   INNGEST_EVENT_KEY="your_event_key"
   INNGEST_SIGNING_KEY="signkey-prod-xxxxx"
   ```

### 6.3 Configure Webhook (After deployment)

For local development, you'll use **Inngest Dev Server** (explained later).

For production:
1. Go to **"Settings"** → **"Webhooks"**
2. Add your deployment URL: `https://yourdomain.com/api/inngest`

---

## 🖼️ Step 7: Unsplash API Setup

### 7.1 Create Unsplash Account

1. Go to [https://unsplash.com/developers](https://unsplash.com/developers)
2. Sign up / Login
3. Go to **"Your apps"**

### 7.2 Create Application

1. Click **"New Application"**
2. Accept the terms
3. Fill details:
   - **Application name**: `XDesign AI`
   - **Description**: `AI-powered mobile design generator`
4. Click **"Create application"**

### 7.3 Get Access Key

1. Scroll down to **"Keys"**
2. Copy **"Access Key"**
3. Add to `.env`:
   ```env
   UNSPLASH_ACCESS_KEY="your_unsplash_access_key"
   ```

---

## 🏗️ Step 8: Database Migration

```bash
# Generate Prisma Client
npx prisma generate

# Optional: Push schema to database
npx prisma db push
```

---

## 🎯 Step 9: Run the Project

### Development Mode

Open **TWO terminal windows**:

#### Terminal 1: Next.js Dev Server
```bash
npm run dev
```

The app will start at [http://localhost:3000](http://localhost:3000)

#### Terminal 2: Inngest Dev Server
```bash
npx inngest-cli@latest dev
```

The Inngest dashboard will open at [http://localhost:8288](http://localhost:8288)

---

## ✅ Step 10: Verify Setup

### 10.1 Check App is Running

1. Open [http://localhost:3000](http://localhost:3000)
2. You should see the XDesign AI landing page

### 10.2 Test Authentication

1. Click **"Sign In"** or **"Get Started"**
2. You should be redirected to Kinde login
3. Create an account / Login
4. You should be redirected back to the app

### 10.3 Test AI Generation

1. After login, enter a prompt:
   ```
   Create a fitness tracking app
   ```
2. Click **"Design"**
3. Watch the progress:
   - Analyzing...
   - Generating...
   - Screens appear!

### 10.4 Check Inngest Dashboard

1. Open [http://localhost:8288](http://localhost:8288)
2. You should see the **"generate-ui-screens"** function
3. Click on recent runs to see execution logs

---

## 🐛 Troubleshooting

### Issue: "Module not found" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Prisma Client not found
```bash
npx prisma generate
```

### Issue: Database connection error
- Check your `DATABASE_URL` is correct
- Ensure IP address is whitelisted in MongoDB Atlas
- Verify database user credentials

### Issue: "Unauthorized" in Kinde
- Check all `KINDE_*` variables are set correctly
- Verify callback URLs in Kinde dashboard
- Make sure `KINDE_SITE_URL` matches your local URL

### Issue: AI generation not working
- Check `OPENROUTER_API_KEY` is valid
- Ensure you have credits in OpenRouter account
- Check Network tab in browser for API errors

### Issue: Inngest events not triggering
- Make sure Inngest Dev Server is running (`npx inngest-cli dev`)
- Check `INNGEST_EVENT_KEY` and `INNGEST_SIGNING_KEY` are correct
- Look at Inngest dashboard for error logs

### Issue: Images not loading from Unsplash
- Verify `UNSPLASH_ACCESS_KEY` is valid
- Check you haven't exceeded API rate limits (50 requests/hour for free tier)

---

## 📦 Production Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add all environment variables in Vercel dashboard
4. Update URLs:
   - `KINDE_SITE_URL` → Your Vercel URL
   - `KINDE_POST_LOGOUT_REDIRECT_URL` → Your Vercel URL
   - `KINDE_POST_LOGIN_REDIRECT_URL` → Your Vercel URL + `/project`
   - `INNGEST_BASE_URL` → Your Vercel URL
   - Update Kinde callback URLs
   - Update Inngest webhook URL
5. Deploy!

### Environment Variables for Production

Update these in your hosting platform:
```env
NODE_ENV="production"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
KINDE_SITE_URL="https://yourdomain.com"
KINDE_POST_LOGOUT_REDIRECT_URL="https://yourdomain.com"
KINDE_POST_LOGIN_REDIRECT_URL="https://yourdomain.com/project"
INNGEST_BASE_URL="https://yourdomain.com"
```

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Kinde Documentation](https://docs.kinde.com/)
- [Inngest Documentation](https://www.inngest.com/docs)
- [OpenRouter Documentation](https://openrouter.ai/docs)
- [Unsplash API Documentation](https://unsplash.com/documentation)

---

## 🎉 You're All Set!

Your XDesign AI project is now fully configured and ready to use!

### Next Steps:
1. Explore the codebase
2. Try different prompts
3. Experiment with themes
4. Customize the AI prompts in `lib/prompt.ts`
5. Add your own themes in `lib/themes.ts`

---

## 📞 Need Help?

If you encounter issues:
1. Check the **Troubleshooting** section above
2. Review server logs in terminal
3. Check browser console for errors
4. Review Inngest dashboard for background job errors

Happy Coding! 🚀
