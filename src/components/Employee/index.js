import React from 'react';
import './styles.css';

function Employee(employee) {
 return (
    <div>
     <li>
         <img src={employee.picture.large} />
         
         <div className="employeeInfoKey">
            <p>Name: </p>
            <p> DOB: </p>
            <p> Location: </p>
            <p> Email: </p>
        </div>
        <div className="employeeInfoValue">
            <p>{employee.name.first} {employee.name.last}</p>
            <p>{new Date(employee.dob.date).toDateString()}</p>
            <p>{employee.location.city}, {employee.location.country}</p>
            <p>{employee.email}</p>
        </div>
        
     </li>
     <hr />
     </div>
 )
}

export default Employee