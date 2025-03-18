import Link from "next/link";
import { motion } from "framer-motion";
import { TbHexagonFilled } from "react-icons/tb";

interface TextProps {
  text: string;
  className?: string;
  size?: number;
  href?: string;
  animate?: boolean;
}

const offscreen = {
  translateX: "50%",
  opacity: 0,
  transition: {
    duration: 0.5,
    ease: [0.37, 0, 0.63, 1],
  },
};

const onscreen = {
  translateX: 0,
  opacity: 1,
  transition: {
    duration: 0.7,
    ease: [0, 0.55, 0.45, 1],
  },
};

const Text: React.FC<TextProps> = ({
  text,
  className,
  size = 8,
  href = "/",
  animate = true,
}) => {
  return (
    <motion.div
      initial={offscreen}
      whileInView={onscreen}
      viewport={animate ? { once: true, margin: "-100px" } : { once: true }}
      className="flex items-end gap-2 group"
    >
      <TbHexagonFilled
        className="text-redcolor opacity-100 group-hover:opacity-0 group-hover:transition-all group-hover:duration-100 group-hover:ease-in-out translate-x-1 group-hover:translate-x-10 mb-2"
        size={size}
      />
      <Link
        href={href}
        data-level={text}
        className={`relative text-lightprimary cursor-pointer before:transition-all before:duration-300 before:ease-in-out before:absolute before:content-[attr(data-level)] before:overflow-hidden before:w-0 before:whitespace-nowrap before:text-redcolor group-hover:before:w-full group-hover:text-transparent hover:delay-150 uppercase ${className}`}
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default Text;
