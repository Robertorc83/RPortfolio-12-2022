import { motion } from "framer-motion";
import { useIsLarge } from "~/hooks/useMediaQuery";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Main(){
    const isLarge = useIsLarge();
    return(
        <div>
          <div className="grid lg:grid-cols-12 mt-16 h-full">
            <div className="col-span-8">
              <motion.h2 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isLarge ? { x: 100 } : { x:10 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="w-5/6 ml-16 lg:ml-24 lg:w-auto xl:mt-24 animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[60px] xl:text-[80px] font-bold font-bal h-[400px] lg:h-[350px] leading-snug ">
                  I love creating awesome digital experiences and innovative products
              </motion.h2>
              <div className="h-32 w-full lg:w-32 mt-20 lg:mt-0 lg:ml-20 xl:mt-36 flex text-center lg:text-start justify-center lg:justify-start" >
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ x: 10 }}
                  transition={{ ease: "easeOut", duration: 1.8 }}
                >
                  <a href="https://www.linkedin.com/in/robertoes/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="text-white font-monoton h-8 px-5 xl:h-14 cursor-pointer"/></a>
                </motion.p>
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ x: 10 }}
                  transition={{ ease: "easeOut", duration: 1.8 }}
                >
                  <a href="https://github.com/Robertorc83?tab=repositories" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="text-white font-monoton h-8 px-5 xl:h-14 cursor-pointer"/></a>
                </motion.p>
                <motion.p
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ x: 10 }}
                  transition={{ ease: "easeOut", duration: 1.8 }}
                >
                  <a href="https://drive.google.com/file/d/1ZCapCkvxm2O6o-SkKlmiY9sMEkrKEYTy/view?usp=sharing" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileLines} className="text-white font-monoton h-8 px-5 xl:h-14 cursor-pointer"/></a>
                </motion.p>
              </div>
            </div> 
          </div>
          <motion.div 
            animate={{ x: -80 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="hidden lg:block absolute top-64 right-10 lg:top-96 lg:right-10 xl:top-[650px]"
          >
              <img src="/peace3d.png" className="h-16 lg:h-36" alt="" />
          </motion.div>
        </div>
    )
}