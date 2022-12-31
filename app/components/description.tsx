import { motion } from "framer-motion";

export default function Description(){
    return (
        <div className="h-96 mt-56 pb-20 overflow-hidden grid grid-cols-2">
          <div className="px-20 mt-10 text-white text-lg ">
            <motion.p
              className="font-monoton tracking-widest"
              animate={{ x: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
            >
                Software developer, passionate about tech and innovation with 3+ years of experience in the tech ecosystem, with technologies like React.js, Next.js, Node.js, Typescript, and AWS. 
            </motion.p>
          </div>
          <motion.div 
            animate={{ x: -20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="w-[550px] h-72 absolute right-10 ">
              <img src="/codeEditor3d.png" alt="" />
          </motion.div>
        </div>
    )
}