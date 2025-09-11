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
  setShowOtherFields: (checkExisted: boolean, disableTwoField?: boolean) => void;
}

export const userOnbording = create<UserOnbordingType>((set) => ({
  userExist: false,
  disableTwoFields: false,
  setShowOtherFields: (checkExisted: boolean, disableTwoField?: boolean) =>
    set({
      userExist: !checkExisted,
      disableTwoFields: disableTwoField,
    }),
}));
