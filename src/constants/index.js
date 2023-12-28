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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI-UX Designer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
    title: "Open Source Contributor",
    company_name: "Bcoin",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - April 2023",
    points: [
      "Contributed to the project by analyzing proposed features and devising four automated test cases, meticulously navigating through the entire source code.",
      "The implemented test cases focused on crucial coin object features, including height, depth, version, and JSON serialization/deserialization, aimed at enhancing the overall efficiency of the project.",
      "Facilitated productive interactions with team members, resulting in the presentation of efficient and well-written code.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Kyverno",
    icon: shopify,
    iconBg: "White",
    date: "May 2023 - June 2023",
    points: [
      "Set the entire project up locally and fixed bugs in UI documentation.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web3 Product+Research Intern",
    company_name: "MIT Academy of Engineering",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Developed an app that enables users to initiate fundraising campaigns and contribute to campaigns of their choice in ETH (Ethereum Cryptocurrency).g React.js and other related technologies.",
      "Utilized JavaScript, React (for Front-end), Solidity (for Smart Contracts) to build the app and interact with the Ethereum Blockchain.",
      "Working on the Paper under the guidance of Dr. Pramod Ganjewar to optimize the user experience and feasibility of the system with a new feature.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Despite being his first research endevour, he did a commendable job.",
    name: "Dr. Pramod Ganjewar",
    designation: "Associate Professor",
    company: "MIT Academy of Engineering",
    // image: "https://images.app.goo.gl/jktFJBamAtpkifmP9",
  },
  {
    testimonial:
      "I was impressed by his ability to handle even the toughest of problems and effortlessly.",
    name: "Puja Kumari",
    designation: "SDE Intern",
    company: "OnlineSales.AI",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Thank you for all of your contributions to the project. You can participate in the PR review process.",
    name: "Anmol Sharma",
    designation: "Maintainer",
    company: "Bcoin",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Time Pizza Delivery",
    description:
      "Web-based platform that allows customers to order pizza online and track the delivery in real-time.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Rohan-Dah",
  },
  {
    name: "Online Grocery Store",
    description:
      "Web application that enables users to order grocery items and displaying items in English as well as local language for ease.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Rohan-Dah",
  },
];

export { services, technologies, experiences, testimonials, projects };
