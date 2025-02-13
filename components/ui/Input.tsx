"use client"

import React from 'react'
import { Input } from '@/lib/MtConfig';

const CustomInput = () => {
    return (
        <>
            <Input
                size="lg"
                placeholder="name@mail.com"
                className="focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />
        </>
    )
}

export default CustomInput;
