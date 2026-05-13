/**
 * Service to handle form submissions to Google Forms
 * 
 * Setup Instructions:
 * 1. Create a Google Form at https://forms.google.com
 * 2. Add fields: Name, Email, Subject, Message
 * 3. Get the Form ID from the URL: forms.google.com/u/0/d/{FORM_ID}/edit
 * 4. Copy the field IDs from form responses or inspect network requests
 * 5. Add to .env: VITE_GOOGLE_FORM_ID and field IDs
 */

const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL;
const GOOGLE_FORM_ID = import.meta.env.VITE_GOOGLE_FORM_ID;

// Field IDs - Replace these with your actual Google Form field IDs
const FIELD_IDS = {
  name: import.meta.env.VITE_FORM_FIELD_NAME || 'entry.1234567890',
  email: import.meta.env.VITE_FORM_FIELD_EMAIL || 'entry.0987654321',
  subject: import.meta.env.VITE_FORM_FIELD_SUBJECT || 'entry.1111111111',
  message: import.meta.env.VITE_FORM_FIELD_MESSAGE || 'entry.2222222222'
};

/**
 * Submit form data to Google Forms
 * @param {Object} formData - Form data object
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.subject - Message subject
 * @param {string} formData.message - Message content
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const submitToGoogleForms = async (formData) => {
  try {
    if (!GOOGLE_FORM_URL || !GOOGLE_FORM_ID) {
      throw new Error('Google Form configuration is missing. Please check your environment variables.');
    }

    // Create FormData object for submission
    const form = new FormData();
    form.append(FIELD_IDS.name, formData.name);
    form.append(FIELD_IDS.email, formData.email);
    form.append(FIELD_IDS.subject, formData.subject);
    form.append(FIELD_IDS.message, formData.message);

    // Submit to Google Forms
    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      body: form,
      mode: 'no-cors' // Google Forms requires no-cors
    });

    // Note: Due to no-cors policy, we can't verify the response status
    // But the submission should succeed if the form is properly configured
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: error.message || 'Failed to send your message. Please try again later.'
    };
  }
};

/**
 * Alternative: Submit to Email Service (Emailjs, Formspree, etc.)
 * You can use this if you prefer email notification
 */
export const submitToEmailService = async (formData) => {
  try {
    const response = await fetch(import.meta.env.VITE_EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    };
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: 'Failed to send your message. Please try again later.'
    };
  }
};
