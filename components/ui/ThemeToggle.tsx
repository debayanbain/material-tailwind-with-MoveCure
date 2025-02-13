"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Radio,
} from "@/lib/MtConfig";
import RadioCustomStyles from "../custom-themes/RadioCustomTheme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
    iconClass?: string,
    iconsButtonClass?: string
}

export default function ThemeToggle({ iconClass, iconsButtonClass }: Readonly<ThemeToggleProps>) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const themeOption = ["dark", "light", "system"] as const;
    const themeLabels = { dark: 'Dark', light: 'Light', system: 'System' } as const;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Menu placement="left-start" lockScroll={true}>
            <MenuHandler>
                <Button variant="outlined" size="sm" ripple={false} className={cn("rounded-full px-[7px] py-[7px] border-2",
                    iconsButtonClass ? iconsButtonClass : "dark:border-gray-300/20"
                )}>
                    <CgDarkMode size={23} className={cn(iconClass ? iconClass : "dark:text-white")} />
                </Button>
            </MenuHandler>
            <MenuList className="min-w-[130px]">
                {themeOption.map((item) => (
                    <MenuItem key={item + "theme"}>
                        <RadioCustomStyles>
                            <Radio
                                icon={<IoIosCheckmarkCircle size={23} color="#7048BA" />}
                                ripple={false}
                                key={item + "theme"}
                                label={themeLabels[item]}
                                checked={theme === item}
                                onChange={() => setTheme(item)}
                            />
                        </RadioCustomStyles>
                    </MenuItem>
                ))}
            </MenuList>

        </Menu>
    );
}
