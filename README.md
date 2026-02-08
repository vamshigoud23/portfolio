This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- 🎨 Modern, responsive portfolio design
- 📱 Separate pages for About, Projects, and Contact
- 📧 Working contact form with Resend integration
- 🌗 Dark mode support
- ⚡ Built with Next.js 16 and Tailwind CSS 4

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Then add your Resend API key to `.env.local`:

```env
RESEND_API_KEY=re_your_actual_key_here
```

**To get your Resend API key:**
1. Sign up for free at [resend.com](https://resend.com)
2. Get your API key from [resend.com/api-keys](https://resend.com/api-keys)
3. Update the recipient email in `app/api/contact/route.ts` (line 31)

See [SETUP_EMAIL.md](SETUP_EMAIL.md) for detailed email configuration instructions.

### 3. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── page.tsx              # Home page with hero section
├── about/page.tsx        # About page with tech stack
├── projects/page.tsx     # Projects showcase
├── contact/page.tsx      # Contact form
├── api/contact/route.ts  # Contact form API endpoint
├── globals.css           # Global styles
└── layout.tsx            # Root layout
```

## Customization

### Update Personal Information

- **Email**: Update in `app/api/contact/route.ts` (line 31)
- **Social Links**: Update in all page components
- **Projects**: Edit `projects` array in `app/projects/page.tsx`
- **Tech Stack**: Edit `techStack` array in `app/about/page.tsx`
- **Resume**: Add `resume.pdf` to the `public/` folder

### Styling

This project uses Tailwind CSS 4. Update colors and styles in:
- `app/globals.css` for global styles and animations
- Individual page components for component-specific styles

## Getting Started

First, run the development server:

```bash
pnpm dev
```

You can start editing the pages in the `app/` directory. The app auto-updates as you edit the files.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [Resend Documentation](https://resend.com/docs) - email API for developers

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

**Important for deployment:**
1. Add your `RESEND_API_KEY` to Vercel environment variables
2. Update the email sender address with your verified domain
3. Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## License

This project is open source and available under the MIT License.
