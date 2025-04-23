import Image from "next/image";
import { Button } from "./ui/button";

const Initial = () => {
  return (
    <section className="mx-auto flex h-screen w-[85%] items-center justify-center">
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
  );
};

export default Initial;
