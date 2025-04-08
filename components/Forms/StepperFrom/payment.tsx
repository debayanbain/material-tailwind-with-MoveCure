import { CustomFormFields } from '@/components/customForms';
import { FormValue } from '@/lib/zodValidation';
import { customFormsTypes, FromFiledTypes } from '@/Types/componentsTypes';
import React from 'react'

const paymentService: React.FC<customFormsTypes<FormValue>> = ({ control }) => {
    return (
        <div className="mb-1 flex flex-col gap-2 static">
            <CustomFormFields
                control={control}
                fieldsName={FromFiledTypes.INPUT}
                name="amount"
                lable='Total Amount'
                placeholder="100"
                disabled={true}
                readOnly={true}
            />
        </div>
    )
}

export default paymentService;
