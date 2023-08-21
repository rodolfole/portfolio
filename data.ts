import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiGraphql,
  SiJavascript,
  SiMongodb,
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
        label: "Portfolio",
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
      icon: SiMongodb,
      label: "MongoDB",
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
      url: "https://www.linkedin.com/in/luis-lara-288b3315a/",
    },
  ],
  works: [
    {
      description: "",
      github: "https://github.com/rodolfole/next-rental-app",
      name: "Airbnb Clone",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692231121/Previews/Airbnb_thumnail_aq3xwj.jpg",
      web: "https://next-rental-app.vercel.app",
    },
    {
      description: "",
      github: "https://github.com/rodolfole/next-ecommerce-front",
      name: "Ecommerce",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692230767/Previews/Ecommerce_thumnail_hmkvbf.jpg",
      web: "https://next-ecommerce-front-swart.vercel.app",
    },
    {
      description:
        "Somos fabricantes y proveedores de confianza, ofreciendo soluciones personalizadas para satisfacer todas tus necesidades en puertas y aluminios para el hogar o negocio",
      github: "https://github.com/rodolfole/aluminios-y-puertas-del-desierto",
      name: "Aluminios y Puertas del Desierto",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692416007/Previews/Aluminios-y-puertas_thumnail_fi2mb2.jpg",
      web: "https://aluminiosypuertas.com",
    },
    {
      description: "",
      github: "https://github.com/rodolfole/barriles-charly",
      name: "Barriles Charly",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692417420/Previews/barriles-charly_thumnail_vl7p1b.jpg",
      web: "https://www.barrilescharly.com",
    },
    {
      description: "",
      github: "https://github.com/rodolfole/next-pokemon-static",
      name: "Pokemon Base",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692228802/Previews/Pokemom-base_thumnail_in7aqf.jpg",
      web: "https://next-pokemon-base.vercel.app",
    },
    {
      description: "",
      github: "https://github.com/rodolfole/parador-de-gil",
      name: "Parador de Gil",
      preview:
        "https://res.cloudinary.com/dtqijixar/image/upload/v1692492985/Previews/parador-de-gil_thumnail_qsqo9g.jpg",
      web: "https://paradordegil.xyz",
    },
  ],
};
