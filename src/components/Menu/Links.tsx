import { useState } from "react";
import MotionWrapper from "../MotionWrapper";
import ToggleTheme from "../Theme/ToggleTheme";
import { Button } from "../ui/button";

import { navItems, scrollToSection } from "./items";
import ResponsiveMenu from "./ResponsiveMenu";

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <MotionWrapper animation="fadeIn" className="flex items-center  pe-2">
      {/* Desktop Links */}
      <div className="hidden md:flex items-center">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="link"
            className="cursor-pointer text-white"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </Button>
        ))}
        <ToggleTheme />
      </div>

      {/* Responsive Links */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </MotionWrapper>
  );
};

export default Links;
