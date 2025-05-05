"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface KnowledgeProps {
  name: string;
  icon: string;
  desc: string;
}

const Knowledge = () => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState<number>(0);
  const knowledge: Array<KnowledgeProps> = t("knowledge.items", {returnObjects: true,}) as Array<KnowledgeProps>;

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
