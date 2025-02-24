import { IconType } from "react-icons";
import { CiStreamOn } from "react-icons/ci";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { RiBox3Fill, RiNextjsFill } from "react-icons/ri";
import {
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
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
  SiDrizzle,
} from "react-icons/si";
import {
  TbBrandCpp,
  TbBrandDatabricks,
  TbBrandOauth,
  TbSql,
} from "react-icons/tb";

export type Field = {
  name: string;
  icon: IconType;
};

export type SkillType = {
  category:
    | "Language"
    | "Database"
    | "ORM"
    | "Frontend"
    | "Backend"
    | "Tools"
    | "BAAS"
    | "Authentication"
    | "Storage"
    | "Websocket"
    | "Payment";
  fields: Field[];
};

export const SkillData: SkillType[] = [
  {
    category: "Language",
    fields: [
      {
        name: "C/C++",
        icon: TbBrandCpp,
      },
      {
        name: "Python",
        icon: FaPython,
      },
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "SQL",
        icon: TbSql,
      },
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "Javascript",
        icon: BiLogoJavascript,
      },
      {
        name: "Typescript",
        icon: BiLogoTypescript,
      },
    ],
  },
  {
    category: "Frontend",
    fields: [
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
      {
        name: "React JS",
        icon: FaReact,
      },
      {
        name: "Next JS",
        icon: RiNextjsFill,
      },
      {
        name: "Tailwind CSS",
        icon: BiLogoTypescript,
      },
      {
        name: "SASS",
        icon: FaSass,
      },
      {
        name: "Material UI",
        icon: SiMui,
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
      },
      {
        name: "Shadcn UI",
        icon: SiShadcnui,
      },
    ],
  },
  {
    category: "Backend",
    fields: [
      {
        name: "Node JS",
        icon: FaNode,
      },
      {
        name: "Express JS",
        icon: SiExpress,
      },
      {
        name: "EJS",
        icon: SiEjs,
      },
    ],
  },
  {
    category: "Database",
    fields: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "PostgreSQL",
        icon: BiLogoPostgresql,
      },
      {
        name: "CockroachDB",
        icon: SiCockroachlabs,
      },
      {
        name: "Neon DB",
        icon: TbBrandDatabricks,
      },
    ],
  },
  {
    category: "ORM",
    fields: [
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
      },
      {
        name: "Drizzle",
        icon: SiDrizzle,
      },
    ],
  },
  {
    category: "Tools",
    fields: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
    ],
  },
  {
    category: "BAAS",
    fields: [
      {
        name: "Supabase",
        icon: SiSupabase,
      },
      {
        name: "Convex",
        icon: TbBrandDatabricks,
      },
    ],
  },
  {
    category: "Authentication",
    fields: [
      {
        name: "Clerk",
        icon: SiClerk,
      },
      {
        name: "OAuth",
        icon: TbBrandOauth,
      },
      {
        name: "Next Auth",
        icon: SiAuth0,
      },
    ],
  },
  {
    category: "Storage",
    fields: [
      {
        name: "Cloudinary",
        icon: SiCloudinary,
      },
      {
        name: "Uploadthing",
        icon: BsCloudArrowUpFill,
      },
      {
        name: "Edgestore",
        icon: RiBox3Fill,
      },
    ],
  },
  {
    category: "Payment",
    fields: [
      {
        name: "Stripe",
        icon: FaStripe,
      },
      {
        name: "Razorpay",
        icon: SiRazorpay,
      },
    ],
  },
  {
    category: "Websocket",
    fields: [
      {
        name: "Socket.IO",
        icon: SiSocketdotio,
      },
      {
        name: "LiveKit",
        icon: CiStreamOn,
      },
    ],
  },
];
