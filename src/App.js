import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
//import Layout from "./components/layout/Layout";
import AlbumList from "./features/albulm/AlbumList";
import Home from "./features/Home/Home";

function App() {
  return (
    <div>
     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/albums" element={<AlbumList />} />
      </Routes>
      
    </div>
  );
}

export default App;
