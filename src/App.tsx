import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./app/components/Navbar";
import AddBook from "./app/components/AddBook";

function App() {
  return (
   <div className="App">
       <Navbar/>
       <AddBook/>
   </div>
  );
}

export default App;
