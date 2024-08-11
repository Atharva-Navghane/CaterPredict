import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(true);
  };

  const today = new Date();
  const appointmentDate = new Date(today);
  appointmentDate.setDate(today.getDate() + 5);
  const formattedDate = appointmentDate.toDateString();

  return (
    <div className="appointment-container">
      {!showDetails ? (
        <button onClick={handleButtonClick} className="book-button">
          Confirm Appointment
        </button>
      ) : (
        <div className="calendar">
          <h1 className="appointment-title">Appointment Scheduled</h1>
          <p className="appointment-message">
            Your appointment is scheduled for {formattedDate}.
          </p>
        </div>
      )}
    </div>
  );
}

export default Appointment;
