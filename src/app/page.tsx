import About from "@/components/About";
import Contact from "@/components/Contact";
import Initial from "@/components/Initial";
import Knowledge from "@/components/Knowledge";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <Initial />

      <About />

      <Projects />

      <Knowledge />

      <Services />

      <Contact />
    </div>
  );
}
