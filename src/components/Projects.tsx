"use client";

import { Button } from "./ui/button";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const projectsArray = [
    {
      name: "Apex Studio",
      date: "Fev 2025 - Mar 2025",
      title: "UI/UX Designer & Desenvolvedor FullStack",
      desc: `Landing page desenvolvida para apresentar o jogo Apex Point, um simulador de corrida com foco em realismo e personalização. 
      O projeto destaca os diferenciais do game com um layout moderno, escuro e dinâmico, otimizando a navegação tanto para desktop quanto mobile.`,
    },
    {
      name: "DiacovMoney",
      date: "Mar 2025 - Abr 2025",
      title: "UI/UX Designer & Desenvolvedor FrontEnd",
      desc: `Página de captura criada para promover a mentoria financeira do Diacov, focada em ensinar como faturar R$ 5.000 mensais com 
      produtos digitais no nicho HOT. A estrutura foi desenhada para conversão: carregamento rápido, copy direta e botão de ação sempre visível.`,
    },
    {
      name: "Finance IA",
      date: "Nov 2024 - Nov 2024",
      title: "Desenvolvedor FullStack",
      desc: `Aplicação SaaS criada para ajudar usuários a gerenciarem suas finanças de forma automatizada. Com autenticação de usuários, 
      dashboard intuitivo para registrar gastos e uma IA integrada para gerar relatórios personalizados da saúde financeira do usuário, 
      a plataforma também conta com sistema de planos pagos para liberar o acesso à IA. O projeto proporcionou aos usuários uma visualização clara 
      e estratégica de suas finanças.`,
    },
  ];

  return (
    <section className="bg-card w-full p-20 px-4 md:p-30 md:px-15">
      <div className="mx-auto w-[90%]">
        <h1 className="text-3xl font-bold md:text-4xl">Projetos</h1>

        <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:gap-14">
          <div className="bg-background w-full md:w-120">
            {projectsArray.map((project, index) => (
              <Button
                key={index}
                className={`border-background ${selectedProject === index && "border-primary"} h-16 w-full border-l-4 text-xl font-semibold md:text-2xl`}
                variant={"project"}
                onClick={() => setSelectedProject(index)}
              >
                {project.name}
              </Button>
            ))}
          </div>

          <div className="montserrat w-full space-y-4 md:w-[95%]">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <p className="text-lg font-semibold md:text-xl">
                {projectsArray[selectedProject].title}
              </p>
              <p className="text-secondary text-sm md:text-base">
                {projectsArray[selectedProject].date}
              </p>
            </div>

            <p className="text-primary text-base font-semibold md:text-lg">
              {projectsArray[selectedProject].name}
            </p>
            <p className="text-sm md:text-base">{projectsArray[selectedProject].desc}</p>
            <div className="flex justify-end">
              <Button variant={"project"} className="text-primary mt-6">
                Visualizar Projeto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
