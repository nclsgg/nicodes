import { useTranslations } from 'next-intl';
import ContactForm from './Form';

export default function ContactMe() {
  const t = useTranslations('contact');

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10">
      <div className="contact-me flex flex-col lg:w-1/3">
        <h2 className="sectionTitle font-bold text-ncls-purple">
          {t('title')}
        </h2>
        <p className="">{t('content')}</p>
      </div>
      <div className="flex w-full lg:w-2/4">
        <ContactForm />
      </div>
    </div>
  );
}
