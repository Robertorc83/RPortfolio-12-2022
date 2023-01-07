import { useRef } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./navigation";
import { useOutletContext } from "@remix-run/react";

const sidebar = {
  open: (height = 500) => ({
    clipPath: `circle(${height}px at 10px 10px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 1140px 45px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Sidebar = () => {
  const containerRef = useRef(null);
  const isOpen = useOutletContext<any>();
  return (
    <motion.nav
      initial={false}
      animate={isOpen[0] ? "open" : "closed"}
      ref={containerRef}
      className="z-30"
    >
      <motion.div className="absolute top-5 z-30 right-0 bottom-0 w-full animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400" variants={sidebar} />
      <Navigation />
    </motion.nav>
  );
};
