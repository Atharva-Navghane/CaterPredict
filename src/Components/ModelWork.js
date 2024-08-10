import React, { useState, useEffect } from 'react';
import './ModelWork.css';

const ModelWork = () => {
  const [step, setStep] = useState(1);
  const [machine, setMachine] = useState('');
  const [component, setComponent] = useState('');
  const [parameters, setParameters] = useState({});
  const [allData, setAllData] = useState([]);
  const [isDataSaved, setIsDataSaved] = useState(false);

  const machines = [
    'Excavator_1',
    'Articulated_Truck_1',
    'Backhoe_Loader_1',
    'Dozer_1',
    'Asphalt_Paver_1'
  ];

  const components = ['Engine', 'Fuel', 'Drive', 'Misc'];

  const availableParameters = {
    Engine: [
      'Engine Oil Pressure',
      'Engine Speed',
      'Engine Temperature'
    ],
    Fuel: [
      'Water Fuel',
      'Fuel Level',
      'Fuel Pressure',
      'Fuel Temperature'
    ],
    Drive: [
      'Brake Control',
      'Transmission Pressure'
    ],
    Misc: [
      'System Voltage',
      'Exhaust Gas Temperature',
      'Hydraulic Pump Rate',
      'Air Filter Pressure Drop'
    ]
  };

  useEffect(() => {
    // Load saved data from local storage when the component mounts
    const savedData = JSON.parse(localStorage.getItem('allData')) || [];
    setAllData(savedData);
  }, []);

  const handleSave = () => {
    const updatedData = [...allData, { machine, component, parameters }];
    setAllData(updatedData);
    localStorage.setItem('allData', JSON.stringify(updatedData));
    setIsDataSaved(true);
  };

  const handleAddMoreData = () => {
    resetForm();
    setStep(1);
    setIsDataSaved(false);
  };

  const handleContinue = () => {
    // Handle continue to another page
    // For example, using React Router:
    // history.push('/another-page');
  };

  const handleDelete = (index) => {
    const updatedData = allData.filter((_, i) => i !== index);
    setAllData(updatedData);
    localStorage.setItem('allData', JSON.stringify(updatedData));
  };

  const resetForm = () => {
    setMachine('');
    setComponent('');
    setParameters({});
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
                <th>Component</th>
                <th>Parameters</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((data, index) => (
                <tr key={index}>
                  <td>{data.machine}</td>
                  <td>{data.component}</td>
                  <td>
                    {Object.entries(data.parameters).map(([param, value]) => (
                      <div key={param}>{param}: {value}</div>
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

      {step === 1 && !isDataSaved && (
        <div className="buttonContainer">
          <button onClick={() => setStep(2)} className="button">Add New Data</button>
        </div>
      )}

      {step === 2 && !isDataSaved && (
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
          <button onClick={() => setStep(3)} disabled={!machine} className="button">Next</button>
        </div>
      )}

      {step === 3 && machine && !isDataSaved && (
        <div className="formGroup">
          <label htmlFor="component" className="label">Select Component:</label>
          <select
            id="component"
            value={component}
            onChange={(e) => setComponent(e.target.value)}
            className="select"
          >
            <option value="">Select a component</option>
            {components.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <button onClick={() => setStep(4)} disabled={!component} className="button">Next</button>
        </div>
      )}

      {step === 4 && component && !isDataSaved && (
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="form">
          <label className="label">Parameters:</label>
          {availableParameters[component].map((param) => (
            <div key={param} className="inputGroup">
              <label className="parameterLabel">{param}:</label>
              <input
                type="text"
                value={parameters[param] || ''}
                onChange={(e) => setParameters({ ...parameters, [param]: e.target.value })}
                className="input"
              />
            </div>
          ))}
          <div className="buttonContainer">
            <button type="submit" className="button">Save</button>
          </div>
        </form>
      )}

      {isDataSaved && (
        <div className="buttonContainer">
          <button onClick={handleAddMoreData} className="button">Add More Data</button>
          <button onClick={handleContinue} className="button">Continue</button>
        </div>
      )}
    </div>
  );
};

export default ModelWork;
