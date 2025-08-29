"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        header: {
          contact: "Contact Us",
        },
        initial: {
          title: "Turn Ideas into Digital Reality!",
          subtitle:
            "Discover how efficient and innovative development can take your project to the next level.",
          contact: "Get in Touch",
        },
        about: {
          title: "About Me",
          subtitle: "FullStack Developer & Software Engineer",
          desc: "Software Engineering student at uniFACEF and graduate in Technical Informatics for the Internet from Etec. I specialize in full-stack development, focusing on React, TypeScript, and Python. I have worked on freelance projects, creating modern, responsive interfaces focused on user experience. I constantly seek new learning opportunities and challenges to apply and expand my knowledge. I'm open to opportunities where I can contribute creativity, commitment, and a mindset focused on continuous growth.",
        },
        knowledge: {
          title: "Skills",
          items: [
            {
              name: "Git",
              icon: "git_logo.png",
              desc: "Version control system widely used for managing source code in software projects, enabling collaboration and change history.",
            },
            {
              name: "Node.Js",
              icon: "node_logo.png",
              desc: "JavaScript runtime on the server-side, ideal for building APIs, real-time systems, and scalable applications.",
            },
            {
              name: "Python",
              icon: "python_logo.png",
              desc: "Versatile programming language used in data science, automation, backend, artificial intelligence, and web development.",
            },
            {
              name: "Vite",
              icon: "vite_logo.png",
              desc: "Super-fast frontend build tool, mainly used with frameworks like Vue, React, and Svelte to optimize web development.",
            },
            {
              name: "Next",
              icon: "next_logo.png",
              desc: "React framework for web applications with server-side rendering, automatic routing, performance optimization, and SEO.",
            },
            {
              name: "React",
              icon: "react_logo.png",
              desc: "JavaScript library for building modern, reactive user interfaces with reusable components.",
            },
            {
              name: "i18n",
              icon: "i18n_logo.png",
              desc: "Library for internationalizing web applications, allowing translation and customization of texts and user interfaces in different languages.",
            },
            {
              name: "JavaScript",
              icon: "javascript_logo.png",
              desc: "Essential programming language for web development, used to make websites interactive and dynamic in the browser.",
            },
            {
              name: "TypeScript",
              icon: "typescript_logo.png",
              desc: "A superset of JavaScript that adds static typing, improving scalability and maintainability of large applications.",
            },
            {
              name: "HTML",
              icon: "html_logo.png",
              desc: "Markup language used to structure the content of web pages, defining titles, paragraphs, links, images, and more.",
            },
            {
              name: "CSS",
              icon: "css_logo.png",
              desc: "Styling language used to define the visual appearance of HTML pages, including colors, layouts, animations, and responsiveness.",
            },
            {
              name: "TailWind",
              icon: "tailwind_logo.png",
              desc: "Utility-first CSS framework that allows building modern, responsive interfaces with predefined and customizable classes.",
            },
            {
              name: "PostgreSQL",
              icon: "postgres_logo.png",
              desc: "Powerful open-source relational database management system known for its robustness and support for complex queries.",
            },
            {
              name: "MySQL",
              icon: "mysql_logo.png",
              desc: "Relational database system widely used in web applications for storing and managing structured data.",
            },
            {
              name: "MongoDB",
              icon: "mongo_logo.png",
              desc: "NoSQL database system oriented to documents, ideal for applications requiring flexibility and high data scalability.",
            },
            {
              name: "Prisma",
              icon: "prisma_logo.png",
              desc: "Modern ORM for Node.js and TypeScript that simplifies database access with strong typing and simplified queries.",
            },
            {
              name: "PHP",
              icon: "php_logo.png",
              desc: "Server-side programming language traditionally used in the development of dynamic websites and web systems with databases.",
            },
            {
              name: "JSON",
              icon: "json_logo.png",
              desc: "Lightweight data exchange format, widely used in APIs and structured data storage in web applications.",
            },
            {
              name: "Figma",
              icon: "figma_logo.png",
              desc: "Web-based collaborative interface design tool used to create prototypes, wireframes, and UI/UX layouts.",
            },
          ],
        },
        projects: {
          title: "Projects",
          footer: "View Project",
          items: [
            {
              title: "Apex Studio",
              subtitle: "UI/UX Designer & FullStack Developer",
              date: "Feb 2025 - Mar 2025",
              description:
                "Landing page developed to present the game Apex Point, a racing simulator with a focus on realism and customization. The project highlights the game's features with a modern, dark, and dynamic layout, optimizing navigation for both desktop and mobile.",
              technologies: [
                "React",
                "Next.js",
                "TypeScript",
                "Prisma",
                "PostgreSQL",
                "Tailwind",
                "Figma",
                "i18n",
                "Responsiveness",
              ],
              link: "https://apexstudio.fr/",
            },
            {
              title: "DiacovMoney",
              subtitle: "UI/UX Designer & FrontEnd Developer",
              date: "Mar 2025 - Apr 2025",
              description:
                "Landing page created to promote Diacov's financial mentorship, focused on teaching how to earn R$ 5,000 monthly with digital products in the HOT niche. The structure was designed for conversion: fast loading, direct copy, and a constant visible call-to-action button.",
              technologies: [
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind",
                "Figma",
                "Responsiveness",
              ],
              link: "https://diacovmoney.com",
            },
            {
              title: "studAI",
              subtitle: "UI/UX Designer & FullStack Developer",
              date: "Jun 2025 - Present",
              description:
                "System developed to create notes and simplify academic life, allowing the creation of subjects and tasks for each subject. I used React for the frontend and Python to build the API.",
              technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "React", "Tailwind", "Zustand", "Figma", "Python"],
              link: "https://frontend-app-gubu.onrender.com",

            },
          ],
        },
        services: {
          title: "Services",
          footer: "Get in Touch",
          items: {
            landing_page: {
              title: "Landing Page",
              price: "800",
              desc: "Creation of a static landing page. With a fully customized design.",
              link: "https://wa.link/u57xj8",
              items: [
                {
                  name: "Creation of modern design",
                  included: true,
                },
                {
                  name: "Responsiveness",
                  included: true,
                },
                {
                  name: "Animation & Interaction",
                  included: true,
                },
                {
                  name: "Optimized Performance",
                  included: true,
                },
                {
                  name: "Backend Integration",
                  included: false,
                },
                {
                  name: "SEO Optimization",
                  included: false,
                },
              ],
            },
            saas_basic: {
              title: "Basic SaaS",
              price: "2,500",
              desc: "Creation of a system with a customized design already integrated with payment.",
              link: "https://wa.link/qp3pg3",
              items: [
                {
                  name: "Creation of modern design",
                  included: true,
                },
                {
                  name: "Responsiveness",
                  included: true,
                },
                {
                  name: "Animation & Interaction",
                  included: true,
                },
                {
                  name: "Optimized Performance",
                  included: true,
                },
                {
                  name: "Backend Integration",
                  included: true,
                },
                {
                  name: "Login/Logout System",
                  included: true,
                },
                {
                  name: "Payment System",
                  included: true,
                },
                {
                  name: "API Integration",
                  included: true,
                },
                {
                  name: "SEO Optimization",
                  included: false,
                },
              ],
            },
            bot_chat: {
              title: "Chat BOT",
              price: "1,300",
              desc: "Creation of a bot to automatically respond to messages on WhatsApp.",
              link: "https://wa.link/gsd0ty",
              items: [
                {
                  name: "WhatsApp Integration",
                  included: true,
                },
                {
                  name: "Fully Customized",
                  included: true,
                },
                {
                  name: "Optimized Performance",
                  included: true,
                },
                {
                  name: "AI Integration",
                  included: false,
                },
                {
                  name: "Instagram Integration",
                  included: false,
                },
              ],
            },
          },
        },
        contact: {
          title: "Contact Us",
          subtitle: "Have an idea in mind or a project in progress?",
          description:
            "Send me a message, no commitment. It could be the first step towards something great.",
          form: {
            name_label: "Full Name",
            name_placeholder: "Your full name",
            email_label: "Email",
            email_placeholder: "your@email.com",
            whatsapp_label: "WhatsApp",
            whatsapp_placeholder: "(00) 00000-0000",
            project_type_label: "Project Type",
            project_type_placeholder: "Select the project type",
            project_type_landing: "Landing Page",
            project_type_saas: "SaaS",
            project_type_bot: "Chat Bot",
            project_type_other: "Other",
            message_label: "Describe a bit about what you need",
            message_placeholder: "Describe a bit about what you need...",
            submit: "Send Message",
          },
        },
        footer: {
          copyright: "Copyright © 2025",
          rights: "All rights reserved.",
        },
      },
    },

    es: {
      translation: {
        header: {
          contact: "Contáctanos",
        },
        initial: {
          title: "Convierte ideas en realidad digital!",
          subtitle:
            "Descubre cómo un desarrollo eficiente e innovador puede llevar tu proyecto al siguiente nivel.",
          contact: "Contáctanos",
        },
        about: {
          title: "Sobre mí",
          subtitle: "Desarrollador FullStack & Ingeniero de Software",
          desc: "Estudiante de Ingeniería en Software en uniFACEF y graduado en Informática para Internet en Etec. Me especializo en desarrollo full-stack con enfoque en React, TypeScript y Python. He trabajado en proyectos freelance, creando interfaces modernas y responsivas centradas en la experiencia del usuario. Siempre estoy en busca de nuevos aprendizajes y desafíos que me permitan aplicar y expandir mis conocimientos. Estoy abierto a oportunidades donde pueda aportar creatividad, compromiso y una mentalidad orientada al crecimiento continuo.",
        },
        knowledge: {
          title: "Conocimientos",
          items: [
            {
              name: "Git",
              icon: "git_logo.png",
              desc: "Sistema de control de versiones ampliamente utilizado para gestionar código fuente en proyectos de software, permitiendo colaboración e historial de cambios.",
            },
            {
              name: "Node.Js",
              icon: "node_logo.png",
              desc: "Entorno de ejecución de JavaScript en el lado del servidor, ideal para construir APIs, sistemas en tiempo real y aplicaciones escalables.",
            },
            {
              name: "Python",
              icon: "python_logo.png",
              desc: "Lenguaje de programación versátil utilizado en ciencia de datos, automatización, backend, inteligencia artificial y desarrollo web.",
            },
            {
              name: "Vite",
              icon: "vite_logo.png",
              desc: "Herramienta de construcción frontend ultrarrápida, utilizada principalmente con frameworks como Vue, React y Svelte para optimizar el desarrollo web.",
            },
            {
              name: "Next",
              icon: "next_logo.png",
              desc: "Framework de React para aplicaciones web con renderizado del lado del servidor, rutas automáticas, optimización del rendimiento y SEO.",
            },
            {
              name: "React",
              icon: "react_logo.png",
              desc: "Biblioteca de JavaScript para crear interfaces de usuario modernas y reactivas con componentes reutilizables.",
            },
            {
              name: "i18n",
              icon: "i18n_logo.png",
              desc: "Biblioteca para internacionalizar aplicaciones web, permitiendo traducción y personalización de textos e interfaces de usuario en diferentes idiomas.",
            },
            {
              name: "JavaScript",
              icon: "javascript_logo.png",
              desc: "Lenguaje de programación esencial para el desarrollo web, utilizado para hacer sitios web interactivos y dinámicos en el navegador.",
            },
            {
              name: "TypeScript",
              icon: "typescript_logo.png",
              desc: "Un superconjunto de JavaScript que agrega tipado estático, mejorando la escalabilidad y mantenibilidad de aplicaciones grandes.",
            },
            {
              name: "HTML",
              icon: "html_logo.png",
              desc: "Lenguaje de marcado utilizado para estructurar el contenido de páginas web, definiendo títulos, párrafos, enlaces, imágenes y más.",
            },
            {
              name: "CSS",
              icon: "css_logo.png",
              desc: "Lenguaje de estilo utilizado para definir la apariencia visual de las páginas HTML, incluyendo colores, diseños, animaciones y responsividad.",
            },
            {
              name: "TailWind",
              icon: "tailwind_logo.png",
              desc: "Framework CSS orientado a utilidades que permite construir interfaces modernas y responsivas con clases predefinidas y personalizables.",
            },
            {
              name: "PostgreSQL",
              icon: "postgres_logo.png",
              desc: "Sistema de gestión de bases de datos relacional de código abierto, conocido por su robustez y soporte para consultas complejas.",
            },
            {
              name: "MySQL",
              icon: "mysql_logo.png",
              desc: "Sistema de bases de datos relacional ampliamente utilizado en aplicaciones web para almacenar y gestionar datos estructurados.",
            },
            {
              name: "MongoDB",
              icon: "mongo_logo.png",
              desc: "Sistema de base de datos NoSQL orientado a documentos, ideal para aplicaciones que requieren flexibilidad y alta escalabilidad de datos.",
            },
            {
              name: "Prisma",
              icon: "prisma_logo.png",
              desc: "ORM moderno para Node.js y TypeScript que simplifica el acceso a bases de datos con tipado fuerte y consultas simplificadas.",
            },
            {
              name: "PHP",
              icon: "php_logo.png",
              desc: "Lenguaje de programación del lado del servidor utilizado tradicionalmente en el desarrollo de sitios web dinámicos y sistemas web con bases de datos.",
            },
            {
              name: "JSON",
              icon: "json_logo.png",
              desc: "Formato de intercambio de datos ligero, ampliamente utilizado en APIs y almacenamiento de datos estructurados en aplicaciones web.",
            },
            {
              name: "Figma",
              icon: "figma_logo.png",
              desc: "Herramienta de diseño de interfaces colaborativa basada en la web, utilizada para crear prototipos, wireframes y diseños UI/UX.",
            },
          ],
        },
        projects: {
          title: "Proyectos",
          footer: "Ver Proyecto",
          items: [
            {
              title: "Apex Studio",
              subtitle: "Diseñador UI/UX & Desarrollador FullStack",
              date: "Feb 2025 - Mar 2025",
              description:
                "Página de destino desarrollada para presentar el juego Apex Point, un simulador de carreras centrado en el realismo y la personalización. El proyecto destaca las características del juego con un diseño moderno, oscuro y dinámico, optimizando la navegación tanto para escritorio como para dispositivos móviles.",
              technologies: [
                "React",
                "Next.js",
                "TypeScript",
                "Prisma",
                "PostgreSQL",
                "Tailwind",
                "Figma",
                "i18n",
                "Responsividad",
              ],
              link: "https://apexstudio.fr/",
            },
            {
              title: "DiacovMoney",
              subtitle: "Diseñador UI/UX & Desarrollador FrontEnd",
              date: "Mar 2025 - Abr 2025",
              description:
                "Página de destino creada para promover la mentoría financiera de Diacov, centrada en enseñar cómo ganar R$ 5,000 mensuales con productos digitales en el nicho HOT. La estructura fue diseñada para la conversión: carga rápida, copia directa y un botón de llamada a la acción visible constantemente.",
              technologies: [
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind",
                "Figma",
                "Responsividad",
              ],
              link: "https://diacovmoney.com",
            },
            {
              title: "studAI",
              subtitle: "Diseñador UI/UX y Programador FullStack",
              date: "Jun 2025 - Actualidad",
              description:
                "Sistema creado para tomar apuntes y facilitar la vida académica, permitiendo crear materias y tareas para cada materia. Utilicé React para el frontend y Python para crear la API.",
              technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "React", "Tailwind", "Zustand", "Figma", "Python"],
              link: "https://frontend-app-gubu.onrender.com",
            },
          ],
        },
        services: {
          title: "Servicios",
          footer: "Contáctanos",
          items: {
            landing_page: {
              title: "Página de Aterrizaje",
              price: "800",
              desc: "Creación de una página de aterrizaje estática. Con diseño totalmente personalizado.",
              link: "https://wa.link/u57xj8",
              items: [
                {
                  name: "Creación de diseño moderno",
                  included: true,
                },
                {
                  name: "Responsividad",
                  included: true,
                },
                {
                  name: "Animación & Interacción",
                  included: true,
                },
                {
                  name: "Rendimiento optimizado",
                  included: true,
                },
                {
                  name: "Integración Backend",
                  included: false,
                },
                {
                  name: "Optimización SEO",
                  included: false,
                },
              ],
            },
            saas_basic: {
              title: "SaaS Básico",
              price: "2,500",
              desc: "Creación de un sistema con diseño personalizado ya integrado con pago.",
              link: "https://wa.link/qp3pg3",
              items: [
                {
                  name: "Creación de diseño moderno",
                  included: true,
                },
                {
                  name: "Responsividad",
                  included: true,
                },
                {
                  name: "Animación & Interacción",
                  included: true,
                },
                {
                  name: "Rendimiento optimizado",
                  included: true,
                },
                {
                  name: "Integración Backend",
                  included: true,
                },
                {
                  name: "Sistema de Login/Logout",
                  included: true,
                },
                {
                  name: "Sistema de pagos",
                  included: true,
                },
                {
                  name: "Integración API",
                  included: true,
                },
                {
                  name: "Optimización SEO",
                  included: false,
                },
              ],
            },
            bot_chat: {
              title: "Chat BOT",
              price: "1,300",
              desc: "Creación de un bot para responder automáticamente los mensajes de WhatsApp.",
              link: "https://wa.link/gsd0ty",
              items: [
                {
                  name: "Integración WhatsApp",
                  included: true,
                },
                {
                  name: "Totalmente personalizado",
                  included: true,
                },
                {
                  name: "Rendimiento optimizado",
                  included: true,
                },
                {
                  name: "Integración AI",
                  included: false,
                },
                {
                  name: "Integración Instagram",
                  included: false,
                },
              ],
            },
          },
        },
        contact: {
          title: "Contáctanos",
          subtitle: "¿Tienes una idea en mente o un proyecto en progreso?",
          description:
            "Envíame un mensaje, sin compromiso. Podría ser el primer paso hacia algo grande.",
          form: {
            name_label: "Nombre Completo",
            name_placeholder: "Tu nombre completo",
            email_label: "Email",
            email_placeholder: "tu@email.com",
            whatsapp_label: "WhatsApp",
            whatsapp_placeholder: "(00) 00000-0000",
            project_type_label: "Tipo de Proyecto",
            project_type_placeholder: "Selecciona el tipo de proyecto",
            project_type_landing: "Página de Aterrizaje",
            project_type_saas: "SaaS",
            project_type_bot: "Chat Bot",
            project_type_other: "Otro",
            message_label: "Describe un poco lo que necesitas",
            message_placeholder: "Describe un poco lo que necesitas...",
            submit: "Enviar Mensaje",
          },
        },
        footer: {
          copyright: "Copyright © 2025",
          rights: "Todos los derechos reservados.",
        },
      },
    },

    fr: {
      translation: {
        header: {
          contact: "Contactez-nous",
        },
        initial: {
          title: "Transformez les idées en réalité numérique!",
          subtitle:
            "Découvrez comment un développement efficace et innovant peut propulser votre projet vers de nouveaux sommets.",
          contact: "Contactez-nous",
        },
        about: {
          title: "À propos de moi",
          subtitle: "Développeur FullStack & Ingénieur logiciel",
          desc: "Étudiant en Génie logiciel à uniFACEF et diplômé en Informatique pour Internet à Etec. Je me spécialise dans le développement full-stack, principalement sur React, TypeScript et Python. J'ai travaillé sur des projets freelance, créant des interfaces modernes et réactives axées sur l'expérience utilisateur. Je recherche constamment de nouvelles opportunités d'apprentissage et de défis pour appliquer et élargir mes connaissances. Je suis ouvert à des opportunités où je peux apporter créativité, engagement et une mentalité axée sur la croissance continue.",
        },
        knowledge: {
          title: "Compétences",
          items: [
            {
              name: "Git",
              icon: "git_logo.png",
              desc: "Système de contrôle de version largement utilisé pour gérer le code source dans des projets logiciels, permettant la collaboration et l'historique des modifications.",
            },
            {
              name: "Node.Js",
              icon: "node_logo.png",
              desc: "Environnement d'exécution JavaScript côté serveur, idéal pour créer des APIs, des systèmes en temps réel et des applications évolutives.",
            },
            {
              name: "Python",
              icon: "python_logo.png",
              desc: "Langage de programmation versátil utilisé dans la science des données, l'automatisation, le backend, l'intelligence artificielle et le développement web.",
            },
            {
              name: "Vite",
              icon: "vite_logo.png",
              desc: "Outil de construction frontend ultra-rapide, principalement utilisé avec des frameworks tels que Vue, React et Svelte pour optimiser le développement web.",
            },
            {
              name: "Next",
              icon: "next_logo.png",
              desc: "Framework React pour les applications web avec rendu côté serveur, routage automatique, optimisation des performances et SEO.",
            },
            {
              name: "React",
              icon: "react_logo.png",
              desc: "Bibliothèque JavaScript pour créer des interfaces utilisateur modernes et réactives avec des composants réutilisables.",
            },
            {
              name: "i18n",
              icon: "i18n_logo.png",
              desc: "Bibliothèque pour l'internationalisation des applications web, permettant la traduction et la personnalisation des textes et des interfaces utilisateur dans différentes langues.",
            },
            {
              name: "JavaScript",
              icon: "javascript_logo.png",
              desc: "Langage de programmation essentiel pour le développement web, utilisé pour rendre les sites web interactifs et dynamiques dans le navigateur.",
            },
            {
              name: "TypeScript",
              icon: "typescript_logo.png",
              desc: "Un sur-ensemble de JavaScript ajoutant un typage statique, améliorant la scalabilité et la maintenabilité des applications de grande taille.",
            },
            {
              name: "HTML",
              icon: "html_logo.png",
              desc: "Langage de balisage utilisé pour structurer le contenu des pages web, définissant les titres, les paragraphes, les liens, les images, etc.",
            },
            {
              name: "CSS",
              icon: "css_logo.png",
              desc: "Langage de style utilisé pour définir l'apparence visuelle des pages HTML, y compris les couleurs, les mises en page, les animations et la réactivité.",
            },
            {
              name: "TailWind",
              icon: "tailwind_logo.png",
              desc: "Framework CSS utilitaire permettant de créer des interfaces modernes et réactives avec des classes pré-définies et personnalisables.",
            },
            {
              name: "PostgreSQL",
              icon: "postgres_logo.png",
              desc: "Système de gestion de base de données relationnelle open-source, connu pour sa robustesse et son support des requêtes complexes.",
            },
            {
              name: "MySQL",
              icon: "mysql_logo.png",
              desc: "Système de gestion de base de données relationnelle largement utilisé dans les applications web pour stocker et gérer des données structurées.",
            },
            {
              name: "MongoDB",
              icon: "mongo_logo.png",
              desc: "Système de gestion de base de données NoSQL orienté document, idéal pour les applications nécessitant de la flexibilité et une grande évolutivité des données.",
            },
            {
              name: "Prisma",
              icon: "prisma_logo.png",
              desc: "ORM moderne pour Node.js et TypeScript simplifiant l'accès aux bases de données avec un typage fort et des requêtes simplifiées.",
            },
            {
              name: "PHP",
              icon: "php_logo.png",
              desc: "Langage de programmation côté serveur utilisé traditionnellement dans le développement de sites web dynamiques et de systèmes web avec des bases de données.",
            },
            {
              name: "JSON",
              icon: "json_logo.png",
              desc: "Format léger d'échange de données largement utilisé dans les APIs et le stockage de données structurées dans les applications web.",
            },
            {
              name: "Figma",
              icon: "figma_logo.png",
              desc: "Outil de design d'interfaces collaboratif basé sur le web, utilisé pour créer des prototypes, des maquettes et des designs UI/UX.",
            },
          ],
        },
        projects: {
          title: "Projets",
          footer: "Voir le projet",
          items: [
            {
              title: "Apex Studio",
              subtitle: "Designer UI/UX & Développeur FullStack",
              date: "Fév 2025 - Mars 2025",
              description:
                "Page de destination développée pour présenter le jeu Apex Point, un simulateur de course axé sur le réalisme et la personnalisation. Le projet met en avant les caractéristiques du jeu avec un design moderne, sombre et dynamique, optimisant la navigation à la fois pour le bureau et les appareils mobiles.",
              technologies: [
                "React",
                "Next.js",
                "TypeScript",
                "Prisma",
                "PostgreSQL",
                "Tailwind",
                "Figma",
                "i18n",
                "Réactivité",
              ],
              link: "https://apexstudio.fr/",
            },
            {
              title: "DiacovMoney",
              subtitle: "Designer UI/UX & Développeur FrontEnd",
              date: "Mars 2025 - Avril 2025",
              description:
                "Page de destination créée pour promouvoir la mentorat financier de Diacov, se concentrant sur l'enseignement de la façon de gagner R$ 5,000 par mois avec des produits numériques dans le créneau HOT. La structure a été conçue pour la conversion: chargement rapide, texte direct et bouton d'appel à l'action toujours visible.",
              technologies: ["Next.js", "TypeScript", "React", "Tailwind", "Figma", "Réactivité"],
              link: "https://diacovmoney.com",
            },
            {
              title: "studAI",
              subtitle: "Designer UI/UX & Développeur FullStack",
              date: "Juin 2025 - Actuellement",
              description:
                "Système conçu pour prendre des notes et faciliter la vie académique, permettant de créer des matières et des devoirs pour chaque matière. J’ai utilisé React pour le frontend et Python pour développer l’API.",
              technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "React", "Tailwind", "Zustand", "Figma", "Python"],
              link: "https://frontend-app-gubu.onrender.com",
            },
          ],
        },
        services: {
          title: "Services",
          footer: "Contactez-nous",
          items: {
            landing_page: {
              title: "Page de Destination",
              price: "800",
              desc: "Création d'une page de destination statique avec un design entièrement personnalisé.",
              link: "https://wa.link/u57xj8",
              items: [
                {
                  name: "Création de design moderne",
                  included: true,
                },
                {
                  name: "Responsivité",
                  included: true,
                },
                {
                  name: "Animation & Interaction",
                  included: true,
                },
                {
                  name: "Optimisation des performances",
                  included: true,
                },
                {
                  name: "Intégration Backend",
                  included: false,
                },
                {
                  name: "Optimisation SEO",
                  included: false,
                },
              ],
            },
            saas_basic: {
              title: "SaaS de base",
              price: "2,500",
              desc: "Création d'un système avec un design personnalisé déjà intégré au paiement.",
              link: "https://wa.link/qp3pg3",
              items: [
                {
                  name: "Création de design moderne",
                  included: true,
                },
                {
                  name: "Responsivité",
                  included: true,
                },
                {
                  name: "Animation & Interaction",
                  included: true,
                },
                {
                  name: "Optimisation des performances",
                  included: true,
                },
                {
                  name: "Intégration Backend",
                  included: true,
                },
                {
                  name: "Système de connexion/déconnexion",
                  included: true,
                },
                {
                  name: "Système de paiement",
                  included: true,
                },
                {
                  name: "Intégration API",
                  included: true,
                },
                {
                  name: "Optimisation SEO",
                  included: false,
                },
              ],
            },
            bot_chat: {
              title: "Chat BOT",
              price: "1,300",
              desc: "Création d'un bot pour répondre automatiquement aux messages WhatsApp.",
              link: "https://wa.link/gsd0ty",
              items: [
                {
                  name: "Intégration WhatsApp",
                  included: true,
                },
                {
                  name: "Totalement personnalisé",
                  included: true,
                },
                {
                  name: "Optimisation des performances",
                  included: true,
                },
                {
                  name: "Intégration AI",
                  included: false,
                },
                {
                  name: "Intégration Instagram",
                  included: false,
                },
              ],
            },
          },
        },
        contact: {
          title: "Contactez-nous",
          subtitle: "Vous avez une idée en tête ou un projet en cours ?",
          description:
            "Envoyez-moi un message, sans engagement. Ce pourrait être la première étape vers quelque chose de grand.",
          form: {
            name_label: "Nom Complet",
            name_placeholder: "Votre nom complet",
            email_label: "Email",
            email_placeholder: "votre@email.com",
            whatsapp_label: "WhatsApp",
            whatsapp_placeholder: "(00) 00000-0000",
            project_type_label: "Type de Projet",
            project_type_placeholder: "Sélectionnez le type de projet",
            project_type_landing: "Page de Destination",
            project_type_saas: "SaaS",
            project_type_bot: "Chat Bot",
            project_type_other: "Autre",
            message_label: "Décrivez un peu ce dont vous avez besoin",
            message_placeholder: "Décrivez un peu ce dont vous avez besoin...",
            submit: "Envoyer le Message",
          },
        },
        footer: {
          copyright: "Copyright © 2025",
          rights: "Tous droits réservés.",
        },
      },
    },

    pt: {
      translation: {
        header: {
          contact: "Entrar em Contato",
        },
        initial: {
          title: "Transforme ideias em realidade digital!",
          subtitle:
            "Descubra como um desenvolvimento eficiente e inovador pode levar seu projeto ao próximo nível.",
          contact: "Entre em Contato",
        },
        about: {
          title: "Sobre mim",
          subtitle: "Desenvolvedor FullStack & Engenheiro de Software",
          desc: "Graduando Engenharia de Software na uniFACEF e concluinte do curso técnico em Informática para Internet pela Etec. Tenho me especializado em desenvolvimento full-stack com foco em React, TypeScript e Python. Já atuei em projetos freelancers, desenvolvendo interfaces modernas, responsivas e voltadas à experiência do usuário. Busco constantemente novos aprendizados e desafios que me permitam aplicar e expandir meus conhecimentos. Estou aberto a oportunidades onde eu possa contribuir com criatividade, comprometimento e uma mentalidade voltada para a evolução contínua.",
        },
        knowledge: {
          title: "Conhecimento",
          items: [
            {
              name: "Git",
              icon: "git_logo.png",
              desc: "Sistema de controle de versões amplamente utilizado para gerenciar código-fonte em projetos de software, permitindo colaboração e histórico de alterações.",
            },
            {
              name: "Node.Js",
              icon: "node_logo.png",
              desc: "Ambiente de execução JavaScript no lado do servidor, ideal para construir APIs, sistemas em tempo real e aplicações escaláveis.",
            },
            {
              name: "Python",
              icon: "python_logo.png",
              desc: "Linguagem de programação versátil usada em ciência de dados, automação, backend, inteligência artificial e desenvolvimento web.",
            },
            {
              name: "Vite",
              icon: "vite_logo.png",
              desc: "Ferramenta de build frontend ultrarrápida, usada principalmente com frameworks como Vue, React e Svelte para otimizar o desenvolvimento web.",
            },
            {
              name: "Next",
              icon: "next_logo.png",
              desc: "Framework React para aplicações web com renderização server-side, rotas automáticas, otimização de performance e SEO.",
            },
            {
              name: "React",
              icon: "react_logo.png",
              desc: "Biblioteca JavaScript para construção de interfaces de usuário modernas e reativas com componentes reutilizáveis.",
            },
            {
              name: "i18n",
              icon: "i18n_logo.png",
              desc: "Biblioteca para internacionalização de aplicações web, permitindo traduzir e personalizar textos e interfaces de usuário em diferentes idiomas.",
            },
            {
              name: "JavaScript",
              icon: "javascript_logo.png",
              desc: "Linguagem de programação essencial para desenvolvimento web, utilizada para tornar sites interativos e dinâmicos no navegador.",
            },
            {
              name: "TypeScript",
              icon: "typescript_logo.png",
              desc: "Superset do JavaScript que adiciona tipagem estática, melhorando a escalabilidade e a manutenção de grandes aplicações.",
            },
            {
              name: "HTML",
              icon: "html_logo.png",
              desc: "Linguagem de marcação usada para estruturar o conteúdo das páginas web, definindo títulos, parágrafos, links, imagens e mais.",
            },
            {
              name: "CSS",
              icon: "css_logo.png",
              desc: "Linguagem de estilo usada para definir a aparência visual de páginas HTML, incluindo cores, layouts, animações e responsividade.",
            },
            {
              name: "TailWind",
              icon: "tailwind_logo.png",
              desc: "Framework CSS utilitário que permite construir interfaces modernas e responsivas com classes pré-definidas e customizáveis.",
            },
            {
              name: "PostgreSQL",
              icon: "postgres_logo.png",
              desc: "Sistema de gerenciamento de banco de dados relacional, poderoso e open-source, conhecido por sua robustez e suporte a consultas complexas.",
            },
            {
              name: "MySQL",
              icon: "mysql_logo.png",
              desc: "Sistema de banco de dados relacional amplamente utilizado em aplicações web para armazenar e gerenciar dados estruturados.",
            },
            {
              name: "MongoDB",
              icon: "mongo_logo.png",
              desc: "Banco de dados NoSQL orientado a documentos, ideal para aplicações que exigem flexibilidade e alta escalabilidade de dados.",
            },
            {
              name: "Prisma",
              icon: "prisma_logo.png",
              desc: "ORM moderno para Node.js e TypeScript que facilita o acesso a bancos de dados com tipagem forte e consultas simplificadas.",
            },
            {
              name: "PHP",
              icon: "php_logo.png",
              desc: "Linguagem de programação server-side usada tradicionalmente no desenvolvimento de sites dinâmicos e sistemas web com banco de dados.",
            },
            {
              name: "JSON",
              icon: "json_logo.png",
              desc: "Formato leve de troca de dados, amplamente utilizado em APIs e armazenamento de dados estruturados em aplicações web.",
            },
            {
              name: "Figma",
              icon: "figma_logo.png",
              desc: "Ferramenta de design de interfaces colaborativa baseada na web, usada para criar protótipos, wireframes e layouts UI/UX.",
            },
          ],
        },
        projects: {
          title: "Projetos",
          footer: "Visualizar Projeto",
          items: [
            {
              title: "Apex Studio",
              subtitle: "Designer UI/UX & Desenvolvedor FullStack",
              date: "Fev 2025 - Mar 2025",
              description:
                "Landing page desenvolvida para apresentar o jogo Apex Point, um simulador de corrida com foco em realismo e personalização. O projeto destaca os diferenciais do game com um layout moderno, escuro e dinâmico, otimizando a navegação tanto para desktop quanto mobile.",
              technologies: [
                "React",
                "Next.js",
                "TypeScript",
                "Prisma",
                "PostgreSQL",
                "Tailwind",
                "Figma",
                "i18n",
                "Responsividade",
              ],
              link: "https://apexstudio.fr/",
            },
            {
              title: "DiacovMoney",
              subtitle: "Designer UI/UX & Desenvolvedor FrontEnd",
              date: "Mar 2025 - Abr 2025",
              description:
                "Página de captura criada para promover a mentoria financeira do Diacov, focada em ensinar como faturar R$ 5.000 mensais com produtos digitais no nicho HOT. A estrutura foi desenhada para conversão: carregamento rápido, copy direta e botão de ação sempre visível.",
              technologies: [
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind",
                "Figma",
                "Responsividade",
              ],
              link: "https://diacovmoney.com",
            },
            {
              title: "studAI",
              subtitle: "Designer UI/UX & Programador FullStack",
              date: "Jun 2025 - Atualmente",
              description:
                "Sistema feito para criar anotacoes e facilitar a vida acadêmica, podendo criar matérias e tarefas para a materia. Utilizei React para o front e Python para criar a API.",
              technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "React", "Tailwind", "Zustand", "Figma", "Python"],
              link: "https://frontend-app-gubu.onrender.com",
            },
          ],
        },
        services: {
          title: "Serviços",
          footer: "Entre em Contato",
          items: {
            landing_page: {
              title: "Landing Page",
              price: "800",
              desc: "Criação de uma landing page estática. Com um design totalmente personalizado.",
              link: "https://wa.link/u57xj8",
              items: [
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
              ],
            },
            saas_basic: {
              title: "SaaS Básico",
              price: "2.500",
              desc: "Criação de um sistema com design personalizado já integrado com pagamento.",
              link: "https://wa.link/qp3pg3",
              items: [
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
              ],
            },
            bot_chat: {
              title: "BOT Chat",
              price: "1.300",
              desc: "Criação de um bot para responder automáticamente mensagens no Whatsapp.",
              link: "https://wa.link/gsd0ty",
              items: [
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
              ],
            },
          },
        },
        contact: {
          title: "Entre em Contato",
          subtitle: "Tem uma ideia na cabeça ou um projeto em mente?",
          description:
            "Me mande uma mensagem, sem compromisso. Pode ser o primeiro passo para algo grande.",
          form: {
            name_label: "Nome Completo",
            name_placeholder: "Seu nome completo",
            email_label: "Email",
            email_placeholder: "seu@email.com",
            whatsapp_label: "WhatsApp",
            whatsapp_placeholder: "(00) 00000-0000",
            project_type_label: "Tipo de Projeto",
            project_type_placeholder: "Selecione o tipo do projeto",
            project_type_landing: "Landing Page",
            project_type_saas: "SaaS",
            project_type_bot: "Chat Bot",
            project_type_other: "Outro",
            message_label: "Descreva um pouco do que você precisa",
            message_placeholder: "Descreva um pouco do que você precisa...",
            submit: "Enviar Mensagem",
          },
        },
        footer: {
          copyright: "Copyright © 2025",
          rights: "Todos os direitos reservados.",
        },
      },
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
