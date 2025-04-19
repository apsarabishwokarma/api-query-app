import { authService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

export default function useRegister() {
  return useMutation({
    mutationFn: authService.register,
  });
}
