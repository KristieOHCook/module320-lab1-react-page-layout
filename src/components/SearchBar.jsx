import React from 'react';

function SearchBar() {
  const containerStyle = {
    border: '2px solid green', 
    margin: '10px 0',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center'
  };

  const inputStyle = {
    width: '95%',
    padding: '5px',
    fontSize: '1rem'
  };

  return (
    <div style={containerStyle}>
      <input 
        type="text" 
        placeholder="Search for an employee..." 
        style={inputStyle} 
      />
    </div>
  );
}

export default SearchBar;