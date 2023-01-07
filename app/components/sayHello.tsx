import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function Contact(){
    return (
        <div className="pb-20">
            <div className="text-center overflow-hidden">
                <motion.h2 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[60px] font-bold font-bal text-center mt-10">
                    Get in touch
                </motion.h2>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    <p className="font-monoton text-lg text-white tracking-widest mt-10">
                        Always <br/>
                        looking <br/>
                        for <br/>
                        new <br/>
                        challenges!
                    </p>
                </motion.div>
                <div className="flex justify-center mt-12">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ ease: "easeOut", duration: 2 }} 
                        className="font-monoton text-2xl animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 px-8 py-2 rounded-lg tracking-widest"
                        ><Link to="/contact" className="text-white">Say Hello</Link>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}