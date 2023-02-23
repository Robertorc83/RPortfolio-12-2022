interface ProjectSectionProps {
    portrait:string,
    techStack: string,
    solution: string
}

function ProjectSection({techStack, portrait, solution}: ProjectSectionProps) {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-gray-600 rounded-b-lg pb-20 text-center'>
        <div className="px-5 py-5 flex justify-center">
            <img src={portrait} alt="" className="object-cover rounded-lg"/>
        </div>
        <div className="w-full flex flex-col justify-center mt-10">
            <h4 className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent font-monoton text-lg tracking-widest">Tech Stack:</h4>
            <p className="text-white font-abril px-5 md:px-20 mt-4">{techStack}</p>
        </div>
        <div className="w-full flex flex-col items-center mt-5">
            <h4 className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent font-monoton text-lg tracking-widest">Solution:</h4>
            <p className="text-white font-abril px-5 md:px-20 mt-4">{solution}</p>
        </div>
    </div>
  )
}

export default ProjectSection