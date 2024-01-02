import styled from "styled-components";
import Select from "react-select";

// const StyledDropdownMenu = styled(Select)`
//   border: 1px solid var(--color-grey-300);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-sm);
//   padding: 0.8rem 1.2rem;
//   box-shadow: var(--shadow-sm);
// `;

const customStyles = {
  control: (base) => ({
    ...base,
    border: "1px solid var(--color-grey-300)",
    backgroundColor: "var(--color-grey-0)",
    borderRadius: "var(--border-radius-sm)",
    boxShadow: "var(--shadow-sm)",
    color: "var(--color-grey-700)",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--color-grey-700)",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "var(--color-grey-0)",
    border: "1px solid var(--color-grey-300)",
    borderRadius: "var(--border-radius-sm)",
    boxShadow: "var(--shadow-sm)",
  }),
  menuList: (base) => ({
    ...base,
    backgroundColor: "var(--color-grey-0)",
    border: "1px solid var(--color-grey-300)",
    borderRadius: "var(--border-radius-sm)",
    boxShadow: "var(--shadow-sm)",
  }),
};

function DropdownMenu({ ...props }) {
  return <Select styles={customStyles} {...props} />;
}

export default DropdownMenu;
