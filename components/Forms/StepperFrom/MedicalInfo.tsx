import React from 'react'
import {
    Input,
    Typography,
    Textarea
} from '@/lib/MtConfig';
import InputCustomTheme from "@/components/custom-themes/InputCustomTheme";
import { useFormContext } from "react-hook-form";
import { cn } from '@/lib/utils';

const MedicalInfo = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <>
            <div className="mb-1 flex flex-col gap-2 static">
                <InputCustomTheme>
                    <div className='w-full flex justify-center flex-col mt-4'>
                        <Typography variant="h6" className="font-[Nunito] text-dark-300/60 font-bold italic font-stretch-expanded dark:text-white/40">
                            Blood Group
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="eg: O+"
                            className={cn("border-2 !border-blue-gray-200 focus:!border-gray-700",
                                errors.blood_group && "!border-red-400"
                            )}
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("blood_group")}
                        />
                        {errors.blood_group && (
                            <Typography variant="small" className="text-red-500">
                                {errors.blood_group.message as string}
                            </Typography>
                        )}
                    </div>

                    <div className='w-full flex justify-center flex-col mt-4'>
                        <Typography variant="h6" className="font-[Nunito] text-dark-300/60 font-bold italic font-stretch-expanded dark:text-white/40">
                            Allergies
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="ex: Food allergies or asthma"
                            className={cn("!border-blue-gray-200 focus:!border-gray-900",
                                errors.allergies && "!border-red-400"
                            )}
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("allergies")}
                        />
                        {errors.allergies && (
                            <Typography variant="small" className="text-red-500">
                                {errors.allergies.message as string}
                            </Typography>
                        )}
                    </div>

                    <div className='w-full flex justify-center flex-col mt-4'>
                        <Typography variant="h6" className="font-[Nunito] text-dark-300/60 font-bold italic font-stretch-expanded dark:text-white/40">
                            Tell us about your problem!
                        </Typography>

                        <Textarea
                            size="lg"
                            placeholder="ex: Food allergies or asthma"
                            className={cn("!border-blue-gray-200 focus:!border-gray-900",
                                errors.problems && "!border-red-400"
                            )}
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("problems")}
                        />
                        {errors.problems && (
                            <Typography variant="small" className="text-red-500">
                                {errors.problems.message as string}
                            </Typography>
                        )}
                    </div>
                </InputCustomTheme>
            </div >
        </>
    )
}

export default MedicalInfo;
