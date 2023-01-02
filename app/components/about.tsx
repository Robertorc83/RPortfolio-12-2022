import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import tabs from "~/data/about";
import type { Tab } from "~/data/about"


export default function About(){
    const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0])
    return (
        <div className="mt-24 pb-20">
            <div className="flex justify-end">
                <motion.h2 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ x: -100}}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[60px] font-bold font-bal text-center mt-10">
                    About Me
                </motion.h2>
            </div>
            <motion.div 
                className=" w-3/4 ml-36 mt-24"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <nav>
                    <ul className="flex flex-row w-full animate-text bg-gradient-to-r from-slate-600 via-stone-700 to-slate-800 rounded-t-lg">
                    {tabs.map((item) => (
                        <li
                        key={item.label}
                        className={`${item === selectedTab ? "bg-slate-400 text-black" : "text-white"} w-full rounded-t-md px-3 py-5`}
                        onClick={() => setSelectedTab(item)}
                        >
                            <p className="font-monoton">{`${item.label}`}</p>
                            {item === selectedTab ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                    </ul>
                </nav>
                <div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            className="bg-white w-full h-[300px]"
                            key={selectedTab ? selectedTab.label : "empty"}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {selectedTab ? selectedTab.icon : "😋"}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    )
}