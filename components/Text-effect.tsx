"use client";

import React from 'react'
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

interface TextEffectProps {
    isVisible: boolean;
    text: string;
    effecContainerClass? : string;
    effectClass?: string;
}

const TextEffect = ({ isVisible, text, effectClass, effecContainerClass }: TextEffectProps) => {
    const words = text.split(" ");

    return (
        <>
            <div className={cn(effecContainerClass || "flex justify-center flex-col items-center h-full")}>
                {words.map((word, wordIndex) => (
                    <div key={wordIndex} className="inline-block mr-2">
                        {word.split("").map((char, charIndex) => (
                            <motion.p
                                key={charIndex}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={
                                    isVisible
                                        ? {
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                duration: 0.5,
                                                delay: (wordIndex * 0.2 + charIndex * 0.1) * 0.5,
                                                ease: [0.33, 1, 0.68, 1],
                                            },
                                        }
                                        : {}
                                }
                                className={cn(effectClass ? effectClass : "inline-block font-[Oswald]  text-6xl lg:text-[5rem] xl:text-8xl italic font-[600] text-white")}
                            >
                                {char}
                            </motion.p>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default TextEffect;
