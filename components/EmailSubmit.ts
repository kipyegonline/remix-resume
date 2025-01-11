// Types for the response and payload
interface EmailResponse {
    success: boolean;
    message?: string;
  }
  
  interface EmailPayload {
    name?: string;
    email: string;
    message: string;
    [key: string]: unknown;
  }
  
  // Configuration object
  const CONFIG = {
    BASE_URL: 'https://formsubmit.co/ajax',
    EMAIL: 'vinnykipx@gmail.com',
    HEADERS: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  } as const;
  
  /**
   * Submits an email through FormSubmit.co service
   * @param payload - The email data to be sent
   * @returns Promise<EmailResponse | null>
   */
  const submitEmail = async (payload: EmailPayload): Promise<EmailResponse | null> => {
    try {
      const url = `${CONFIG.BASE_URL}/${CONFIG.EMAIL}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: CONFIG.HEADERS,
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json() as EmailResponse;
      
      if (!data.success) {
        throw new Error(data.message || 'Email submission failed');
      }
  
      return data;
      
    } catch (error) {
      console.error('Email submission error:', error);
      return null;
    }
  };
  
  export default submitEmail;