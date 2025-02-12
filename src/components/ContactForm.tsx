import React, { useState, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  onClose?: () => void;
}

// Initialize EmailJS
emailjs.init("AQ-Xn8iGM5XTMOyr6");

export function ContactForm({ onClose }: ContactFormProps) {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('user_name') as string,
        email: formData.get('user_email') as string,
        phone: formData.get('user_phone') as string,
        country: formData.get('user_country') as string,
        subject: formData.get('user_subject') as string,
        message: formData.get('message') as string,
        preferred_date: formData.get('preferred_date') as string,
      };

      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([data]);

      if (supabaseError) throw supabaseError;

      // Send email using EmailJS
      if (formRef.current) {
        const result = await emailjs.sendForm(
          'service_96vjxna',
          'template_2k2almr',
          formRef.current
        );

        if (result.status !== 200) {
          throw new Error('Failed to send email');
        }
      }

      setShowSuccess(true);
      e.currentTarget.reset();
      
      // Close the form after showing success message
      setTimeout(() => {
        if (onClose) onClose();
      }, 2000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError(t('errorMessage'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {showSuccess ? (
        <div className="text-center py-16 px-4">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
            >
              <circle
                className="opacity-25"
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M16.707 22.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l12-12a1 1 0 10-1.414-1.414L22 27.586l-5.293-5.293z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {t('successMessage')}
          </h3>
          <p className="text-gray-600">
            {t('successDescription')}
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('contactUs')}</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
                  {t('name')}
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
                  {t('email')}
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  id="user_phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="user_country" className="block text-sm font-medium text-gray-700">
                  {t('country')}
                </label>
                <input
                  type="text"
                  name="user_country"
                  id="user_country"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700">
                  {t('preferredDate')}
                </label>
                <input
                  type="date"
                  name="preferred_date"
                  id="preferred_date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="user_subject" className="block text-sm font-medium text-gray-700">
                  {t('subject')}
                </label>
                <input
                  type="text"
                  name="user_subject"
                  id="user_subject"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t('message')}
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? t('sending') : t('send')}
            </button>
          </form>
        </>
      )}
    </div>
  );
}