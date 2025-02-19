import { type Variants } from "framer-motion";

type FormValues = {
    name: string;
    email: string;
    password: string;
    bloodType: string;
    allergies: string;
    plan: string;
    paymentMethod: string;
}

export type stepsProps = { 
    label: string; 
    components?: React.ReactNode; 
    description: string
    fields: (keyof FormValues)[],
 }[]

export interface TextEffectProps {
    custom?: number;
    isVisible?: boolean;
    variants: Variants;
    children: React.ReactNode;
    componentsKey: number;
    className?: string
}