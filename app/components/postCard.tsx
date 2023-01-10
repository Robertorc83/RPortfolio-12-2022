import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function PostCard(){
    return(
        <div className="grid md:grid-cols-2 justify-items-center mt-24 xl:mt-48 md:px-20 md:space-x-16 xl:px-40">
            <div>
                <img src="/reactjs.png" alt="" className="rounded-lg" />
            </div>
            <div className="grid grid-cols-1 justify-items-center md:justify-end md:absolute md:pr-72 xl:pr-72 w-full items-center mt-5 md:mt-0 text-center md:text-end ">
                <h5 className="font-bal font-bold text-white md:justify-self-end xl:text-2xl">React.js</h5>
                <h3 className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent font-bold font-monoton md:leading-snug tracking-widest md:justify-self-end xl:text-[30px]">What is React fiber?</h3>
                <div className="animate-text bg-gradient-to-r from-slate-600 via-stone-700 to-slate-800 px-5 w-96 md:w-[600px] xl:w-[900px] md:px-10 xl:ml-[720px] md:ml-96 mt-5 rounded-lg xl:text-xl ">
                    <p className="text-white font-bal my-10 xl:my-16">React Fiber is an internal engine change geared to make React faster and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React's reconciliation algorithm to solve some long-standing issues in React</p>
                </div>
                <div className="md:justify-self-end mt-5">
                   <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ ease: "easeOut", duration: 2 }} 
                        className="font-monoton animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 px-8 py-2 xl:px-16 xl:py-4 xl:text-2xl rounded-lg tracking-widest text-white"
                    >
                        <Link to="/blog/id">Read More</Link>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}