# 🎯 XDesign AI - Quick Reference

## 📦 Required Services & Keys

| Service | Purpose | Sign Up URL | Free Tier |
|---------|---------|-------------|-----------|
| **MongoDB Atlas** | Database | https://www.mongodb.com/cloud/atlas | ✅ Yes (512MB) |
| **Kinde** | Authentication | https://kinde.com | ✅ Yes (10,500 MAU) |
| **OpenRouter** | AI Models | https://openrouter.ai | ⚠️ Pay as you go |
| **Inngest** | Background Jobs | https://www.inngest.com | ✅ Yes (Limited) |
| **Unsplash** | Images | https://unsplash.com/developers | ✅ Yes (50 req/hr) |

---

## 🔑 Environment Variables Checklist

```bash
# Database
☐ DATABASE_URL

# Authentication
☐ KINDE_CLIENT_ID
☐ KINDE_CLIENT_SECRET
☐ KINDE_ISSUER_URL
☐ KINDE_SITE_URL
☐ KINDE_POST_LOGOUT_REDIRECT_URL
☐ KINDE_POST_LOGIN_REDIRECT_URL

# AI
☐ OPENROUTER_API_KEY

# Background Jobs
☐ INNGEST_EVENT_KEY
☐ INNGEST_SIGNING_KEY
☐ INNGEST_BASE_URL

# Images
☐ UNSPLASH_ACCESS_KEY

# App Config
☐ NODE_ENV
☐ NEXT_PUBLIC_APP_URL
```

---

## 🚀 Quick Start Commands

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
copy .env.example .env
# Fill in your keys in .env

# 3. Generate Prisma Client
npx prisma generate

# 4. Run development server (Terminal 1)
npm run dev

# 5. Run Inngest dev server (Terminal 2)
npx inngest-cli@latest dev
```

---

## 🌐 Development URLs

| Service | URL |
|---------|-----|
| **Next.js App** | http://localhost:3000 |
| **Inngest Dashboard** | http://localhost:8288 |
| **MongoDB Atlas** | https://cloud.mongodb.com |
| **OpenRouter Dashboard** | https://openrouter.ai/credits |

---

## 📝 Common Commands

```bash
# Development
npm run dev                    # Start Next.js dev server
npx inngest-cli dev           # Start Inngest dev server

# Database
npx prisma generate           # Generate Prisma client
npx prisma db push            # Push schema to database
npx prisma studio             # Open Prisma Studio (DB GUI)

# Build & Production
npm run build                 # Build for production
npm start                     # Start production server
npm run lint                  # Run ESLint
```

---

## 🎨 AI Model Configuration

**Current Model:** `google/gemini-3-pro-preview`

**Cost (approximate):**
- Input: $1.25 / 1M tokens
- Output: $5.00 / 1M tokens

**Estimated cost per generation:** $0.02 - $0.10

To change model, edit:
- `inngest/functions/generateScreens.ts`
- `inngest/functions/regenerateFrame.ts`

---

## 🎯 Project Structure Quick Map

```
app/
├── (routes)/              # Pages
│   ├── page.tsx          # Landing page
│   └── project/[id]/     # Canvas page
├── action/               # Server actions
├── api/                  # API routes
│   ├── project/          # CRUD operations
│   ├── screenshot/       # PNG export
│   └── inngest/          # Webhook

components/
├── canvas/               # Canvas components
├── ui/                   # shadcn/ui components
└── prompt-input.tsx      # AI input

inngest/
└── functions/
    ├── generateScreens.ts    # Main AI generation
    └── regenerateFrame.ts    # Regeneration

lib/
├── prompt.ts             # AI prompts ⭐
├── themes.ts             # 22 themes
├── prisma.ts             # DB client
└── openrouter.ts         # AI config

prisma/
└── schema.prisma         # Database schema
```

---

## 🔧 Customization Tips

### Add New Theme
Edit `lib/themes.ts`:
```typescript
export const MY_CUSTOM_THEME = `
  --background: #ffffff;
  --foreground: #000000;
  --primary: #your-color;
  // ... more variables
`;

// Add to THEME_LIST array
```

### Modify AI Prompts
Edit `lib/prompt.ts`:
- `GENERATION_SYSTEM_PROMPT` - Controls HTML generation
- `ANALYSIS_PROMPT` - Controls screen planning

### Change Number of Screens
In `lib/prompt.ts`:
```typescript
// Line 126: Change max screens
.min(1)
.max(4)  // Change this number
```

---

## 📊 Database Models

```prisma
Project {
  id        String
  userId    String
  name      String
  theme     String?
  thumbnail String?
  frames    Frame[]
}

Frame {
  id          String
  title       String
  htmlContent String  // Generated HTML
  projectId   String
  project     Project
}
```

---

## 🐛 Quick Troubleshooting

| Error | Solution |
|-------|----------|
| Prisma not found | Run `npx prisma generate` |
| Auth redirect loop | Check Kinde callback URLs |
| AI not responding | Verify OpenRouter credits |
| Inngest events missing | Start `inngest-cli dev` |
| Images not loading | Check Unsplash API key |
| Build fails | Delete `.next` folder |

---

## 💰 Cost Estimation (Monthly)

**For 1000 generations/month:**

| Service | Cost |
|---------|------|
| MongoDB Atlas | Free (512MB enough) |
| Kinde Auth | Free (if <10,500 users) |
| **OpenRouter (AI)** | **~$50-100** 💰 |
| Inngest | Free tier OK |
| Unsplash | Free |
| **Total** | **~$50-100/month** |

⚠️ **Main cost is AI usage!** Consider caching or limiting generations.

---

## 🎓 Learning Path

1. ✅ Setup environment
2. ✅ Understand project structure
3. 📖 Read `lib/prompt.ts` (AI prompts)
4. 📖 Study `inngest/functions/generateScreens.ts` (workflow)
5. 📖 Review `components/canvas/index.tsx` (UI logic)
6. 🎨 Experiment with themes
7. 🤖 Customize AI prompts
8. 🚀 Deploy to production

---

## 📞 Support Resources

- **Documentation**: Check `SETUP_GUIDE.md`
- **Kinde Docs**: https://docs.kinde.com
- **Inngest Docs**: https://www.inngest.com/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Next.js Docs**: https://nextjs.org/docs

---

**Last Updated:** 2026-01-12
