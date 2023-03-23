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
  shareme,
  headphonesEcommerce,
  todayILearned,
  greatQuotes,
  forkify,
  mapty,
  atmapp,
  noonegame,
  meetups,
  threejs,
  allocate,
  upwork,
  astorija,
  redjacket,
  papaginos,
  next,
  sass,
  net,
  gjorgji,
  kriss,
  veton,
  university,
  everest,
  youtubeClone,
  bodyArt,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Responsive Layout",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: ".NET",
    icon: net,
  },
  {
    name: "SCSS",
    icon: sass,
  },
  {
    name: "NextJS",
    icon: next,
  },
];

const educations = [
  {
    where: "University Goce Delchev Shtip",
    nasoka: "Compunter Science",
    date: "Oct 2016 - Dec 2021",
    icon: university,
    iconBg: "#E6DEDD",
    points: [
      "Bachelor's degree in Computer Science.",
      "Learning all about computer science",
      "Working on various projects with colleagues in the university",
      "Summer intern in the university",
      "Developing soft and hard skills in the University",
    ],
  },
  {
    where: "Everest Web Academy",
    nasoka: "Frontend developer",
    icon: everest,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Jan 2021",
    points: [
      "Learning all about frontend development",
      "Work alone on a projects",
      "Work with colleagues on team projects",
      "Passing all the homeworks",
      "Certificated Frontend Developer",
    ],
  },
];

