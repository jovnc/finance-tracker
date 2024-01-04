import styled from "styled-components";
import Stat from "./Stat";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

const StyledStats = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column: span 1;
`;

function TransactionStats({ transactions }) {
  const [searchParams] = useSearchParams();
  // FILTER BY DATE
  let filteredTransactions;
  const filterDate = searchParams.get("filter-date") || "last-30-days";
  if (filterDate !== "all") {
    const numDaysToFilter = filterDate.split("-")[1];
    const oldDate = new Date();
    oldDate.setDate(oldDate.getDate() - numDaysToFilter);
    filteredTransactions = transactions.filter(
      (transaction) => new Date(transaction.date) > oldDate
    );
  } else {
    filteredTransactions = transactions;
  }

  // 1. Total Deposited
  const totalDeposited = filteredTransactions.reduce(
    (acc, curr) => (curr.status === "Deposit" ? acc + curr.amount : acc),
    0
  );

  // 2. Total withdrawn
  const totalWithdrawn = filteredTransactions.reduce(
    (acc, curr) => (curr.status === "Withdrawal" ? acc + curr.amount : acc),
    0
  );

  // 3. Net Change
  const netChange = totalDeposited - totalWithdrawn;

  const status = searchParams.get("status");

  return (
    <StyledStats>
      {status === "deposit" ? (
        <Stat
          title="Total Deposited"
          color="blue"
          icon={<HiOutlineBriefcase />}
          value={formatCurrency(totalDeposited)}
        />
      ) : status === "withdrawal" ? (
        <Stat
          title="Total Withdrawn"
          color="yellow"
          icon={<BiMoneyWithdraw />}
          value={formatCurrency(totalWithdrawn)}
        />
      ) : (
        <>
          <Stat
            title="Total Deposited"
            color="blue"
            icon={<HiOutlineBriefcase />}
            value={formatCurrency(totalDeposited)}
          />
          <Stat
            title="Total Withdrawn"
            color="yellow"
            icon={<BiMoneyWithdraw />}
            value={formatCurrency(totalWithdrawn)}
          />
          <Stat
            title="Net Change"
            color={netChange < 0 ? "red" : "green"}
            icon={<FaRegMoneyBill1 />}
            value={formatCurrency(netChange)}
          />
        </>
      )}
    </StyledStats>
  );
}

export default TransactionStats;
