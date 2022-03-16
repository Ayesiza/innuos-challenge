import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Header from "../../components/header/Header";


const Home = () => {
  return (
    <div className="container">
      <Header/>
      <div className="center">
        <button className="btn1">
          <Link to="/albums" style={{ textDecoration: "none", color:"white" }}>
            GET ALBULMS
          </Link>
        </button>
      </div>
     
    </div>
  );
};

export default Home;
