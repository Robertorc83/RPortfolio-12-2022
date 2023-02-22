import { motion } from "framer-motion";
import type { MenuItm } from "../types/types";
import { Link, useOutletContext } from "@remix-run/react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = ({id, title, url}:MenuItm) => {
  const toggleOpen = useOutletContext<any>();
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      key={id}
      className={`relative z-30 ${  toggleOpen[0] === true ? "" : "pointer-events-none"}`}
    >
      <Link to={url} onClick={toggleOpen[1]} className="font-monoton text-2xl xl:text-[30px] ml-10 text-white">{title}</Link>
    </motion.li>
  );
};
