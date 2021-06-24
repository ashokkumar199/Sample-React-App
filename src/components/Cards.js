import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out various things in world!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/car.jpg'
              text='Its a never ending battle of making your cars better and also trying to be better yourself'
              label='Car'
              path='/aboutus'
            />
            <CardItem
              src='images/laptop.jpg'
              text='To join in the industrial revolution, you needed to open a factory; in the Internet revolution, you need to open a laptop.'
              label='Laptop'
              path='/aboutus'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bike.jpg'
              text='You never have the wind with you — either it is against you or you’re having a good day'
              label='Bike'
              path='/aboutus'
            />
            <CardItem
              src='images/mobile.jpg'
              text='A smartphone is an addictive device which traps a soul into a lifeless planet full of lives'
              label='Mobile'
              path='/aboutus'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Run wild and free like a waterfall'
              label='Nature'
              path='/aboutus'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
