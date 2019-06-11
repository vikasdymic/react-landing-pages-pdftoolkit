import React, { Component } from 'react';
import './Partner.css';
import tooFacedLogo from '../img/p-adobe.webp';
import neutrogenaLogo from '../img/p-espn.webp';
import narsLogo from '../img/p-google_logo.webp';
import aveenoLogo from '../img/p-microsoft.webp';
import bhCosmeticsLogo from '../img/p-salesforce.webp';
import evaNycLogo from '../img/p-time.webp';
import renSkinCareLogo from '../img/p-wired.webp';

class Partner extends Component {
  render() {
    return (
      <section className='partnersSection'>
        <h1 className='headingOneAlt'>PDFToolKit is used by the following brands</h1>
        <div className='partners'>
          <img src={tooFacedLogo} alt='' />
          <img src={neutrogenaLogo} alt='' />
          <img src={narsLogo} alt='' />
          <img src={aveenoLogo} alt='' />
          <img src={aveenoLogo} alt='' />
          <img src={bhCosmeticsLogo} alt='' />
          <img src={evaNycLogo} alt='' />
          <img src={renSkinCareLogo} alt='' />
        </div>
      </section>
    );
  }
}
export default Partner;
