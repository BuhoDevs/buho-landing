import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./useTheme";
import { useGlobalStyles } from "../globalStyles";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  const isLight = theme === "light";

  const handleToggleTheme = () => {
    if (isLight) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const { darkHoverBg } = useGlobalStyles();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleTheme}
      className={`cursor-pointer text-white hover:bg-[${darkHoverBg}] hover:text-white`}
    >
      {isLight ? (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-100" />
      )}
    </Button>
  );
};

export default ToggleTheme;
