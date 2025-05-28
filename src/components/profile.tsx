import { AlarmClock, BriefcaseBusiness, Brush, Earth, Home, Mailbox, Pin, Plus, Star, User } from "lucide-react";
import { SiGithub, SiJavascript, SiReact, SiNodedotjs, SiTypescript, SiBun, SiSpring, SiExpress, SiPython, SiVuedotjs, SiTailwindcss, SiNextdotjs } from '@icons-pack/react-simple-icons';
import Image from "next/image";
import { Marquee } from "./magicui/marquee";


const mytechs = [
    {
        name: "JavaScript",
        icon: SiJavascript,
    },
    {
        name: "React",
        icon: SiReact,
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "Github",
        icon: SiGithub,
    },
    {
        name: "Bun",
        icon: SiBun,
    },
    {
        name: "Spring",
        icon: SiSpring,
    },
    {
        name: "Express",
        icon: SiExpress,
    },
    {
        name: "Python",
        icon: SiPython,
    },
    {
        name: "Vue",
        icon: SiVuedotjs,
    },
    {
        name: "TailwindCSS",
        icon: SiTailwindcss,
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
    },
];

const firstRow = mytechs.slice(0, mytechs.length / 2);
const secondRow = mytechs.slice(mytechs.length / 2);

export function Profile() {
    return (
        <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex flex-col gap-5 border p-6 rounded-lg shadow-sm bg-[#0f0f10]">
                <div className="flex flex-row gap-5">
                    <div>
                        <Image alt="Author" loading="eager" width={100} height={100} decoding="async" className="rounded-2xl" style={{ color: 'transparent' }} src="/profile.jpg" />
                    </div>
                    <div className="flex flex-col">
                        <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 mb-auto flex w-fit items-center justify-center gap-1 bg-green-500/20 text-green-500">
                            <span className="font-semibold">Available To Work</span>
                        </div>
                        <h1 className="text-2xl font-bold text-primary">Naheshi</h1>
                        <div className="font-semibold text-gray-400">
                            <div className="flex flex-col gap-1 md:flex-row md:items-center">
                                I&apos;m a <span className="font-bold text-primary">Full Stack Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full max-w-2xl flex-wrap gap-2 rounded-xl bg-background p-3 mx-auto justify-center">
                    <div className="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
                        <Earth className="iconify iconify--mingcute size-6 text-primary" />
                        <p className="text-sm font-semibold text-gray-400">English &amp; Spanish</p>
                    </div>
                    <div className="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
                        <Pin className="iconify iconify--mingcute size-6 text-primary" />
                        <p className="text-sm font-semibold text-gray-400">Panama</p>
                    </div>
                    <div className="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
                        <AlarmClock className="iconify iconify--mingcute size-6 text-primary" />
                        <p className="text-sm font-semibold text-gray-400">UTC-5</p>
                    </div>
                    <div className="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
                        <Home className="iconify iconify--mingcute size-6 text-primary" />
                        <p className="text-sm font-semibold text-gray-400">Freelancer</p>
                    </div>
                    <div className="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
                        <Brush className="iconify iconify--mingcute size-6 text-primary" />
                        <p className="text-sm font-semibold text-gray-400">PixelArt</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full gap-1">
                        <Mailbox className="iconify iconify--solar size-6" />
                        Hire Me
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full gap-2">
                        <SiGithub className="iconify iconify--mdi size-7" />
                        GitHub
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col space-y-1.5 p-6 max-h-50 bg-[#0f0f10] border rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight flex flex-row gap-1">My Tech Stack</h3>
                    <p className="text-sm text-muted-foreground">My favorite tech stack I use on my projects</p>
                    <div className="relative flex flex-col items-start justify-center max-w-[50vh] w-full mx-auto overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:35s]">
                            {firstRow.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.name} className="flex items-center gap-2 px-4">
                                        <Icon size={24} className="text-primary" />
                                        <span>{item.name}</span>
                                    </div>
                                );
                            })}
                        </Marquee>

                        <Marquee pauseOnHover className="[--duration:35s]">
                            {secondRow.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.name} className="flex items-center gap-2 px-4">
                                        <Icon size={24} className="text-primary" />
                                        <span>{item.name}</span>
                                    </div>
                                );
                            })}
                        </Marquee>

                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0f0f10] to-transparent"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0f0f10] to-transparent"></div>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:auto-rows-min">
                    <div className="min-h-[120px] rounded-lg bg-[#0f0f10] bg-secondary/40 p-6 shadow-sm transition hover:scale-105 flex flex-col justify-between border gap-3 items-center">
                        <div className="flex flex-col">
                            <span className="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-mono text-4xl text-transparent md:text-5xl flex items-center gap-1">
                                19 <Plus className="iconify iconify--mingcute size-6 text-primary md:size-8" />
                            </span>
                        </div>
                        <div className="relative flex w-fit items-center justify-center gap-1 rounded-xl bg-secondary/40 px-3 py-1 md:px-3 md:py-1.5">
                            <BriefcaseBusiness className="iconify iconify--solar size-6 text-primary" />
                            <span className="text-sm font-semibold text-gray-400">Projects</span>
                        </div>
                    </div>
                    <div className="min-h-[120px] rounded-lg bg-[#0f0f10] bg-secondary/40 p-6 shadow-sm transition hover:scale-105 flex flex-col justify-between border gap-3 items-center">
                        <div className="flex flex-col">
                            <span className="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-mono text-4xl text-transparent md:text-5xl flex items-center gap-1">
                                4 <Plus className="iconify iconify--mingcute size-6 text-primary md:size-8" />
                            </span>
                        </div>
                        <div className="relative flex w-fit items-center justify-center gap-1 rounded-xl bg-secondary/40 px-3 py-1 md:px-3 md:py-1.5 ">
                            <User className="iconify iconify--solar size-6 text-primary" />
                            <span className="text-sm font-semibold text-gray-400">Clients</span>
                        </div>
                    </div>
                    <div className="min-h-[140px] rounded-lg bg-[#0f0f10] bg-secondary/40 p-6 shadow-sm transition hover:scale-105 flex flex-col justify-between border gap-3 col-span-2 sm:col-span-1 items-center">
                        <div className="flex flex-col">
                            <span className="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-mono text-4xl text-transparent md:text-5xl flex items-center gap-1">
                                3 <Plus className="iconify iconify--mingcute size-6 text-primary md:size-8" />
                            </span>
                        </div>
                        <div className="relative flex w-fit items-center justify-center gap-1 rounded-xl bg-secondary/40 px-3 py-1 md:px-3 md:py-1.5">
                            <Star className="iconify iconify--solar size-6 text-primary" />
                            <span className="text-sm font-semibold text-gray-400">Yrs Expertise</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
