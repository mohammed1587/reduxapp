import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./app/components/Navbar";
import AddBook from "./app/components/AddBook";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Search from "./app/components/Search";

function App() {
  return (
   <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element={<AddBook/>}></Route>
           <Route path="/search" element={<Search/>}></Route>

       </Routes>
   </BrowserRouter>
  );
}

export default App;
