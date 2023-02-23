import { IsPost } from "~/types/types";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function PostCard({title, excerpt, slug, categories, featuredImage}: IsPost ){
    return(
        <div className="grid justify-items-center mt-24 lg:mt-56">
            <div className="flex justify-start lg:w-[900px] ">
                {categories && categories.map((category) => {
                        return (
                            <span className="font-bal font-bold animate-text bg-gradient-to-r from-slate-600 via-stone-700 to-slate-800 text-white xl:text-xl px-5 py-1 rounded-lg">{category.name}</span>
                        )
                })}
            </div>
            <div className=" mt-5 px-10 md:px-20 xl:px-40 flex justify-center w-full">
                <img src={`${featuredImage.url}`} className="rounded-lg object-cover h-48 w-96 lg:w-[900px] lg:h-[400px]" />
            </div>
            <div className="grid grid-cols-1 justify-items-center w-full items-center mt-5 text-center ">
                <h3 className="animate-text w-[300px] md:w-[600px] mt-5 bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent font-bold font-monoton lg:leading-snug tracking-widest xl:text-[28px]">{title}</h3>
                <div className="animate-text bg-gradient-to-r from-slate-600 via-stone-700 to-slate-800 px-5 w-[300px] md:w-[600px] xl:w-[900px] md:px-10 mt-5 rounded-lg xl:text-xl ">
                    <p className="text-white font-bal my-10 xl:my-16">{excerpt}</p>
                </div>
                <div className="mt-8">
                   <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ ease: "easeOut", duration: 2 }} 
                        className="font-monoton animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 px-8 py-2 xl:px-16 xl:py-3 xl:text-xl rounded-lg tracking-widest text-white"
                    >
                        <Link to={`${slug}`}>Read More</Link>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}