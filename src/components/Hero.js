import React, { Component } from 'react';
import './Hero.css';
import HeroImage from '../img/hero-item.png';
import Button from './Button';
import Modal from './Modal';
import Arrow from '../img/right-arrow.png';
import Pdf from '../img/pdf.png';
import Doc from '../img/doc.png';

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
          <div className='heroContent__images'>
            <img className='heroImage' src={HeroImage} />
            <div className='heroImage__top'>
              <img className='heroImage__pdf' src={Pdf} />
              <img className='heroImage__arrow' src={Arrow} />
              <img className='heroImage__doc' src={Doc} />
            </div>
            <div className='heroImage__bottom'>
              <img className='heroImage__doc' src={Doc} />
              <img className='heroImage__arrow' src={Arrow} />
              <img className='heroImage__pdf' src={Pdf} />
            </div>
          </div>
          <h1 className='heroContentTitle'>
            Convert your files to PDF <span className='magicalLine'>for free</span>.
          </h1>
          {/*<p className='heroContentCopy'>
          Click on the 'download' button to download PDFToolKit. Start converting files quickly and easily with PDFToolKit
          </p>*/}
          {/* <Button buttonStyle='large' buttonLabel='Download PDFToolKit' /> */}
          <p className='heroContentCopy'>Step 1: Click 'Download PDFToolKit'<br />Step 2: Click 'Add to Chrome'<br />Step 3: Enjoy!</p>
          <button className='large button download' onClick={this.toggleModal}>Download PDFToolKit</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>PDFToolKit</Modal>
        </div>
      </section>
    );
  }
}

export default Hero;
