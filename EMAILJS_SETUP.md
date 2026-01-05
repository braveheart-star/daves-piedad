# EmailJS Setup Guide

## 📧 Contact Form Configuration

The contact form uses EmailJS to send emails directly from the frontend. Follow these steps to set it up:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Copy the **Template ID** (you'll need this)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### 5. Environment Variables
Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### 6. Test the Form
1. Restart your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message

## 🔧 Troubleshooting

- **Form not sending**: Check that all environment variables are set correctly
- **Emails not received**: Check your spam folder
- **Template errors**: Make sure your EmailJS template uses the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

## 📝 Template Variables Used

The form sends these variables to your EmailJS template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (kishmarkpiedad@gmail.com)