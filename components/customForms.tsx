"use client";

import React, { createContext, forwardRef } from "react";
import { cn } from "@/lib/utils";
import {
    Controller,
    ControllerRenderProps,
    FieldValues,
} from "react-hook-form";
import { Typography, Input, Textarea, Tooltip, Radio } from "@/lib/MtConfig";
import {
    customFormsTypes,
    FormFieldContextValue,
    FromFiledTypes,
} from "@/Types/componentsTypes";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Slot } from "@radix-ui/react-slot";
import { FormValue } from "@/lib/zodValidation";
import { IoIosCheckmarkCircle, IoMdCheckmarkCircleOutline } from "react-icons/io";
import useFromState from '@/lib/utils/hooks/FormControllerHook';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import RadioCustomStyles from "./custom-themes/RadioCustomTheme";

export const FormItemContext = createContext<FormFieldContextValue | null>(null);

const FormController = forwardRef<HTMLDivElement, { children: React.ReactNode; showValidIcon?: boolean }>((
    { children, showValidIcon },
    ref
) => {
    const { error, fieldName } = useFromState();

    return (
        <div className={cn("w-full space-y-2", FromFiledTypes.PHONE_INPUT === fieldName && "!relative")}>
            {
                FromFiledTypes.PHONE_INPUT === fieldName && (
                    <Tooltip
                        placement="top"
                        content="Verified"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <div className="absolute top-[0.60rem] right-3">
                            {showValidIcon && (
                                <IoMdCheckmarkCircleOutline size={25} color="green" />
                            )}
                        </div>
                    </Tooltip>
                )
            }
            <Slot
                ref={ref}
                className={cn(
                    "border-2 px-3 py-[0.7rem] rounded-md transition-colors",
                    error
                        ? "!border-red-500 focus:!border-red-600"
                        : "!border-gray-300 focus:!border-gray-700",
                )}
            >
                {children}
            </Slot>
        </div>
    );
});

FormController.displayName = "FormController";

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
    fieldName,
    children,
}: {
    name: string;
    children?: React.ReactNode;
    fieldName?: FromFiledTypes;
}) => {
    return (
        <FormItemContext.Provider value={{ name, fieldName }}>
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
    const { fieldsName, placeholder, showValidIcon, radioItems, ...otherProps } = props;
    switch (fieldsName) {
        case FromFiledTypes.INPUT:
            return (
                <FormController>
                    <Input
                        {...field}
                        size="lg"
                        placeholder={placeholder}
                        className="!border-2 placeholder:text-blue-gray-300/50 placeholder:opacity-100 dark:text-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        {...otherProps}
                    />
                </FormController>
            );

        case FromFiledTypes.PHONE_INPUT:
            return (
                <FormController showValidIcon={showValidIcon}>
                    <PhoneInput
                        {...field}
                        placeholder={placeholder}
                        defaultCountry="IN"
                        withCountryCallingCode
                        value={field.value}
                        onChange={field.onChange}
                        className="input-phone w-full"
                        rules={{ required: true }}
                        {...otherProps}
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
                        {...otherProps}
                    />
                </FormController>
            );

        case FromFiledTypes.DATEPICKER:
            return (
                <FormController>
                    <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        dateFormat={'dd/MM/yyyy'}
                        showTimeSelect={false}
                        timeInputLabel="Time:"
                        wrapperClassName="date-picker"
                        placeholderText={placeholder || "DD/MM/YYYY"}
                        {...otherProps}
                    />
                </FormController>
            );

        case FromFiledTypes.RADIO:
            return (
                <RadioCustomStyles>
                    <FormController>
                        <div className='flex w-full !py-[0.5rem]'>
                            {radioItems?.map((item, i) => (
                                <Radio
                                    {...field}
                                    key={i + "gender"}
                                    value={item}
                                    checked={field.value === item}
                                    icon={<IoIosCheckmarkCircle size={23} color="#7048BA" />}
                                    ripple={false}
                                    label={item}
                                    onChange={() => field.onChange(item)}
                                    {...otherProps}
                                />
                            ))}
                        </div>
                    </FormController>
                </RadioCustomStyles>
            );

        default:
            return null;
    }
};

export const CustomFormFields = <T extends FieldValues>(
    props: customFormsTypes<T>
) => {
    const { control, name, lable, fieldsName } = props;

    if (!name || !control) throw new Error("Something went wrong");

    return (
        <Controller
            control={control}
            name={name!}
            render={({ field }) => (
                <FormItems name={name!} fieldName={fieldsName!}>
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
