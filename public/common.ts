import { imgLink, proj } from "@/types";

export const projList: proj[] = [
  {
    link: "https://moviemaestro.netlify.app/",
    imagePath: "moviemaestro.png",
    imageAlt: "Movie Maestro",
    name: "Movie Maestro",
    desc: "Full stack application utilising react for the front end, express for the back end and mongoDB for the database. Helps users find a movie to watch across multiple streaming platforms and with editable filters.",
    tags: ["Javascript", "React", "Express", "MongoDB", "Bootstrap"],
  },
  {
    link: "https://milomt.github.io/",
    imagePath: "portfolio_v3.png",
    imageAlt: "Portfolio v3",
    name: "Portfolio Website V3.0",
    desc: "Constructed with Svelte, Typescript and Tailwind. This is mostly a reproduction of the previous version of the site within the new frameworks, Focusing on component modularization.",
    tags: ["Svelte", "Vite", "Typescript", "Tailwind"],
  },
  {
    link: "https://github.com/MiloMT/WebDev-Pathway-Assistant",
    imagePath: "webdev_pathway_assistant.png",
    imageAlt: "Webdev Pathway Assistant API",
    name: "Webdev Pathway Assistant API",
    desc: "An API using both Flask and PostgreSQL. It features interacting tables through join table setups, with validation and sanitisation, along with authentication through JWT tokens.",
    tags: ["Python", "Flask", "PostgreSQL"],
  },
  {
    link: "https://milomt.github.io/",
    imagePath: "portfolio_v2.png",
    imageAlt: "Portfolio v2",
    name: "Portfolio Website V2.0",
    desc: "Second take on the portfolio site midway through the coder academy course using some further knowledge aquired.",
    tags: ["HTML", "CSS", "SCSS", "Javascript"],
  },
  {
    link: "https://github.com/MiloMT/PyPassGen",
    imagePath: "pypassgen.png",
    imageAlt: "PyPassGen",
    name: "PyPassGen",
    desc: "Password generator CLI tool that uses provided arguments and has the ability to store and encrypt / decrypt passwords to a computer.",
    tags: ["Python", "Bash"],
  },
  {
    link: "https://portfolio-site-nine-dusky.vercel.app/",
    imagePath: "portfolio_v1.png",
    imageAlt: "Portfolio v1",
    name: "Portfolio Website V1.0",
    desc: "Older portfolio website developed for my first assignment in the web developer Coder Academy course.",
    tags: ["HTML", "CSS", "SCSS"],
  },
];

export const skillList: string[] = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "PYTHON",
  "FLASK",
  "PSQL",
  "MONGODB",
  "REACT",
  "SVELTE",
];

export const technologies: string[] = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "NEXTJS",
  "NESTJS",
  "TAILWIND",
  "PYTHON",
  "FLASK",
  "PSQL",
  "MONGODB",
  "SVELTE",
  "DOCKER",
  "TERRAFORM",
];

export const socials: imgLink[] = [
  {
    link: "mailto:myles@mylestaylor.dev",
    imagePath: "email.svg",
    imageAlt: "Email",
  },
  {
    link: "https://github.com/MiloMT",
    imagePath: "github-coloured.png",
    imageAlt: "Github",
  },
  {
    link: "https://www.linkedin.com/in/mylestaylordev/",
    imagePath: "LI-coloured.png",
    imageAlt: "LinkedIn",
  },
];
