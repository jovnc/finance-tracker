import React from "react";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import Button from "../../ui/Button";

const StyledCategoryForm = styled.div`
  padding: 2.4rem 4rem;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 1.2rem;
  padding: 1.5rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const FormLabel = styled.label`
  padding: 1.2rem 0;
  font-weight: 500;
`;

function CategoryForm() {
  return (
    <StyledCategoryForm>
      <Heading as="h2">Modify Categories</Heading>
      <FormRow>
        <FormLabel>Add new category</FormLabel>
        <Button size="small" variation="secondary">
          Add
        </Button>
      </FormRow>
      <FormRow>
        <FormLabel>Remove categories</FormLabel>
        <Button size="small" variation="danger">
          Remove
        </Button>
      </FormRow>
    </StyledCategoryForm>
  );
}

export default CategoryForm;
