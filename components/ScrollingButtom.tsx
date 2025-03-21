"use client";

import { useState, useEffect, useRef } from "react";
import { IconButton } from "@/lib/MtConfig";
import { IoIosArrowDown } from "react-icons/io";

export default function LottieAnimation() {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const ButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const buttonElement = ButtonRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
    
        if (buttonElement) {
            observer.observe(buttonElement);
        }
    
        return () => {
            if (buttonElement) {
                observer.unobserve(buttonElement);
            }
        };
    }, []);

    const handleScrolling = ()=> {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
    }

    return (
        isVisible && (
            <div className="w-full h-full relative">
                <div className="fixed bottom-1 left-1 justify-center items-center">
                    <IconButton
                        className="rounded-full relative"
                        size="lg"
                        variant="gradient"
                        ref={ButtonRef}
                        onClick={handleScrolling}
                    >
                        <IoIosArrowDown className="pt-[10px] h-8 w-8 animate-bounce opacity-80 transition-opacity group-hover:opacity-100" />
                        <div className="absolute inset-0 animate-ping-slow group-hover:opacity-30 flex justify-center items-center">
                            <IoIosArrowDown className="pt-[10px] h-8 w-8" />
                        </div>
                    </IconButton>
                </div>
            </div>
        )
    );
}
