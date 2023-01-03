import { useState } from "react";
import Main from "@components/main";
import About from "@components/about";
import Header from "@components/header";
import Contact from "~/components/contact";
import Projects from "@components/projects";
import { Sidebar } from "~/components/sidebar";
import Description from "~/components/description";

export default function Index() {
  const [selectedId, setSelectedId] = useState<any>(null)
  return (
    <div className=" bg-gradient-to-r from-gray-900 to-gray-600 min-h-screen bg-cover mt-0 pt-5 relative" >
      <div className={` ${selectedId ? "blur-sm" : "" }`}>
        <Header/>
        <Sidebar />
        <Main />
        <Description />
      </div>
        <Projects selectedId={selectedId} setSelectedId={setSelectedId}/>
        <About/>
        <Contact />
    </div>
  );
}
