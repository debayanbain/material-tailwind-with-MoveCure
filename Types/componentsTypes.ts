import { TypographyProps, ButtonProps } from '@/lib/MtConfig';
import { FormValue } from '@/lib/zodValidation';
import { type Variants } from "framer-motion";
import React from 'react';
import { Control, ControllerRenderProps, FieldPath, FieldValues, Path } from "react-hook-form";

enum genderTypes {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

type FormValues = {
    patientName: string;
    email: string;
    phone_number: string;
    date_of_birth: Date | null | undefined;
    gender: genderTypes;
    address: string;
    blood_group: string;
    allergies: string;
    problems: string;
    file_upload: File[];
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

export interface previousButtonProps {
    text: string,
    handlePrevorNext: () => void,
    Steps: boolean,
    buttonClass?: string,
    childrenClass?: string,
    textClass?: string,
    icons?: React.ReactElement,
    buttonVariant?: ButtonProps["variant"],
    buttonColor?: ButtonProps["color"],
}

export type FormContextType = {
    id: string
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
    FILE = "file",
}

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  fieldName: FromFiledTypes | undefined;
}

export interface customFormsTypes<T extends FieldValues = FormValue> {
    control: Control<T>,
    fieldsName?: FromFiledTypes,
    name?: Path<T>,
    lable?: string,
    lableshowChip?: boolean, 
    lableVariant?: string,
    radioItems?: string[],
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    children?: React.ReactNode,
    renderSkeleton?: (field: ControllerRenderProps) => React.ReactNode,
    iconComponents?: React.ReactNode
    showValidIcon?: boolean
}

export interface FileUploadTypes {
    fields: ControllerRenderProps;
    placeholders: string;
}