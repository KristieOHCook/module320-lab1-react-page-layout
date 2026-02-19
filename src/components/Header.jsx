import React from 'react';


function Header({ title }) {
  const headerStyle = {
    textAlign: 'center',
    borderBottom: '1px solid black',
    margin: 0,
    padding: '10px',
    width: '100%'
  };

  return (
    <h2 style={headerStyle}>
      {title}
    </h2>
  );
}

export default Header;