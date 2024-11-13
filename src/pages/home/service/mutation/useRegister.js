import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import request from "../../../../config/request/request";
import { saveState } from "../../../../config/storage";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data) => request.post("/register", data).then((res) => res.data),
    onSuccess: (data) => {
      saveState("user", data); // Сохранение данных пользователя
      toast.success("Registration successful!");
      window.location.href = "/"; // Перенаправление после успешной регистрации
    },
    onError: () => {
      toast.error("Registration failed, please try again.");
    },
  });
};
