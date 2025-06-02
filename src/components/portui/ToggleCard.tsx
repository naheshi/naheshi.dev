import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function ToggleCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleActive = () => setActive(!active);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent | TouchEvent) {
      if (
        active &&
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [active]);

  return (
    <div
      ref={ref}
      onClick={toggleActive}
      className={cn(
        "min-h-[120px] rounded-lg bg-[#0f0f10] bg-secondary/40 p-6 shadow-sm transition-transform duration-300 hover:scale-105 flex flex-col justify-between border gap-3 items-center",
        active && "scale-105",
        className
      )}
    >
      {children}
    </div>
  );
}
