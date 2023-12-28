import TransactionLineGraph from "./TransactionLineGraph";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout({ isLoading, transactions }) {
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;

  // 1. FILTER BY STATUS
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

  // 2) FILTER BY DATE
  const filterDate = searchParams.get("filter-date") || "last-30-days";
  if (filterDate !== "all") {
    const numDaysToFilter = filterDate.split("-")[1];
    const oldDate = new Date();
    oldDate.setDate(oldDate.getDate() - numDaysToFilter);
    filteredTransactions = filteredTransactions.filter(
      (transaction) => new Date(transaction.date) > oldDate
    );
  }

  return (
    <StyledDashboardLayout>
      <TransactionLineGraph
        isLoading={isLoading}
        transactions={filteredTransactions}
      />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
