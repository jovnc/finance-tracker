import { FaRegMoneyBill1 } from "react-icons/fa6";
import Stat from "./Stat";
import styled from "styled-components";

const StyledCategoryStats = styled.div`
  padding-right: 10px;
`;

function CategoryStats({ categoriesData }) {
  const topCategory = categoriesData[0].category;
  return (
    <StyledCategoryStats>
      <Stat
        title="Top Category"
        color="indigo"
        icon={<FaRegMoneyBill1 />}
        value={topCategory}
      />
    </StyledCategoryStats>
  );
}

export default CategoryStats;
