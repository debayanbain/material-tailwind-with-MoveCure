import React from 'react'
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { type TextEffectProps } from '@/Types/componentsTypes';


const Animation = ({
    custom,
    isVisible = true,
    variants,
    children,
    componentsKey,
    className,
}: TextEffectProps) => {
    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    key={`framer-text` + componentsKey}
                    custom={custom}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                    className={cn(className || "w-full")}
                    transition={{ duration: 0.2 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Animation;
