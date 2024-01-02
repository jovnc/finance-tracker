import styled from "styled-components";

const StyledStatusField = styled.div`
  border-radius: var(--border-radius-lg);
  font-family: "Sono";
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  width: 90%;
  border: 2px solid var(--color-grey-500);
`;

function StatusField({ status }) {
  const newStyles = {
    backgroundColor:
      status === "Deposit" ? "var(--color-green-100)" : "var(--color-red-700)",
    color:
      status === "Deposit" ? "var(--color-green-700)" : "var(--color-red-100)",
  };
  return <StyledStatusField style={newStyles}>{status}</StyledStatusField>;
}

export default StatusField;
