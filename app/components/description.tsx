import { motion } from "framer-motion";
import { useIsMedium } from "~/hooks/useMediaQuery";

export default function Description(){
    const isMedium = useIsMedium();
    return (
        <div className="lg:h-96 lg:mt-10 xl:mt-36 pb-20 text-start overflow-hidden lg:grid lg:grid-cols-2">
          <div className=" lg:px-20 mt-10 text-white text-lg ">
            <motion.p
              className="p-8 lg:px-0 xl:text-2xl font-monoton tracking-widest text-center w-full lg:w-auto"
              animate={isMedium ? { x:20 } : { x:0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
            >
                Software developer, passionate about tech and innovation with 3+ years of experience in the tech ecosystem, with technologies like React.js, Next.js, Node.js, Typescript, and AWS. 
            </motion.p>
          </div>
          <motion.div 
            animate={isMedium ? { x:-20 } : { x:0 } }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="w-full mt-20 lg:mt-0 lg:w-[550px] h-72 flex justify-center lg:absolute right-10 ">
              <img src="/codeEditor3d.png" alt="" className="w-96 xl:w-[1000px] xl:h-[500px]"/>
          </motion.div>
        </div>
    )
}