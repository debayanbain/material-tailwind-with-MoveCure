"use client";

import * as React from "react";
import { ThemeProvider as MaterialCustomTheme } from "@/lib/MtConfig";

export default function RadioCustomStyles({ children }: Readonly<{ children: React.ReactNode }>) {
    const customThemes = {
        radio: {
            styles: {
                base: {
                    root: {
                        display: "inline-flex",
                        alignItems: "items-center",
                        mr: "mr-2",
                    },
                    container: {
                        position: "relative",
                        display: "flex",
                        alignItems: "items-center",
                        cursor: "cursor-pointer",
                        p: "p-1",
                        borderRadius: "rounded-full",
                    },
                    input: {
                        peer: "peer",
                        position: "relative",
                        appearance: "appearance-none",
                        width: "w-5",
                        height: "h-5",
                        borderWidth: "border",
                        borderRadius: "rounded-full",
                        borderColor: "border-blue-gray-200",
                        cursor: "cursor-pointer",
                        transition: "transition-all",
                        before: {
                            width: "before:w-8",
                            height: "before:h-8",
                        },
                    },
                    label: {
                        mt: "mt-px",
                        ml: "ml-2",
                    },
                },
            },
        },
    };

    return <MaterialCustomTheme value={customThemes}>{children}</MaterialCustomTheme>
}