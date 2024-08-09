import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'; // Import the CSS file

const Homepage = () => {
  const navigate = useNavigate();

  const handleModelWorkClick = () => {
    navigate('/modelwork');
  };

  const handleMakersClick = () => {
    navigate('/makers');
  };

  return (
    <div className="container">
      <h1 className="title">
        Welcome to <span className="highlight">CAT</span>er
        <span className="highlight">P</span>redict
      </h1>
      <p className="paragraph">
        Welcome to <span className="highlight">CAT</span>er
        <span className="highlight">P</span>redict, a cutting-edge platform designed to predict component failures based on historical and usage data. Our core mission is to utilize telematics data collected from customers' equipment to proactively identify potential present or future equipment/component failures.
      </p>
      <p className="paragraph">
        This site provides students with the opportunity to develop advanced AI solutions that can replicate and potentially exceed the expertise of human analysts in predicting equipment failures. By leveraging Product Link telematics data, the student team will have the autonomy to propose recommendations that aim to enhance equipment efficiency for Caterpillar’s global customer base.
      </p>
      <p className="paragraph">
        The project involves analyzing the provided data set and threshold information to identify actionable insights. Students will be expected to deliver recommendations that drive equipment efficiencies and present their findings with supporting materials. These materials should showcase how analytical principles were applied to derive recommendations and will be shared with Caterpillar mentors and stakeholders.
      </p>
      <button className="button" onClick={handleModelWorkClick}>
        Click here to check
      </button>

      <div className="makersSection">
        <h2 className="makersTitle">Meet the Makers</h2>
        <p className="makersDescription">
          Curious about who built this amazing platform? Click below to discover the team behind the magic!
        </p>
        <button className="makersButton" onClick={handleMakersClick}>
          Meet the Makers
        </button>
      </div>
    </div>
  );
}

export default Homepage;
