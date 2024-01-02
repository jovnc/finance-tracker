import styled from "styled-components";

const StyledCategoryField = styled.div`
  border-radius: var(--border-radius-lg);
  font-family: "Sono";
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  width: 80%;
  border: 2px solid var(--color-grey-500);
`;

function CategoryField({ textColor, backgroundColor, categoryName }) {
  const newStyles = {
    color: textColor,
    backgroundColor: backgroundColor,
  };
  if (!categoryName) return <>Enter Category Name for Preview</>;
  return (
    <StyledCategoryField style={newStyles}>{categoryName}</StyledCategoryField>
  );
}

export default CategoryField;
