import React from 'react';
import './Cards.css';
import CardItem from './components/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these jobs!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Blah'
              label='digging'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Blah'
              label='digging'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Blah'
              label='digging'
              path='/gallery'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Blah'
              label='digging'
              path='/gallery'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Blah'
              label='digging'
              path='/gallery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;