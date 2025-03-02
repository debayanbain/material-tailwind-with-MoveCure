import { TypographyProps } from '@/lib/MtConfig';
import { FormValue } from '@/lib/zodValidation';
import { type Variants } from "framer-motion";
import React from 'react';
import { Control, ControllerRenderProps, FieldPath, FieldValues, Path } from "react-hook-form";

type FormValues = {
    name: string;
    email: string;
    password: string;
    blood_group: string;
    allergies: string;
    problems: string;
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

export type FormContextType = {
    id: string
}

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

export type FormLableType = React.HTMLAttributes<HTMLDivElement> & {
    variant?: TypographyProps["variant"],
    text: string,
    name: string
}

export enum FromFiledTypes {
    INPUT = "input",
    CHECKBOX = "checkbox",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    DATEPICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
    RADIO = "radio",
}

export interface customFormsTypes<T extends FieldValues = FormValue> {
    control: Control<T>,
    fieldsName?: FromFiledTypes,
    name?: Path<T>,
    lable?: string,
    lableVariant?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    children?: React.ReactNode,
    renderSkeleton?: (field: ControllerRenderProps) => React.ReactNode,
    iconComponents?: React.ReactNode
}