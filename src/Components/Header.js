import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Header.css'; // Import the CSS file

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the homepage when the button is clicked
  };

  return (
    <div className="header-container">
      <div className="title-container">
        <div className="title">
          <span className="highlight">CAT</span>er
          <span className="highlight">P</span>redict
        </div>
        <div className="subText">
          Empowering Equipment with <span className="highlight">Predictive Insight</span>
        </div>
      </div>
      <button className="home-button" onClick={handleHomeClick}>Home</button> {/* Home button */}
    </div>
  );
}

export default Header;
