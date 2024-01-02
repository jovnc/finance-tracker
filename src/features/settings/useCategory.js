import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apiCategories";

export default function useCategory() {
  const { isLoading, data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });

  return { isLoading, categories };
}
