# Environment Variables

## Resend Configuration

To enable email functionality for the contact form:

1. Sign up for a free Resend account at https://resend.com
2. Get your API key from https://resend.com/api-keys
3. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Add your Resend API key to `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```

## Important Notes

- **Verified Domain**: For production, you need to verify your domain with Resend
- **Default Sender**: The default sender is `onboarding@resend.dev` (testing only)
- **Update Email**: Change the recipient email in `app/api/contact/route.ts` (line 21)
- **From Address**: Update the from address in `app/api/contact/route.ts` (line 20) to use your verified domain

## Development

After adding your API key, restart the development server:
```bash
pnpm dev
```

## Troubleshooting

If emails aren't sending:
1. Check that `.env.local` exists and contains your API key
2. Verify the API key is valid at https://resend.com/api-keys
3. Check the console for error messages
4. Ensure you've restarted the dev server after adding the key
