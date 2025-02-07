import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-center mb-8 bg-white dark:bg-dark z-10 pt-5 pb-5">
      <section>
        <p className="text-2xl md:text-3xl font-bold select-none">
          &lt;<span className="text-ncls-purple">nicodes</span>&gt;
        </p>
      </section>
      <section className="flex gap-2 items-center">
        <LanguageSwitch />
        <a
          href="https://github.com/nclsgg/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nicolas Gomes Guadagno Github"
        >
          <AiFillGithub className="text-3xl hover:cursor-pointer hover:text-gray-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/nicolasguadagno/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nicolas Gomes Guadagno LinkedIn"
        >
          <AiFillLinkedin className="text-3xl hover:cursor-pointer hover:text-blue-400" />
        </a>
        <ThemeSwitch />
      </section>
    </header>
  );
}
