import React from 'react';


function EmployeeListItem({ name, title, img }) {
  const itemStyle = {
    border: '2px solid red', 
    margin: '10px 0',
    padding: '10px',
    display: 'flex',
    alignItems: 'center'
  };

  const avatarStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '15px',
    objectFit: 'cover' 
  };

  return (
    <div style={itemStyle}>
      {}
      <img src={img} alt={name} style={avatarStyle} />
      <div>
        <h4 style={{ margin: 0 }}>{name}</h4>
        <p style={{ margin: 0, color: 'gray', fontSize: '0.9rem' }}>{title}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;