const experiences = [
  {
    title: "Front Desk Receptionist",
    company_name: "Red Jacket Resort, Massachusetts, USA",
    icon: redjacket,
    iconBg: "#E6DEDD",
    date: "May 2019 - Oct 2019",
    points: [
      "Serves visitors by greeting, welcoming, and directing them appropriately.",
      "Notifies company personnel of visitor arrival.",
      "Maintains security and telecommunications system.",
      "Informs visitors by answering or referring inquiries.",
      "Directs visitors by maintaining employee and department directories.",
    ],
  },
  {
    title: "Front end Cashier",
    company_name: "Papa Gino's, Massachusetts, USA",
    icon: papaginos,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Oct 2019",
    points: [
      "Responsible for creating a positive, meaningful customer experience while carrying out duties such as ringing up customers at the cash register, accepting payment via credit/debit card or cash and returning change as necessary",
    ],
  },
  {
    title: "Printing manager",
    company_name: "Astorija Office & Copy Center",
    icon: astorija,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Apr 2022",
    points: [
      "Working with Corel Draw",
      "Prepearing stuff for printing",
      "Copyng, Scanning and other services",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: upwork,
    iconBg: "#383E56",
    date: "Jan 2022 - March 2022",
    points: [
      "Working for online custumers",
      "Mockup to code, developing the frontend part of a website",
      "Working mostly with HTML5, CSS3, Vanilla JavaScript",
      "Implementing stunning css styles with the most modern CSS3 technologies such as animations, transitions, transformations",
      "Working with CSS preprocessors such as SASS and SCSS",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Allocate Software",
    icon: allocate,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, .NET, Altova XML and other technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aleksandro is so friendly and helpful colleague. He is in my team in Allocate Software",
    name: "Veton Jonuzi",
    designation: "fullstack developer",
    company: "Allocate Software",
    image: veton,
  },
  {
    testimonial:
      "He is my friend and he always wanted to teach me some new stuff about the frontend technologies, he is so dedicated in what he is doing!",
    name: "Kristijan Gjosevski",
    designation: "Microsoft Dynamics 365 Developer",
    company: "Axapta Masters",
    image: kriss,
  },
  {
    testimonial:
      "Aleksandro is motivated fullstack developer who always want to talk about the newest technologies. He was my college colleague and he was excelent student ",
    name: "Gjorgi Mitrevski",
    designation: "Frontend developer",
    company: "N47",
    image: gjorgji,
  },
];

const projects = [
  {
    name: "Share Me",
    description:
      "Web-based platform that allows users to login with Google, create a Pin, search for Pins, like a Pin, download it and more! This is social media clone app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "google auth",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: shareme,
    source_code_link: "https://github.com/aleksandromilenkov/shareMe",
    live_hosted_link: "https://shareme-aleksandro.netlify.app/",
  },
  {
    name: "Headphones E-Commerce",
    description:
      "E-commerce application created with Sanity and NextJS. This app integrates Stripe payment. The user can store products in a cart and pay them with stripe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: headphonesEcommerce,
    source_code_link:
      "https://github.com/aleksandromilenkov/headphonesECommerce",
    live_hosted_link: "https://headphones-e-commerce.vercel.app/",
  },
  {
    name: "YouTube Clone",
    description:
      "This is React application created with create-react-app for displaying videos of different categories. I'm using Material UI for styling the components. This app is also using Axios for fetching the videos from Rapid API which is free API for youtube videos.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeClone,
    source_code_link: "https://github.com/aleksandromilenkov/youtubeClone",
    live_hosted_link: "https://aleksandro-media.netlify.app/",
  },
  {
    name: "Today I Learned",
    description:
      "Web app created with ReactJS and Supabase backend for storing facts. The users can search, post and like a fact in different categories",
    tags: [
      {
        name: "reactJS",
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
    image: todayILearned,
    source_code_link: "https://github.com/aleksandromilenkov/TodayILearned",
    live_hosted_link: "https://todayilearned-aleksandro.netlify.app/",
  },
  {
    name: "Great Quotes",
    description:
      "Web app created with ReactJS and Firebase for storing and posting quotes",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: greatQuotes,
    source_code_link: "https://github.com/aleksandromilenkov/GreatQuotes",
    live_hosted_link: "https://greatquotes-aleksandro.netlify.app",
  },
  {
    name: "Body Art Gym App",
    description:
      "This is React application for gym named 'Body Art' based in Sveti Nikole, Macedonia. The app is made for searching exercises, watch gifs and videos of how to do those exercises, read about the exercises for all body parts. I'm using Material UI for the styling, I'm fetching the data from Rapid API",
    tags: [
      {
        name: "ReactJS",
        color: "orange-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "green-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "blue-text-gradient",
      },
    ],
    image: bodyArt,
    source_code_link: "https://github.com/aleksandromilenkov/bodyArt",
    live_hosted_link: "https://bodyart-svetinikole.netlify.app/",
  },
  {
    name: "Forkify",
    description:
      "Vanilla JS app built with MVC model pattern. Users can search for a recipe, select servings, upload/create own recipe with own ingredients and everything else. The app is boundled with Parcel 2",
    tags: [
      {
        name: "vanillaJS",
        color: "orange-text-gradient",
      },
      {
        name: "parcel",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: forkify,
    source_code_link: "https://github.com/aleksandromilenkov/forkify",
    live_hosted_link: "https://aleksandro-forkify.netlify.app/",
  },
  {
    name: "Mapty",
    description:
      "Vanilla JS app with Leaflet library for interactive maps. This app request your location, you can then add your running trainings in the map where you running!",
    tags: [
      {
        name: "vanillaJS",
        color: "orange-text-gradient",
      },
      {
        name: "leafletJS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: mapty,
    source_code_link: "https://github.com/aleksandromilenkov/Mapty",
    live_hosted_link: "https://aleksandro-mapty.netlify.app/",
  },
  {
    name: "ATM App",
    description:
      "Vanilla JS app for manipulating with fictive money just like a Bank machine. There are 4 registered accounts and with one of them you can Log in. You can see the registered accounts by clicking the question mark (?) in the top right corner in the App. You can transfer money, request loan, close the account and more!",
    tags: [
      {
        name: "vanillaJS",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: atmapp,
    source_code_link: "https://github.com/aleksandromilenkov/atmApp",
    live_hosted_link: "https://atmapp-aleksandro.netlify.app/",
  },
  {
    name: "No-one game",
    description:
      "Vanilla JS Multiplayer game where you must not roll 1. The player who rolls 1 loses all his score(if not hold) and loses his turn. Who first gets 21 points wins!",
    tags: [
      {
        name: "vanillaJS",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: noonegame,
    source_code_link: "https://github.com/aleksandromilenkov/NoOneGame",
    live_hosted_link: "https://noonegame-aleksandro.netlify.app",
  },
  {
    name: "NextJS Meetups",
    description:
      "Next JS application with MongoDb backend. You can add a new meetup with all it's properties like street address, heading and picture.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "white-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: meetups,
    source_code_link: "https://github.com/aleksandromilenkov/NextJSMeetups",
    live_hosted_link: "https://next-js-meetups-aleksandromilenkov.vercel.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  educations,
};
