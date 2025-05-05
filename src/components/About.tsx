"use client";

import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-background py-20 shadow-[0_0_100px_120px_rgba(9,5,26,1)] md:py-40">
      <div className="bg-card border-muted mx-auto flex h-auto w-[85%] flex-col rounded-md border p-6 md:h-120 md:flex-row">
        <div className="bg-primary mb-6 h-40 w-full rounded-md md:mb-0 md:h-auto md:w-120 md:shrink-0"></div>{" "}
        {/*  imagem */}
        <div className="mx-4 flex flex-col justify-between gap-6 md:mx-8">
          <div>
            <p className="text-primary text-md">{t("about.title")}</p>
            <p className="mt-6 text-2xl font-bold md:text-4xl">Arthur Pavan</p>
            <p className="montserrat text-secondary text-sm md:text-lg">
              {t("about.subtitle")}
            </p>
          </div>

          <p className="montserrat text-secondary text-xs md:text-base">
            {t("about.desc")}
          </p>

          <div className="flex max-md:justify-between md:gap-4">
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
