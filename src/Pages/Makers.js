import React from 'react';
import './Makers.css'; // Import the updated CSS file
import Atharva from '../Images/Atharva-Navghane.jpg';
import Aniket from '../Images/Aniket.jpg';
import Ayush from '../Images/Ayush.jpeg';
import Onkar from '../Images/Onkar.jpg';


const teamMembers = [
  {
    name: 'Atharva Navghane',
    regNumber: '21BCE0083',
    photo: Atharva,
  },
  {
    name: 'Onkar Hule',
    regNumber: '21BCE3363',
    photo: Onkar,
  },
  {
    name: 'Aniket Nikam',
    regNumber: '21BCT0322',
    photo: Aniket,
  },
  {
    name: 'Ayush Katkurwar',
    regNumber: '21BCE0856',
    photo: Ayush,
  },
];

const Makers = () => {
  return (
    <div className="makersContainer">
      <h1 className="makersTitle">Meet the Makers</h1>
      <div className="cardsContainer">
        {teamMembers.map((member, index) => (
          <div className="card" key={index}>
            <div className="cardImageWrapper">
              <img src={member.photo} alt={`${member.name}`} className="photo" />
            </div>
            <h2 className="name">{member.name}</h2>
            <p className="regNumber">{member.regNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Makers;
