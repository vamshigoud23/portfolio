# Quick Start Guide

## Getting Started with Vamshi's Portfolio Website

### 1. First Time Setup

Open your terminal and navigate to the portfolio directory:

```bash
cd "C:\Users\use\OneDrive\Desktop\portfolio"
```

Install all dependencies:

```bash
npm install
```

### 2. Run the Development Server

Start the development server:

```bash
npm run dev
```

This will start the Next.js development server. Open your browser and visit:
- **http://localhost:3000**

### 3. Make Changes

The website will hot-reload as you make changes to the code. Try editing any file in the `src` folder and you'll see updates in real-time.

### 4. Personalize Your Portfolio

Before deploying, update these key areas:

#### Update Your Info:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change greeting text
   - Update social media links

2. **About Section** (`src/components/About.tsx`):
   - Update your bio
   - Change your strengths

3. **Projects** (`src/components/Projects.tsx`):
   - Add your real projects
   - Update project descriptions and links

4. **Contact** (`src/components/Contact.tsx`):
   - Update email, phone, location
   - Update social media links

### 5. Add Your Images

Replace the emoji placeholders with actual images:
- Profile picture in Hero section
- Project screenshots in Projects section
- About section image

### 6. Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

### 7. Deploy to the Web

#### Option A: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

#### Option B: Netlify
- Push your code to GitHub
- Connect your repository to Netlify
- Netlify will auto-deploy on each push

#### Option C: Other Hosting
- Run `npm run build`
- Upload the `.next` folder to your hosting provider

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Support Files

- **README.md** - Full project documentation
- **tailwind.config.ts** - Tailwind CSS customization
- **tsconfig.json** - TypeScript configuration
- **next.config.ts** - Next.js configuration

## Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark mode with persistent storage
✅ Smooth animations and transitions
✅ Contact form
✅ Project showcase
✅ Skills display with proficiency bars
✅ SEO optimized
✅ Fast performance

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
npm cache clean --force
npm install
```

### Dark mode not working?
Check browser console for any errors. Clear browser cache and localStorage.

## Next Steps

1. ✅ Install dependencies
2. ✅ Run dev server
3. ✅ Customize content with your info
4. ✅ Add your images
5. ✅ Test on mobile devices
6. ✅ Deploy to the web

Happy coding! 🚀
