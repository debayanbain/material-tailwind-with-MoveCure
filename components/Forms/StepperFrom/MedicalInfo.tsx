import React from 'react'
import { CustomFormFields } from '@/components/customForms';
import { FromFiledTypes } from '@/Types/componentsTypes';
import { customFormsTypes } from '@/Types/componentsTypes';
import { FormValue } from '@/lib/zodValidation';

const MedicalInfo: React.FC<customFormsTypes<FormValue>> = ({ control })  => {

    return (
        <>
            <div className="mb-1 flex flex-col gap-2 static">
            <CustomFormFields
                    control={control}
                    fieldsName={FromFiledTypes.INPUT}
                    name="blood_group"
                    lable='Enter Your Blood Group'
                    placeholder="eg: O-positive"
                />
            <CustomFormFields
                    control={control}
                    fieldsName={FromFiledTypes.INPUT}
                    name="allergies"
                    lable='Enter Your Allergies Name'
                    placeholder="eg: Food, Medicine"
                />
            <CustomFormFields
                    control={control}
                    fieldsName={FromFiledTypes.TEXTAREA}
                    name="problems"
                    lable='Describe Your Problems'
                    placeholder="eg: Having neck pain for 2 days"
                />
            </div >
        </>
    )
}

export default MedicalInfo;
