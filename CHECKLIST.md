# Quick Setup Checklist

## ✅ Initial Setup

- [x] Install dependencies: `pnpm install`
- [ ] Get Resend API key from https://resend.com/api-keys
- [ ] Copy `.env.example` to `.env.local`
- [ ] Add your Resend API key to `.env.local`
- [ ] Update recipient email in `app/api/contact/route.ts` (line 31)
- [ ] Add your `resume.pdf` to `public/` folder
- [ ] Update social media links in page components

## 📝 Before Going Live

### Contact Form Configuration
- [ ] Verify your domain with Resend (for production)
- [ ] Update sender email from `onboarding@resend.dev` to your domain
- [ ] Update recipient email to your actual email address
- [ ] Test the contact form locally
- [ ] Add RESEND_API_KEY to Vercel environment variables

### Personal Information
- [ ] Update email addresses in all pages
- [ ] Update phone number in contact page
- [ ] Update location in contact page
- [ ] Update social media links (GitHub, LinkedIn, Twitter)
- [ ] Add your actual projects to projects page
- [ ] Update tech stack to match your skills
- [ ] Update statistics in about page

### Content
- [ ] Add real project descriptions and links
- [ ] Upload project images/screenshots
- [ ] Add your actual resume PDF
- [ ] Review all text content for accuracy
- [ ] Test all navigation links

## 🚀 Deployment

- [ ] Push code to GitHub/GitLab
- [ ] Connect repository to Vercel
- [ ] Add environment variables in Vercel dashboard
- [ ] Deploy and test
- [ ] Verify contact form works in production

## 🔧 Customization Tips

### Update Colors
Edit gradient colors in:
- Hero buttons: `app/page.tsx`
- Project cards: `app/projects/page.tsx`
- Contact button: `app/contact/page.tsx`

### Add More Projects
Edit the `projects` array in `app/projects/page.tsx`

### Modify Tech Stack
Edit the `techStack` array in `app/about/page.tsx`

### Change Stats
Edit the `stats` array in `app/about/page.tsx`
