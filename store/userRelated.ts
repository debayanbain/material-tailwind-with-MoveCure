import { create } from "zustand";

// interface UserStoreType {
//   isLoggedIn: boolean;
//   loginToken: string | null;
//   setLogin: (token: string) => void;
//   logout: () => void;
// }

// export const userStore = create<UserStoreType>((set)=> {

// })

interface UserOnbordingType {
  userExist: boolean;
  disableTwoFields: boolean;
  token: string | null;
  setShowOtherFields: (
    checkExisted: boolean,
    disableTwoField?: boolean
  ) => void;
  setTokenToLocalStorage: (token: string) => void;
}

export const userOnbording = create<UserOnbordingType>((set) => ({
  userExist: false,
  disableTwoFields: false,
  token: localStorage.getItem("token") || null,
  setTokenToLocalStorage: (token: string) => {
    localStorage.setItem("token", token);
    set({
      token,
    });
  },
  setShowOtherFields: (checkExisted: boolean, disableTwoField?: boolean) =>
    set({
      userExist: !checkExisted,
      disableTwoFields: disableTwoField,
    }),
}));
