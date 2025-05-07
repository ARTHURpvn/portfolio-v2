"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { useScrollTo } from "@/hooks/useScrollTo";
import { motion } from "framer-motion";

const Initial = () => {
  const { t } = useTranslation();
  const scrollTo = useScrollTo();

  return (
    <section className="relative mx-auto flex min-h-screen items-center justify-center overflow-hidden px-4 md:px-6">
      <Image
        src={"/parabolic-rectangle.svg"}
        fill
        alt="Parabola"
        className="absolute z-[-1] scale-250 opacity-75 lg:scale-150"
      />

      <div className="flex w-[85%] flex-col items-start gap-6 text-3xl md:text-4xl lg:text-5xl">
        <motion.div
          className="w-[90%] space-y-4 lg:w-[65%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="montserrat">
            <span className="text-primary font-bold">{t("initial.title")} </span>
            {t("initial.subtitle")}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button onClick={() => scrollTo("contact")} size={"lg"} className="max-md:w-full">
              {t("initial.contact")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Initial;
