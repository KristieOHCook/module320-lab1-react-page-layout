import React from 'react';
import Header from "./Header";

export default function EmployeePage() {
  const pageStyle = {
    border: '2px solid brown',
    padding: '10px',
    width: '400px', 
    backgroundColor: 'white',
    color: 'black'
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '20px',
    marginTop: '10px'
  };

  const infoRowStyle = {
    borderBottom: '1px solid #eee',
    padding: '12px 0',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={pageStyle}>
      <Header title="Employee" />
      
      <div style={cardStyle}>
        {}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img 
            src="https://img.freepik.com/free-photo/portrait-3d-female-doctor_23-2151107332.jpg" 
            alt="Julie Taylor" 
            style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px', objectFit: 'cover' }} 
          />
          <div>
            <h2 style={{ margin: 0 }}>Julie Taylor</h2>
            <p style={{ margin: 0, color: 'gray' }}>VP of Marketing</p>
          </div>
        </div>
        
        {}
        <div style={infoRowStyle}>
          <span style={{ fontWeight: 'bold' }}>Call Office</span>
          <span style={{ color: '#666' }}>781-000-0002</span>
        </div>
        
        <div style={infoRowStyle}>
          <span style={{ fontWeight: 'bold' }}>Call Mobile</span>
          <span style={{ color: '#666' }}>617-000-0002</span>
        </div>

        <div style={infoRowStyle}>
          <span style={{ fontWeight: 'bold' }}>SMS</span>
          <span style={{ color: '#666' }}>617-000-0002</span>
        </div>

        <div style={{ ...infoRowStyle, borderBottom: 'none' }}>
          <span style={{ fontWeight: 'bold' }}>Email</span>
          <span style={{ color: '#666' }}>jtaylor@fakemail.com</span>
        </div>
      </div>
    </div>
  );
}