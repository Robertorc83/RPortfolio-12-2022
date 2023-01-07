import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function PostCard(){
    return(
        <div className="grid grid-cols-2 mt-24 px-20 space-x-16">
            <div>
                <img src="/reactjs.png" alt="" className="rounded-lg" />
            </div>
            <div className="grid grid-cols-1 justify-end absolute pr-72 w-full items-center">
                <h5 className=" font-bal font-bold text-white justify-self-end">React.js</h5>
                <h3 className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent font-bold font-monoton leading-snug tracking-widest justify-self-end">What is React fiber?</h3>
                <div className="animate-text bg-gradient-to-r from-slate-600 via-stone-700 to-slate-800 w-[600px] px-10 ml-96 mt-5 rounded-lg">
                    <p className="text-white font-bal my-10">React Fiber is an internal engine change geared to make React faster and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React's reconciliation algorithm to solve some long-standing issues in React</p>
                </div>
                <div className="justify-self-end mt-5">
                   <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ ease: "easeOut", duration: 2 }} 
                        className="font-monoton animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 px-8 py-2 rounded-lg tracking-widest text-white"
                    >
                        <Link to="/blog/id">Read More</Link>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}