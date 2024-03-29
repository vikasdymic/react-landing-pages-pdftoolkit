import React, { Component } from 'react';
import './Header.css';
import Button from './Button';
import logo from '../img/logo.png';
import Modal from './Modal';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <nav>
          <div className='navLeft'>
            <a href=''>
              <img className='logo' src={logo} alt='PDFToolKit' />
            </a>
            <h1><span className='magicalLine'>PDF</span> ToolKit</h1>
          </div>
          <div className='navRight'>
            {/* <Button buttonStyle='medium' buttonLabel='Install now' /> */}
          <button className='medium button' onClick={this.toggleModal}>Install Now</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>PDFToolKit</Modal>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
