import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

import FilterDate from "../../ui/FilterDate";

function DashboardFilter({ isLoading, transactions }) {
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

      <FilterDate
        options={[
          { value: "last-30-days", label: "Last 30 days" },
          { value: "last-90-days", label: "Last 90 days" },
          { value: "last-180-days", label: "Last 180 days" },
          { value: "last-365-days", label: "Last 365 days" },
          { value: "all", label: "All" },
        ]}
      />
    </TableOperations>
  );
}

export default DashboardFilter;
