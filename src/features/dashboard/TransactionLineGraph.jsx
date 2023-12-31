import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Heading from "../../ui/Heading";
import styled from "styled-components";

const StyledTransactionLineGraph = styled.div`
  grid-column: span 1;
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
      <LineChart
        width={600}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </StyledTransactionLineGraph>
  );
}

export default TransactionLineGraph;
