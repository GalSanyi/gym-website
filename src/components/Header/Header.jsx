import React from 'react';
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav__wrapper">
          {/* logo */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>FitBody</h2>
          </div>
          {/* navigation menu */}
        </div>
      </div>
    </header>
  );
};

export default Header;
