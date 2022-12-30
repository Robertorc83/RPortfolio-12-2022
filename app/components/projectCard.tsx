import { AnimatePresence, motion } from "framer-motion"

type Props = {
    title: string,
    description: string,
    image: string,
    selectedId: string,
    setSelectedId: React.Dispatch<any>
}

export default function ProjectCard({title, description, selectedId, setSelectedId, image}:Props){
    
    return(
        <div className="overflow-hidden">
            <div className="max-w-sm ml-16 mt-20 min-h-max">
                <div className="rounded-t-2xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 flex justify-center py-10">
                    <img src="/psicoauto.png" alt="" className="h-24" />
                </div>
                <motion.div layoutId={"1"} onClick={() => setSelectedId("1")} className="bg-white cursor-pointer rounded-b-2xl">
                    <motion.h4 className="p-5 font-monoton animate-text bg-gradient-to-r from-amber-500 via-red-500 to-orange-500 bg-clip-text text-lg text-transparent">{title}</motion.h4>
                    <motion.img src="" alt="" />
                    <motion.p></motion.p>
                </motion.div>
            </div>
            <AnimatePresence>
                { selectedId && (
                    <motion.div layoutId={selectedId} className="bg-white fixed rounded-md max-w-sm top-36 left-0 right-0 shadow-xl w-3/4 md:w-2/5 mx-auto h-48">
                        <div className="grid grid-cols-3">
                            <div className="col-span-2">
                                <motion.h4 className="font-monoton p-5">{title}</motion.h4>
                            </div>
                            <div className="flex justify-end">
                                <motion.button className="w-16" onClick={() => setSelectedId(null)}>x</motion.button>
                            </div>
                        </div>
                        <motion.p>{description}</motion.p>
                        
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        
    )
}