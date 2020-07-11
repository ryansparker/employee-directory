import React from 'react';
import './App.css';

function App() {
  return (
    <div>
     <header>Employee Directory
     </header>
     <form>
     <label for="searchName">Search:</label>
     <input type="text" id="searchName" name="searchName" value="Enter Name" />
     </form>
    </div>
  );
}

export default App;
