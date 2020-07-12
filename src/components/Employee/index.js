import React from 'react';

function Employee(employee) {
 return (
     <li>
         <img src={employee.picture.thumbnail} />
         <p>Name: {employee.name.first} {employee.name.last}</p>
         <p>City: {employee.location.city}</p>
         <p>DOB: {employee.dob.date}</p>
     </li>
 )
}

export default Employee