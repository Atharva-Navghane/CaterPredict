import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ModelWork.css';

const ModelWork = () => {
  const [machine, setMachine] = useState('');
  const [parameters, setParameters] = useState({
    airTemperature: '',
    processTemperature: '',
    rotationalSpeed: '',
    torque: '',
    toolWear: ''
  });
  const [allData, setAllData] = useState([]);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [predictions, setPredictions] = useState('');

  const machines = [
    'Excavator_1',
    'Articulated_Truck_1',
    'Backhoe_Loader_1',
    'Dozer_1',
    'Asphalt_Paver_1'
  ];

  const failureDescriptions = {
    TWF: "Tool Wear Failure",
    HDF: "Heat Dissipation Failure",
    PWF: "Power Failure",
    OSF: "Overstrain Failure",
    RNF: "Random Failure",
    "Machine failure": "Overall Machine Failure"
  };

  const URL = "http://localhost:6060/";

  const handlePredict = () => {
    const updatedData = [...allData, { machine, parameters }];
    setAllData(updatedData);
    localStorage.setItem('allData', JSON.stringify(updatedData));
    setIsDataSaved(true);
  };

  const handleContinue = (e) => {
    e.preventDefault();

    const dataToSend = {
      air_temp: parseFloat(parameters.airTemperature),
      process_temp: parseFloat(parameters.processTemperature),
      rotational_speed: parseFloat(parameters.rotationalSpeed),
      torque: parseFloat(parameters.torque),
      tool_wear: parseFloat(parameters.toolWear)
    };

    axios.post(`${URL}predict`, dataToSend)
      .then(response => {
        setPredictions(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('allData')) || [];
    setAllData(savedData);
  }, []);

  const handleAddMoreData = () => {
    resetForm();
    setIsDataSaved(false);
  };

  const handleDelete = (index) => {
    const updatedData = allData.filter((_, i) => i !== index);
    setAllData(updatedData);
    localStorage.setItem('allData', JSON.stringify(updatedData));
  };

  const resetForm = () => {
    setMachine('');
    setParameters({
      airTemperature: '',
      processTemperature: '',
      rotationalSpeed: '',
      torque: '',
      toolWear: ''
    });
  };

  return (
    <div className="container">
      <h1 className="title">ModelWork Input Form</h1>

      {allData.length > 0 && (
        <div className="dataSummary">
          <h2>Saved Data:</h2>
          <table className="dataTable">
            <thead>
              <tr>
                <th>Machine</th>
                <th>Parameters</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((data, index) => (
                <tr key={index}>
                  <td>{data.machine}</td>
                  <td>
                    {Object.entries(data.parameters).map(([param, value]) => (
                      <div key={param}>{param.replace(/([A-Z])/g, ' $1')}: {value}</div>
                    ))}
                  </td>
                  <td>
                    <i
                      className="fas fa-trash-alt deleteIcon"
                      onClick={() => handleDelete(index)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!isDataSaved && (
        <div className="formGroup">
          <label htmlFor="machine" className="label">Select Machine:</label>
          <select
            id="machine"
            value={machine}
            onChange={(e) => setMachine(e.target.value)}
            className="select"
          >
            <option value="">Select a machine</option>
            {machines.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      )}

      {machine && !isDataSaved && (
        <form onSubmit={(e) => { e.preventDefault(); handlePredict(); }} className="form">
          <label className="label">Parameters:</label>
          <div className="inputGroup">
            <label className="parameterLabel">Air Temperature (°C):</label>
            <input
              type="text"
              value={parameters.airTemperature}
              onChange={(e) => setParameters({ ...parameters, airTemperature: e.target.value })}
              className="input"
            />
          </div>
          <div className="inputGroup">
            <label className="parameterLabel">Process Temperature (°C):</label>
            <input
              type="text"
              value={parameters.processTemperature}
              onChange={(e) => setParameters({ ...parameters, processTemperature: e.target.value })}
              className="input"
            />
          </div>
          <div className="inputGroup">
            <label className="parameterLabel">Rotational Speed (rpm):</label>
            <input
              type="text"
              value={parameters.rotationalSpeed}
              onChange={(e) => setParameters({ ...parameters, rotationalSpeed: e.target.value })}
              className="input"
            />
          </div>
          <div className="inputGroup">
            <label className="parameterLabel">Torque (Nm):</label>
            <input
              type="text"
              value={parameters.torque}
              onChange={(e) => setParameters({ ...parameters, torque: e.target.value })}
              className="input"
            />
          </div>
          <div className="inputGroup">
            <label className="parameterLabel">Tool Wear (min):</label>
            <input
              type="text"
              value={parameters.toolWear}
              onChange={(e) => setParameters({ ...parameters, toolWear: e.target.value })}
              className="input"
            />
          </div>
          <div className="buttonContainer">
            <button type="submit" className="button">Add More Data</button>
            <button onClick={handleContinue} className="button">Predict</button>
          </div>
        </form>
      )}

      {isDataSaved && (
        <div className="buttonContainer">
          <button onClick={handleAddMoreData} className="button">Add More Data</button>
          <button onClick={handleContinue} className="button">Predict</button>
        </div>
      )}

      {predictions && (
        <div className="predictionResults">
          <h3>Prediction Results:</h3>
          <ul>
            {Object.entries(predictions).map(([key, value]) => (
              <li key={key}>
                {value === 1 ? (
                  <span className="failureText">{failureDescriptions[key]}: This parameter is the cause of failure.</span>
                ) : (
                  <span>{failureDescriptions[key]}: No failure detected.</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModelWork;
