import React from "react";
import { useCreateTransaction } from "./useCreateTransaction";
import { useForm, useController } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import { useUser } from "../authentication/useUser";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useEditTransaction } from "./useEditTransaction";
import DropdownMenu from "../../ui/DropdownMenu";
import { DevTool } from "@hookform/devtools";
import useCategory from "../settings/useCategory";
import { useNavigate } from "react-router-dom";

function CreateTransactionForm({ transactionToEdit = {}, onCloseModal }) {
  const { isCreating, createTransaction } = useCreateTransaction();
  const { isEditing, editTransaction } = useEditTransaction();
  const { isLoading, categories } = useCategory();
  const navigate = useNavigate();
  const { id: editId, ...editValues } = transactionToEdit;
  const isEditSession = Boolean(editId);
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
  const { field: categoryField } = useController({ name: "category", control });
  const user = useUser();
  const userid = user.user.id;

  const isWorking = isCreating || isEditing || isLoading;

  if (isWorking) return <Spinner />;

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

  const categoryOptions = categories
    ? categories.map((category) => {
        return { value: category.id, label: category.categoryName };
      })
    : null;

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
        <Heading as="h3">
          {isEditSession ? "Edit Transaction" : "New Transaction"}
        </Heading>

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

        {categoryOptions.length ? (
          <FormRow label="Category" error={errors?.category?.message}>
            <DropdownMenu
              value={categoryOptions.find(
                ({ value }) => value === categoryField.value
              )}
              isDisabled={isWorking}
              onChange={(e) => categoryField.onChange(e.value)}
              options={categoryOptions}
            />
          </FormRow>
        ) : (
          <FormRow label="Category" error={"No Categories Available"}>
            <Button onClick={() => navigate("/settings")} id="category">
              Add Category
            </Button>
          </FormRow>
        )}

        <FormRow label="Date" error={errors?.time?.message}>
          <Input
            type="date"
            id="date"
            disabled={isWorking}
            {...register("date", {
              required: "This field is required",
            })}
          />
        </FormRow>
        {/* <FormRow label="Location" error={errors?.location?.message}>
          <Input
            type="text"
            id="location"
            disabled={isWorking}
            {...register("location", {
              required: "This field is required",
            })}
          />
        </FormRow> */}
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
          <Button disabled={isWorking || !categoryOptions.length}>
            {isEditSession ? "Edit Transaction" : "Create new Transaction"}
          </Button>
          {!categoryOptions.length && (
            <Button variation="danger" onClick={() => navigate("/settings")}>
              Add Category
            </Button>
          )}
        </FormRow>
      </Form>
      {/* <DevTool control={control} /> */}
    </>
  );
}

export default CreateTransactionForm;
