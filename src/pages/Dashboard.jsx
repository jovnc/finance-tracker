import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import useTransaction from "../features/transactions/useTransaction";
import Spinner from "../ui/Spinner";
import styled from "styled-components";

const StyledDashboard = styled.div`
  width: 80dvw;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

export default function Dashboard() {
  const { isLoading, transactions } = useTransaction();
  if (isLoading) return <Spinner />;

  return (
    <StyledDashboard>
      <Heading as="h1">Dashboard</Heading>
      <DashboardFilter isLoading={isLoading} transactions={transactions} />

      <DashboardLayout isLoading={isLoading} transactions={transactions} />
    </StyledDashboard>
  );
}
