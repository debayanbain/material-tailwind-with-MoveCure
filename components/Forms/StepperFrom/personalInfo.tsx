import { CustomFormFields } from "@/components/customForms";
import React from "react";
import { FromFiledTypes } from "@/Types/componentsTypes";
import { customFormsTypes } from "@/Types/componentsTypes";
import { FormValue } from "@/lib/zodValidation";
import OtpModals from "@/components/Modals/otp_modals";

const PersonalInfo: React.FC<customFormsTypes<FormValue>> = ({ control }) => {
  const showOtherMenu = false;

  return (
    <>
      <div className="mb-1 flex flex-col gap-2 static">
        <OtpModals />
        <CustomFormFields
          control={control}
          fieldsName={FromFiledTypes.INPUT}
          name="email"
          lable="Enter Valid Email"
          placeholder="eg. john@example.com"
        />

        {/* <div className="flex justify-between items-center font-bold text-blue-gray-500/30">
          <div className="w-1 h-[2px] bg-blue-gray-300 flex-grow rounded-md mx-5 opacity-30"></div>
          Or
          <div className="w-1 h-[2px] bg-blue-gray-300 flex-grow rounded-md mx-5 opacity-30"></div>
        </div> */}

        <CustomFormFields
          control={control}
          fieldsName={FromFiledTypes.PHONE_INPUT}
          name="phone_number"
          lable="Enter Phone Number"
          placeholder="eg. +91 **********"
          showValidIcon={true}
        />

        {showOtherMenu && (
          <>
            <CustomFormFields
              control={control}
              fieldsName={FromFiledTypes.INPUT}
              name="patientName"
              lable="Enter Your Name"
              placeholder="eg: Sayan Saha"
            />
            <div className="flex justify-between gap-2 max-lg:flex-wrap">
              <CustomFormFields
                control={control}
                fieldsName={FromFiledTypes.DATEPICKER}
                lableshowChip={true}
                name="date_of_birth"
                lable="Date of Birth"
                placeholder="eg. 01/01/2000"
              />

              <CustomFormFields
                control={control}
                fieldsName={FromFiledTypes.RADIO}
                name="gender"
                lable="Choose Gender"
                radioItems={["Male", "Female", "Other"]}
              />
            </div>

            <CustomFormFields
              control={control}
              fieldsName={FromFiledTypes.TEXTAREA}
              name="address"
              lable="Address"
              placeholder="eg: 123 Main St, City, Country"
            />
          </>
        )}
      </div>
    </>
  );
};

export default PersonalInfo;
