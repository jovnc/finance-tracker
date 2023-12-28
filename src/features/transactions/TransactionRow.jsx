import styled from "styled-components";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { formatCurrency } from "../../utils/helpers";
import { HiPencil, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteTransaction } from "./useDeleteTransaction";
import CreateTransactionForm from "./CreateTransactionForm";

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

function BookingRow({ transaction }) {
  const { isDeleting, deleteTransaction } = useDeleteTransaction();
  const { id: transactionId, amount, category, status, date } = transaction;
  return (
    <Table.Row>
      <Entry>{formatCurrency(amount)}</Entry>
      <Entry>{category}</Entry>
      <Entry>{status}</Entry>
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
            resourceName="booking"
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

export default BookingRow;

{
  /* <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </Menus.Button>

            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )}

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            disabled={isDeleting}
            onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>
      </Modal> */
}
