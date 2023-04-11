import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function TagsSlider() {


  const tabs = [
    "Lifestyle",
    "Happy",
    "Model",
    "Woman",
    "Fashion",
    "Black and White",
    "Woman Smiling",
    "Deathstyle",
    "Sad",
    "Degenerate",
    "Man",
    "Lame",
    "Brown and Asian",
    "Man Frowning",
  ];

  const RightArrow = ({onClick, ...rest}) => {
    const {
      onMove,
      carouselState: {currentSlide, deviceType} 
    } = rest
    return (
    <div className="right__arrow" onClick={() => onClick()} >
        <BiChevronRight />
    </div>
    )
  }

  const LeftArrow = ({onClick, ...rest}) => {
    const {
      onMove,
      carouselState: {currentSlide, deviceType} 
    } = rest
    return (
    <div className="left__arrow" onClick={() => onClick()}>
        <BiChevronLeft />
    </div>
    )
  }



  // const handleResize = () => {
  //   if (window.innerWidth < 550 ) {
  //     setLength(4)
  //   } else if(window.innerWidth > 850) {
  //     setLength(6)
  //   }
  // }

  // window.addEventListener('resize', handleResize)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const settings = {
    swipeable:false,
    draggable:false,
    showDots:false,
    responsive:responsive,
    infinite:true,
    autoPlay:false,
    infinite: false,
    keyBoardControl:true,
    transitionDuration:500,
    containerClass:"carousel-container",
    itemClass:"carousel-item",
    customRightArrow: <RightArrow />,
    customLeftArrow: <LeftArrow />
  };

  return (
    <Carousel {...settings}>
      {
        tabs.map((item, i) => (
          <Slide key={i}>
            <p>{item}</p>
          </Slide>
        ))
      }
    </Carousel>
  )
}

const Slide = styled.div`
	background: var(--black-700);
  padding: 0.1rem 0.125rem;
	display: flex !important;
  justify-content: center;
  align-items: center;
	border-radius: 6.25rem;
  height: 2.5rem;
  text-align: center;
	font-size: var(--font-7);
  width: 7.875rem !important;
  cursor: pointer;
  transition: all .2s ease-in-out;
  box-sizing: content-box;

  &:hover {
    transform: scale(1.05);
  }
`

export default TagsSlider
