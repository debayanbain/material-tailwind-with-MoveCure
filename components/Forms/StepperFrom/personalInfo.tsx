import React from 'react'
import { CustomFormFields } from '@/components/customForms';
import { FromFiledTypes } from '@/Types/componentsTypes';
import { customFormsTypes } from '@/Types/componentsTypes';
import { FormValue } from '@/lib/zodValidation';


const PersonalInfo: React.FC<customFormsTypes<FormValue>> = ({ control }) => {

    return (
        <>
            <div className="mb-1 flex flex-col gap-2 static">
                <CustomFormFields
                    control={control}
                    fieldsName={FromFiledTypes.INPUT}
                    name="patientName"
                    lable='Enter Your Name'
                    lableVariant="h6"
                    placeholder="eg: Sayan Saha"
                />
                <CustomFormFields
                    control={control}
                    fieldsName={FromFiledTypes.INPUT}
                    name="email"
                    lable='Enter Valid Email'
                    lableVariant="h6"
                    placeholder="eg. sayan@example.com"
                />
                <CustomFormFields
                    control={control}
                    fieldsName={FromFiledTypes.PHONE_INPUT}
                    name="phone_number"
                    lable='Enter Phone Number'
                    lableVariant="h6"
                    placeholder="eg. +91 1234567890"
                    showValidIcon
                />
            </div >
        </>
    )
}

export default PersonalInfo;
