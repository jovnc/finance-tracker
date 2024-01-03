import TransactionLineGraph from "./TransactionLineGraph";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Row from "../../ui/Row";
import TransactionStats from "./TransactionStats";
import CategoryPieChart from "./CategoryPieChart";
import CategoryStats from "./CategoryStats";
import TransactionAreaChart from "./TransactionAreaChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 7rem;
  grid-column: span 2;
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

  if (filteredTransactions.length === 0) return <p>No transactions</p>;

  // 3) Sort into categories and their count
  const categoriesData = [];
  const currentCategories = categoriesData.map(
    (category) => category.categories.categoryName
  );
  filteredTransactions.forEach((transaction) => {
    const existingCategory = categoriesData.find(
      (item) => item.category === transaction.categories.categoryName
    );

    if (existingCategory) {
      existingCategory.count += 1;
    } else {
      categoriesData.push({
        category: transaction.categories.categoryName,
        count: 1,
      });
    }
  });

  // 4. Sort CategoriesData according to highest count
  categoriesData.sort((a, b) => b.count - a.count);

  return (
    <StyledDashboardLayout>
      <TransactionStats transactions={transactions} />

      <CategoryStats categoriesData={categoriesData} />
      <TransactionLineGraph transactions={filteredTransactions} />
      <CategoryPieChart categoriesData={categoriesData} />
      <TransactionAreaChart transactions={transactions} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
