import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

import Heading from "../../ui/Heading";
import styled from "styled-components";

const StyledTransactionLineGraph = styled.div`
  grid-column: span 1;
`;

const Container = styled.div`
  padding: 30px 0;
`;

function TransactionLineGraph({ transactions }) {
  const sortedTransactions = transactions.sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  const data = transactions.map((transaction) => {
    return {
      date: transaction.date,
      amount: transaction.amount,
    };
  });

  return (
    <StyledTransactionLineGraph>
      <Heading as="h2">Transaction over time</Heading>
      <Container>
        <LineChart
          width={600}
          height={350}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            label={{
              value: "Transactions($)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />

          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        </LineChart>
      </Container>
    </StyledTransactionLineGraph>
  );
}

export default TransactionLineGraph;
