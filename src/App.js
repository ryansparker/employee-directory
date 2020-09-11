import React, { useState, useEffect } from 'react';
import EmployeeList from "./components/EmployeeList"
import './styles.css';
import Icon from './address-card.svg'


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
     
      <div className="title"><img src={Icon} alt="Icon" className="icon"/><h1>Employee Directory</h1></div>
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

  