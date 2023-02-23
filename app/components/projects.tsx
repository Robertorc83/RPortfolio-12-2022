import ProjectCard from "./projectCard"
import projects from "../data/projects"
import { motion } from "framer-motion"
import { useIsMedium } from "~/hooks/useMediaQuery"

type Props = {
    selectedId: string,
    setSelectedId: React.Dispatch<any>
}

export default function Projects({selectedId, setSelectedId}: Props){
    const isMedium = useIsMedium();
    return (
        <div className="mt-12 xl:mt-36 overflow-x-hidden w-screen">
            <div className="flex justify-center lg:justify-start">
                <motion.h2 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={isMedium ? { x: 100} : { x: 0} }
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[35px] md:text-[60px] font-bold font-bal text-center mt-10">
                    Projects
                </motion.h2>
            </div>
            <div className="pb-20 lg:grid flex flex-col justify-center justify-items-center md:grid-cols-2">
                { projects.map(( elem ) => (
                        <ProjectCard key={elem.id} id={elem.id} title={elem.title} techStack={elem.techStack} color={elem.background} image={elem.image} selectedId={selectedId} setSelectedId={setSelectedId} portrait={elem.portrait} solution={elem.solution}/>
                    )
                )}
                
            </div>
            <div className="flex justify-center mt-12">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ ease: "easeOut", duration: 2 }} 
                    className="font-monoton text-lg animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 px-8 py-2 xl:px-16 xl:py-6 rounded-lg tracking-widest"
                    ><a href="https://github.com/Robertorc83?tab=repositories" target="_blank" className="block text-white">See More Projects</a>
                </motion.button>
            </div>
        </div>
    )
}