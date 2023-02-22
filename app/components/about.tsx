import { useState } from "react";
import tabs from "~/data/tabs";
import type { Tab } from "~/data/tabs"
import { useIsMedium } from "~/hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";

export default function About(){
    const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0])
    const isMedium = useIsMedium()
    return (
        <div className="mt-24 pb-20">
            <div className="flex justify-center lg:justify-end">
                <motion.h2 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={isMedium ?{ x: -100} : { x: 0}}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="  animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[60px] font-bold font-bal text-center mt-10">
                    About Me
                </motion.h2>
            </div>
            <div className="flex justify-center w-full">
                <motion.div 
                    className="px-10 lg:px-0 mt-24 flex flex-col justify-center lg:block"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    <motion.div>
                        <ul className="flex flex-row w-[400px] lg:w-[600px] animate-text bg-gradient-to-r from-slate-600 via-stone-700 to-slate-800 rounded-t-lg">
                        {tabs.map((item) => (
                            <li
                            key={item.label}
                            className={`${item === selectedTab ? "bg-slate-400 text-black" : "text-white"} w-[400px] lg:w-[600px] rounded-t-md px-3 py-5`}
                            onClick={() => setSelectedTab(item)}
                            >
                                <p className="font-monoton text-sm lg:text-base">{item.label}</p>
                                {item === selectedTab ? (
                                    <motion.div className="underline" layoutId="underline" />
                                ) : null}
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                    <div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                className="bg-white h-[600px] xl:h-[500px] w-[400px] lg:w-[600px] rounded-b-lg"
                                key={selectedTab ? selectedTab.label : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {selectedTab ? selectedTab.component : ""}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}