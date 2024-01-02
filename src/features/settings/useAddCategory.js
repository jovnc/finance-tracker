import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addCategory as addCategoryApi } from "../../services/apiCategories";

export function useAddCategory() {
  const { mutate: addCategory, isLoading: isAddingCategory } = useMutation({
    mutationFn: ({ newCategoryName, backgroundColor, textColor, status }) =>
      addCategoryApi({ newCategoryName, backgroundColor, textColor, status }),
    onSuccess: () => {
      toast.success("Successfully added category");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAddingCategory, addCategory };
}
