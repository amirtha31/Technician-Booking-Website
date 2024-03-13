import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const servicesData = [
  {
    title: 'Service 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    
  },
  {
    title: 'Service 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: ' Service 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: ' Service 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: ' Service 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: ' Service 6',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: ' Service 7',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: ' Service 8',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: ' Service 9',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    title: ' Service 10',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
 
];

function Flashcard({ service }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='flashcontainer'>
    <div className="flashcard" onClick={handleFlip}>
      <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="front">
          <h3>{service.title}</h3>
        </div>
        <div className="back">
          
          <p>{service.description}</p><br></br>
          
        </div>
        
      </div>
    </div>
    </div>
  );
}

function FlashcardPresentation() {
  return (
    <>
    <div>
        <h1>Services</h1>
    </div>
    <div className="flashcard-container">
        
      {servicesData.map((service, index) => (
        <Flashcard key={index} service={service} />
      ))}
    </div>
    </>
  );
}

export default FlashcardPresentation;
