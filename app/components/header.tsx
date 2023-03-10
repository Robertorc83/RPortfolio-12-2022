import { motion } from "framer-motion";
import { useIsMedium } from '~/hooks/useMediaQuery';
import { Divide as Hamburger } from 'hamburger-react';
import { Link, useOutletContext } from "@remix-run/react";

export default function Header() {
    const toggleOpen = useOutletContext<any>();
    const isMedium = useIsMedium();
  return (
    <header className="w-full">
        <div className="grid grid-cols-2 mt-5">
            <motion.div 
                className="ml-4 md:ml-10 text-sm md:text-lg text-white font-monoton cursor-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isMedium ? { x: 60 } : { x:20}}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <Link to="/" className="block">ROBERTO ESPINOZA</Link>
                <Link to="/" className="tracking-wide block">FULL-STACK DEVELOPER</Link>
            </motion.div>
            <motion.div 
                className="ml-10 text-lg h-8 md:h-8 flex justify-end pr-16 relative z-40"
                whileTap={{ scale: 0.9 }}
                animate={isMedium ? { x: -3 } : { x:0 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <Hamburger onToggle={toggleOpen[1]} size={28} color="#fff" easing="ease-in" rounded />
            </motion.div >
        </div>
    </header>
  )
}