import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export default {
  navbar: {
    menu: [
      {
        label: "Home",
      },
      {
        label: "Works",
      },
      {
        label: "Skills",
      },
      {
        label: "Contact",
      },
    ],
  },
  skills: [
    {
      icon: SiJavascript,
      label: "JavaScript",
    },
    {
      icon: SiReact,
      label: "React",
    },
    {
      icon: SiNextdotjs,
      label: "NextJS",
    },
    {
      icon: SiTypescript,
      label: "Typescript",
    },
    {
      icon: SiNodedotjs,
      label: "NodeJS",
    },
    {
      icon: SiNestjs,
      label: "NestJS",
    },
    {
      icon: SiMongodb,
      label: "MongoDB",
    },
    {
      icon: SiMysql,
      label: "MySQL",
    },
    {
      icon: SiGraphql,
      label: "GraphQL",
    },
  ],
  social: [
    {
      icon: FaGithub,
      url: "https://github.com/rodolfole",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/rodolfo-lara/",
    },
  ],
  works: [
    {
      description:
        "Teslo shop is a fullstack project in Nextjs implementing server actions and using Paypal as a payment method.",
      github: "https://github.com/rodolfole/teslo-shop",
      name: "Tesla shop clone",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1714267282/Portfolio/tesla-shop-clone_thumbnail.webp",
      web: "https://next14-teslo-shop.vercel.app",
    },
    {
      description:
        "This project is an Airbnb clone where you can create properties, make reservations, and add them to favorites.",
      github: "https://github.com/rodolfole/next-rental-app",
      name: "Airbnb Clone",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1714267019/Portfolio/airbnb-clone_thumbnail.webp",
      web: "https://next-rental-app.vercel.app",
    },
    {
      description:
        "It is a full-stack e-commerce project that enables shopping using the payment methods Mercado Pago and Stripe.",
      github: "https://github.com/rodolfole/next-ecommerce-front",
      name: "Ecommerce",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1714267094/Portfolio/ecommerce_thumbnail.webp",
      web: "https://next-ecommerce-front-swart.vercel.app",
    },
    {
      description: "",
      github: "https://github.com/rodolfole/extraordinary",
      name: "Extraordinary Fruits",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1714267227/Portfolio/extraordinary-fruits_thumbnail.webp",
      web: "https://extraordinary-jet.vercel.app",
    },
    {
      description: "",
      github: "https://github.com/rodolfole/xofruits",
      name: "XO Fruits",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1714267381/Portfolio/xofruits_thumbnail.webp",
      web: "https://xofruits.vercel.app",
    },
    {
      description: "",
      github: "https://github.com/rodolfole/xtrajuice",
      name: "Xtrajuice",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1714267403/Portfolio/xtrajuice_thumbnail.webp",
      web: "https://xtrajuice.vercel.app",
    },

    {
      description:
        "This website displays information about the business Aluminios y Puertas del Desierto, which offers personalized solutions in doors and aluminum for home or business.",
      github: "https://github.com/rodolfole/aluminios-y-puertas-del-desierto",
      name: "Aluminios y Puertas del Desierto",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1714267158/Portfolio/aluminios-y-puertas_thumbnail.webp",
      web: "https://aluminiosypuertas.com",
    },
    {
      description:
        "This landing page showcases the services and information of Barriles Charly, focusing on high-quality barrel production.",
      github: "https://github.com/rodolfole/barriles-charly",
      name: "Barriles Charly",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1714267187/Portfolio/barriles-charly_thumbnail.webp",
      web: "https://www.barrilescharly.com",
    },
    {
      description:
        "Landing page showcasing the services offered by the business Parador Don Gil and contact information.",
      github: "https://github.com/rodolfole/parador-de-gil",
      name: "Parador de Gil",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1714267693/Portfolio/parador-de-gil_thumbnail.webp",
      web: "https://paradordegil.xyz",
    },
  ],
};
