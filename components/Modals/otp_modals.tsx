"use client";

import React, { useCallback, useEffect, useState } from "react";
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
import Countdown, { CountdownApi } from "react-countdown";
import { userOnbording } from "@/store/userRelated";

const TOAST_ID = "TOAST1";
const COUNT_TIME = 120000; // 2 minutes in milliseconds

const OptModals = () => {
  const maxLength = 6 as const;
  // Store States
  const otpSended = OtpStore((s) => s.otpSened);
  const isOpen = OtpStore((s) => s.isOtpModalOpen);
  const closeOtpModal = OtpStore((s) => s.closeOtpModal);
  const OtpToken = OtpStore((s) => s.otpToken);
  // States
  const [isError, setIsError] = useState<boolean>(false);
  const [otpValues, setotpValues] = useState<string>("");
  const [endTime, setEndTime] = useState<number | null>(null);
  //for countdown ref
  const countdownApiRef = React.useRef<CountdownApi | null>(null);
  //api called
  const { mutateAsync: setVerifyOtp, isLoading } = useVerifyOtpApi();

  const setRef = useCallback((countdown: Countdown | null) => {
    if (countdown) {
      countdownApiRef.current = countdown.getApi();
    } else {
      countdownApiRef.current = null;
    }
  }, []);

  useEffect(() => {
    let timmer: NodeJS.Timeout;
    if (isOpen && otpSended) {
      const newEndTime = Date.now() + COUNT_TIME;
      setEndTime(newEndTime);
      countdownApiRef.current?.start();
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

      if (res?.success) {
        console.log(res?.data?.isUserExist, "isUserExist");
        userOnbording.getState().setTwoOtherFields(res?.success ?? false);
        userOnbording.getState().setShowOtherMenu(!res?.data?.isUserExist ? true : false);
        OtpStore.getState().setOtpVerified(res?.success ?? false);
        userOnbording.getState().setToken(res?.data?.loginToken ?? null);
        toast.success("OTP Verified Successfully!", {
          toasterId: 'area1',
        });
        countdownApiRef.current?.stop();
        closeOtpModal();
      }
    } catch (error: unknown) {
      const errorData = error as { data: { message: string } };
      console.log(errorData.data.message, "Error while");
      toast.error("Invalid OTP or Something went wrong", {
        toasterId: TOAST_ID,
      });
      return;
    }
  };

  const handleClose = () => {
    setIsError(false);
    countdownApiRef.current?.stop();
    closeOtpModal();
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
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 5000 }}
        />
        <DialogHeader className="justify-center">
          <BlurTextAnimation>Verify OTP</BlurTextAnimation>
        </DialogHeader>
        {endTime && (
          <Countdown
            date={endTime}
            intervalDelay={0}
            precision={3}
            daysInHours={true}
            ref={setRef}
            className="mb-2 text-red-500 flex justify-center items-center font-bold text-xl"
          >
            <p className="text-center text-base font-semibold text-red-400">
              OTP Has Been Expired...
            </p>
          </Countdown>
        )}
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
            className="mr-1 hover:bg-red-100/20 p-3"
            disabled={isLoading}
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            onClick={handleConfirm}
            disabled={isLoading}
            className="flex items-center gap-2 justify-center p-3"
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
