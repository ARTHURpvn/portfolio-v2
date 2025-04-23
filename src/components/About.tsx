import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-background py-76 shadow-[0_0_100px_120px_rgba(9,5,26,1)]">
      <div className="bg-card border-muted mx-auto flex h-120 w-[85%] rounded-md border p-6">
        <div className="bg-primary relative flex w-120 shrink-0 rounded-md"></div>
        <div className="mx-8 flex flex-col justify-between">
          <div>
            <p className="text-primary text-lg">Sobre Mim</p>
            <p className="mt-6 text-4xl font-bold">Arthur Pavan</p>
            <p className="montserrat text-secondary text-lg">
              Desenvolvedor FullStack & Engenheiro de Software
            </p>
          </div>

          <p className="montserrat text-secondary">
            Graduando Engenharia de Software na uniFACEF e concluinte do curso técnico em
            Informática para Internet pela Etec. Tenho me especializado em desenvolvimento
            full-stack com foco em React, TypeScript e Python. Já atuei em projetos freelancers,
            desenvolvendo interfaces modernas, responsivas e voltadas à experiência do usuário.
            Busco constantemente novos aprendizados e desafios que me permitam aplicar e expandir
            meus conhecimentos. Estou aberto a oportunidades onde eu possa contribuir com
            criatividade, comprometimento e uma mentalidade voltada para a evolução contínua.
          </p>

          <div className="flex gap-4">
            <Link href={"https://github.com/ARTHURpvn"} target="_blank">
              <div className="card">
                <GithubIcon size={20} />
              </div>
            </Link>

            <Link href={"https://www.linkedin.com/in/arthurpvn/"} target="_blank">
              <div className="card">
                <LinkedinIcon size={20} />
              </div>
            </Link>

            <Link href={"https://www.instagram.com/dev_arthurpvn/"} target="_blank">
              <div className="card">
                <InstagramIcon size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
