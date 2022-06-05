import React from 'react'
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Sawa Christian',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repudiandae. Voluptatem labore optio aspernatur eos nihil saepe numquam sed. Excepturi!'       
  },
  
  {
    avatar: AVTR2,
    name: 'Sawa Salvator',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repudiandae. Voluptatem labore optio aspernatur eos nihil saepe numquam sed. Excepturi!'       
  },
  
  {
    avatar: AVTR3,
    name: 'Budoni Eustach',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repudiandae. Voluptatem labore optio aspernatur eos nihil saepe numquam sed. Excepturi!'       
  },
  
  {
    avatar: AVTR4,
    name: 'Mian Mong',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repudiandae. Voluptatem labore optio aspernatur eos nihil saepe numquam sed. Excepturi!'       
  },
  
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                 <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                 {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial