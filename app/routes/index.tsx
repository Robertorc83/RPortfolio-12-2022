import { useState } from "react";
import Main from "@components/main";
import About from "@components/about";
import Header from "@components/header";
import SayHello from "~/components/sayHello";
import Projects from "@components/projects";
import { Sidebar } from "~/components/sidebar";
import Description from "~/components/description";
import { motion } from "framer-motion";

export default function Index() {
  const [selectedId, setSelectedId] = useState<any>(null)
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className={` ${selectedId ? "blur-sm" : "" }`}>
        <Header/>
        <Sidebar />
        <Main />
        <Description />
      </div>
        <Projects selectedId={selectedId} setSelectedId={setSelectedId}/>
        <About/>
        <SayHello />
    </motion.div>
  );
}
