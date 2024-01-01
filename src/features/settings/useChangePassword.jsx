import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changePassword as changePasswordApi } from "../../services/apiAuth";

export function useChangePassword() {
  const { mutate: changePassword, isLoading: isChangingPassword } = useMutation(
    {
      mutationFn: ({ currentPassword, newPassword, confirmNewPassword }) =>
        changePasswordApi({ currentPassword, newPassword, confirmNewPassword }),
      onSuccess: () => {
        toast.success("Passowrd Changed successfully");
      },
      onError: (err) => toast.error(err.message),
    }
  );

  return { isChangingPassword, changePassword };
}
