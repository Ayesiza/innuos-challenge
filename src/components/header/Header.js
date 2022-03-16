import React from "react";
import logo from "../../images/qobuz.png";
import "./header.css";

const Header = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src={logo} alt="" />
          <button>Home</button>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
