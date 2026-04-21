// Email service configuration for contact form
// This file provides multiple options for sending emails from the contact form

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message?: string;
}

// Option 1: EmailJS Integration
// To use this option:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service and template
// 3. Install emailjs-com: npm install emailjs-com
// 4. Replace the placeholder values below

export const sendEmailViaEmailJS = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    const emailjs = await import('@emailjs/browser');
    
    const response = await emailjs.send(
      'service_cqjb0fh',      // Your EmailJS service ID
      'template_i97keio',     // Your EmailJS template ID
      {
        from_name: data.name,
        from_email: data.email,
        reply_to: data.email,  // This enables proper reply functionality
        company: data.company || 'Not provided',
        message: data.message,
        to_email: 'chrisyiurl@gmail.com'
      },
      '7afk1_TwYWBQdeVNR'       // Replace with your EmailJS public key
    );
    
    return { success: true };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'EmailJS service failed' 
    };
  }
};

// Option 2: Formspree Integration
// To use this option:
// 1. Sign up at https://formspree.io/
// 2. Create a new form
// 3. Replace the form ID below

export const sendEmailViaFormspree = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Formspree submission failed');
    }
  } catch (error) {
    console.error('Formspree error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Formspree service failed' 
    };
  }
};

// Option 3: Custom Backend API
// To use this option:
// 1. Create a backend endpoint (e.g., /api/contact)
// 2. Configure your server to send emails
// 3. Replace the endpoint URL below

export const sendEmailViaAPI = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'API submission failed');
    }
  } catch (error) {
    console.error('API error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'API service failed' 
    };
  }
};

// Option 4: Development/Simulation Mode
// This simulates email sending for development purposes

export const sendEmailSimulated = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Log the form data for development
    console.log('Contact form submission:', data);
    
    // Simulate occasional failures for testing error handling
    if (Math.random() < 0.1) {
      throw new Error('Email service temporarily unavailable');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Simulated email error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
};

// Main email service function
// Change this to use the desired email service
export const sendContactEmail = sendEmailViaEmailJS;

// For alternative options, uncomment one of these lines instead:
// export const sendContactEmail = sendEmailSimulated;
// export const sendContactEmail = sendEmailViaFormspree;
// export const sendContactEmail = sendEmailViaAPI;
