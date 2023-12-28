import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditTransaction as editTransactionApi } from "../../services/apiTransactions";

export function useEditTransaction() {
  const queryClient = useQueryClient();

  const { mutate: editTransaction, isLoading: isEditing } = useMutation({
    mutationFn: ({ newTransaction, id }) =>
      editTransactionApi(newTransaction, id),
    onSuccess: () => {
      toast.success("Transaction successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["transaction"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editTransaction };
}
