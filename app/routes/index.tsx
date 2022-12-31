import { useState } from "react";
import About from "@components/about";
import Header from "@components/header";
import Projects from "@components/projects";
import Main from "@components/main";
import Description from "~/components/description";

export default function Index() {
  const [selectedId, setSelectedId] = useState<any>(null)
  return (
    <div className=" bg-gradient-to-r from-gray-900 to-gray-600 min-h-screen bg-cover mt-0 pt-5 relative" >
      <div className={` ${selectedId ? "blur-sm" : "" }`}>
        <Header/>
        <Main />
        <Description />
      </div>
        <Projects selectedId={selectedId} setSelectedId={setSelectedId}/>
        <About/>
    </div>
  );
}
