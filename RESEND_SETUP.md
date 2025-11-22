# Resend Email Setup Instructions

## Important Note

The email API (`/api/send-email`) only works when deployed to Vercel. It will NOT work in local development.

## 1. Install Dependencies

```bash
npm install resend @vercel/node
```

## 2. Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

## 3. Add Environment Variable

### For Local Development:

Create a `.env` file in the root directory:

```env
RESEND_API_KEY=re_your_api_key_here
```

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add a new variable:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key
   - Environment: Production, Preview, Development

## 4. Verify Domain (Optional but Recommended)

For production use, verify your domain in Resend:

1. Go to Resend dashboard > Domains
2. Add your domain
3. Add the DNS records provided by Resend
4. Update the `from` field in `api/send-email.ts`:
   ```typescript
   from: "Portfolio Contact <contact@yourdomain.com>";
   ```

## 5. Test the Integration

1. Run your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email inbox

## Notes

- The default sender is `onboarding@resend.dev` (works for testing)
- For production, use a verified domain
- Emails will be sent to `samsondemessie@gmail.com` (update in `api/send-email.ts` if needed)
- The API endpoint is at `/api/send-email`
