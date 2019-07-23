import React, { Component } from 'react';
import './Hero.css';
import HeroImage from '../img/hero-item.png';
import Button from './Button';
import Modal from './Modal';

class Hero extends Component {
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
      <section className='heroSection'>
        <div className='heroContent'>
          <img className='heroImage' src={HeroImage} />
          <h1 className='heroContentTitle'>
            Convert your files to PDF <span className='magicalLine'>for free</span>.
          </h1>
          {/*<p className='heroContentCopy'>
          Click on the 'download' button to download PDFToolKit. Start converting files quickly and easily with PDFToolKit
          </p>*/}
          {/* <Button buttonStyle='large' buttonLabel='Download PDFToolKit' /> */}
          <button className='large button download' onClick={this.toggleModal}>Download PDFToolKit</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>PDFToolKit</Modal>
        </div>
      </section>
    );
  }
}

export default Hero;
