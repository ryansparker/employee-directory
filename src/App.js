import React, { useState, useEffect } from 'react';
import EmployeeList from "./components/EmployeeList"
import './App.css';




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
    <div>
      <header>
        Employee Directory
      </header>
      <form>
        <label for="searchName">Search:</label>
        <input onChange={handleSearch} type="text" id="searchName" name="searchName" placeholder="Enter Name"/>
      </form>
      <EmployeeList employees={employeeList} searchTerm={searchTerm}/>
    </div>
  );
}


export default App;

  
// componentDidMount() {
//  

// }