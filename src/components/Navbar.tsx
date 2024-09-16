"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn"; // Ensure this utility function exists or modify/remove it if needed

// Navbar component
interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Academic details">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">College</HoveredLink>
            <HoveredLink href="/interface-design">JEE</HoveredLink>
            <HoveredLink href="/seo">Cet</HoveredLink>
            <HoveredLink href="/branding">Class 12th</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/project-1">Portfolio</HoveredLink>
            <HoveredLink href="/project-2">E-commerce App</HoveredLink>
            <HoveredLink href="/project-3">Movie Review Analysis</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/skills-web-dev">Web Development</HoveredLink>
            <HoveredLink href="/skills-react">React.js</HoveredLink>
            <HoveredLink href="/skills-ai">AI/ML</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Email</HoveredLink>
            <HoveredLink href="/linkedin">LinkedIn</HoveredLink>
            <HoveredLink href="/github">GitHub</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
