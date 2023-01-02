import { motion } from "framer-motion";
import { useIsMedium } from '~/hooks/useMediaQuery';
import { Divide as Hamburger } from 'hamburger-react';

export default function Header() {
    const isMedium = useIsMedium();
  return (
    <header className="w-full">
        <div className="grid grid-cols-2 mt-5">
            <motion.div 
                className="ml-10 text-sm md:text-lg text-white font-monoton cursor-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isMedium ? { x: 60 } : { x:20}}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <h3 >ROBERTO ESPINOZA</h3>
                <h3 className="tracking-wide">FULL-STACK DEVELOPER</h3>
            </motion.div>
            <motion.div 
                className="ml-10 text-lg h-8 md:h-10 flex justify-end pr-16"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isMedium ? { x:-50 } : { x:-20}}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <Hamburger color="#131a29" easing="ease-in" rounded />
            </motion.div >
        </div>
    </header>
  )
}