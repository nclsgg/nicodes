'use client';

import { useTranslations } from 'next-intl';
import './styles.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = useTranslations('contact');
  const onSubmit = handleSubmit(async ({ name, email, subject, message }) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        reset();
        toast.success(t('form.response.success'));
      } else {
        toast.error(t('form.response.error'));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }

    // reset();
  });

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col w-full gap-6">
        <div className="input-div">
          <input
            {...register('name', {
              required: t('form.error.name.required'),
              maxLength: {
                value: 60,
                message: t('form.error.name.maxLength'),
              },
            })}
            aria-invalid={errors.name ? 'true' : 'false'}
            type="text"
            placeholder={t('form.name')}
            className={`form-input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && (
            <p className="input-error-span" role="alert">
              {String(errors.name.message)}
            </p>
          )}
        </div>
        <div className="input-div">
          <input
            {...register('email', {
              required: t('form.error.email'),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t('form.error.email'),
              },
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
            placeholder={t('form.email')}
            className={`form-input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && (
            <p className="input-error-span" role="alert">
              {String(errors.email.message)}
            </p>
          )}
        </div>
        <div className="input-div">
          <input
            {...register('subject', {
              required: t('form.error.subject.required'),
              maxLength: {
                value: 60,
                message: t('form.error.subject.maxLength'),
              },
            })}
            aria-invalid={errors.subject ? 'true' : 'false'}
            type="text"
            placeholder={t('form.subject')}
            className={`form-input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.subject && (
            <p className="input-error-span" role="alert">
              {String(errors.subject.message)}
            </p>
          )}
        </div>
        <div className="input-div">
          <textarea
            {...register('message', { required: true })}
            aria-invalid={errors.message ? 'true' : 'false'}
            placeholder={t('form.message')}
            className={`form-input ${errors.message ? 'input-error' : ''}`}
          />
          {errors.message?.type === 'required' && (
            <p className="input-error-span" role="alert">
              {t('form.error.message')}
            </p>
          )}
        </div>
        <button
          className="p-2 bg-ncls-purple text-white rounded-md hover:opacity-80"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              {t('form.sending')}
            </div>
          ) : (
            t('form.send')
          )}
        </button>
      </form>
    </div>
  );
}
