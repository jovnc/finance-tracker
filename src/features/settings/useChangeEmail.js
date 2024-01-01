import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeEmail as changeEmailApi } from "../../services/apiAuth";

export function useChangeEmail() {
  const { mutate: changeEmail, isLoading: isChangingEmail } = useMutation({
    mutationFn: ({ currentEmail, email, newEmail, password }) =>
      changeEmailApi({ currentEmail, email, newEmail, password }),
    onSuccess: () => {
      toast.success("Please verify your new email to confirm");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isChangingEmail, changeEmail };
}
