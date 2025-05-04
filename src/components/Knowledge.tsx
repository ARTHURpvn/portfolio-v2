"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

interface KnowledgeProps {
  name: string;
  icon: string;
  desc: string;
}

const Knowledge = () => {
  const [selected, setSelected] = useState<number>(0);
  const knowledge: Array<KnowledgeProps> = [
    {
      name: "Git",
      icon: "git_logo.png",
      desc: "Sistema de controle de versões amplamente utilizado para gerenciar código-fonte em projetos de software, permitindo colaboração e histórico de alterações.",
    },
    {
      name: "Node.Js",
      icon: "node_logo.png",
      desc: "Ambiente de execução JavaScript no lado do servidor, ideal para construir APIs, sistemas em tempo real e aplicações escaláveis.",
    },
    {
      name: "Python",
      icon: "python_logo.png",
      desc: "Linguagem de programação versátil usada em ciência de dados, automação, backend, inteligência artificial e desenvolvimento web.",
    },
    {
      name: "Vite",
      icon: "vite_logo.png",
      desc: "Ferramenta de build frontend ultrarrápida, usada principalmente com frameworks como Vue, React e Svelte para otimizar o desenvolvimento web.",
    },
    {
      name: "Next",
      icon: "next_logo.png",
      desc: "Framework React para aplicações web com renderização server-side, rotas automáticas, otimização de performance e SEO.",
    },
    {
      name: "React",
      icon: "react_logo.png",
      desc: "Biblioteca JavaScript para construção de interfaces de usuário modernas e reativas com componentes reutilizáveis.",
    },
    {
      name: "JavaScript",
      icon: "javascript_logo.png",
      desc: "Linguagem de programação essencial para desenvolvimento web, utilizada para tornar sites interativos e dinâmicos no navegador.",
    },
    {
      name: "TypeScript",
      icon: "typescript_logo.png",
      desc: "Superset do JavaScript que adiciona tipagem estática, melhorando a escalabilidade e a manutenção de grandes aplicações.",
    },
    {
      name: "HTML",
      icon: "html_logo.png",
      desc: "Linguagem de marcação usada para estruturar o conteúdo das páginas web, definindo títulos, parágrafos, links, imagens e mais.",
    },
    {
      name: "CSS",
      icon: "css_logo.png",
      desc: "Linguagem de estilo usada para definir a aparência visual de páginas HTML, incluindo cores, layouts, animações e responsividade.",
    },
    {
      name: "TailWind",
      icon: "tailwind_logo.png",
      desc: "Framework CSS utilitário que permite construir interfaces modernas e responsivas com classes pré-definidas e customizáveis.",
    },
    {
      name: "PostgreSQL",
      icon: "postgres_logo.png",
      desc: "Sistema de gerenciamento de banco de dados relacional, poderoso e open-source, conhecido por sua robustez e suporte a consultas complexas.",
    },
    {
      name: "MySQL",
      icon: "mysql_logo.png",
      desc: "Sistema de banco de dados relacional amplamente utilizado em aplicações web para armazenar e gerenciar dados estruturados.",
    },
    {
      name: "MongoDB",
      icon: "mongo_logo.png",
      desc: "Banco de dados NoSQL orientado a documentos, ideal para aplicações que exigem flexibilidade e alta escalabilidade de dados.",
    },
    {
      name: "Prisma",
      icon: "prisma_logo.png",
      desc: "ORM moderno para Node.js e TypeScript que facilita o acesso a bancos de dados com tipagem forte e consultas simplificadas.",
    },
    {
      name: "PHP",
      icon: "php_logo.png",
      desc: "Linguagem de programação server-side usada tradicionalmente no desenvolvimento de sites dinâmicos e sistemas web com banco de dados.",
    },
    {
      name: "JSON",
      icon: "json_logo.png",
      desc: "Formato leve de troca de dados, amplamente utilizado em APIs e armazenamento de dados estruturados em aplicações web.",
    },
    {
      name: "Figma",
      icon: "figma_logo.png",
      desc: "Ferramenta de design de interfaces colaborativa baseada na web, usada para criar protótipos, wireframes e layouts UI/UX.",
    },
  ];

  return (
    <section className="bg-background w-full">
      <div className="mx-auto w-[90%] p-20 px-4 md:p-30 md:px-15">
        <h1 className="mb-8 text-3xl font-bold md:mb-16 md:text-4xl">Conhecimento</h1>

        <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
          <div className="grid w-full grid-cols-4 gap-4 md:w-[50%] md:grid-cols-8 md:gap-y-4">
            {knowledge.map((item, index) => {
              return (
                <Button
                  key={index}
                  asChild
                  variant={"ghost"}
                  className="size-16 md:size-18"
                  onClick={() => setSelected(index)}
                >
                  <div
                    className={`bg-card hover:border-primary ${selected === index && "border-primary"} relative border duration-300`}
                  >
                    <Image
                      src={`/tecnologia/${item.icon}`}
                      width={100}
                      height={100}
                      alt={item.name}
                      className="h-full w-full object-contain md:p-2"
                    />
                  </div>
                </Button>
              );
            })}
          </div>

          <div className="flex w-full flex-col items-start md:ml-10 md:w-[55%]">
            <h2 className="text-primary mb-4 text-xl font-semibold md:mb-6 md:text-2xl">
              {knowledge[selected].name}
            </h2>
            <p className="text-sm md:text-base">{knowledge[selected].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
