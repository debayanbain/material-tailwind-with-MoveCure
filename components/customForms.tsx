"use client";

import React, { forwardRef, createContext, useId, useContext, Children } from 'react';
import { cn } from '@/lib/utils';
import { Controller, useFormContext, ControllerRenderProps, FieldValues, Form } from 'react-hook-form';
import { Typography, Input, Textarea } from '@/lib/MtConfig';
import { customFormsTypes, FormFieldContextValue, FromFiledTypes } from "@/Types/componentsTypes";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Slot } from "@radix-ui/react-slot";
import { FormValue } from '@/lib/zodValidation';

const FormItemContext = createContext<FormFieldContextValue | null>(null);

const useFromState = () => {
    const itemContext = useContext(FormItemContext);
    if (!itemContext) throw new Error("useFromState must be used within a FormItems");
    const { getFieldState, formState } = useFormContext();

    const fieldState = getFieldState(itemContext.name, formState);
    return { ...fieldState }
}

// const FormController = forwardRef(({ ...props }, ref) => {
//     const { error } = useFromState();
//     return (
//         <Slot
//             ref={ref}
//             aria-describedby={error ? `error` : undefined}
//             aria-invalid={!!error}
//             className={`w-full border-2 px-3 py-2 rounded-md 
//         ${error ? "border-red-500" : "border-gray-300"}
//       `}
//             {...props}
//         />
//     )
// });
// FormController.displayName = "FormController";

const ErrorMessage = ({ children }: { children?: React.ReactNode }) => {
    const { error } = useFromState();
    const body = error ? String(error.message) : children;

    return (
        <Typography variant="small" color="red" className="mt-2">
            {body}
        </Typography>
    )
}

const FormLable = ({ children }: { children?: React.ReactNode }) => {
    const { error } = useFromState();

    return (
        <p className={cn(error?.message ? '!text-red-400' : '', 'text-sm text-gray-900 dark:text-white')}>
            {children}
        </p>
    )
}

const FormItems = ({ name, children }: { name: string; children?: React.ReactNode }) => {
    return (
        <FormItemContext.Provider value={{ name }}>
            <div className="w-full space-y-2">{children}</div>
        </FormItemContext.Provider>
    );
};


const RenderFields = ({ field, props }: { field: ControllerRenderProps; props: customFormsTypes; }) => {
    const { fieldsName } = props;

    switch (fieldsName) {
        case FromFiledTypes.INPUT:
            return (
                <>
                    <Input
                        {...field}
                        size="lg"
                        placeholder="eg: O+"
                        className={cn("border-2 !border-blue-gray-200 focus:!border-gray-700",
                        )}
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        {...props}
                    />
                    <ErrorMessage />
                </>
            )

        default:
            break;
    }
}


export const CustomFormFields = <T extends FieldValues>(props: customFormsTypes<T>) => {
    const { control, name, lable, fieldsName } = props;

    return (
        <Controller
            control={control}
            name={name!}
            render={({ field }) => (
                <FormItems name={name!}>
                    {
                        fieldsName !== FromFiledTypes.CHECKBOX && lable && (
                            <FormLable>{lable}</FormLable>
                        )
                    }

                    <RenderFields field={field as unknown as ControllerRenderProps} props={props as unknown as customFormsTypes<FormValue>} />
                </FormItems>
            )}
        />
    )
};