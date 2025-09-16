import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserOnbordingType {
  userExist: boolean;
  disableTwoFields: boolean;
  token: string | null;
  setShowOtherFields: (
    checkExisted: boolean,
    disableTwoField?: boolean
  ) => void;
  setToken: (token: string | null) => void;
}

export const userOnbording = create<UserOnbordingType>()(
  persist(
    (set) => ({
      userExist: false,
      disableTwoFields: false,
      token: null,

      setToken: (token) => set({ token }),

      logOut: () => set({ token: null }), 

      setShowOtherFields: (checkExisted, disableTwoField) =>
        set({
          userExist: !checkExisted,
          disableTwoFields: disableTwoField ?? false,
        }),
    }),
    {
      name: "user-onboarding", // 👈 key for localStorage
      partialize: (state) => ({ token: state.token }), // only persist token
    }
  )
);
