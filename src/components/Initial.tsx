'use client';

import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const Initial = () => {
  const { t } = useTranslation();

  return (
    <section className="relative mx-auto flex min-h-screen items-center justify-center overflow-hidden px-4 md:px-6">
      <Image
        src={"/parabolic-rectangle.svg"}
        fill
        alt="Parabola"
        className="absolute z-[-1] scale-250 opacity-75 lg:scale-150"
      />

      <div className="flex w-[85%] flex-col items-start gap-6 text-3xl md:text-4xl lg:text-5xl">
        <h1 className="montserrat">
          <span className="text-primary font-bold">{t('initial.title')} </span>
          {t('initial.subtitle')}
        </h1>
        <Button size={"lg"} className="max-md:w-full">
          {t('initial.contact')}
        </Button>
      </div>
    </section>
  );
};

export default Initial;
