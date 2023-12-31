import React from "react";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function CategoryForm() {
  const { register, handleSubmit, errors } = useForm();
  return (
    <Form>
      <Heading as="h2">Add Categories</Heading>
      <FormRow label="Add New Category" error={errors?.amount?.message}>
        <Input
          {...register("amount", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Remove Category" error={errors?.amount?.message}>
        <Input
          {...register("amount", {
            required: "This field is required",
          })}
        />
      </FormRow>
    </Form>
  );
}

export default CategoryForm;
