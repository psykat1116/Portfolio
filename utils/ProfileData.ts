import { IconType } from "react-icons";
import { FaBattleNet, FaGithub, FaLinkedin } from "react-icons/fa6";
import { GiHorseHead } from "react-icons/gi";
import {
  SiCodechef,
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";

export type ProfileType = {
  name: string;
  url: string;
  icon?: IconType;
};

export const ProfileData: ProfileType[] = [
  {
    name: "Leetcode",
    url: "https://leetcode.com/u/saikat1116/",
    icon: SiLeetcode,
  },
  {
    name: "Codechef",
    url: "https://www.codechef.com/users/saikat1116",
    icon: SiCodechef,
  },
  {
    name: "Codeforce",
    url: "https://codeforces.com/profile/saikat_1116",
    icon: SiCodeforces,
  },
  {
    name: "Atcoder",
    url: "https://atcoder.jp/users/saikat_1116",
    icon: GiHorseHead,
  },
  {
    name: "Geeks For Geeks",
    url: "https://www.geeksforgeeks.org/user/ss25nvhb/",
    icon: SiGeeksforgeeks,
  },
  {
    name: "Github",
    url: "https://github.com/psykat1116",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/saikat-samanta-766041226/",
    icon: FaLinkedin,
  },
  {
    name: "CSS Battle",
    url: "https://cssbattle.dev/player/AWYri46UxIZ9JfCWkVIWUW1MQeP2",
    icon: FaBattleNet,
  },
];
