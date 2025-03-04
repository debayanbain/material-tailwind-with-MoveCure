"use client";

import React, { createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import {
    Controller,
    useFormContext,
    ControllerRenderProps,
    FieldValues,
} from "react-hook-form";
import { Typography, Input, Textarea } from "@/lib/MtConfig";
import {
    customFormsTypes,
    FormFieldContextValue,
    FromFiledTypes,
} from "@/Types/componentsTypes";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Slot } from "@radix-ui/react-slot";
import { FormValue } from "@/lib/zodValidation";

const FormItemContext = createContext<FormFieldContextValue | null>(null);

const useFromState = () => {
    const itemContext = useContext(FormItemContext);
    if (!itemContext)
        throw new Error("useFromState must be used within a FormItems");
    const { getFieldState, formState } = useFormContext();

    const fieldState = getFieldState(itemContext.name, formState);
    return { ...fieldState };
};

const FormController = ({ children }: { children: React.ReactNode }) => {
    const { error } = useFromState();

    return (
        <div className="w-full space-y-2">
            <Slot
                className={cn(
                    "border-2 px-3 py-[0.7rem] rounded-md transition-colors",
                    error
                        ? "!border-red-500 focus:!border-red-600"
                        : "!border-gray-300 focus:!border-gray-700"
                )}
            >
                {children}
            </Slot>
        </div>
    );
};

const ErrorMessage = ({ children }: { children?: React.ReactNode }) => {
    const { error } = useFromState();
    const body = error ? String(error.message) : children;

    return (
        <Typography variant="small" color="red" className="mt-2">
            {body}
        </Typography>
    );
};

const FormLable = ({ children }: { children?: React.ReactNode }) => {
    const { error } = useFromState();

    return (
        <Typography variant="h6" className={cn("font-bold italic font-Nunito text-gray-900/70 dark:text-white",
            error && "!decoration-dashed underline underline-offset-4 decoration-red-500"
        )}>
            {children}
        </Typography>
    );
};

const FormItems = ({
    name,
    children,
}: {
    name: string;
    children?: React.ReactNode;
}) => {
    return (
        <FormItemContext.Provider value={{ name }}>
            <div className="w-full space-y-2">{children}</div>
        </FormItemContext.Provider>
    );
};

const RenderFields = ({
    field,
    props,
}: {
    field: ControllerRenderProps;
    props: customFormsTypes;
}) => {
    const { fieldsName, placeholder } = props;

    switch (fieldsName) {
        case FromFiledTypes.INPUT:
            return (
                <FormController>
                    <Input
                        {...field}
                        size="lg"
                        placeholder={placeholder}
                        className="!border-2 placeholder:text-blue-gray-300/50 placeholder:opacity-100 "
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        {...props}
                    />
                </FormController>
            );

        case FromFiledTypes.PHONE_INPUT:
            return (
                <FormController>
                    <PhoneInput
                        {...field}
                        placeholder={placeholder}
                        defaultCountry="IN"
                        withCountryCallingCode
                        value={field.value}
                        onChange={field.onChange}
                        className="input-phone w-full"
                        rules={{ required: true }}
                        {...props}
                    />
                </FormController>
            );

        case FromFiledTypes.TEXTAREA:
            return (
                <FormController>
                    <Textarea
                        {...field}
                        size="lg"
                        placeholder={placeholder}
                        className="!border-2 placeholder:text-blue-gray-300/50 placeholder:opacity-100 "
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        {...props}
                    />
                </FormController>
            );

        default:
            break;
    }
};

export const CustomFormFields = <T extends FieldValues>(
    props: customFormsTypes<T>
) => {
    const { control, name, lable, fieldsName } = props;

    return (
        <Controller
            control={control}
            name={name!}
            render={({ field }) => (
                <FormItems name={name!}>
                    {fieldsName !== FromFiledTypes.CHECKBOX && lable && (
                        <FormLable>{lable}</FormLable>
                    )}

                    <RenderFields
                        field={field as unknown as ControllerRenderProps}
                        props={props as unknown as customFormsTypes<FormValue>}
                    />
                    <ErrorMessage />
                </FormItems>
            )}
        />
    );
};
