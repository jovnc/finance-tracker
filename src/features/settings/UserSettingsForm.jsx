import React from "react";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UserSettingsForm() {
  const { register, handleSubmit, errors } = useForm();
  return (
    <Form>
      <Heading as="h2">Modify User Settings</Heading>
      <FormRow label="Email" error={errors?.amount?.message}>
        <Input
          {...register("amount", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.amount?.message}>
        <Input
          {...register("password", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Confirm Password" error={errors?.amount?.message}>
        <Input
          {...register("confirm-password", {
            required: "This field is required",
          })}
        />
      </FormRow>
    </Form>
  );
}

export default UserSettingsForm;
