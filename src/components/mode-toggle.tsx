import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

export function ModeToggle() {
  return (
    <div
      aria-label="Toggle Theme"
      className="relative flex items-center justify-center h-8 w-8"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </div>
  );
}
