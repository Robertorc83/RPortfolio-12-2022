import { motion } from "framer-motion";
import { useIsMedium } from "~/hooks/useMediaQuery";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Main(){
    const isMedium = useIsMedium()
    return(
        <div>
          <div className="grid grid-cols-12 ml-24 mt-16">
            <div className="col-span-8">
              <motion.h2 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isMedium ? {x: 100} : {x:10}}
                transition={{ ease: "easeOut", duration: 2 }}
                className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[40px] lg:text-[60px] font-bold font-bal h-[400px] lg:h-[300px] leading-snug ">
                  I love creating awesome digital experiences and innovative products
              </motion.h2>
              <div className="h-32 w-full lg:w-32 lg:mt-10 flex text-center lg:text-start justify-center lg:justify-start" >
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ x: 10 }}
                  transition={{ ease: "easeOut", duration: 1.8 }}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-white font-monoton h-8 px-5 cursor-pointer"/>
                </motion.p>
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ x: 10 }}
                  transition={{ ease: "easeOut", duration: 1.8 }}
                >
                  <FontAwesomeIcon icon={faGithub} className="text-white font-monoton h-8 px-5 cursor-pointer"/>
                </motion.p>
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ x: 10 }}
                  transition={{ ease: "easeOut", duration: 1.8 }}
                >
                  <FontAwesomeIcon icon={faFileLines} className="text-white font-monoton h-8 px-5 cursor-pointer"/>
                </motion.p>
              </div>
            </div> 
          </div>
          <motion.div 
            animate={{ x: -80 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="absolute top-64 right-10 lg:top-96 lg:right-10"
          >
              <img src="/peace3d.png" className="h-16 lg:h-36" alt="" />
          </motion.div>
        </div>
    )
}