import Table from "../../ui/Table";
import TransactionRow from "./TransactionRow";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";

function TransactionsTable({ transactions, isLoading }) {
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  if (!transactions.length) return <Empty resourceName="transactions" />;

  // 1. FILTER
  const filterValue = searchParams.get("status") || "all";
  let filteredTransactions;
  if (filterValue === "all") filteredTransactions = transactions;
  if (filterValue === "deposit")
    filteredTransactions = transactions.filter(
      (transaction) => transaction.status === "Deposit"
    );
  if (filterValue === "withdrawal")
    filteredTransactions = transactions.filter(
      (transaction) => transaction.status === "Withdrawal"
    );

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "date-desc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  let sortedTransactions;
  if (field === "amount")
    sortedTransactions = filteredTransactions.sort(
      (a, b) => (a[field] - b[field]) * modifier
    );
  else
    sortedTransactions = filteredTransactions.sort(
      (a, b) => a[field].localeCompare(b[field]) * modifier
    );

  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 2fr 3.2rem">
        <Table.Header>
          <div>Amount</div>
          <div>Category</div>
          <div>Status</div>
          <div>Date</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedTransactions}
          render={(transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default TransactionsTable;

// function CabinTable() {
//   const { isLoading, cabins } = useCabins();
//   const [searchParams] = useSearchParams();

//   if (isLoading) return <Spinner />;
//   if (!cabins.length) return <Empty resourceName="cabins" />;

//   // 1) FILTER
//   const filterValue = searchParams.get("discount") || "all";

//   let filteredCabins;
//   if (filterValue === "all") filteredCabins = cabins;
//   if (filterValue === "no-discount")
//     filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
//   if (filterValue === "with-discount")
//     filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

//   // 2) SORT
//   const sortBy = searchParams.get("sortBy") || "startDate-asc";
//   const [field, direction] = sortBy.split("-");
//   const modifier = direction === "asc" ? 1 : -1;
//   const sortedCabins = filteredCabins.sort(
//     (a, b) => (a[field] - b[field]) * modifier
//   );

//   return (
//     <Menus>
//       <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
//         <Table.Header>
//           <div></div>
//           <div>Cabin</div>
//           <div>Capacity</div>
//           <div>Price</div>
//           <div>Discount</div>
//           <div></div>
//         </Table.Header>

//         <Table.Body
//           // data={cabins}
//           // data={filteredCabins}
//           data={sortedCabins}
//           render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
//         />
//       </Table>
//     </Menus>
//   );
// }

// export default CabinTable;
