"use client";

import { IconButton } from "@/lib/MtConfig";
import { IoIosArrowDown } from "react-icons/io";

export default function LottieAnimation() {
    return (
        <div className="w-full h-full relative">
            <div className="fixed bottom-1 left-1 w-[170px]">
                <IconButton className="rounded-full relative" size="lg">
                    <IoIosArrowDown className="pt-[10px] h-8 w-8 animate-bounce opacity-80 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-0 animate-ping-slow group-hover:opacity-30 flex justify-center items-center">
                        <IoIosArrowDown className="pt-[10px] h-8 w-8" />
                    </div>
                </IconButton>
            </div>
        </div>
    )
}