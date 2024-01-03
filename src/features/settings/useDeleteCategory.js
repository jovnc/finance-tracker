import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCategory as deleteCategoryApi } from "../../services/apiCategories";

export function useDeleteCategory() {
  const { mutate: deleteCategory, isLoading: isDeletingCategory } = useMutation(
    {
      mutationFn: ({ categoryId }) => deleteCategoryApi({ categoryId }),
      onSuccess: () => {
        toast.success("Successfully deleted category");
      },
      onError: (err) => toast.error(err.message),
    }
  );

  return { isDeletingCategory, deleteCategory };
}
