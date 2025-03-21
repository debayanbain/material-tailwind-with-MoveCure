"use client";

import React from "react";
import { Navbar, Tooltip } from "@/lib/MtConfig";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <Navbar
        className="mx-auto max-w-screen px-6 py-3 fixed left-0"
        fullWidth={true}
        variant="gradient"
        color="deep-purple"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Tooltip
            placement="bottom"
            content="Click to go Home Page"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <Image
              src={"/images/Main Logo.png"}
              alt="Main Logo"
              width={160}
              height={100}
            />
          </Tooltip>

          <div className="ml-auto flex gap-1 md:mr-4">
            <ThemeToggle
              iconClass="text-white"
              iconsButtonClass="border-gray-300/50"
            />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
