import Homepage from './components/Homepage';
import EmployeePage from './components/EmployeePage'; 
import './App.css';

function App() {
  const appStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    gap: '20px',              
    marginTop: '20px'
  };

  return (
    <div className="App" style={appStyle}>
      <Homepage />
      <EmployeePage />
    </div>
  );
}

export default App;