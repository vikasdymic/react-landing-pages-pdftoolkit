import React, { Component } from 'react';
import './Header.css';
import Button from './Button';
import logo from '../img/logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className='navLeft'>
            <a href='https://thesulfurgroup.com'>
              <img className='logo' src={logo} alt='The Sulfur Group' />
            </a>
            <h1>PDFToolKit</h1>
          </div>
          <div className='navRight'>
            <Button buttonStyle='medium' buttonLabel='Install now' />
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
