# Email Service Configuration

This directory contains the email service configuration for the contact form. The contact form is now fully functional with validation, loading states, error handling, and toast notifications.

## Current Status

The contact form is **working** and uses a simulation mode for development. Form submissions are logged to the console and simulate real email sending with a 1.5-second delay.

## Features Implemented

- **Form Validation**: Using react-hook-form with zod schema validation
- **Loading States**: Shows spinner and disables button during submission
- **Error Handling**: Displays error messages for validation and network issues
- **Toast Notifications**: Success and error feedback using shadcn/ui toast
- **Responsive Design**: Works on all screen sizes
- **Form Reset**: Clears form after successful submission
- **Send Another Message**: Allows users to submit multiple messages

## Email Service Options

To make the contact form send real emails, choose one of the following options:

### Option 1: EmailJS (Recommended for client-side)

1. **Sign up** at [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Create an email service** and email template
3. **Install EmailJS**:
   ```bash
   npm install emailjs-com
   ```
4. **Configure** in `email-service.ts`:
   - Replace `YOUR_SERVICE_ID` with your EmailJS service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS template ID  
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key
5. **Update the export**:
   ```typescript
   export const sendContactEmail = sendEmailViaEmailJS;
   ```

### Option 2: Formspree (Easy setup)

1. **Sign up** at [https://formspree.io/](https://formspree.io/)
2. **Create a new form** to get your form ID
3. **Configure** in `email-service.ts`:
   - Replace `YOUR_FORM_ID` with your Formspree form ID
4. **Update the export**:
   ```typescript
   export const sendContactEmail = sendEmailViaFormspree;
   ```

### Option 3: Custom Backend API

1. **Create a backend endpoint** (e.g., `/api/contact`)
2. **Configure your server** to send emails using services like:
   - Nodemailer with SMTP
   - SendGrid
   - AWS SES
   - Resend
3. **Update the endpoint URL** in `sendEmailViaAPI` function
4. **Update the export**:
   ```typescript
   export const sendContactEmail = sendEmailViaAPI;
   ```

## Form Data Structure

The contact form sends the following data:

```typescript
interface ContactFormData {
  name: string;        // Required, 2-100 characters
  email: string;       // Required, valid email format
  company?: string;    // Optional, max 100 characters
  message: string;    // Required, 10-1000 characters
}
```

## Validation Rules

- **Name**: Required, 2-100 characters
- **Email**: Required, valid email format
- **Company**: Optional, max 100 characters  
- **Message**: Required, 10-1000 characters

## Testing

The form includes simulated failures (10% chance) to test error handling. You can see the form data in the browser console during development.

## Security Notes

- Always validate input on both client and server side
- Consider implementing rate limiting for production
- Use CSRF protection if using a custom backend
- Never expose sensitive credentials in client-side code

## Production Deployment

Before deploying to production:

1. Choose and configure an email service
2. Test the email delivery thoroughly
3. Set up proper error monitoring
4. Consider adding analytics to track form submissions
5. Test on mobile devices and different browsers

## Support

If you need help setting up the email service, refer to the documentation of your chosen service provider or contact the development team.
