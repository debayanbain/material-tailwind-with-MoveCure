"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@/lib/MtConfig";
import OtpInputs from "../ui/otp_inputs";
import { OtpStore } from "@/store/OtpStore";
import BlurTextAnimation from "../Animation/blurTextAnimation";
import toast, { Toaster } from "react-hot-toast";
import { useVerifyOtpApi } from "@/lib/utils/hooks/VerifyOtpApi";
import GroupAnimationButton from "../ui/GroupAnimationButton";
const TOAST_ID = "TOAST1";

const OptModals = () => {
  const maxLength = 6 as const;
  const otpSended = OtpStore((s) => s.otpSened);
  const isOpen = OtpStore((s) => s.isOtpModalOpen);
  const closeOtpModal = OtpStore((s) => s.closeOtpModal);
  const OtpToken = OtpStore((s) => s.otpToken);
  const [isError, setIsError] = useState<boolean>(false);

  const [otpValues, setotpValues] = useState<string>("");
  const { mutateAsync: setVerifyOtp, isLoading } = useVerifyOtpApi();

  const handleClose = () => {
    setIsError(false);
    closeOtpModal();
  };

  useEffect(() => {
    let timmer: NodeJS.Timeout;
    if (isOpen && otpSended) {
      timmer = setTimeout(() => {
        toast.success("OTP Sent Successfully!", {
          toasterId: TOAST_ID,
          className: "delay-1000",
        });
        OtpStore.setState({ otpSened: false });
      }, 1000);
    }

    return () => {
      clearTimeout(timmer);
    };
  }, [isOpen, otpSended]);

  const handleConfirm = async () => {
    if (!otpValues.trim() || otpValues.length < maxLength) {
      setIsError(true);
      return;
    }

    try {
      const otp = otpValues.trim();
      const res = await setVerifyOtp({
        otpToken: String(OtpToken!),
        otp,
      });
      console.log(res);
    } catch (error: unknown) {
      const errorData = error as { data: { message: string } };
      console.log(errorData.data.message, "Error while");
      toast.error("Invalid OTP or Something went wrong", {
        toasterId: TOAST_ID,
      });
      return;
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        handler={handleClose}
        dismiss={{
          outsidePress: false,
        }}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="md"
        onContextMenu={(e) => e.preventDefault()}
      >
        <Toaster
          toasterId={TOAST_ID}
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{ duration: 5000 }}
        />
        <DialogHeader className="justify-center">
          <BlurTextAnimation>Verify OTP</BlurTextAnimation>
        </DialogHeader>
        <div>
          <BlurTextAnimation className="text-center">
            Please enter the OTP sent to your email.
          </BlurTextAnimation>
        </div>
        <DialogBody>
          <OtpInputs
            onChange={(val) => {
              setotpValues(val);
              if (val.length === maxLength) setIsError(false);
            }}
            isErrors={isError}
            maxLength={maxLength}
          />
        </DialogBody>
        <DialogFooter className="justify-center gap-6">
          <Button
            variant="outlined"
            color="red"
            onClick={handleClose}
            className="mr-1 hover:bg-red-100/20 p-3.5"
            disabled={isLoading}
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            onClick={handleConfirm}
            disabled={isLoading}
            className="flex items-center gap-2 justify-center"
          >
            {isLoading ? (
              <>
                <span>Loading...</span>
                <span className="loader"></span>
              </>
            ) : (
              <span>Confirm</span>
            )}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default OptModals;
