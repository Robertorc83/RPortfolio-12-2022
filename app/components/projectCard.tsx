import { AnimatePresence, motion } from "framer-motion"
import ProjectSection from "./projectSection"

type Props = {
    id: string,
    title: string,
    techStack: string,
    solution: string,
    image: string,
    selectedId: string,
    color: string,
    portrait: string
    setSelectedId: React.Dispatch<any>
}

export default function ProjectCard({id, title, techStack, solution, selectedId, setSelectedId, image, color, portrait}:Props){
    return(
        <div className={` ${selectedId === id ? "z-10" : "z-1"} overflow-hidden flex justify-center lg:relative pointer-events-auto`}>
            <motion.div 
                className=" w-[300px] md:w-[400px] max-w-2xl xl:max-w-4xl xl:w-[500px] lg:ml-16 h-full mt-36 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                onClick={() => setSelectedId(id)}    
            >
                <div className={`animate-text rounded-t-2xl bg-gradient-to-r ${color} flex justify-center py-10 xl:py-20`}>
                    <img 
                        src={image} 
                        alt="" 
                        className="h-24" 
                    />
                </div>
                <motion.div 
                    className="bg-white rounded-b-2xl"
                    layoutId={id} 
                >
                    <motion.h4 className={`p-5 font-monoton animate-text bg-gradient-to-r ${color} bg-clip-text text-lg text-transparent`}>{title}</motion.h4>
                    <motion.img 
                        src="" 
                        alt="" 
                    />
                    <motion.p>
                    </motion.p>
                </motion.div>
            </motion.div>
            <AnimatePresence initial={false}>
                { selectedId && (
                    <motion.div 
                    layoutId={selectedId} 
                    className={` z-20 ${ selectedId === id ? "bg-white pointer-events-auto fixed rounded-md max-w-3xl top-10 left-0 right-0 shadow-xl w-3/4 md:w-2/5 mx-auto h-48 overflow-y-scroll" : "hidden"}  `}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                        <div>
                            <div className="grid grid-cols-3 z-20 pointer-events-auto">
                                <div className="col-span-2">
                                    <motion.h4 className="font-monoton p-5">{title}</motion.h4>
                                </div>
                                <div className="flex justify-end z-20 cursor-pointer pointer-events-auto">
                                    <motion.button className="w-16 z-20 pointer-events-auto" onClick={() => setSelectedId(null)}>x</motion.button>
                                </div>
                            </div>
                            
                        </div>
                        <ProjectSection portrait={portrait} techStack={techStack} solution={solution} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        
    )
}