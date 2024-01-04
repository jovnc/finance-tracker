import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import AddCategoryForm from "./AddCategoryForm";

const StyledAddCategoryButton = styled.div`
  padding-top: 2rem;
`;

function AddCategoryButton() {
  return (
    <StyledAddCategoryButton>
      <Modal>
        <Modal.Open opens="addCategory">
          <Button size="medium" variation="secondary">
            Add Category
          </Button>
        </Modal.Open>
        <Modal.Window name="addCategory">
          <AddCategoryForm />
        </Modal.Window>
      </Modal>
    </StyledAddCategoryButton>
  );
}

export default AddCategoryButton;
