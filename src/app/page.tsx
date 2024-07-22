import AboutMe from "@/components/AboutMe";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-0">
      <Resume />
      <AboutMe />
    </main>
  );
}
