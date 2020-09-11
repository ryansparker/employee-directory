import React, { useState, useEffect } from 'react';
import EmployeeList from "./components/EmployeeList"
import './styles.css';

function App() {
  
  const [employeeList, setEmployeeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => setEmployeeList(data.results));
  }, []);
  
  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="container">
      <header>
      <h1>Employee Directory</h1>
        <div className="searchBar">
        <label for="searchName">Search:</label>
        <input onChange={handleSearch} type="text" id="searchName" name="searchName" placeholder="Enter Name"/>
      </div>
      </header>
     
      <EmployeeList employees={employeeList} searchTerm={searchTerm}/>
    </div>
  );
}



export default App;

  