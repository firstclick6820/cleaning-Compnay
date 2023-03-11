import React from 'react';
import {
  MDBCarouselItem,
} from 'mdb-react-ui-kit';




export default function HeroSlide({slide, id}) {
    const {title, image, subtitle} = slide
  return (
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={id}
        src={image}
        alt='...'>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </MDBCarouselItem>    
  );
}