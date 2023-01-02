import React from 'react';
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png';
import {BsList} from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
const nav__link = [
  {
    path: '#',
    display: 'Home',
  },
  {
    path: '#',
    display: 'schedule',
  },
  {
    path: '#',
    display: 'Classes',
  },
  {
    path: '#',
    display: 'Pricing',
  },
];
const Header = () => {
  return (
    <header className='header'>
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
          <div className="navigation">
            <ul className="menu">
              {nav__link.map(item => (
                <li key={uuidv4()} className="nav__item">
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className='nav-right'>
            <button className='register__btn'>Register</button>
            <span className='mobile__menu'><BsList/></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
