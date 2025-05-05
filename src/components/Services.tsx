"use client";

import { useTranslation } from "react-i18next";
import Service from "./Service";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="mx-auto w-[90%] px-4 py-20 md:px-15 md:py-40">
        <h1 className="mb-8 text-3xl font-bold md:mb-16 md:text-4xl">{t('services.title')}</h1>
        <div className="flex w-full flex-col items-start gap-6 md:flex-row md:justify-between">
          <Service name2="landing_page" />
          <Service name2="saas_basic" />
          <Service name2="bot_chat" />
        </div>
      </div>
    </section>
  );
};

export default Services;
