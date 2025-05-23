"use client"
import React from 'react';
import swiperData from '@/data/swiper-data';
import Image from 'next/image';

// Import Swiper and its necessary modules
import { SwiperSlide, Swiper } from 'swiper/react';
import {Pagination } from 'swiper';

const PaginationCustom = () => {

    return (
        <>
            <div className="card__wrapper">
                <div className="card__title-wrap mb-[20px]">
                    <h5 className="card__heading-title">Pagination Custom</h5>
                </div>
                <div className="swiper swiperPaginationCustom relative">
                    <Swiper
                     modules={[Pagination]}
                      pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                          return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                      }}
                      className="bd-pagination-custom"
                      breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        550: {
                            slidesPerView: 1,
                        },
                        767: {
                            slidesPerView: 1,
                        },
                        992: {
                            slidesPerView: 1,
                        },
                        1200: {
                            slidesPerView: 1,
                        },
                        1400: {
                            slidesPerView: 1,
                        },
                    }}
                    >
                        {
                            swiperData && (
                                swiperData.slice(60, 70).map((item) => (
                                    <SwiperSlide key={item.id}>
                                       <Image src={item.image} style={{ width: "100%", height: "auto" }} priority alt="image" />
                                    </SwiperSlide>
                                ))
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default PaginationCustom;