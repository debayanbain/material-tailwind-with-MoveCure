import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserOnbordingType {
  showOtherMenu: boolean;
  disableTwoFields: boolean;
  token: string | null;
  setTwoOtherFields: (disableTwoField?: boolean) => void;
  setShowOtherMenu: (checkExisted?: boolean) => void;
  setToken: (token: string | null) => void;
  logOut: () => void;
}

export const userOnbording = create<UserOnbordingType>()(
  persist(
    (set) => ({
      token: null,
      showOtherMenu: false,
      disableTwoFields: false,

      setToken: (token) => set({ token }),

      logOut: () => set({ token: null }),

      setTwoOtherFields: (disableTwoField) =>
        set({
          disableTwoFields: disableTwoField ?? false,
        }),
      setShowOtherMenu: (checkExisted) =>
        set({ showOtherMenu: checkExisted ?? false }),
    }),
    {
      name: "user-onboarding", // 👈 key for localStorage
      partialize: (state) => ({ token: state.token }), // only persist token
    }
  )
);
