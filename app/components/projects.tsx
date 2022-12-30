import ProjectCard from "./projectCard"

type Props = {
    selectedId: string,
    setSelectedId: React.Dispatch<any>
}

export default function Projects({selectedId, setSelectedId}: Props){
    return (
        <div className="pb-20 ml-16">
            <ProjectCard title="Psicodidacta" description="adsadsads" image="images/" selectedId={selectedId} setSelectedId={setSelectedId}/>
        </div>
    )
}