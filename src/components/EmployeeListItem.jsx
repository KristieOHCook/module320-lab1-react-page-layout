function EmployeeListItem() {
  return (
    <div className="employee-item" style={{ border: '1px solid #ddd', padding: '10px', margin: '5px' }}>
      <div className="employee-info">
        <h4 style={{ margin: 0 }}>James King</h4>
        <p style={{ margin: 0, color: 'gray' }}>President and CEO</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;