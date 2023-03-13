import { motion } from "framer-motion";
import { useIsMedium } from "~/hooks/useMediaQuery";
import ComputersCanvas from "./canvas/computer";

export default function Description(){
    const isMedium = useIsMedium();
    return (
        <div className="h-full lg:mt-10 xl:mt-36 text-start overflow-hidden">
          <div className=" lg:px-20 mt-10 text-white text-lg ">
            <motion.p
              className="p-8 lg:px-48 xl:px-96 xl:text-2xl font-monoton tracking-widest text-center w-full lg:w-auto"
              animate={isMedium ? { x:20 } : { x:0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
            >
                Software developer, passionate about tech and innovation with 3+ years of experience in the tech ecosystem, with technologies like React.js, Next.js, Node.js, Typescript, and AWS. 
            </motion.p>
          </div>
          <div className="mt-16">
            <ComputersCanvas />
            <h5 className="font-bal mt-16 text-white text-center">(Try rotate this image with your mouse)</h5>
          </div>
        </div>
    )
}