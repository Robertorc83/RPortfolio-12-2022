import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div className="mt-36 pb-20">
        <div className="justify-center mt-10 grid lg:grid-cols-3">   
            <div className="col-span-2 px-10 md:px-28 lg:px-0">
                <img src="/WorldMind.jpeg" alt="" className="h-full w-full rounded-2xl lg:rounded-none lg:rounded-r-2xl "/>
            </div>
            <div className="mt-16 flex w-screen lg:w-auto justify-center lg:block lg:mt-0 lg:px-10">
                <form>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-white text-xl font-monoton ">E-mail</label>
                        <input type="text" name="email" className="mt-5 h-10 rounded-lg px-4 text-white placeholder-gray-600 w-full py-2.5 text-base transition duration-500 ease-in-out transform border-transparent bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                    </div>
                     <div className="flex flex-col">
                        <label htmlFor="name" className="text-white mt-5 text-xl font-monoton">Name</label>
                        <input type="text" name="name" className="mt-5 h-10 rounded-lg px-4 text-white placeholder-gray-600 w-full py-2.5 text-base transition duration-500 ease-in-out transform border-transparent bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                    </div> 
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-white mt-5 text-xl font-monoton">Message</label>
                        <input type="textarea" name="message" className="mt-5 h-48 rounded-lg px-4 text-white placeholder-gray-600 w-full py-2.5 text-base transition duration-500 ease-in-out transform border-transparent bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                    </div>
                    <div className="flex justify-center mt-12">
                        <motion.input
                            type="submit"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ ease: "easeOut", duration: 2 }} 
                            className="font-monoton text-lg animate-text text-white bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 px-8 py-2 rounded-lg tracking-widest w-96"
                            value="Submit"
                        />
                    </div>
                 </form>
            </div>
        </div>                  
        
    </div>
  );
}
