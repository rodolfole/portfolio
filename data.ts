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
        "https://res.cloudinary.com/dtqijixar/image/upload/v1706707723/portfolio/Tesla-shop_thumnail_azhc2x.png",
      web: "https://next14-teslo-shop.vercel.app",
    },
    {
      description:
        "This project is an Airbnb clone where you can create properties, make reservations, and add them to favorites.",
      github: "https://github.com/rodolfole/next-rental-app",
      name: "Airbnb Clone",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692231121/Previews/Airbnb_thumnail_aq3xwj.jpg",
      web: "https://next-rental-app.vercel.app",
    },
    {
      description:
        "It is a full-stack e-commerce project that enables shopping using the payment methods Mercado Pago and Stripe.",
      github: "https://github.com/rodolfole/next-ecommerce-front",
      name: "Ecommerce",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692230767/Previews/Ecommerce_thumnail_hmkvbf.jpg",
      web: "https://next-ecommerce-front-swart.vercel.app",
    },
    {
      description:
        "This website displays information about the business Aluminios y Puertas del Desierto, which offers personalized solutions in doors and aluminum for home or business.",
      github: "https://github.com/rodolfole/aluminios-y-puertas-del-desierto",
      name: "Aluminios y Puertas del Desierto",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692416007/Previews/Aluminios-y-puertas_thumnail_fi2mb2.jpg",
      web: "https://aluminiosypuertas.com",
    },
    {
      description:
        "This landing page showcases the services and information of Barriles Charly, focusing on high-quality barrel production.",
      github: "https://github.com/rodolfole/barriles-charly",
      name: "Barriles Charly",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692417420/Previews/barriles-charly_thumnail_vl7p1b.jpg",
      web: "https://www.barrilescharly.com",
    },
    {
      description:
        "Landing page showcasing the services offered by the business Parador Don Gil and contact information.",
      github: "https://github.com/rodolfole/parador-de-gil",
      name: "Parador de Gil",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692492985/Previews/parador-de-gil_thumnail_qsqo9g.jpg",
      web: "https://paradordegil.xyz",
    },
  ],
};
