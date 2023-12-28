import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions";

export default function useTransaction() {
  const { isLoading, data: transactions } = useQuery({
    queryKey: ["transaction"],
    queryFn: getTransactions,
  });

  return { isLoading, transactions };
}
