import { motion } from "framer-motion";
import Header from "@components/header";
import Projects from "@components/projects";
import { useState } from "react";

export default function Index() {
  const [selectedId, setSelectedId] = useState<any>(null)
  return (
    <div className=" bg-gradient-to-r from-gray-900 to-gray-600 min-h-screen bg-cover mt-0 pt-5 relative" >
      <div className={` ${selectedId ? "blur-sm" : "" }`}>
        <Header/>
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
        <div className="h-96 mt-56 pb-20 overflow-hidden grid grid-cols-2">
          <div className="px-20 mt-10 text-white text-lg ">
            <motion.p
              className="font-monoton tracking-widest"
              animate={{ x: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
            >Software developer, passionate about tech and innovation with 3+ years of experience in the tech ecosystem, with technologies like React.js, Next.js, Node.js, Typescript, and AWS. </motion.p>
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
        <div className="flex justify-start">
          <motion.h2 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ x: 100}}
            transition={{ ease: "easeOut", duration: 2 }}
            className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[60px] font-bold font-bal text-center mt-10">
              Projects
          </motion.h2>
        </div>
      </div>
      <div className="mt-12">
        <Projects selectedId={selectedId} setSelectedId={setSelectedId}/>
      </div>
    </div>
  );
}
