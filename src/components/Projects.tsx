"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  link: string;
  technologies: string[];
  footer: string;
}

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const projects = (t("projects.items", { returnObjects: true }) || []) as ProjectItem[];

  if (!Array.isArray(projects)) {
    return null;
  }

  return (
    <section className="bg-card w-full p-20 px-4 md:p-30 md:px-15">
      <div className="mx-auto w-[90%]">
        <h1 className="text-3xl font-bold md:text-4xl">{t("projects.title")}</h1>

        <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:gap-14">
          <div className="bg-background w-full md:w-120">
            {projects.map((project, index) => (
              <Button
                key={index}
                className={`border-background ${selectedProject === index && "border-primary"} h-16 w-full border-l-4 text-xl font-semibold md:text-2xl`}
                variant={"project"}
                onClick={() => setSelectedProject(index)}
              >
                {project.title}
              </Button>
            ))}
          </div>

          <div className="montserrat w-full space-y-4 md:w-[95%]">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <p className="text-lg font-semibold md:text-xl">
                {projects[selectedProject].subtitle}
              </p>

              <p>{projects[selectedProject].date}</p>
            </div>

            <p className="text-primary text-base font-semibold md:text-lg">
              {projects[selectedProject].title}
            </p>
            <p className="text-sm md:text-base">{projects[selectedProject].description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {projects[selectedProject].technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end">
              <Button variant={"project"} className="text-primary mt-6">
                <Link href={projects[selectedProject].link} target="_blank">
                  {t("projects.footer")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
