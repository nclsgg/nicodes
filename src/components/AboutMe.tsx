import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("aboutMe");

  return (
    <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
      <section className="flex flex-col gap-5 w-2/3 md:w-full">
        <div className="about-me__development">
          <h2 className="sectionTitle font-bold text-ncls-purple">{t('development.title')}</h2>
          <p className="">{t('development.content')}</p>
        </div>
        <div className="about-me__Design">
          <h2 className="sectionTitle font-bold text-ncls-purple">{t('design.title')}</h2>
          <p className="">{t('design.content')}</p>
        </div>
        <div className="about-me__communication">
          <h2 className="sectionTitle font-bold text-ncls-purple">{t('communication.title')}</h2>
          <p className="">{t('communication.content')}</p>
        </div>
      </section>
    </div>
  )
}