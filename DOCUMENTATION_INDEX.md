# 📚 XDesign AI - Documentation Index

Welcome to XDesign AI! This guide will help you navigate all available documentation.

---

## 🎯 Start Here

### New to the Project?
**Start with: [README.md](./README.md)**
- Project overview
- Key features
- License information
- YouTube tutorial link

---

## 📖 Setup & Configuration

### 1. [SETUP_GUIDE.md](./SETUP_GUIDE.md) - **READ THIS FIRST!** ⭐
**Complete step-by-step setup guide**
- Prerequisites
- Database setup (MongoDB)
- Authentication (Kinde)
- AI configuration (OpenRouter)
- Background jobs (Inngest)
- Image API (Unsplash)
- Running the project
- Troubleshooting

**Time Required:** 15-20 minutes

---

### 2. [API_KEYS_GUIDE.md](./API_KEYS_GUIDE.md) - **Essential!** 🔑
**Detailed instructions for getting all API keys**
- Direct links to each service
- Step-by-step screenshots
- Cost breakdown
- Security best practices
- Testing & verification

**Time Required:** 15 minutes

---

### 3. [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - **Keep Handy!** ⚡
**Quick reference for daily development**
- Common commands
- Environment variables checklist
- Project structure map
- Development URLs
- Cost estimates
- Troubleshooting quick fixes

---

## 🔧 Configuration Files

### Environment Variables

| File | Purpose | Commit to Git? |
|------|---------|----------------|
| `.env.example` | Template with all variables | ✅ Yes |
| `.env.local.example` | Simplified template | ✅ Yes |
| `.env` | Your actual keys (create this) | ❌ Never |
| `.env.local` | Alternative name | ❌ Never |

**Setup:**
```bash
copy .env.example .env
# Then fill in your actual API keys
```

---

## 🏗️ Project Architecture

### Core Files to Understand

| File/Folder | Description |
|-------------|-------------|
| `app/(routes)/` | Next.js pages & routing |
| `components/canvas/` | Canvas & frame UI |
| `inngest/functions/` | AI generation logic |
| `lib/prompt.ts` | **AI prompts (IMPORTANT!)** |
| `lib/themes.ts` | 22 theme definitions |
| `prisma/schema.prisma` | Database models |

### Key Components

1. **AI Generation Flow**
   - `inngest/functions/generateScreens.ts` - Main generation
   - `inngest/functions/regenerateFrame.ts` - Regeneration
   - `lib/prompt.ts` - Prompts that control AI

2. **Canvas System**
   - `components/canvas/index.tsx` - Main canvas
   - `components/canvas/device-frame.tsx` - Mobile frame
   - `context/canvas-context.tsx` - State management

3. **API Routes**
   - `app/api/project/route.ts` - Project CRUD
   - `app/api/screenshot/route.ts` - PNG export
   - `app/api/inngest/route.ts` - Webhook

---

## 📚 Learning Path

### For Beginners

1. ✅ Read [README.md](./README.md)
2. ✅ Follow [API_KEYS_GUIDE.md](./API_KEYS_GUIDE.md)
3. ✅ Complete [SETUP_GUIDE.md](./SETUP_GUIDE.md)
4. ✅ Run the project
5. ✅ Try generating designs
6. ✅ Explore [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)

### For Developers

After setup, dive into:

1. **Understand AI Workflow**
   - Read `lib/prompt.ts` (AI prompts)
   - Study `inngest/functions/generateScreens.ts`
   - Understand the analysis → generation flow

2. **Explore Canvas System**
   - `components/canvas/index.tsx`
   - `context/canvas-context.tsx`
   - Real-time updates with Inngest

3. **Customize Themes**
   - `lib/themes.ts` - Add your own themes
   - CSS variables system
   - Theme switching logic

4. **Modify AI Prompts**
   - `lib/prompt.ts`
   - Experiment with different instructions
   - Control output quality

---

## 🎓 Video Tutorial

