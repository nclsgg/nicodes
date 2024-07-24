'use client';

import { useTranslations } from 'next-intl';
import './styles.css';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const t = useTranslations('contact');
  const onSubmit = handleSubmit(({ name, email, message }) => {
    console.log(name, email, message);
    reset();
  });

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col w-full gap-6">
        <div className="input-div">
          <input
            {...register('name', { required: true })}
            aria-invalid={errors.name ? 'true' : 'false'}
            type="text"
            placeholder={t('form.name')}
            className={`form-input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name?.type === 'required' && (
            <p className="input-error-span" role="alert">
              {t('form.error.name')}
            </p>
          )}
        </div>
        <div className="input-div">
          <input
            {...register('email', {
              required: true,
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
              {t('form.error.email')}
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
        <button className="p-2 bg-ncls-purple text-white rounded-md hover:opacity-80">
          {t('form.send')}
        </button>
      </form>
    </div>
  );
}
