import Service, { ItemsProps } from "./Service";

const Services = () => {
  const landingPage: Array<ItemsProps> = [
    {
      name: "Criação do design moderno",
      included: true,
    },
    {
      name: "Responsividade",
      included: true,
    },
    {
      name: "Animação & Interação",
      included: true,
    },
    {
      name: "Performance Otimizada",
      included: true,
    },
    {
      name: "Integração Com BackEnd",
      included: false,
    },
    {
      name: "Utilização de SEO",
      included: false,
    },
  ];

  const saas: Array<ItemsProps> = [
    {
      name: "Criação do design moderno",
      included: true,
    },
    {
      name: "Responsividade",
      included: true,
    },
    {
      name: "Animação & Interação",
      included: true,
    },
    {
      name: "Performance Otimizada",
      included: true,
    },
    {
      name: "Integração Com BackEnd",
      included: true,
    },
    {
      name: "Sistema de Login/Logout",
      included: true,
    },
    {
      name: "Sistema de Pagamento",
      included: true,
    },
    {
      name: "Integração com APIs",
      included: true,
    },
    {
      name: "Utilização de SEO",
      included: false,
    },
  ];

  const bot: Array<ItemsProps> = [
    {
      name: "Integração com Whatsapp",
      included: true,
    },
    {
      name: "Totalmente Personalizado",
      included: true,
    },
    {
      name: "Performance Otimizada",
      included: true,
    },
    {
      name: "Integração com IA",
      included: false,
    },
    {
      name: "Integração com Instagram",
      included: false,
    },
  ];
  return (
    <section>
      <div className="mx-auto w-[90%] px-15 py-40">
        <h1 className="mb-16 text-4xl font-bold">Serviços</h1>
        <div className="flex w-full items-start justify-between">
          <Service
            name="Landing Page"
            price={800}
            desc="Criação de uma landing page estática. Com um design totalmente personalizado"
            items={landingPage}
          />
          <Service
            name="SaaS Básico"
            price={2500}
            desc="Criação de um sistema com design personalizado já integrado com pagamento."
            items={saas}
          />
          <Service
            name="BOT Chat"
            price={1300}
            desc="Criação de um bot para responder automáticamente mensagens no Whatsapp"
            items={bot}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
