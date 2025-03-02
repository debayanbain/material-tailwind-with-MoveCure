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
                    name="name"
                    lable='Enter Name'
                    lableVariant="h6"
                    placeholder="ex: Sayan Saha"
                />
            </div >
        </>
    )
}

export default PersonalInfo;
