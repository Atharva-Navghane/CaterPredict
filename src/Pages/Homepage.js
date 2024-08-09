import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/modelwork');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to <span style={styles.highlight}>CAT</span>er
        <span style={styles.highlight}>P</span>redict
      </h1>
      <p style={styles.paragraph}>
        Welcome to <span style={styles.highlight}>CAT</span>er
        <span style={styles.highlight}>P</span>redict, a cutting-edge platform designed to predict component failures based on historical and usage data. Our core mission is to utilize telematics data collected from customers' equipment to proactively identify potential present or future equipment/component failures. This site provides students with the opportunity to develop advanced AI solutions that can replicate and potentially exceed the expertise of human analysts in predicting equipment failures. By leveraging Product Link telematics data, the student team will have the autonomy to propose recommendations that aim to enhance equipment efficiency for Caterpillar’s global customer base.
      </p>
      <p style={styles.paragraph}>
        The project involves analyzing the provided data set and threshold information to identify actionable insights. Students will be expected to deliver recommendations that drive equipment efficiencies and present their findings with supporting materials. These materials should showcase how analytical principles were applied to derive recommendations and will be shared with Caterpillar mentors and stakeholders.
      </p>
      <button style={styles.button} onClick={handleClick}>
        Click here to check
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f5f5dc', // Cream white background
    color: '#333', // Dark gray text color
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  highlight: {
    color: '#FFD700', // Bright yellow color
  },
  button: {
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#333', // Dark background for the button
    border: 'none',
    borderRadius: '0.3rem',
    cursor: 'pointer',
    marginTop: '1rem',
    textDecoration: 'none',
  },
};

export default Homepage;
