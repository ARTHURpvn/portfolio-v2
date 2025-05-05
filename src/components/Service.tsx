"use client";

import { ArrowRightIcon, CheckIcon, PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface ItemsProps {
  name: string;
  included: boolean;
}

const Service = ({ name2 }: { name2: string }) => {
  const { t } = useTranslation();

  const service = t(`services.items.${name2}`, { returnObjects: true }) as {
    title: string;
    price: string;
    desc: string;
    items: Array<ItemsProps>;
  };

  return (
    <div className="bg-card w-full space-y-4 p-6 md:w-120 md:p-8">
      <div className="space-y-2">
        <h2 className="text-primary text-2xl font-bold md:text-3xl">{service.title}</h2>
        <h3 className="text-lg font-semibold md:text-xl">R$ {service.price},00</h3>
      </div>

      <p className="text-secondary text-sm md:text-base">{service.desc}</p>

      <div className="space-y-4">
        {service.items.map((item) => (
          <div className="flex items-center gap-4" key={item.name}>
            <div
              className={`${item.included ? "bg-primary" : "bg-primary/20 text-primary border-primary border"} rounded-full p-[2px]`}
            >
              {item.included ? <CheckIcon size={20} /> : <PlusIcon size={20} />}
            </div>
            <p className="text-base font-medium md:text-lg">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-end gap-2 md:mt-20">
        <p className="text-sm md:text-base">{t('services.footer')}</p>
        <ArrowRightIcon size={20} />
      </div>
    </div>
  );
};

export default Service;
