import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import styled from "styled-components";
import Modal from "../../ui/Modal";
import AddCategoryForm from "./AddCategoryForm";
import ChangeEmailForm from "./ChangeEmailForm";
import ChangePasswordForm from "./ChangePasswordForm";
import RemoveCategoryForm from "./RemoveCategoryForm";

const StyledUserSettingsForm = styled.div`
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

function UserSettingsForm({ user }) {
  const isDemo = user.email === "demo@gmail.com";
  return (
    <StyledUserSettingsForm>
      <Modal>
        {/* Settings Buttons */}
        <Heading as="h2">Modify User Settings</Heading>
        <FormRow>
          <FormLabel>Change email</FormLabel>
          <Modal.Open opens="changeEmail">
            <Button size="small" disabled={isDemo}>
              Change
            </Button>
          </Modal.Open>
        </FormRow>
        <FormRow>
          <FormLabel>Change password</FormLabel>
          <Modal.Open opens="changePassword">
            <Button size="small" disabled={isDemo}>
              Change
            </Button>
          </Modal.Open>
        </FormRow>
        <FormRow>
          <FormLabel>Add Categories</FormLabel>
          <Modal.Open opens="addCategories">
            <Button size="small" variation="secondary">
              Add
            </Button>
          </Modal.Open>
        </FormRow>
        <FormRow>
          <FormLabel>Remove Categories</FormLabel>
          <Modal.Open opens="removeCategories">
            <Button size="small" variation="danger">
              Remove
            </Button>
          </Modal.Open>
        </FormRow>

        {/* Modal Windows */}
        <Modal.Window name="changeEmail">
          <ChangeEmailForm user={user} />
        </Modal.Window>
        <Modal.Window name="changePassword">
          <ChangePasswordForm user={user} />
        </Modal.Window>
        <Modal.Window name="addCategories">
          <AddCategoryForm />
        </Modal.Window>
        <Modal.Window name="removeCategories">
          <RemoveCategoryForm />
        </Modal.Window>
      </Modal>
    </StyledUserSettingsForm>
  );
}

export default UserSettingsForm;
