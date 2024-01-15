import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Milind Kumar Mishra",
  initials: "MM",
  location: "Dhanbad, IN",
  locationLink: "https://www.google.com/maps/place/dhanbad",
  about: "Building better web experiences ✨",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead a team effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, Next.js and Express.js. I have over [2+ years] of experience in working in offices and remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/28717686?v=4",
  personalWebsiteUrl: "https://milindmishra.com",
  contact: {
    email: "milindmishra4@gmail.com",
    tel: "+919631333128",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/thatbeautifuldream",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mishramilind/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/milindstwt",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National Yang Ming Chao Tung University",
      degree: "Short Term Research Program",
      start: "2023",
      end: "2023",
    },
    {
      school: "Visvesvaraya Technological University",
      degree: "Bachelor's Degree in Electronics and Communication",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Startup Hire",
      link: "https://startuphire.com",
      badges: ["Remote, US"],
      title: "Lead Sofware Engineer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Locus Connect",
      link: "https://locusconnect.com",
      badges: ["Hsinchu, Taiwan"],
      title: "Frontend Engineer → Full Stack Engineer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "iNeuron.ai",
      link: "https://ineuron.ai/",
      badges: ["Bangalore, India"],
      title: "UX Designer → UI Developer",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2022",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js/Express.js/Hono",
    "GraphQL",
    "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
