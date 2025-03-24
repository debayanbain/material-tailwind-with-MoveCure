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
                    placeholder="eg: Sayan Saha"
                />
                <CustomFormFields
                    control={control}
                    fieldsName={FromFiledTypes.INPUT}
                    name="email"
                    lable='Enter Valid Email'
                    placeholder="eg. sayan@example.com"
                />
                <CustomFormFields
                    control={control}
                    fieldsName={FromFiledTypes.PHONE_INPUT}
                    name="phone_number"
                    lable='Enter Phone Number'
                    placeholder="eg. +91 1234567890"
                    showValidIcon={true}
                />

                <div className='flex justify-between gap-2 max-lg:flex-wrap'>
                    <CustomFormFields
                        control={control}
                        fieldsName={FromFiledTypes.DATEPICKER}
                        name="date_of_birth"
                        lable='Date of Birth'
                        placeholder="eg. 01/01/2000"
                    />

                    <CustomFormFields
                        control={control}
                        fieldsName={FromFiledTypes.RADIO}
                        name="gender"
                        lable='Choose Gender'
                        placeholder="eg. Male"
                        radioItems={['Male', 'Female', 'Other']}
                    />
                </div>
            </div >
        </>
    )
}

export default PersonalInfo;
