import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";
import items from "~/data/menuItems";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul 
     variants={variants}
     className="absolute px-10 md:p-10 w-72 flex flex-col space-y-12 xl:space-y-24"
  >
    {items.map(i => (
      // eslint-disable-next-line react/jsx-key
      <MenuItem key={i.id} id={i.id} title={i.title} url={i.url}/>
    ))}
  </motion.ul>
);


