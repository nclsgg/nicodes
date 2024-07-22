import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <section>
        <p className="text-3xl font-bold select-none cursor-pointer">&lt;<span className="text-ncls-purple">nicodes</span>&gt;</p>
      </section>
      <section className="flex gap-2 items-center">
        <a href="https://github.com/nclsgg/" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="text-3xl hover:cursor-pointer"/>
        </a>
        <a href="https://www.linkedin.com/in/nicolasguadagno/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="text-3xl hover:cursor-pointer"/>
        </a>
        <ThemeSwitch />
      </section>
    </header>
  )
}
