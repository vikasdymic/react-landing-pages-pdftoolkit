import React, { Component } from 'react';
import './CaseStudy.css';

class CaseStudy extends Component {
  render() {
    return (
      <section className='caseStudySection'>
        <h1 className='headingOne'>Case Study</h1>
        <div className='caseStudies'>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseOne' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>All-powerful</span>
            </a>
          </div>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseTwo' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>Cloud-based</span>
            </a>
          </div>{' '}
          <div className='caseStudy'>
            <div className='caseStudyImage  caseThree' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLine'>Omnitool</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default CaseStudy;
