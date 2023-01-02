import { AnimatePresence, motion } from "framer-motion"

type Props = {
    id: string,
    title: string,
    description: string,
    image: string,
    selectedId: string,
    color: string,
    setSelectedId: React.Dispatch<any>
}

export default function ProjectCard({id, title, description, selectedId, setSelectedId, image, color}:Props){
    return(
        <div className="overflow-hidden flex justify-center lg:block">
            <motion.div 
                className="w-96 lg:w-auto lg:max-w-sm lg:ml-16 mt-36 min-h-max"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
                <div className={`animate-text rounded-t-2xl bg-gradient-to-r ${color} flex justify-center py-10`}>
                    <img 
                        src={image} 
                        alt="" 
                        className="h-24" 
                    />
                </div>
                <motion.div 
                    layoutId={id} 
                    onClick={() => setSelectedId(id)} 
                    className="bg-white cursor-pointer rounded-b-2xl"
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