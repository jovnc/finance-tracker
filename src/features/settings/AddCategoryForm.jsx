import { useForm, useController } from "react-hook-form";
import { useAddCategory } from "./useAddCategory";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import ColorPicker from "../../ui/ColorPicker";
import DropdownMenu from "../../ui/DropdownMenu";
import CategoryField from "../../ui/CategoryField";

const statusOptions = [
  {
    value: "Deposit",
    label: "Deposit",
  },
  {
    value: "Withdrawal",
    label: "Withdrawal",
  },
];

function AddCategoryForm({ onCloseModal }) {
  const { register, handleSubmit, formState, reset, control, onChange, watch } =
    useForm();
  const { errors } = formState;
  const { isAddingCategory, addCategory } = useAddCategory();

  const { field: statusField } = useController({
    name: "status",
    control,
  });
  const { field: backgroundField } = useController({
    name: "backgroundColor",
    control,
  });
  const { field: textField } = useController({
    name: "textColor",
    control,
  });

  const currentCategoryName = watch("newCategoryName");

  function onSubmit(data) {
    console.log(data);
    const { newCategoryName, backgroundColor, textColor, status } = data;

    addCategory(
      { newCategoryName, backgroundColor, textColor, status },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
    onCloseModal?.();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Heading as="h2">Add Category</Heading>

      <FormRow
        label="New Category Name"
        error={errors?.newCategoryName?.message}
      >
        <Input
          type="text"
          {...register("newCategoryName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Status" error={errors?.newCategoryName?.message}>
        <DropdownMenu
          value={statusOptions.find(({ value }) => value === statusField.value)}
          onChange={(e) => statusField.onChange(e.value)}
          options={statusOptions}
        />
      </FormRow>

      <FormRow
        label="Background Color"
        error={errors?.backgroundColor?.message}
      >
        <ColorPicker
          typeInput="backgroundColor"
          onChange={onChange}
          field={backgroundField}
          register={register}
        />
      </FormRow>

      <FormRow label="Text Color" error={errors?.textColor?.message}>
        <ColorPicker
          typeInput="textColor"
          onChange={onChange}
          field={textField}
          register={register}
        />
      </FormRow>

      <FormRow>
        Preview
        <span>
          <CategoryField
            backgroundColor={backgroundField.value}
            textColor={textField.value}
            categoryName={currentCategoryName}
          />
        </span>
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button>Add Category</Button>
      </FormRow>
    </Form>
  );
}

export default AddCategoryForm;
