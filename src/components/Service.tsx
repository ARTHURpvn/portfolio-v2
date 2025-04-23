import { ArrowRightIcon, CheckIcon, PlusIcon } from "lucide-react";

export interface ItemsProps {
  name: string;
  included: boolean;
}

interface ServiceProps {
  name: string;
  price: number;
  desc: string;
  items: ItemsProps[];
}

const Service = ({ name, price, desc, items }: ServiceProps) => {
  return (
    <div className="bg-card w-120 space-y-4 p-8">
      <div className="space-y-2">
        <h2 className="text-primary text-3xl font-bold">{name}</h2>
        <h3 className="text-xl font-semibold">R$ {price},00</h3>
      </div>

      <p className="text-secondary">{desc}</p>

      <div className="space-y-4">
        {items.map((item) => (
          <div className="flex items-center gap-4" key={item.name}>
            <div
              className={`${item.included ? "bg-primary" : "bg-primary/20 text-primary border-primary border"} rounded-full p-[2px]`}
            >
              {item.included ? <CheckIcon size={20} /> : <PlusIcon size={20} />}
            </div>
            <p className="text-lg font-medium">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 flex items-center justify-end gap-2">
        <p>Entre em Contato</p>
        <ArrowRightIcon size={20} />
      </div>
    </div>
  );
};

export default Service;
