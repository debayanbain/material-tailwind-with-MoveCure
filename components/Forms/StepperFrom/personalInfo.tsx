import React from 'react'
import {
    Input,
    Typography,
} from '@/lib/MtConfig';
import InputCustomTheme from "@/components/custom-themes/InputCustomTheme";
import { useFormContext } from "react-hook-form";

const PersonalInfo = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <>
                <div className="mb-1 flex flex-col gap-2 static">
                    <Typography variant="h6" className="-mb-3 font-[Nunito] text-dark-300/60 font-bold italic font-stretch-expanded dark:text-white/40">
                        Your Name
                    </Typography>
                    <InputCustomTheme>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("name")}
                        />
                        {errors.name && (
                            <Typography variant="small" className="text-red-500">
                                {errors.name.message as string}
                            </Typography>
                        )}
                        <Typography variant="h6" className="-mb-3 font-[Nunito] text-dark-300/60 font-bold italic font-stretch-expanded dark:text-white/40">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("email")}
                        />
                        {errors.email && (
                            <Typography variant="small" className="text-red-500">
                                {errors.email.message as string}
                            </Typography>
                        )}
                        <Typography variant="h6" className="-mb-3 font-[Nunito] text-dark-300/60 font-bold italic font-stretch-expanded dark:text-white/40">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("password")}
                        />
                        {errors.password && (
                            <Typography variant="small" className="text-red-500">
                                {errors.password.message as string}
                            </Typography>
                        )}
                    </InputCustomTheme>
                </div>
        </>
    )
}

export default PersonalInfo;
