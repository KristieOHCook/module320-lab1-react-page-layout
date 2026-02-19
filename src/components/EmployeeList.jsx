import React from 'react';
import EmployeeListItem from './EmployeeListItem';

function EmployeeList() {
  const listStyle = {
    border: '2px solid purple',
    padding: '5px'
  };

  return (
    <div style={listStyle}>
      {}
      <EmployeeListItem name="James King" title="President and CEO" img="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100259.jpg" 
      /> 
      <EmployeeListItem name="Julie Taylor" title="VP of Marketing" img="https://img.freepik.com/free-photo/portrait-3d-female-doctor_23-2151107332.jpg" />
      <EmployeeListItem name="Eugene Lee" title="CFO" img="https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793877.jpg" />
      <EmployeeListItem name="John Williams" title="VP of Engineering" img="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg" />
      <EmployeeListItem name="Ray Moore" title="VP of Sales" img="https://www.shutterstock.com/shutterstock/photos/2603158709/display_1500/stock-photo--a-d-cartoon-avatar-representing-an-hr-professional-the-female-character-looks-warm-friendly-2603158709.jpg" />
      <EmployeeListItem name="Paul Jones" title="QA Manager" img="https://img.freepik.com/free-photo/view-3d-businessman_23-2150709814.jpg" />
    </div>
  );
}

export default EmployeeList;

