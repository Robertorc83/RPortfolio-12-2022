interface Project {
    id: string;
    title: string;
    image: string;
    background: string;
    description: string;
}

const projects : Project[] = [
    {
        id:"1",
        title: "Psicodidacta",
        image: "/psicoauto.png",
        background: "from-red-200 via-red-300 to-yellow-200",
        description: "skajdksajdaskl"
    },
    {
        id:"2",
        title: "Crynno",
        image: "/crynnologo.png",
        background: "from-fuchsia-700 via-fuchsia-800 to-fuchsia-900",
        description: "skajdksajdaskl"
    },
    {
        id:"3",
        title: "Psicodidacta",
        image: "/psicoauto.png",
        background: "from-sky-300 via-blue-400 to-indigo-500",
        description: "skajdksajdaskl"
    },
    {
        id:"4",
        title: "Crynno",
        image: "/crynnologo.png",
        background: "from-fuchsia-200 via-violet-400 to-rose-500",
        description: "skajdksajdaskl"
    },
    {
        id:"5",
        title: "Psicodidacta",
        image: "/psicoauto.png",
        background: "from-gray-300 via-zinc-400 to-neutral-500",
        description: "skajdksajdaskl"
    },
    {
        id:"6",
        title: "Crynno",
        image: "/crynnologo.png",
        background: "from-slate-600 via-stone-700 to-slate-800",
        description: "skajdksajdaskl"
    },
    
]

export default projects