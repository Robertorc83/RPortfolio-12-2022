import Header from "../components/header";
import { Sidebar } from "~/components/sidebar";
import ContactForm from "~/components/contactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.2}}
    >
        <Header />
        <Sidebar />
        <motion.h2 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="w-full mt-16 lg:mt-24 text-center px-5 lg:px-0 lg:text-start lg:ml-24 xl:ml-48 lg:w-auto animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[35px] md:text-[60px] xl:text-[80px] font-bold font-bal leading-snug ">
                  Let's create <br/> something awesome
        </motion.h2>
        <div className="font-abril text-white text-center lg:text-start px-5 lg:px-0 lg:ml-24 xl:ml-40 mt-16 text-lg">
          <p className="mt-5">Phone:</p>
          <p>+51 944248075</p>
          <p className="mt-5">Email:</p>
          <p>robertoes2697@gmail.com</p>
        </div>
        <ContactForm/>
    </motion.div>
  );
}