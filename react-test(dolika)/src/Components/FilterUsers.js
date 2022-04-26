import OutlinedInput from "@mui/material/OutlinedInput";
import "../App.css";
const FilterUsers = ({ filterUsers }) => {
  const getFilterText = (e) => {
      filterUsers(e.target.value); //filter prop for search data 
  };
  return (
    <div className="search-section">
      <OutlinedInput onKeyUp={getFilterText} placeholder="Filter Users" />
    </div>
  );
};

export default FilterUsers;
