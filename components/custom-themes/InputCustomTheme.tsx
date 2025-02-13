"use client";

import * as React from "react";
import { ThemeProvider as MaterialCustomTheme } from "@/lib/MtConfig";

export default function InputCustomTheme({ children }: Readonly<{ children: React.ReactNode }>) {

    const customThemes = {
        input: {
            styles: {
                base: {
                    container: {
                        position: "static",
                        width: "w-full",
                        minWidth: "min-w-[200px]",
                    },
                },
            },
        },
    }

    return <MaterialCustomTheme value={customThemes}>{children}</MaterialCustomTheme>
}