// src/store/OtpStore.ts
import { create } from "zustand";

type OtpStoreType = {
  isOtpVerified: boolean;
  isOtpModalOpen: boolean;
  otpToken: string | null;
  email: string | null;
  otpSened: boolean;
  setOtpSent: (token: string, email?: string, otpSened?: boolean) => void;
  setOtpVerified: (isVerified: boolean) => void;
  closeOtpModal: () => void;
};

export const OtpStore = create<OtpStoreType>((set) => ({
  isOtpVerified: false,
  isOtpModalOpen: false,
  otpSened: false,
  otpToken: null,
  email: null,
  setOtpSent: (token: string, email?: string, otpSened?: boolean) =>
    set({
      isOtpModalOpen: true,
      otpSened: otpSened ?? false,
      otpToken: token ?? null,
      email: email ?? null,
    }),
  setOtpVerified: (isVerified: boolean) =>
    set({
      isOtpVerified: isVerified,
    }),
  closeOtpModal: () =>
    set({
      isOtpModalOpen: false,
      otpToken: null,
      email: null,
      otpSened: false,
    }),
}));
