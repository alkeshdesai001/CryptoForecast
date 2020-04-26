import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Testimonials.scss';

const data = [
  {
    comment: `(1) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.`,
    avatar: 'Avatar.png',
  },
  {
    comment: `(2) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.`,
    avatar: 'Avatar.png',
  },
  {
    comment: `(3) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.`,
    avatar: 'Avatar.png',
  },
];

const Testimonials = () => {
  return (
    <div className='testimonial-content'>
      <div className='testimonial-container'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={15}
          totalSlides={data.length}
          isPlaying
        >
          <Slider style={{ height: '100%' }}>
            {data.map((com, i) => (
              <Slide index={i} class='testimonial-slide'>
                <img
                  className='quotes'
                  src={require('../../img/Quotes.svg')}
                  alt='Quotes'
                />
                <h3 className='testimonial-title'>{com.comment}</h3>
                <img
                  src={require(`../../img/${com.avatar}`)}
                  alt='Avatar'
                  className='avatar'
                />
              </Slide>
            ))}
          </Slider>
          <ButtonBack className='carBtn buttonBack'>
            <img src={require('../../img/next.svg')} alt='Next' />
          </ButtonBack>
          <ButtonNext className='carBtn buttonNext'>
            {' '}
            <img src={require('../../img/next.svg')} alt='Next' />
          </ButtonNext>
          <DotGroup className='dotGroup' />
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Testimonials;
