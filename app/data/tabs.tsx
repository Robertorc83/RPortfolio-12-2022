export interface Tab {
    label: string;
    component: JSX.Element;
}

const tabs: Tab[] = [
    {
        label: "Info",
        component: <div className="flex items-center flex-col px-20 font-abril text-center text-sm lg:text-base">
            <img src="/photo.png" alt="" className="rounded-full w-28 h-28 mt-5"/>
            <p className="mt-10 tracking-widest"> I am a Software developer, passionate about tech and innovation with 3+ years of experience in the tech ecosystem, with technologies like React.js, Next.js, Node.js, Typescript, and AWS.</p>
            <p className="mt-10 animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent font-bold font-monoton md:leading-snug tracking-widest ">Current Company: </p>
            <p className="tracking-widest">Altatech Consulting</p>
            <p className="mt-10 animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent font-bold font-monoton md:leading-snug tracking-widest ">Current Role: </p>
            <p className="tracking-widest">Full Stack developer</p>
        </div>
    },
    {
        label: "Interests",
        component: <div className="flex items-center justify-center h-full flex-col px-20 font-abril text-center text-sm lg:text-base">
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">Learn New things</p>
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">Innovate</p>
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">Startups</p>
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">New technologies</p>
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">Blockchain and cloud</p>
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">Machine Learning</p>
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">Cybersecurity</p>
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">Trading</p>
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">Play video Games</p>
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">Play soccer and tennis</p>
            <p className="mt-4 animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest ">Meet great people</p>
        </div>
    },
    {
        label: "Philosophy of work",
        component: <div className="flex items-center justify-center h-full flex-col px-20 font-abril text-center text-sm lg:text-base">
            <p className="font-abril">"My philosophy toward work is to challenge myself continuously, even in aspects of my job with which I'm already familiar. Learning new things, taking new opportunities and working with the different members of a department are some of the ways that I've been able to find motivation. Getting involved with a team or leading a project also helps motivate me to work harder. However, while I do work well in a team, I consider myself to be someone who works best alone. I strive toward perfection, and working alone allows me to check my work as often as needed."</p>
            <p className="mt-16 italic animate-text bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold md:leading-snug tracking-widest"> “If your dreams don’t scare you, they are too small.”</p>
        </div>
    },
]

export default tabs