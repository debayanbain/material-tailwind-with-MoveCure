"use client";

import React from "react";
import { Navbar, Tooltip, Typography, Chip, Button, Menu, MenuHandler, Avatar, MenuList, MenuItem } from "@/lib/MtConfig";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: <FaUser />,
  },
  {
    label: "Help",
    icon: <IoMdHelpCircle size={17} />,
  },
  {
    label: "Sign Out",
    icon: <FaSignOutAlt />,
  },
];

const AvatarWithUserDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="left-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full p-0 focus:outline-none focus:ring-0"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            withBorder={true}
            className=" p-0.5 border-white focus:outline-none focus:ring-0"
            src="https://docs.material-tailwind.com/img/face-2.jpg"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 z-[9999]">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
                }`}
            >
              {icon}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

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
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="#therapists" className="flex items-center text-white hover:text-blue-500 transition-colors">
          Contact Us
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

          <div className="flex items-center justify-between gap-1">
            <div className="flex">
              <AvatarWithUserDropdown />
            </div>
          </div>

        </div>

      </Navbar>
    </>
  );
};

export default NavBar;
