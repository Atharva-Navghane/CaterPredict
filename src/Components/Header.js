import React from 'react';

const Header = () => {
  return (
    <div style={styles.container}>
      <div>
        <span style={styles.highlight}>CAT</span>er
        <span style={styles.highlight}>P</span>redict
      </div>
      <div style={styles.subText}>
        Empowering Equipment with <span style={styles.highlight}>Predictive Insight</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc', // Cream white background
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#333', // Dark gray text color
  },
  highlight: {
    color: '#FFD700', // Bright yellow color
  },
  subText: {
    fontSize: '1.5rem', // Smaller size for the subtitle
    fontWeight: 'normal',
    marginTop: '1rem', // Adds some space between the title and subtitle
  },
};

export default Header;
