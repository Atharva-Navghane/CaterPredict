import React, { useState } from 'react';

const ModelWork = () => {
  const [machine, setMachine] = useState('');
  // const [components, setComponents] = useState({
  //   Engine: '',
  //   Fuel: '',
  //   Drive: '',
  //   Misc: ''
  // });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ machine, parameters });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ModelWork Input Form</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="machine" style={styles.label}>Select Machine:</label>
          <select
            id="machine"
            value={machine}
            onChange={(e) => setMachine(e.target.value)}
            style={styles.select}
          >
            <option value="">Select a machine</option>
            <option value="Excavator_1">Excavator_1</option>
            <option value="Articulated_Truck_1">Articulated_Truck_1</option>
            <option value="Dozer_1">Dozer_1</option>
            <option value="Asphalt_Paver_1">Asphalt_Paver_1</option>
          </select>
        </div>
        {/* <div style={styles.formGroup}>
          <label style={styles.label}>Components:</label>
          {Object.keys(components).map((component) => (
            <div key={component} style={styles.inputGroup}>
              <label style={styles.componentLabel}>{component}:</label>
              <input
                type="text"
                value={components[component]}
                onChange={(e) => setComponents({ ...components, [component]: e.target.value })}
                style={styles.input}
              />
            </div>
          ))}
        </div> */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Parameters:</label>
          {Object.keys(parameters).map((param) => (
            <div key={param} style={styles.inputGroup}>
              <label style={styles.parameterLabel}>{param.replace(/([A-Z])/g, ' $1')}:</label>
              <input
                type="text"
                value={parameters[param]}
                onChange={(e) => setParameters({ ...parameters, [param]: e.target.value })}
                style={styles.input}
              />
            </div>
          ))}
        </div>
        <button type="submit" style={styles.button}>Check</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f5f5dc', // Cream white background
    color: '#333', // Dark gray text color
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    display: 'block',
  },
  select: {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  componentLabel: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  parameterLabel: {
    display: 'block',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#333', // Dark background for the button
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
    textDecoration: 'none',
  },
};

export default ModelWork;
