import { IconType } from "react-icons";
import {
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { CiStreamOn } from "react-icons/ci";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNode,
  FaPython,
  FaReact,
  FaSass,
  FaStripe,
} from "react-icons/fa6";
import { RiBox3Fill, RiNextjsFill } from "react-icons/ri";
import {
  SiAuth0,
  SiClerk,
  SiCloudinary,
  SiCockroachlabs,
  SiEjs,
  SiExpress,
  SiFigma,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiMysql,
  SiPostman,
  SiPrisma,
  SiRazorpay,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
} from "react-icons/si";
import {
  TbBrandCpp,
  TbBrandDatabricks,
  TbBrandOauth,
  TbSql,
} from "react-icons/tb";

export type TechCategoryType = {
  title: string;
  url: string;
};

export const TechCategoryData: TechCategoryType[] = [
  {
    title: "Frontend",
    url: "frontend",
  },
  {
    title: "Backend",
    url: "backend",
  },
  {
    title: "Database",
    url: "database",
  },
  {
    title: "Language",
    url: "language",
  },
  {
    title: "Tools",
    url: "tools",
  },
  {
    title: "ORM",
    url: "orm",
  },
  {
    title: "BAAS",
    url: "baas",
  },
  {
    title: "Authentication",
    url: "auth",
  },
  {
    title: "File Storage",
    url: "storage",
  },
  {
    title: "Payment",
    url: "payment",
  },
  {
    title: "Websocket",
    url: "websocket",
  },
];

export type SkillType = {
  name: string;
  category:
    | "language"
    | "database"
    | "orm"
    | "frontend"
    | "backend"
    | "tools"
    | "baas"
    | "auth"
    | "storage"
    | "websocket"
    | "payment";
  icon: IconType;
};

export const SkillData: SkillType[] = [
  {
    name: "C/C++",
    category: "language",
    icon: TbBrandCpp,
  },
  {
    name: "Python",
    category: "language",
    icon: FaPython,
  },
  {
    name: "Java",
    category: "language",
    icon: FaJava,
  },
  {
    name: "SQL",
    category: "language",
    icon: TbSql,
  },
  {
    name: "HTML",
    category: "language",
    icon: FaHtml5,
  },
  {
    name: "Javascript",
    category: "language",
    icon: BiLogoJavascript,
  },
  {
    name: "Typescript",
    category: "language",
    icon: BiLogoTypescript,
  },
  {
    name: "CSS",
    category: "frontend",
    icon: FaCss3Alt,
  },
  {
    name: "React JS",
    category: "frontend",
    icon: FaReact,
  },
  {
    name: "Next JS",
    category: "frontend",
    icon: RiNextjsFill,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: BiLogoTypescript,
  },
  {
    name: "SASS",
    category: "frontend",
    icon: FaSass,
  },
  {
    name: "Material UI",
    category: "frontend",
    icon: SiMui,
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: FaBootstrap,
  },
  {
    name: "Shadcn UI",
    category: "frontend",
    icon: SiShadcnui,
  },
  {
    name: "Node JS",
    category: "backend",
    icon: FaNode,
  },
  {
    name: "Express JS",
    category: "backend",
    icon: SiExpress,
  },
  {
    name: "EJS",
    category: "backend",
    icon: SiEjs,
  },
  {
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
  },
  {
    name: "MySQL",
    category: "database",
    icon: SiMysql,
  },
  {
    name: "PostgreSQL",
    category: "database",
    icon: BiLogoPostgresql,
  },
  {
    name: "CockroachDB",
    category: "database",
    icon: SiCockroachlabs,
  },
  {
    name: "Prisma",
    category: "orm",
    icon: SiPrisma,
  },
  {
    name: "Mongoose",
    category: "orm",
    icon: SiMongoose,
  },
  {
    name: "Git",
    category: "tools",
    icon: FaGitAlt,
  },
  {
    name: "Postman",
    category: "tools",
    icon: SiPostman,
  },
  {
    name: "Figma",
    category: "tools",
    icon: SiFigma,
  },
  {
    name: "Supabase",
    category: "baas",
    icon: SiSupabase,
  },
  {
    name: "Convex",
    category: "baas",
    icon: TbBrandDatabricks,
  },
  {
    name: "Clerk",
    category: "auth",
    icon: SiClerk,
  },
  {
    name: "OAuth",
    category: "auth",
    icon: TbBrandOauth,
  },
  {
    name: "Next Auth",
    category: "auth",
    icon: SiAuth0,
  },
  {
    name: "Cloudinary",
    category: "storage",
    icon: SiCloudinary,
  },
  {
    name: "Uploadthing",
    category: "storage",
    icon: BsCloudArrowUpFill,
  },
  {
    name: "Edgestore",
    category: "storage",
    icon: RiBox3Fill,
  },
  {
    name: "Socket.IO",
    category: "websocket",
    icon: SiSocketdotio,
  },
  {
    name: "Stripe",
    category: "payment",
    icon: FaStripe,
  },
  {
    name: "Razorpay",
    category: "payment",
    icon: SiRazorpay,
  },
  {
    name: "LiveKit",
    category: "websocket",
    icon: CiStreamOn,
  },
  {
    name: "Neon DB",
    category: "database",
    icon: TbBrandDatabricks,
  },
];
