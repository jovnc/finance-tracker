import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDate({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterDate = searchParams.get("filter-date") || "";

  function handleChange(e) {
    searchParams.set("filter-date", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      value={filterDate}
      onChange={handleChange}
    />
  );
}

export default FilterDate;