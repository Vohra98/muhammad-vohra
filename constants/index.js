import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  oaknorth,
  typeform,
  reprisedigital,
  seventynine,
  adtrak,
  untitled,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React",
    icon: web,
  },
  {
    title: "Next.js",
    icon: mobile,
  },
  {
    title: "TypeScript",
    icon: backend,
  },
  {
    title: "Headeless CMS specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "OakNorth Bank",
    icon: oaknorth,
    iconBg: "#c0c0c0",
    date: "Jan 2023 - Present",
    points: [
      "Analysed and reinvented the bank’s approach to content and data management.",
      "Designed and deployed a fully integrated, headless CMS that connected and fed all the bank’s apps, websites and systems.",
      "Rebuilt the front end design systems for all the bank’s apps, websites and systems.",
      "Owned and managed the final production system, including incident management and risk and compliance reporting.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Typeform",
    icon: typeform,
    iconBg: "#c0c0c0",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Introduced and implemented core engineering methodologies and processes such as TDD and pair programming.",
      "Contributed to the development of a dynamic, user-friendly website with global localization and managed by a headless CMS.",
      "Contributed heavily to an automated deployment pipeline / process.",
      "Led and managed an automated form/product generation project to enable non technical teams to independently create thousands of forms with minimal manual work.",
    ],
  },
  {
    title: "Senior Developer",
    company_name: "Reprise Digital",
    icon: reprisedigital,
    iconBg: "#c0c0c0",
    date: "Dec 2020 - Jan 2023",
    points: [
      "Built a dynamic location based PPC site that changed content based on the ad clicked and the location of the user.",
      "Introduced Team Ted Talks, an initiative for engineers to practise public speaking while sharing cool tech concepts.",
      "Introduced and implemented a range of processes and tools to improve the overall efficiency of the whole team.",
    ],
  },
  {
    title: "Head of D&D",
    company_name: "Seventynine",
    icon: seventynine,
    iconBg: "#c0c0c0",
    date: "Jan 2020 - Dec 2020",
  },
  {
    title: "Senior Web Developer",
    company_name: "Adtrak",
    icon: adtrak,
    iconBg: "#c0c0c0",
    date: "Apr 20219 - Dec 2019",
  },
  {
    title: "Web Developer",
    company_name: "Un.titled",
    icon: untitled,
    iconBg: "#c0c0c0",
    date: "Apr 20219 - Jan 2017",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Project manager App | Personal",
    points: [
      "Integrated the latest OpenAI API for Chat-GPT interaction within a basic project management app.",
      "Enables users to log in, create projects, add deadlines and engage with Chat-GPT for personalised responses and insights across all projects.",
      "Implemented key functionality to assess project relevance to Chat-GPT by comparing vector embeddings of chat history and project data.",
      "Ensured AI-driven responses were tailored to the specific context of each project.",
      "Exemplified technical proficiency in Next.js and TypeScript.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };