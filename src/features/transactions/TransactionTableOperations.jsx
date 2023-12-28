import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function TransactionTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "deposit", label: "Deposit" },
          { value: "withdrawal", label: "Withdrawal" },
        ]}
      />

      <SortBy
        options={[
          { value: "date-desc", label: "Sort by date (latest first)" },
          { value: "date-asc", label: "Sort by date (oldest first)" },
          { value: "category-asc", label: "Sort by category name (A-Z)" },
          { value: "category-desc", label: "Sort by category name (Z-A)" },
          { value: "amount-asc", label: "Sort by amount (low first)" },
          { value: "amount-desc", label: "Sort by amount (high first)" },
        ]}
      />
    </TableOperations>
  );
}
