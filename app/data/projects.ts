interface Project {
    id: string;
    title: string;
    image: string;
    background: string;
    techStack: string;
    solution: string;
    portrait: string
}

const projects : Project[] = [
    {
        id:"1",
        title: "Psicodidacta",
        image: "/psicoauto.png",
        background: "from-red-200 via-red-300 to-yellow-200",
        techStack: "Next.js, React.js, Redux, React Native, Typescript, Node.js, Grapqhql, Amazon DynamoDb, Amazon step functions, Amazon Appsync, Amazon Lambda Functions, Cognito, IAM, S3, Stripe, Python",
        solution: "Architect and develop a serverless MVP ready for scale that allows selling of e-courses, authentication, and  ",
        portrait: "/psicodidacta.png"
    },
    {
        id:"2",
        title: "Crynno",
        image: "/crynnologo.png",
        background: "from-fuchsia-700 via-fuchsia-800 to-fuchsia-900",
        techStack: "Next.js, React.js, Typescript, CoingeckoAPI, Chart.js, Redux, Node.js, Express.js, MongoDb, Restful API",
        solution: "CryptoTracker and blog that share news about cryptocurrncies and real time data about prices, market sahre and all cryptoinfo",
        portrait: "/crynno.png"
    },
    {
        id:"3",
        title: "Appointment Scheduling",
        image: "/alogo.png",
        background: "from-sky-300 via-blue-400 to-indigo-500",
        techStack: "Next.js, React.js, SASS, Node.js, PostgreSQL, Docker, AWS ",
        solution: "A scheduling platform for a group of clinics, its patients, and third-party medical practices",
        portrait: "/appoint.jpg"
    },
    {
        id:"4",
        title: "Sniser",
        image: "/logofreelance1.png",
        background: "from-green-200 via-green-400 to-green-500",
        techStack: "React.js, Typescript, Redux, Node.js, Grapqhql, Express.js, Solidity, Web3.js",
        solution: "Create a NFT store with authentication system, smart contract and payment processor integration",
        portrait: "/snser.png"
    },
    {
        id:"5",
        title: "Logistics Portal",
        image: "/llogo.png",
        background: "from-gray-300 via-zinc-400 to-neutral-500",
        techStack: "Next.js, React.js, React Native, SASS, Node.js, PostgreSQL, Docker, AWS",
        solution: "Creation of App to track transportation and access bills of lading, commercail invoices, create orders, etc. ",
        portrait: "/logi.jpg"
    },
    {
        id:"6",
        title: "Sante",
        image: "/snte.png",
        background: "from-slate-600 via-stone-700 to-slate-800",
        techStack: "Sante",
        solution: "Creation of custom Healthcare CRM with an in-built Medical Appointment Reminder system. To date, the system has helped to process and manage the data on more than 40 doctors and 15,000 patients.",
        portrait: "/crm.png"
    },
    
]

export default projects