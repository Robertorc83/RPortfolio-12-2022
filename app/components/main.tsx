import { motion } from "framer-motion";

export default function Main(){
    return(
        <div>
          <div className="grid grid-cols-12 ml-24 mt-24 overflow-hidden">
            <div className="col-span-8">
              <motion.h2 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ x: 100 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[60px] font-bold font-bal ">
                  I love creating awesome digital experiences and innovative products
              </motion.h2>
            </div> 
          </div>
          <motion.div 
            animate={{ x: -80 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="absolute top-96 right-10">
              <img src="/peace3d.png" className="h-36" alt="" />
          </motion.div>
        </div>
    )
}