import React from "react";
import Heading from "../../ui/Heading";
import useCategory from "./useCategory";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import styled from "styled-components";
import CategoryField from "../../ui/CategoryField";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteCategory } from "./useDeleteCategory";

const NoCategoryError = styled.div`
  color: var(--color-red-700);
  padding: 40px 0px;
`;

const CategoryRow = styled.div`
  padding: 1.8rem 0;
  display: grid;
  grid-template-columns: 1fr 20rem 5rem;
`;

const CategoryFormHeader = styled.div`
  padding: 1.8rem 0;
  display: grid;
  grid-template-columns: 1fr 20rem 5rem;
`;

const CategoryHeader = styled.span`
  font-weight: bold;
`;

function RemoveCategoryForm({ onCloseModal }) {
  const { categories, isLoading } = useCategory();
  const { register, handleSubmit, formState, reset, control, onChange, watch } =
    useForm();
  const { errors } = formState;
  const { isDeletingCategory, deleteCategory } = useDeleteCategory();

  function onSubmit(data) {
    const categoryId = data.selected;
    deleteCategory(
      { categoryId },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(error) {
    console.log(error);
  }

  if (isLoading) return <Spinner />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Heading as="h2">Remove Categories</Heading>
      {categories.length === 0 ? (
        <NoCategoryError>
          There are no categories currently, please add more categories in the
          settings.
        </NoCategoryError>
      ) : (
        <>
          <CategoryFormHeader>
            <CategoryHeader>Category Name</CategoryHeader>
            <CategoryHeader>Preview</CategoryHeader>
            <CategoryHeader>Delete</CategoryHeader>
          </CategoryFormHeader>

          {categories.map((category) => {
            return (
              <CategoryRow key={category.id}>
                <span>{category.categoryName}</span>
                <CategoryField
                  backgroundColor={category.backgroundColor}
                  textColor={category.textColor}
                  categoryName={category.categoryName}
                />
                <input
                  type="checkbox"
                  value={category.id}
                  {...register("selected")}
                />
              </CategoryRow>
            );
          })}
        </>
      )}
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>

        <Button disabled={categories.length === 0}>Remove Categories</Button>
      </FormRow>
    </Form>
  );
}

export default RemoveCategoryForm;
