import React from "react";
import { FaListUl, FaBox, FaUser } from "react-icons/fa";
import './Header.css'
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="nav">
      <div className="nav-item-container">
        <div className="nav-item" onClick={() => navigate("/")}>
          <FaListUl className="header-icon"/>
          <span>Query</span>
        </div>
      </div>
      <div className="nav-item-container">
        <div className="nav-item" onClick={() => navigate("/directory")}>
          <FaBox className="header-icon"/>
          <span>Directory</span>
        </div>
      </div>
      <div className="nav-item-container">
        <div className="nav-item" onClick={() => navigate("/profile")}>
          <FaUser className="header-icon"/>
          <span>Profile</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
