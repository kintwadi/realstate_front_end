"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const WhyChooseOurProperties: React.FC = () => {
  const services = [
    {
      icon: 'fal fa-headset',
      title: '24 Hours Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: 'fal fa-users-cog',
      title: 'User Admin Panel',
      description: 'Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Curabitur convallis fringilla diam sed aliquam.'
    },
    {
      icon: 'fal fa-phone-laptop',
      title: 'Mobile Friendly',
      description: 'Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa.'
    }
  ];

  const partners = [
    { id: 1, logo: '/images/clients/1.png', alt: 'Client 1' },
    { id: 2, logo: '/images/clients/2.png', alt: 'Client 2' },
    { id: 3, logo: '/images/clients/3.png', alt: 'Client 3' },
    { id: 4, logo: '/images/clients/4.png', alt: 'Client 4' },
    { id: 5, logo: '/images/clients/5.png', alt: 'Client 5' }
  ];

  return (
    <section className="main-content ms_vir_height">
      <div className="container">
        <div className="boxed-container">
          <div className="boxed-content">
            <div className="about-wrap boxed-content-item">
              <div className="row">
                <div className="col-lg-5">
                  <div className="about-title ab-hero">
                    <h2>Why Choose Our Properties</h2>
                    <h4>Check video presentation to find out more about us.</h4>
                  </div>
                  <div className="services-opions">
                    <ul>
                      {services.map((service, index) => (
                        <li key={index}>
                          <i className={service.icon}></i>
                          <h4>{service.title}</h4>
                          <p>{service.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="col-lg-7">
                  <div className="about-img">
                    <img src="/images/all/2.jpg" className="respimg" alt="About Us" />
                    <div className="about-img-hotifer">
                      <p>Your website is fully responsive so visitors can view your content from their choice of device.</p>
                      <h4>Mark Antony</h4>
                      <h5>Renstate CEO</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="clients-carousel-wrap">
            <div className="clients-carousel-title">Our Trusted Partners</div>
            <div className="clients-carousel">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.cc-button-next',
                  prevEl: '.cc-button-prev',
                }}
                loop={true}
                grabCursor={true}
                autoHeight={false}
                centeredSlides={false}
                slidesPerView={4}
                spaceBetween={20}
                speed={1400}
                mousewheel={false}
                breakpoints={{
                  1064: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}
              >
                {partners.map((partner) => (
                  <SwiperSlide key={partner.id}>
                    <a href="#" className="client-item">
                      <img src={partner.logo} alt={partner.alt} />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="cc-button cc-button-next">
                <i className="fal fa-angle-right"></i>
              </div>
              <div className="cc-button cc-button-prev">
                <i className="fal fa-angle-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurProperties;