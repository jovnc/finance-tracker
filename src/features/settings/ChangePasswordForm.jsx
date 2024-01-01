import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useChangePassword } from "./useChangePassword";

function ChangePasswordForm({ user, onCloseModal }) {
  const { register, handleSubmit, formState, reset, watch, getValues } =
    useForm();
  const { errors } = formState;
  const { changePassword, isChangingPassword } = useChangePassword();

  function onSubmit(data) {
    const { currentPassword, newPassword, confirmNewPassword } = data;
    changePassword(
      { currentPassword, newPassword, confirmNewPassword },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  if (isChangingPassword) return <Spinner />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Heading as="h2">Change Password</Heading>
      <FormRow
        label="Current Password"
        error={errors?.currentPassword?.message}
      >
        <Input
          type="password"
          {...register("currentPassword", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="New Password" error={errors?.newPassword?.message}>
        <Input
          type="password"
          {...register("newPassword", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must have atleast 8 characters",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Confirm New Password"
        error={errors?.confirmNewPassword?.message}
      >
        <Input
          type="password"
          {...register("confirmNewPassword", {
            required: "This field is required",
            validate: (value, formValues) =>
              value === formValues.newPassword || "Passwords do not match",
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
        <Button>Change Password</Button>
      </FormRow>
    </Form>
  );
}

export default ChangePasswordForm;
