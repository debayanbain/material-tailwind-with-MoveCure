"use client";

import { CustomFormFields } from "@/components/customForms";
import React from "react";
import { FromFiledTypes } from "@/Types/componentsTypes";
import { customFormsTypes } from "@/Types/componentsTypes";
import { FormValue } from "@/lib/zodValidation";
import OtpModals from "@/components/Modals/otp_modals";
import { userOnbording } from "@/store/userRelated";
import { OtpStore } from "@/store/OtpStore";
import { Button } from "@/lib/MtConfig";

const PersonalInfo: React.FC<customFormsTypes<FormValue>> = ({ control }) => {
  const showOtherMenu = userOnbording((s) => s.userExist);
  const disableFields = userOnbording((s) => s.disableTwoFields);
  const isUserExist = userOnbording((s) => s.token);
  const isOtpVerified = OtpStore((s) => s.isOtpVerified);

  return (
    <>
      <div className="mb-1 flex flex-col gap-2 relative">
        {
          isUserExist && (
            <div
              className="absolute w-full h-full rounded-lg z-40 flex justify-center items-center"
              style={{
                background: `
                radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
                radial-gradient(ellipse 60% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
                radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
                radial-gradient(ellipse 60% 48% at 75% 20%, rgba(130, 190, 255, 0.36), transparent 66%),
                linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)
                `,
              }}
            >
              <div>
                <Button variant="gradient">Dashboard</Button>
              </div>
            </div>
          )
        }

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
