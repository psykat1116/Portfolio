import { IconType } from "react-icons";
import {
  RiBox3Fill,
  RiEmojiStickerFill,
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
  RiUnsplashFill,
} from "react-icons/ri";
import {
  BiLogoJavascript,
  BiLogoStripe,
  BiLogoTypescript,
  BiSolidColor,
} from "react-icons/bi";
import {
  SiFramer,
  SiChartdotjs,
  SiPrisma,
  SiMongodb,
  SiAuth0,
  SiAxios,
  SiLeaflet,
  SiCloudinary,
  SiReact,
  SiClerk,
  SiShadcnui,
  SiHiveBlockchain,
  SiZod,
  SiCockroachlabs,
  SiLodash,
  SiRadixui,
  SiFormspree,
} from "react-icons/si";
import { TbBrandReact, TbBrandDatabricks, TbDragDrop } from "react-icons/tb";
import { PiConfettiFill } from "react-icons/pi";
import { FaHtml5, FaCss3, FaBell } from "react-icons/fa6";
import { MdViewKanban } from "react-icons/md";

export type Stack = {
  name: string;
  icon: IconType;
};

export type Project = {
  title: string;
  techStack: Stack[];
  description: string;
  src: string;
  website: string;
  gitUrl: string;
};

export const projects: Project[] = [
  {
    title: "Modern Periodic Table",
    techStack: [
      { name: "Next JS", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Typescript", icon: BiLogoTypescript },
      { name: "Framer Motion", icon: SiFramer },
      { name: "React Icons", icon: TbBrandReact },
      { name: "TS Particle", icon: PiConfettiFill },
      { name: "React ChartJS", icon: SiChartdotjs },
    ],
    description:
      "A Beautiful, Responsive Periodic Table Web Application made using Next JS 13, Tailwind CSS, Framer Motion, Lottie Flies, Typescript.",
    src: "/Image/Periodic_Table.png",
    website: "https://modern-periodic-table.vercel.app/",
    gitUrl: "https://github.com/psykat1116/Modern_Periodic_Table",
  },
  {
    title: "Airbnb Clone",
    techStack: [
      { name: "Next JS", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Typescript", icon: BiLogoTypescript },
      { name: "Prisma", icon: SiPrisma },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Next Auth", icon: SiAuth0 },
      { name: "Axios", icon: SiAxios },
      { name: "Leaflet", icon: SiLeaflet },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "React Form", icon: SiReact },
      { name: "Zustand", icon: SiReact },
    ],
    description:
      "Airbnb Clone Is a Clone Website Of The Famouse Hotel Booking Site Airbnb Made Using NextJS 13, Tailwind CSS, Prisma, MongoDB, Next Auth And Much More.",
    src: "/Image/Airbnb.png",
    website: "https://airbnb-psi-liart.vercel.app/",
    gitUrl: "https://github.com/psykat1116/Airbnb",
  },
  {
    title: "Mindcanavs",
    techStack: [
      { name: "Next JS", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Typescript", icon: BiLogoTypescript },
      { name: "Convex", icon: TbBrandDatabricks },
      { name: "Clerk", icon: SiClerk },
      { name: "Zustand", icon: SiReact },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Edgestore", icon: RiBox3Fill },
      { name: "Blocknote", icon: SiHiveBlockchain },
      { name: "Zod", icon: SiZod },
      { name: "Emoji Picker", icon: RiEmojiStickerFill },
    ],
    description:
      "MindCanvas is a versatile and powerful workspace that combines notes, tasks, databases in a single platform. Designed to streamline your workflow and boost productivity, MindCanvas allows you to capture your thoughts, manage projects. With customizable templates, rich text formatting.",
    src: "/Image/Mindcanvas.png",
    website: "https://mind-canvas-one.vercel.app/",
    gitUrl: "https://github.com/psykat1116/MindCanvas",
  },
  {
    title: "Acadeva",
    techStack: [
      { name: "Next JS", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Typescript", icon: BiLogoTypescript },
      { name: "Prisma", icon: SiPrisma },
      { name: "CockroachDB", icon: SiCockroachlabs },
      { name: "Clerk", icon: SiClerk },
      { name: "Stripe", icon: BiLogoStripe },
    ],
    description:
      "It is Learning Management System Website Similarly like Udemy Made Using NextJS 13, Tailwind CSS, Typescript, Stripe, Clerk Authentication, Mux Video Player, PostgreSQL, Prisma ORM",
    src: "/Image/Acadeva.png",
    website: "https://acadeva-six.vercel.app/",
    gitUrl: "https://github.com/psykat1116/Acadeva",
  },
  {
    title: "Planit",
    techStack: [
      { name: "Next JS", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Typescript", icon: BiLogoTypescript },
      { name: "Prisma", icon: SiPrisma },
      { name: "CockroachDB", icon: SiCockroachlabs },
      { name: "Clerk", icon: SiClerk },
      { name: "Stripe", icon: BiLogoStripe },
      { name: "Sonner", icon: FaBell },
      { name: "Unsplash API", icon: RiUnsplashFill },
      { name: "Zod", icon: SiZod },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Kanban Board", icon: MdViewKanban },
      { name: "Lodash", icon: SiLodash },
      { name: "Drag and Drop", icon: TbDragDrop },
    ],
    description:
      "Planit is a powerful project management tool designed to help you organize, prioritize, and track your tasks with ease. With its intuitive kanban-style boards, Planit allows teams and individuals to visualize their projects, collaborate in real-time, and stay on top of deadlines.",
    src: "/Image/Planit.png",
    website: "https://planit-liart.vercel.app/",
    gitUrl: "https://github.com/psykat1116/Planit",
  },
  {
    title: "Spotify Clone",
    techStack: [
      { name: "Next JS", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Typescript", icon: BiLogoTypescript },
      { name: "Supabase", icon: RiSupabaseFill },
      { name: "Stripe", icon: BiLogoStripe },
      { name: "Zustand", icon: SiReact },
      { name: "Radix UI", icon: SiRadixui },
    ],
    description:
      "It is a clone website of the famous music streaming website known as Spotify made using Next JS, Tailwind CSS, Typescript, Supabase.",
    src: "/Image/Spotify.png",
    website: "https://spotify-iota-three.vercel.app/",
    gitUrl: "https://github.com/psykat1116/Spotify",
  },
  {
    title: "Color World",
    techStack: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "Javascript", icon: BiLogoJavascript },
      { name: "Color Palette", icon: BiSolidColor },
    ],
    description:
      "All Shades Of Colors Pallet Categorized in Different Ways For Designing UI Using HTML, CSS, JS.",
    src: "/Image/Color_World.png",
    website: "https://psykat1116.github.io/Color-World/",
    gitUrl: "https://github.com/psykat1116/Color-World",
  },
  {
    title: "Thread Clone",
    techStack: [
      { name: "Typecript", icon: BiLogoTypescript },
      { name: "Zustand", icon: SiReact },
      { name: "Clerk", icon: SiClerk },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Next JS", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
    ],
    description:
      "New Popular Social Media Thread Clone Using The Modern NextJS 13, Clerk, MongoDB, Shadcn UI and Much More.",
    src: "/Image/Thread.png",
    website: "https://thread-clone-silk.vercel.app/",
    gitUrl: "https://github.com/psykat1116/Thread",
  },
];
