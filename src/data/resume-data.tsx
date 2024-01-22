import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  ParabolLogo,
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Milind Kumar Mishra",
  initials: "MM",
  location: "Dhanbad, IN",
  locationLink: "https://www.google.com/maps/place/dhanbad",
  about: "Building better web experiences ✨",
  summary:
    "As a Full Stack Engineer, I have successfully taken part in building MVPs. I lead team effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, Next.js and Express.js. I have over 2 years of software development experience.",
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
      start: "July 2023",
      end: "Jan 2024",
      description: `
      Designed and built the MVP (Recruitment Platform)  Hired and led a team of 4 engineers for the MVP. Technologies: Next.js, TypeScript, Kysely, Prisma, MySQL, TailwindCSS, Vercel.
      `,
    },
    {
      company: "Locus Connect",
      link: "https://locusconnect.com",
      badges: ["Hsinchu, Taiwan"],
      title: "Frontend Engineering Intern → Full Stack Engineer (Full Time)",
      logo: ClevertechLogo,
      start: "Sept 2022",
      end: "2023",
      description:
        "Built the Location as a Service (LaaS) platform to monitor tags in a anchor fit environment. Technologies: React.js, THREE.js, WebSockets.",
    },
    {
      company: "iNeuron.ai",
      link: "https://ineuron.ai/",
      badges: ["Bangalore, India"],
      title: "UX Designer → UI Developer",
      logo: JojoMobileLogo,
      start: "June 2022",
      end: "Aug 2022",
      description:
        "Designed multiple UI Screens for the in-house and vendors. Was a critical part in architecting Design Systems for the platform. Technologies: Figma, React.js, TailwindCSS.",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js", "Node.js/Express.js"],
  projects: [
    {
      title: "100xdocs",
      techStack: ["Side Project", "TypeScript", "Next.js", "MDX"],
      description: "Docs for everything technology",
      logo: ConsultlyLogo,
      link: {
        label: "100xdocs.com",
        href: "https://100xdocs.com/",
      },
    },
  ],
} as const;
