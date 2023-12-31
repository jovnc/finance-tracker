import { Pie, PieChart, Tooltip } from "recharts";
import Heading from "../../ui/Heading";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px 10px;
`;

function CategoryPieChart({ categoriesData }) {
  return (
    <Container>
      <Heading as="h2">Proportion of Categories</Heading>
      <PieChart width={250} height={300}>
        <Pie
          data={categoriesData}
          dataKey="count"
          nameKey="category"
          outerRadius={100}
          fill="#8884d8"
        />
        <Tooltip />
      </PieChart>
    </Container>
  );
}

export default CategoryPieChart;
