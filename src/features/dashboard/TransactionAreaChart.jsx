import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Heading from "../../ui/Heading";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0px;
`;

function TransactionAreaChart({ transactions }) {
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
    <Container>
      <Heading as="h2"> Transaction Area Chart Over Time</Heading>
      <Container>
        <AreaChart
          width={600}
          height={350}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis
            label={{
              value: "Transactions($)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </Container>
    </Container>
  );
}

export default TransactionAreaChart;
