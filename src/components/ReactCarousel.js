import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReactCarousel = () => {
  return (
    <Slider>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <Wrap>
          <img loading="lazy" src="/images/slider-badging.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img loading="lazy" src="/images/slider-badag.jpg" alt="" />
        </Wrap>
        {/* <Wrap>
          <img loading="lazy" src="/images/slider-badging.jpg" alt="" />
        </Wrap> */}
      </Carousel>
    </Slider>
  );
};

export default ReactCarousel;

const Slider = styled.div`
  margin-top: 20px;
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
