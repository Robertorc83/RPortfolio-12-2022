import Header from "../components/header";
import { Sidebar } from "~/components/sidebar";
import ContactForm from "~/components/contactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main>
        <Header />
        <Sidebar />
        <motion.h2 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="w-5/6 mt-16 lg:mt-24 ml-16 lg:ml-24 xl:ml-48 lg:w-auto animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[60px] xl:text-[80px] font-bold font-bal leading-snug ">
                  Let's create <br/> something awesome
        </motion.h2>
        <ContactForm/>
    </main>
  );
}