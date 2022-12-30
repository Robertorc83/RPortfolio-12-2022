import { Divide as Hamburger } from 'hamburger-react';
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full">
        <div className="grid grid-cols-2 mt-5">
            <motion.div 
                className="ml-10 text-lg text-white font-monoton cursor-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ x: 60 }}
                transition={{ ease: "easeOut", duration: 2 }}
                >
                <h3 >ROBERTO ESPINOZA</h3>
                <h3 className="tracking-wide">FULL-STACK DEVELOPER</h3>
            </motion.div>
            <motion.div 
                className="ml-10 text-lg h-10 flex justify-end pr-16"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ x: -50 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <Hamburger color="#131a29" easing="ease-in" rounded />
            </motion.div >
        </div>
    </header>
  )
}