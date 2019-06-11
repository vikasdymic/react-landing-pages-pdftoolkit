import React, { Component } from 'react';
import './Hero.css';
import Button from './Button';

class Hero extends Component {
  render() {
    return (
      <section className='heroSection'>
        <div className='heroContent'>
          <h1 className='heroContentTitle'>
            Erase your file headaches with <span className='magicalLine'>PDFToolKit</span>.
          </h1>
          <p className='heroContentCopy'>
          This is an official Apple product and endorsed by Google! Normally $99, we are giving away PDFToolKit for free during our limited time offer. Having trouble opening files on your computer? Use PDFToolKit to open <i>ANY and EVERY</i> file you have on your computer. Keep up with your family members and don't miss out on any special moments. Open any file on your computer!
          </p>
          <Button buttonStyle='large' buttonLabel='Download PDFToolKit' />
        </div>
      </section>
    );
  }
}

export default Hero;
