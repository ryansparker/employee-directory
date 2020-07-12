import React from 'react';
import Employee from '../Employee';

function EmployeeList({employees, searchTerm}) {

    return (
        <ul>
            {employees.filter((employee) => {
                const name = employee.name.first + " " + employee.name.last
                return name.toLowerCase().includes(searchTerm.toLowerCase())
            }).map((employee)=> <Employee {...employee} />)}   
        </ul>
    )
}

export default EmployeeList

