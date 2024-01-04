import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import RemoveCategoryForm from "./RemoveCategoryForm";

const StyledRemoveCategoryButton = styled.div`
  padding-top: 2rem;
`;

function RemoveCategoryButton() {
  return (
    <StyledRemoveCategoryButton>
      <Modal>
        <Modal.Open opens="removeCategory">
          <Button size="medium" variation="danger">
            Remove Category
          </Button>
        </Modal.Open>
        <Modal.Window name="removeCategory">
          <RemoveCategoryForm />
        </Modal.Window>
      </Modal>
    </StyledRemoveCategoryButton>
  );
}

export default RemoveCategoryButton;
