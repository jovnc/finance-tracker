import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditTransaction as createTransactionApi } from "../../services/apiTransactions";

export function useCreateTransaction() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createTransaction } = useMutation({
    mutationFn: createTransactionApi,
    onSuccess: () => {
      toast.success("Transaction successfully created");

      queryClient.invalidateQueries({
        queryKey: ["transaction"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createTransaction };
}
