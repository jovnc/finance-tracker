import styled from "styled-components";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { formatCurrency } from "../../utils/helpers";
import { HiPencil, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteTransaction } from "./useDeleteTransaction";
import CreateTransactionForm from "./CreateTransactionForm";
import CategoryField from "../../ui/CategoryField";
import StatusField from "../../ui/StatusField";

const Entry = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function TransactionRow({ transaction }) {
  const { isDeleting, deleteTransaction } = useDeleteTransaction();
  const { id: transactionId, amount, categories, status, date } = transaction;

  const { backgroundColor, categoryName, textColor } = categories;

  return (
    <Table.Row>
      <Entry>{formatCurrency(amount)}</Entry>
      <CategoryField
        textColor={textColor}
        backgroundColor={backgroundColor}
        categoryName={categoryName}
      />
      <StatusField status={status} />
      <Entry>{date}</Entry>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={transactionId} />
          <Menus.List id={transactionId}>
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete Transaction</Menus.Button>
            </Modal.Open>
            <Modal.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Edit Transaction</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="transaction"
            disabled={isDeleting}
            onConfirm={() => deleteTransaction(transactionId)}
          />
        </Modal.Window>
        <Modal.Window name="edit">
          <CreateTransactionForm transactionToEdit={transaction} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default TransactionRow;
