"use client";

import React from "react";
import { Navbar, Tooltip, Typography, Chip, Button } from "@/lib/MtConfig";
import Image from "next/image";
import Link from "next/link";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/" className="flex items-center text-white hover:text-blue-500 transition-colors">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="#services" className="flex items-center text-white hover:text-blue-500 transition-colors">
          Servies
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="#therapists" className="flex items-center text-white hover:text-blue-500 transition-colors">
          Our Team
        </Link>
      </Typography>
    </ul>
  );
}

const NavBar = () => {
  return (
    <>
      <Navbar
        className="mx-auto max-w-screen px-6 py-3 fixed left-0 z-[9999]"
        fullWidth={true}
        variant="gradient"
        color="deep-purple"
      >
        <div className="relative flex items-center justify-between text-blue-gray-900">
          <Tooltip
            placement="bottom"
            content="Click to go Home Page"
            className="z-[9999]"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <Link href={'/'}>
              <div className="relative w-full">
                <div className="absolute top-[-4px] right-[-32px]">
                  <Chip
                    variant="filled"
                    value='Beta'
                    size="sm"
                    className="text-[9px] bg-yellow-600 text-black animate-tilt-shaking"
                  />
                </div>
                <Image
                  src={"/images/Final Logo White.png"}
                  alt="Main Logo"
                  width={160}
                  height={100}
                  priority
                />
              </div>
            </Link>
          </Tooltip>

          <div className="hidden lg:block">
            <NavList />
          </div>

          <div className="flex gap-1 md:mr-4">
            <Button variant="filled" className="bg-white text-primary hover:bg-gray-100" size="sm">
              Contact Us
            </Button>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
