'use client'

import { ComponentPropsWithoutRef } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MoveRight } from "lucide-react";

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  description: string;
  href: string;
  cta: string;
  img: string;
  tech: Array<EnumItem>;
  isActive?: boolean;
  onActivate?: () => void;
}

interface EnumItem {
  name: string;
  icon: React.ElementType;
}

const BentoCard = ({
  name,
  className,
  img,
  tech,
  description,
  href,
  cta,
  isActive,      
  onActivate, 
  ...props
}: BentoCardProps) => {

  return (
    <div
      onClick={onActivate}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border shadow-sm bg-[#0f0f10] cursor-pointer transition-all duration-300",
        className,
        isActive  && "bg-black/[.03] dark:bg-neutral-800/10"
      )}
      {...props}
    >
      <div className="w-full h-40 relative">
        <Image
          alt={name}
          src={img}
          fill
          className="object-contain p-4"
          priority
        />
      </div>
      <div
        className={cn(
          "z-10 flex transform flex-col gap-2 p-6 transition-all duration-300",
          isActive && "-translate-y-10"
        )}
      >
        <h3 className="text-xl font-semibold text-white dark:text-neutral-300">
          {name}
        </h3>
        <div className="flex flex-row gap-2 flex-wrap">
          {tech.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex items-center gap-2 px-4 rounded-md bg-secondary/60 py-1 pl-3 pr-4"
              >
                <Icon size={24} className="text-primary" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>
      <div
        className={cn(
          "absolute bottom-0 flex w-full transform flex-row items-center p-4 opacity-0 transition-all duration-300",
          isActive && "translate-y-0 opacity-100"
        )}
      >
        <Button variant="ghost" asChild size="sm" className="bg-secondary">
          <a href={href}>
            {cta}
            <MoveRight />
          </a>
        </Button>
      </div>
    </div>
  );
};

export { BentoCard };
