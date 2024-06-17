import React from "react";
import Link from "next/link";
import {
  FaBattleNet,
  FaCodepen,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Links = [
  {
    href: "https://www.linkedin.com/in/saikat-samanta-766041226",
    text: "Linkedin",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/psykat1116",
    text: "Github",
    icon: FaGithub,
  },
  {
    href: "https://codepen.io/psykat1611",
    text: "Codepen",
    icon: FaCodepen,
  },
  {
    href: "https://cssbattle.dev/player/psykat_1611",
    text: "CSS Battle",
    icon: FaBattleNet,
  },
  {
    href: "https://twitter.com/SaikatS00388391",
    text: "Twitter",
    icon: FaXTwitter,
  },
];

const ExternalLink = () => {
  return (
    <div className="flex items-center justify-between gap-5 text-xl">
      {Links.map((link, index) => (
        <div key={index}>
          <Link
            href={link.href}
            target="_blank"
            className="uppercase hidden sm:block"
          >
            {link.text}
          </Link>
          <Link
            href={link.href}
            target="_blank"
            className="uppercase block sm:hidden"
          >
            <link.icon />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ExternalLink;
