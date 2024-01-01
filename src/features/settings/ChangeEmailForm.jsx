import { useForm } from "react-hook-form";
import { useChangeEmail } from "./useChangeEmail";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function ChangeEmailForm({ user, onCloseModal }) {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { email: currentEmail } = user;
  const { isChangingEmail, changeEmail } = useChangeEmail();

  function onSubmit(data) {
    const { currentEmail: email, newEmail, password } = data;

    changeEmail(
      { currentEmail, email, newEmail, password },
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
      <Heading as="h2">Change Email</Heading>
      <FormRow label="Current Email" error={errors?.currentEmail?.message}>
        <Input
          type="text"
          {...register("currentEmail", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="New Email" error={errors?.newEmail?.message}>
        <Input
          type="text"
          {...register("newEmail", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          {...register("password", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button>Change Email</Button>
      </FormRow>
    </Form>
  );
}

export default ChangeEmailForm;
