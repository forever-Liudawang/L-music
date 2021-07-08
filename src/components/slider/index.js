import React,{useEffect,useState,useLayoutEffect} from 'react'
import { SliderContainer } from "./style"
import './swiper.css'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import {Swiper,SwiperSlide} from "swiper/react"
SwiperCore.use([Pagination, Autoplay])
export default function Slider({bannerList}) {
    useEffect(() => {
    }, [])
    return (
        <SliderContainer>
            <div className="before"></div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{clickable:true,el:".swiper-pagination"}}
                autoplay={{delay:1500,disableOnInteraction:false}}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    bannerList.map((item,index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <img src={item.imageUrl} width="100%" height="100%" alt="推荐"/>
                            </SwiperSlide>
                        )
                    })
                }
                <div className="swiper-pagination"></div>
            </Swiper>
        </SliderContainer>
    );
}
