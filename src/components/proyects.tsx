import { SiNextdotjs, SiReact, SiTypescript } from "@icons-pack/react-simple-icons";
import { BentoCard } from "./bentocard"

const items = [
    {
        name: "EcoRecicla",
        description: "EcoRecicla website.",
        img: "/ecorecicla.png",
        href: "/proyect/ecorecicla",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        tech: [
            {
                name: "React",
                icon: SiReact
            },
            {
                name: "TypeScript",
                icon: SiTypescript
            },
            {
                name: "Next.js",
                icon: SiNextdotjs
            }
        ]
    },
    {
        name: "Portfolio",
        description: "Naheshi's portfolio",
        img: "/portfolio.png",
        href: "/proyect/portfolio",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        tech: [
            {
                name: "React",
                icon: SiReact
            },
            {
                name: "TypeScript",
                icon: SiTypescript
            },
            {
                name: "Next.js",
                icon: SiNextdotjs
            }
        ]
    },
];

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {items.map((item, index) => (
                <BentoCard key={index} {...item} />
            ))}
        </div>
    );
}


