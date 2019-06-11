import React, { Component } from 'react';
import './Cards.css';
import Card from './Card';
import iconTool from '../img/icon-tool.png';
import iconGear from '../img/icon-gear.png';
import iconComputer from '../img/icon-computer.png';
import iconAirplane from '../img/icon-airplane.png';

class Cards extends Component {
  render() {
    return (
      <section className='cardsSection'>
        <h1 className='headingOne'>Your digital <span className='magicalLine'>Swiss Army Knife</span>. Built by <span className='magicalLine'>Microsoft</span>.</h1>
        <div className='cards'>
          <Card
            cardIcon={iconComputer}
            cardTitle='Digital Nirvana'
            cardText='Access all the knowledge the internet holds without any restrictions. PDFToolKit is your key to the web.'
          />
          <Card
            cardIcon={iconTool}
            cardTitle='All-In-One'
            cardText='PDFToolKit is the only software application you need on your computer. It can open, view, and edit any file.'
          />
          <Card
            cardIcon={iconGear}
            cardTitle='Quality Relationships'
            cardText='We have strong relationships with Apple, Amazon, and Google. Keep up-to-date with the latest changes from the biggest names in the industry.'
          />
          <Card
            cardIcon={iconAirplane}
            cardTitle='Strategy Development'
            cardText='Take-off with PDFToolKits international and live translation features. Read any file in any language.'
          />
        </div>
      </section>
    );
  }
}
export default Cards;
