import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function Homepage() {
  return (
    <div style={{ border: '2px solid orange', padding: '10px', width: '300px'}}>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}