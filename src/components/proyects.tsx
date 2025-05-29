'use client';

import { useEffect, useRef, useState } from "react";
import { SiNextdotjs, SiReact, SiTypescript } from "@icons-pack/react-simple-icons";
import { BentoCard } from "./portui/bentocard";

const items = [
  {
    name: "EcoRecicla",
    description: "EcoRecicla website.",
    img: "/ecorecicla.png",
    href: "/proyect/ecorecicla",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    name: "Portfolio",
    description: "Naheshi's portfolio",
    img: "/Portfolio.png",
    href: "/proyect/portfolio",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
];

export default function Projects() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActiveCard(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
    >
      {items.map((item) => (
        <BentoCard
          key={item.name}
          {...item}
          isActive={activeCard === item.name}
          onActivate={() => setActiveCard(item.name)}
        />
      ))}
    </div>
  );
}
