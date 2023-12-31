import styled from "styled-components";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TransactionsTable from "../features/transactions/TransactionsTable";
import useTransaction from "../features/transactions/useTransaction";
import Spinner from "../ui/Spinner";
import CreateTransactionButton from "../features/transactions/CreateTransactionButton";
import TransactionTableOperations from "../features/transactions/TransactionTableOperations";

const StyledTransactions = styled.div`
  padding-right: 2rem;
  width: 75dvw;
`;

const Container = styled.div`
  padding-top: 2rem;
`;

export default function Transactions() {
  const { isLoading, transactions } = useTransaction();
  if (isLoading) return <Spinner />;
  return (
    <StyledTransactions>
      <Row type="horizontal">
        <Heading as="h1">All Transactions</Heading>
        <TransactionTableOperations />
      </Row>
      <Container>
        <TransactionsTable transactions={transactions} isLoading={isLoading} />
        <CreateTransactionButton />
      </Container>
    </StyledTransactions>
  );
}
