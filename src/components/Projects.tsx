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
      desc: `Desenvolvimento Full-Stack e Integração de API: Desenvolvi um site completo para a APEX STUDIO, com uma página inicial que exibe os jogos da empresa e as notícias recentes. Integrei APIs RESTful para o gerenciamento dinâmico de conteúdo.
            Sistema de Gerenciamento de Notícias: Implementei um editor avançado com TinyMCE para que administradores possam criar, editar e formatar notícias com imagens. Desenvolvi um painel administrativo com uma interface em tabela para gerenciar o conteúdo de forma eficiente.
            Desempenho e Responsividade: Assegurei alta performance por meio de lazy loading, caching e otimização de imagens. Desenvolvi uma interface totalmente responsiva e acessível, seguindo as melhores práticas de mobile-first e ARIA.
            Arquitetura Escalável e Segura: Utilizei PostgreSQL para um armazenamento de dados estruturado e escalável. Apliquei as melhores práticas de segurança para prevenir ataques XSS, CSRF e SQL Injection.`,
    },
    {
      name: "DiacovMoney",
      date: "Fev 2025 - Mar 2025",
      title: "UI/UX Designer & Desenvolvedor FullStack",
      desc: `Desenvolvimento Full-Stack e Integração de API: Desenvolvi um site completo para a APEX STUDIO, com uma página inicial que exibe os jogos da empresa e as notícias recentes. Integrei APIs RESTful para o gerenciamento dinâmico de conteúdo.
            Sistema de Gerenciamento de Notícias: Implementei um editor avançado com TinyMCE para que administradores possam criar, editar e formatar notícias com imagens. Desenvolvi um painel administrativo com uma interface em tabela para gerenciar o conteúdo de forma eficiente.
            Desempenho e Responsividade: Assegurei alta performance por meio de lazy loading, caching e otimização de imagens. Desenvolvi uma interface totalmente responsiva e acessível, seguindo as melhores práticas de mobile-first e ARIA.
            Arquitetura Escalável e Segura: Utilizei PostgreSQL para um armazenamento de dados estruturado e escalável. Apliquei as melhores práticas de segurança para prevenir ataques XSS, CSRF e SQL Injection.`,
    },
  ];

  return (
    <section className="bg-card w-full p-30 px-15">
      <div className="mx-auto w-[90%]">
        <h1 className="text-4xl font-bold">Projetos</h1>

        <div className="mt-10 flex items-start gap-14">
          <div className="bg-background w-120">
            {projectsArray.map((project, index) => (
              <Button
                key={index}
                className={`border-background ${selectedProject === index && "border-primary"} h-16 w-full border-l-4 text-2xl font-semibold`}
                variant={"ghost"}
                onClick={() => setSelectedProject(index)}
              >
                {project.name}
              </Button>
            ))}
          </div>

          <div className="montserrat w-[95%] space-y-4">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">{projectsArray[selectedProject].title}</p>
              <p className="text-secondary">{projectsArray[selectedProject].date}</p>
            </div>

            <p className="text-primary text-lg font-semibold">
              {" "}
              {projectsArray[selectedProject].name}
            </p>
            <p>{projectsArray[selectedProject].desc}</p>
            <div className="flex justify-end">
              <Button variant={"ghost"} className="text-primary mt-6">
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
