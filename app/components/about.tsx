import { motion } from "framer-motion";

export default function about(){
    return (
        <div className="mt-24">
            <div className="flex justify-start">
                <motion.h2 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ x: 100}}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[60px] font-bold font-bal text-center mt-10">
                    About Me
                </motion.h2>
            </div>
        </div>
    )
}