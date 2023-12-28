import React from "react";
import { useCreateTransaction } from "./useCreateTransaction";
import { useForm, useController } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import { useUser } from "../authentication/useUser";
import Button from "../../ui/Button";
import { useEditTransaction } from "./useEditTransaction";
import DropdownMenu from "../../ui/DropdownMenu";
import { DevTool } from "@hookform/devtools";

function CreateTransactionForm({ transactionToEdit = {}, onCloseModal }) {
  const { isCreating, createTransaction } = useCreateTransaction();
  const { isEditing, editTransaction } = useEditTransaction();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = transactionToEdit;
  const isEditSession = Boolean(editId);

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

  const user = useUser();
  const userid = user.user.id;

  const { register, handleSubmit, reset, onChange, formState, control } =
    useForm({
      defaultValues: isEditSession
        ? editValues
        : {
            amount: 0,
          },
    });
  const { errors } = formState;

  const { field } = useController({ name: "status", control });

  function onSubmit(data) {
    if (isEditSession) {
      editTransaction(
        { newTransaction: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createTransaction(
        { ...data },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  function handleSelectChange(option) {
    field.onChange(option.value);
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit, onError)}
        type={onCloseModal ? "modal" : "regular"}
      >
        <Heading as="h3">New Transaction</Heading>
        <FormRow label="Amount" error={errors?.amount?.message}>
          <Input
            type="number"
            id="name"
            min="0.01"
            step=".01"
            disabled={isWorking}
            {...register("amount", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Category" error={errors?.category?.message}>
          <Input
            type="text"
            id="category"
            disabled={isWorking}
            {...register("category", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Status (Withdraw/Deposit)"
          error={errors?.status?.message}
        >
          <DropdownMenu
            value={statusOptions.find(({ value }) => value === field.value)}
            isDisabled={isWorking}
            onChange={handleSelectChange}
            options={statusOptions}
          />
        </FormRow>
        <FormRow label="date" error={errors?.time?.message}>
          <Input
            type="date"
            id="date"
            disabled={isWorking}
            {...register("date", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Location" error={errors?.location?.message}>
          <Input
            type="text"
            id="location"
            disabled={isWorking}
            {...register("location", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <Input
          type="hidden"
          id="user_id"
          value={userid}
          {...register("user_id")}
        />
        <FormRow>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isWorking}>
            {isEditSession ? "Edit Transaction" : "Create new Transaction"}
          </Button>
        </FormRow>
      </Form>
      {/* <DevTool control={control} /> */}
    </>
  );
}

export default CreateTransactionForm;
