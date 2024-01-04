import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateTransactionForm from "./CreateTransactionForm";

const StyledCreateTransactionButton = styled.div`
  padding-top: 2rem;
`;

function CreateTransactionButton() {
  return (
    <StyledCreateTransactionButton>
      <Modal>
        <Modal.Open opens="create">
          <Button size="medium">Create Transaction</Button>
        </Modal.Open>
        <Modal.Window name="create">
          <CreateTransactionForm />
        </Modal.Window>
      </Modal>
    </StyledCreateTransactionButton>
  );
}

export default CreateTransactionButton;
