import React from 'react';
import Employee from '../Employee';

function EmployeeList({employees, searchTerm}) {

    return (
        <ul>
            {employees.filter(searchTerm).map((employee)=> <Employee {...employee} />)}   
        </ul>
    )
}

export default EmployeeList