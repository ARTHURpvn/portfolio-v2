import { Button } from "@/components/ui/button";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const knowledge: Array<{ name: string; icon: string; desc: string }> = [
    {
      name: "Github",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "Node.Js",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "Python",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "Vite",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "Next",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "React",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "JavaScript",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "TypeScript",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "HTML",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "CSS",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "TailWind",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "PostgreSQL",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "MySQL",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "Prisma",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "PHP",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
    {
      name: "Shadcn UI",
      icon: "teste",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo aspernatur ipsam nisi sapiente?",
    },
  ];

  return (
    <div className="">
      <section className="mx-auto flex h-screen w-[80%] items-center justify-center">
        <Image
          src={"/parabolic-rectangle.svg"}
          fill
          alt="Parabola"
          className="absolute z-[-1] scale-150 opacity-75"
        />

        <div className="flex flex-col items-start gap-6 text-5xl">
          <h1 className="montserrat">
            <span className="text-primary font-bold">Transforme ideias em realidade digital! </span>
            Descubra como um desenvolvimento eficiente e inovador pode levar seu projeto ao próximo
            nível.
          </h1>
          <Button size={"lg"}> Entre em Contato </Button>
        </div>
      </section>

      <section className="bg-background py-76 shadow-[0_0_100px_120px_rgba(9,5,26,1)]">
        <div className="bg-card border-muted mx-auto flex h-120 w-[80%] rounded-md border p-6">
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
              <div className="card">
                <GithubIcon size={20} />
              </div>
              <div className="card">
                <LinkedinIcon size={20} />
              </div>
              <div className="card">
                <InstagramIcon size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card w-full p-30 px-15">
        <div className="mx-auto w-[80%]">
          <h1 className="text-4xl font-bold">Projetos</h1>

          <div className="mt-10 flex items-start gap-14">
            <div className="bg-background w-120">
              <Button
                className="text-primary border-primary h-16 w-full border-l-4 text-2xl font-semibold"
                variant={"ghost"}
              >
                Apex Studio
              </Button>
              <Button
                className="border-background h-16 w-full border-l-4 text-2xl font-semibold"
                variant={"ghost"}
              >
                DiacovMoney
              </Button>
              <Button
                className="border-background h-16 w-full border-l-4 text-2xl font-semibold"
                variant={"ghost"}
              >
                Bank System
              </Button>
            </div>

            <div className="montserrat w-[95%] space-y-4">
              <div className="flex justify-between">
                <p className="text-xl font-semibold">UI/UX Designer & Desenvolvedor FullStack</p>
                <p className="text-secondary">Fev 2025 - Mar 2025</p>
              </div>

              <p className="text-primary text-lg font-semibold"> Apex Studio </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi esse officia
                soluta consequatur sunt? Ullam, quis cumque enim culpa suscipit, natus, iusto totam
                repellat optio nesciunt beatae dignissimos animi reiciendis. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Commodi esse officia soluta consequatur sunt?
                Ullam, quis cumque enim culpa suscipit, natus, iusto totam repellat optio nesciunt
                beatae dignissimos animi reiciendis.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Commodi esse officia soluta consequatur sunt? Ullam, quis cumque
                enim culpa suscipit, natus, iusto totam repellat optio nesciunt beatae dignissimos
                animi reiciendis.
              </p>
              <div className="flex justify-end">
                <Button variant={"ghost"} className="text-primary mt-6">
                  Visualizar Projeto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background w-full p-30 px-15">
        <h1 className="mb-16 text-4xl font-bold">Conhecimento</h1>

        <div className="flex justify-between">
          <div className="grid w-170 grid-cols-7 gap-4">
            {knowledge.map((item) => {
              return (
                <Button key={item.name} asChild variant={"ghost"} className="size-20">
                  <div className="bg-card hover:border-primary border duration-300"></div>
                </Button>
              );
            })}
          </div>

          <div className="flex w-[55%] flex-col items-start">
            <h2 className="text-primary mb-6 text-2xl font-semibold">{knowledge[0].name}</h2>
            <p>{knowledge[0].desc}</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi deserunt ad quos
            illum saepe, ducimus fugiat? Id facere quae doloremque, maiores unde ea tempora, nemo
            aspernatur ipsam nisi sapiente?
          </div>
        </div>
      </section>
    </div>
  );
}
