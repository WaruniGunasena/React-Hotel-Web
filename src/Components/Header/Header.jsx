import React from 'react';
import headerCSS from './../Header/Header.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Header() {
  return (
    <div className={headerCSS.header_wrapper}>
      <Swiper
        className={headerCSS.swiper}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        parallax={true}
        speed={2500}
        mousewheel={{
          forceToAxis: true,    
          sensitivity: 1,      
          releaseOnEdges: true,
        }}
        pagination={{
          clickable: true,      
        }}
        simulateTouch={true}   
        resistanceRatio={0.7}   
        modules={[Mousewheel, Pagination, Autoplay, Parallax]}
      >
        <SwiperSlide>
          <div className={`${headerCSS.Header_slide} ${headerCSS.slide1}`}>
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small>
              <h2 data-swiper-parallax="-300">Enjoy Your <span>Dream</span> Time with <br /> 
              <span>Luxury</span> Experience</h2>
              <p data-swiper-parallax="-400">Call Now <span>+94 71 723 3095</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${headerCSS.Header_slide} ${headerCSS.slide2}`}>
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small>
              <h2 data-swiper-parallax="-300">Enjoy Your <span>Dream</span> Time with <br /> 
              <span>Luxury</span> Experience</h2>
              <p data-swiper-parallax="-400">Call Now <span>+94 71 723 3095</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${headerCSS.Header_slide} ${headerCSS.slide3}`}>
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small>
              <h2 data-swiper-parallax="-300">Enjoy Your <span>Dream</span> Time with <br /> 
              <span>Luxury</span> Experience</h2>
              <p data-swiper-parallax="-400">Call Now <span>+94 71 723 3095</span></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;