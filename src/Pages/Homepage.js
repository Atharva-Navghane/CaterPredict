import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css"; // Import the CSS file

const Homepage = () => {
  const navigate = useNavigate();

  const handleModelWorkClick = () => {
    navigate("/modelwork");
  };

  const handleAppointment = () => {
    navigate("/Appointment");
  };

  const handleMakersClick = () => {
    navigate("/makers");
  };

  return (
    <div className="container">
      <h1 className="title">
        Welcome to <span className="highlight">CAT</span>er
        <span className="highlight">P</span>redict
      </h1>
      <p className="paragraph">
        Welcome to <span className="highlight">CAT</span>er
        <span className="highlight">P</span>redict, a platform designed to
        predict component failures based on historical and usage data. Our core
        mission is to utilize telematics data collected from customers'
        equipment to proactively identify potential present or future
        equipment/component failures.
      </p>
      <ul style={{ paddingLeft: "20px", fontSize: "20px" }}>
        <li>Get updates of your machine's health time to time</li>
        <li>Check your booked appointments</li>
        <li>Check your alert notifications</li>
      </ul>

      <div className="ButtonAlignment">
        <button className="button" onClick={handleModelWorkClick}>
          Click here to analyze
        </button>
        <button className="button" onClick={handleAppointment}>
          Check Appointments
        </button>
        <button className="button">
          Notifications
        </button>
      </div>

      <div className="makersSection">
        <h2 className="makersTitle">Meet the Team</h2>
        <p className="makersDescription">
          Curious about who built this platform? Click below to discover the
          team behind this project!
        </p>
        <button className="makersButton" onClick={handleMakersClick}>
          Meet the Team
        </button>
      </div>
    </div>
  );
};

export default Homepage;
