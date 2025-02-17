import React from 'react'
import {
    Input,
    Button,
    Typography,
} from '@/lib/MtConfig';
import InputCustomTheme from "@/components/custom-themes/InputCustomTheme";

const LoginPatient = () => {
    return (
        <>
            <form className="mt-8 mb-4 w-full lg:w-full">
                <div className="mb-1 flex flex-col gap-6 static">
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
                        />
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
                        />
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
                        />
                    </InputCustomTheme>
                </div>
                <Button className="mt-14 font-[Nunito]" color='deep-purple' variant='gradient' loading={false} fullWidth>
                    Book Now
                </Button>
            </form>
        </>
    )
}

export default LoginPatient;
