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
          <Button size="medium" variations="danger">
            Create Transaction
          </Button>
        </Modal.Open>
        <Modal.Window name="create">
          <CreateTransactionForm />
        </Modal.Window>
      </Modal>
    </StyledCreateTransactionButton>
  );
}

export default CreateTransactionButton;

{
  /* <Modal>
        <Menus.Menu>
          <Menus.Toggle id={transactionId} />
          <Menus.List id={transactionId}>
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            disabled={isDeleting}
            onConfirm={() => deleteTransaction(transactionId)}
          />
        </Modal.Window>
      </Modal> */
}
