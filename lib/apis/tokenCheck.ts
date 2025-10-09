import { useQuery } from "@tanstack/react-query";
import apiClient from "../axiosInstance";
import { userOnbording } from "@/store/userRelated";

export const useCheckToken = () => {

  const token = userOnbording((s) => s.token);

  return useQuery({
    queryKey: ["token-check", token],
    queryFn: async () => {
      if (!token) return { valid: false };
      const { data } = await apiClient.get("https://backend.movecure.store/auth/auth-check-token");
      return data;
    },
    enabled: !!token,
    retry: false,
  });
};
