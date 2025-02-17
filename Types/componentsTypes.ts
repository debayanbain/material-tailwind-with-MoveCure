import { type Variants } from "framer-motion";

export type stepsProps = { 
    label: string; 
    components?: React.ReactNode; 
    description: string
 }[]

export interface TextEffectProps {
    custom?: number;
    isVisible?: boolean;
    variants: Variants;
    children: React.ReactNode;
    componentsKey: number;
    className?: string
}