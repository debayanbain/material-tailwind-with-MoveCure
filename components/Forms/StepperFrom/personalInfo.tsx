"use client";

import { CustomFormFields } from "@/components/customForms";
import React from "react";
import { FromFiledTypes } from "@/Types/componentsTypes";
import { customFormsTypes } from "@/Types/componentsTypes";
import { FormValue } from "@/lib/zodValidation";
import OtpModals from "@/components/Modals/otp_modals";
import { userOnbording } from "@/store/userRelated";
import { OtpStore } from "@/store/OtpStore";

const PersonalInfo: React.FC<customFormsTypes<FormValue>> = ({control}) => {
  const showOtherMenu = userOnbording((s) => s.userExist);
  const disableFields = userOnbording((s) => s.disableTwoFields);
  const isOtpVerified = OtpStore((s) => s.isOtpVerified);

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
          disabled={disableFields}
        />

        <CustomFormFields
          control={control}
          fieldsName={FromFiledTypes.PHONE_INPUT}
          name="phone_number"
          lable="Enter Phone Number"
          placeholder="eg. +91 **********"
          showValidIcon={isOtpVerified}
          iSPhoneInputDisabled={disableFields}
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
