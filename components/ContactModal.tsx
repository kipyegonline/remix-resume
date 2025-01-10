import React,{useState} from 'react'
import { Loader,XCircle as x, XCircle, } from 'lucide-react';
// Add interfaces
interface FormData {
    name: string;
    email: string;
    message: string;
  }
  
  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
export default function ContactModal({isOpen,onClose}:ModalProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isSuccess, setIsSuccess] = useState(false);
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Close modal after success
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      };
    
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <XCircle size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h2>
            
            {isSuccess ? (
              <div className="text-green-600 text-center py-8">
                Message sent successfully! Thank you for reaching out.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor='name'>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    required
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                  <><span className='mr-4'>Submitting</span> <Loader className="animate-spin" size={20} /> </> 
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>)
}