**YouTube Course**: [Watch the Full Build](https://www.youtube.com/watch?v=o3IqOrXtxm8)

Topics covered:
- Architecture overview
- AI workflows
- Canvas rendering
- PNG exports
- Deployment

---

## 🔍 Technology Documentation

### External Resources

| Technology | Docs Link |
|------------|-----------|
| **Next.js** | https://nextjs.org/docs |
| **Prisma** | https://www.prisma.io/docs |
| **Kinde Auth** | https://docs.kinde.com |
| **Inngest** | https://www.inngest.com/docs |
| **OpenRouter** | https://openrouter.ai/docs |
| **Unsplash API** | https://unsplash.com/documentation |
| **Tailwind CSS** | https://tailwindcss.com/docs |
| **React Query** | https://tanstack.com/query/latest/docs |

---

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Prisma errors | Run `npx prisma generate` |
| Auth redirect loop | Check Kinde callback URLs |
| AI not working | Verify OpenRouter credits |
| Events not triggering | Start `inngest-cli dev` |
| Build failures | Delete `.next` folder |

**See detailed troubleshooting in:**
- [SETUP_GUIDE.md](./SETUP_GUIDE.md#troubleshooting)
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md#quick-troubleshooting)

---

## 💰 Cost Breakdown

### Free Tier Services
- MongoDB Atlas (512MB)
- Kinde Auth (<10.5K users)
- Inngest (limited runs)
- Unsplash (1K requests/month)

### Paid Services
- **OpenRouter**: ~$10-50/month (main cost)

**Total estimated cost: $10-50/month** depending on usage

Details in: [QUICK_REFERENCE.md](./QUICK_REFERENCE.md#cost-estimation-monthly)

---

## 📝 License

**Commercial License Required** for:
- SaaS deployment
- Client work  
- Revenue generation

**Free for:**
- Personal learning
- Portfolio projects

📄 Full terms: [TECHWITHEMMA-LICENSE.md](./TECHWITHEMMA-LICENSE.md)

---

## 🚀 Deployment

### Quick Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Update callback URLs
5. Deploy!

**Detailed guide coming in SETUP_GUIDE.md**

---

## 🆘 Getting Help

1. **Check documentation** (you're here!)
2. **Review troubleshooting** sections
3. **Watch YouTube tutorial**
4. **Check browser/server logs**
5. **Review Inngest dashboard**

### Support Resources
- Kinde: https://docs.kinde.com
- Inngest: https://www.inngest.com/discord
- OpenRouter: https://discord.gg/openrouter

---

## 📂 File Structure Overview

```
XDesign-Mobile-Agent-SaaS-main/
│
├── 📄 README.md                  # Start here
├── 📄 SETUP_GUIDE.md            # Complete setup
├── 📄 API_KEYS_GUIDE.md         # Get API keys
├── 📄 QUICK_REFERENCE.md        # Quick commands
├── 📄 DOCUMENTATION_INDEX.md    # This file
│
├── 📄 .env.example              # Environment template
├── 📄 .env.local.example        # Simplified template
│
├── 📁 app/                      # Next.js application
├── 📁 components/               # React components
├── 📁 inngest/                  # Background jobs
├── 📁 lib/                      # Utilities & configs
├── 📁 prisma/                   # Database schema
│
└── 📄 package.json              # Dependencies
```

---

## ✅ Quick Checklist

Before starting development:

- [ ] Read README.md
- [ ] Get all API keys (API_KEYS_GUIDE.md)
- [ ] Complete setup (SETUP_GUIDE.md)
- [ ] Create .env file
- [ ] Run `npm install`
- [ ] Run `npx prisma generate`
- [ ] Start dev server (`npm run dev`)
- [ ] Start Inngest (`inngest-cli dev`)
- [ ] Test generation flow
- [ ] Bookmark QUICK_REFERENCE.md

---

## 🎯 Next Steps

1. **Setup Complete?** → Read code in `lib/prompt.ts`
2. **Want to customize?** → Explore `lib/themes.ts`
3. **Ready to deploy?** → See Deployment section
4. **Need help?** → Check Troubleshooting

---

**Happy Building! 🚀**

*Last Updated: 2026-01-12*
