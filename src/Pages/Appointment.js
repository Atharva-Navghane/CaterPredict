import React, { useState } from 'react';
import Calendar from 'react-calendar';
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
        <div className="calendar-container">
          <h1 className="appointment-title">Appointment Scheduled</h1>
          <p className="appointment-message">
            Your appointment is scheduled for {formattedDate}.
          </p>
          <Calendar
            className="calendar-widget"
            tileClassName={({ date, view }) => {
              if (view === 'month') {
                if (date.toDateString() === today.toDateString()) {
                  return 'highlight-today';
                }
                if (date.toDateString() === appointmentDate.toDateString()) {
                  return 'highlight-appointment';
                }
              }
            }}
            value={today}
          />
        </div>
      )}
    </div>
  );
}

export default Appointment;
