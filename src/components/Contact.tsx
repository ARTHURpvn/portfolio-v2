import { ContactForm } from "./form/ContactForm";

const Contact = () => {
  return (
    <section className="mx-auto w-[85%] lg:h-screen">
      <h1 className="text-4xl font-bold">Contato</h1>
      <div className="montserrat mt-20 flex flex-col items-center justify-center">
        <div className="w-[90%] space-y-4 lg:w-[65%]">
          <h2 className="text-2xl font-black lg:text-4xl">
            Tem uma ideia na cabeça ou um projeto em mente?
          </h2>
          <h3 className="text-lg font-light lg:text-3xl">
            Me mande uma mensagem, sem compromisso. Pode ser o primeiro passo para algo grande.
          </h3>
        </div>
      </div>

      <div className="mx-auto  lg:w-[65%] mb-20">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
