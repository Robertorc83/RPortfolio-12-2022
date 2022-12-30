
type Props = {
    title: string
}

export default function ProjectCard({title}:Props){
    return(
        <div className="bg-white rounded-md max-w-sm ml-16 mt-20 min-h-max">
            <h4 className="p-5 font-monoton">{title}</h4>
            <img src="" alt="" />
            <p></p>
        </div>
    )
}