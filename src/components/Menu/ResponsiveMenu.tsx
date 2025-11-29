import { MenuIcon, X } from "lucide-react";
import ToggleTheme from "../Theme/ToggleTheme";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { navItems, scrollToSection } from "./items";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const ResponsiveMenu = ({ open, setOpen }: Props) => {
  return (
    <div className="md:hidden flex items-center ">
      <ToggleTheme />
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <div className="flex flex-col gap-4 p-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Menú</span>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </DrawerClose>
            </div>

            {navItems.map((item) => (
              <DrawerClose asChild key={item.id}>
                <Button
                  variant="ghost"
                  className="justify-start w-full"
                  onClick={() => {
                    scrollToSection(item.id);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </Button>
              </DrawerClose>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ResponsiveMenu;
