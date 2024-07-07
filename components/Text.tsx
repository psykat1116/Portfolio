import Link from "next/link";

import { TbHexagonFilled } from "react-icons/tb";

interface TextProps {
  text: string;
  className?: string;
  size?: number;
  href: string;
}

const Text: React.FC<TextProps> = ({ text, className, size = 16, href }) => {
  return (
    <div className="flex items-end gap-2 group">
      <TbHexagonFilled
        className="text-redcolor opacity-100 mb-3 group-hover:opacity-0 group-hover:transition-all group-hover:duration-100 group-hover:ease-in-out translate-x-0 group-hover:translate-x-10"
        size={size}
      />
      <Link
        href={href}
        data-level={text}
        className={`relative cursor-pointer before:transition-all before:duration-300 before:ease-in-out before:absolute before:content-[attr(data-level)] before:overflow-hidden before:w-0 before:whitespace-nowrap before:text-redcolor group-hover:before:w-full hover:text-transparent hover:delay-150 uppercase ${className}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Text;
