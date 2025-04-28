import React from 'react'
import { cn } from '@/lib/utils';

const SkeletonLoader = () => {

    return (
        <div className="rounded-lg flex relative overflow-hidden">
            <div className="flex flex-col items-center gap-1">
                <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className={cn("bg-muted w-8 h-8 rounded-full bg-purple-200/50 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent")}
                        />
                    ))}
                </div>

                <div className="flex justify-center -space-x-4">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className={cn("bg-muted w-16 h-16 rounded-full bg-purple-200/50 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent")}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
