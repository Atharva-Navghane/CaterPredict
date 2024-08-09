import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ModelWork.css'; // Import the CSS file

const ModelWork = () => {
  const [machine, setMachine] = useState('');
  const [parameters, setParameters] = useState({
    EngineOilPressure: '',
    EngineSpeed: '',
    EngineTemperature: '',
    BrakeControl: '',
    TransmissionPressure: '',
    PedalSensor: '',
    WaterFuel: '',
    FuelLevel: '',
    FuelPressure: '',
    FuelTemperature: '',
    SystemVoltage: '',
    ExhaustGasTemperature: '',
    HydraulicPumpRate: '',
    AirFilterPressureDrop: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ machine, parameters });
  };

  const handleGoBack = () => {
    navigate('/'); // Navigate back to the homepage
  };

  return (
    <div className="container">
      <h1 className="title">ModelWork Input Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label htmlFor="machine" className="label">Select Machine:</label>
          <select
            id="machine"
            value={machine}
            onChange={(e) => setMachine(e.target.value)}
            className="select"
          >
            <option value="">Select a machine</option>
            <option value="Excavator_1">Excavator_1</option>
            <option value="Articulated_Truck_1">Articulated_Truck_1</option>
            <option value="Dozer_1">Dozer_1</option>
            <option value="Asphalt_Paver_1">Asphalt_Paver_1</option>
          </select>
        </div>
        <div className="formGroup">
          <label className="label">Parameters:</label>
          {Object.keys(parameters).map((param) => (
            <div key={param} className="inputGroup">
              <label className="parameterLabel">{param.replace(/([A-Z])/g, ' $1')}:</label>
              <input
                type="text"
                value={parameters[param]}
                onChange={(e) => setParameters({ ...parameters, [param]: e.target.value })}
                className="input"
              />
            </div>
          ))}
        </div>
        <div className="buttonContainer">
          <button type="submit" className="button">Check</button>
          <button type="button" className="button" onClick={handleGoBack}>Go Back</button> {/* New button */}
        </div>
      </form>
    </div>
  );
};

export default ModelWork;
