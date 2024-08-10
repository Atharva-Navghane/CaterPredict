import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account' // Forces the account selection prompt
      });
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setMessage('Signed in successfully');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setShowMenu(false);
      setMessage('Signed out successfully');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header-container">
      <div className="title-container">
        <div className="title">
          <span className="highlight">CAT</span>er
          <span className="highlight">P</span>redict
        </div>
        <div className="subText">
          Empowering Equipment with <span className="highlight">Predictive Insight</span>
        </div>
      </div>
      <button className="home-button" onClick={handleHomeClick}>Home</button>
      {/* {user ? (
        <div className="user-profile" onClick={toggleMenu}>
          <img src={user.photoURL} alt="User Profile" className="user-pfp" />
          {showMenu && (
            <div className="menu">
              {message && <div className="popup-message">{message}</div>}
              <span>Signed in as {user.displayName}</span>
              <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
            </div>
          )}
        </div>
      ) : (
        <button className="sign-in-button" onClick={handleGoogle} style={{ paddingLeft: '20px' }}>Sign In</button>
      )} */}
    </div>
  );
}

export default Header;
