# 🚀 Resend Email Setup Guide

## ✅ Current Status

Your Resend integration is **almost ready**! Here's what's configured:

- ✅ API Key added to `.env.local`
- ✅ Recipient email set to: `vamshigoudjaligama66@gmail.com`
- ✅ Email template created
- ✅ Contact form API route configured

---

## 📋 Quick Setup Steps

### Step 1: Test Locally (Right Now!)

Your contact form should work immediately with the current setup:

1. **Start the development server:**
   ```bash
   pnpm dev
   ```

2. **Test the contact form:**
   - Visit: http://localhost:3000/contact
   - Fill out the form and submit
   - Check your email at `vamshigoudjaligama66@gmail.com`

**Note:** With the default `onboarding@resend.dev` sender, you can only send emails to the email address you used to sign up for Resend. If you signed up with `vamshigoudjaligama66@gmail.com`, this will work perfectly!

---

## 🎯 For Production (Before Deploying)

### Step 2: Verify Your Domain (Optional but Recommended)

For production use, you should verify a custom domain to:
- Send emails from your own domain (e.g., contact@yourdomain.com)
- Remove sending limitations
- Improve email deliverability
- Look more professional

#### To Verify a Domain:

1. **Go to Resend Dashboard:**
   - Visit: https://resend.com/domains
   - Click "Add Domain"

2. **Enter Your Domain:**
   - Example: `yourdomain.com`
   - Resend will provide DNS records

3. **Add DNS Records:**
   - Go to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)
   - Add the DNS records provided by Resend:
     - SPF record (TXT)
     - DKIM record (TXT)
     - MX record (if you want to receive emails)

4. **Wait for Verification:**
   - Can take 24-48 hours for DNS to propagate
   - Resend will verify automatically

5. **Update Your Code:**
   Once verified, update the sender in `app/api/contact/route.ts`:
   ```typescript
   from: 'Portfolio Contact <contact@yourdomain.com>',
   ```

---

## 🚀 Deploy to Production

### Step 3: Deploy to Vercel

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup Resend email integration"
   git push origin master
   ```

2. **Go to Vercel:**
   - Visit: https://vercel.com
   - Import your GitHub repository

3. **Add Environment Variable:**
   - In Vercel project settings → Environment Variables
   - Add: `RESEND_API_KEY` with value: `re_dcgK1rEW_K6cbABiWFJunCnQPjA9cQhU9`
   - Apply to: Production, Preview, and Development

4. **Deploy:**
   - Vercel will automatically deploy
   - Your contact form will work in production!

---

## 🧪 Testing Checklist

- [ ] Local test: Submit form at http://localhost:3000/contact
- [ ] Check email arrives at `vamshigoudjaligama66@gmail.com`
- [ ] Verify email looks good (check HTML rendering)
- [ ] Test reply button in email
- [ ] Check spam folder if email doesn't arrive
- [ ] Test form validation (empty fields, invalid email)
- [ ] Test loading state and success message
- [ ] Test error handling (temporarily use wrong API key)

---

## 📧 Email Sending Limits

### Free Tier (Current):
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ Good for portfolio and testing

### If You Need More:
- Upgrade to Pro: $20/month for 50,000 emails
- Visit: https://resend.com/pricing

---

## 🛠️ Troubleshooting

### Email Not Arriving?

1. **Check Spam/Junk Folder**
   - Resend emails sometimes land in spam initially

2. **Verify API Key**
   - Make sure `.env.local` has the correct key
   - Restart dev server after adding key: `pnpm dev`

3. **Check Resend Dashboard**
   - Visit: https://resend.com/emails
   - See all sent emails and their status
   - Check for error messages

4. **Check Browser Console**
   - Open DevTools (F12)
   - Look for error messages when submitting form

5. **Check Server Logs**
   - Look at terminal where `pnpm dev` is running
   - Check for error messages

### Common Issues:

**"Email service is not configured"**
- API key not in `.env.local`
- Restart dev server

**"Failed to send email"**
- Check API key is valid
- Check Resend dashboard for errors
- Verify you're not over rate limits

**Email goes to spam**
- Normal for `onboarding@resend.dev` sender
- Verify a custom domain to fix this

---

## 📝 Current Configuration

**Files Configured:**
- `.env.local` - API key stored here
- `app/api/contact/route.ts` - API endpoint
- `app/api/contact/email-template.ts` - Email design
- `app/contact/page.tsx` - Contact form UI

**Recipient Email:** `vamshigoudjaligama66@gmail.com`

**Sender Email:** `onboarding@resend.dev` (change after domain verification)

---

## 🎨 Customizing Email Template

The email template is in `app/api/contact/email-template.ts`. You can customize:

- Colors and gradients
- Brand name (currently "VAMSHI")
- Layout and styling
- Footer text
- Icons and emojis

---

## 🔐 Security Notes

- ✅ API key in `.env.local` (gitignored - not pushed to GitHub)
- ✅ API key in Vercel environment variables (secure)
- ✅ Form validation on both client and server
- ✅ Email format validation
- ✅ Rate limiting handled by Resend

**Never commit `.env.local` to GitHub!** (Already in `.gitignore`)

---

## 📚 Additional Resources

- **Resend Docs:** https://resend.com/docs
- **Resend Dashboard:** https://resend.com/emails
- **Domain Setup:** https://resend.com/docs/dashboard/domains/introduction
- **API Reference:** https://resend.com/docs/api-reference/emails/send-email

---

## ✨ Next Steps

1. Test locally by running `pnpm dev` and visiting http://localhost:3000/contact
2. Submit a test message
3. Check your email at `vamshigoudjaligama66@gmail.com`
4. If working, deploy to Vercel!

**Your contact form is ready to use! 🎉**
