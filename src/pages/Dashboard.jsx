import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import useTransaction from "../features/transactions/useTransaction";
import Spinner from "../ui/Spinner";

export default function Dashboard() {
  const { isLoading, transactions } = useTransaction();
  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter isLoading={isLoading} transactions={transactions} />
      </Row>

      <DashboardLayout isLoading={isLoading} transactions={transactions} />
    </>
  );
}
