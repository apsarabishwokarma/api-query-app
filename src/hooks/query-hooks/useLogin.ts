import { authService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
  return useMutation({
    mutationFn: authService.login,
  });
}
