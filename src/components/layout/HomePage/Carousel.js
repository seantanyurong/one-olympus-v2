import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { FreeMode, Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'du5ataark',
  },
});

const myImage = cld.image('dungeon-house/heroBanner');

const Carousel = () => {
  return (
    <section className='mt-16'>
      {' '}
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        centeredSlides={true}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <AdvancedImage className='rounded-lg' cldImg={myImage} alt='heroBanner' />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage className='rounded-lg' cldImg={myImage} alt='heroBanner' />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <AdvancedImage className='rounded-lg' cldImg={myImage} alt='heroBanner' />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <AdvancedImage className='rounded-lg' cldImg={myImage} alt='heroBanner' />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage className='rounded-lg' cldImg={myImage} alt='heroBanner' />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <AdvancedImage className='rounded-lg' cldImg={myImage} alt='heroBanner' />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage className='rounded-lg' cldImg={myImage} alt='heroBanner' />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage className='rounded-lg' cldImg={myImage} alt='heroBanner' />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage className='rounded-lg' cldImg={myImage} alt='heroBanner' />
        </SwiperSlide>
        <SwiperSlide>
          <AdvancedImage cldImg={myImage} alt='heroBanner' />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
