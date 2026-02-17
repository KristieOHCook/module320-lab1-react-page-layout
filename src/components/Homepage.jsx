import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function Homepage() {
  return (
    <div className="homepage" style={{ border: '2px solid #333', width: '350px', margin: '20px auto', minHeight: '500px' }}>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default Homepage;