import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import request from "../../../../config/request/request";
import { saveState } from "../../../../config/storage";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
    onSuccess: (data) => {
      saveState("user", data); // Сохранение данных пользователя
      toast.success("Login successful!");
      window.location.href = "/"; // Перенаправление после успешного входа
    },
    onError: () => {
      toast.error("Login failed, please try again.");
    },
  });
};
