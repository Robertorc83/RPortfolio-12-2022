import ProjectCard from "./projectCard"
import projects from "../data/projects"
import { motion } from "framer-motion"

type Props = {
    selectedId: string,
    setSelectedId: React.Dispatch<any>
}

export default function Projects({selectedId, setSelectedId}: Props){
    const onSetClick = (id:string) =>{
        console.log("id", id)
        setSelectedId(id)
    }
    return (
        <div className="mt-12 xl:mt-36 overflow-x-hidden w-screen">
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
            <div className="pb-20 lg:grid flex flex-col justify-center justify-items-center md:grid-cols-2">
                { projects.map(( elem ) => (
                        <ProjectCard key={elem.id} id={elem.id} title={elem.title} techStack={elem.techStack} color={elem.background} image={elem.image} selectedId={selectedId} setSelectedId={onSetClick} portrait={elem.portrait} solution={elem.solution}/>
                    )
                )}
                
            </div>
            <div className="flex justify-center mt-12">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ ease: "easeOut", duration: 2 }} 
                    className="font-monoton text-lg animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 px-8 py-2 xl:px-16 xl:py-6 rounded-lg tracking-widest"
                    ><p className="text-white">See More Projects</p>
                </motion.button>
            </div>
        </div>
    )
}