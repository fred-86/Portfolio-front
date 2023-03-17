import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { EffectCube, Pagination } from 'swiper'
import { CardProject } from './CardProject'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { CardProfil } from './CardProfil'
import { CardSkills } from './CardSkills'

export function Slider() {
    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                loop={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CardProfil />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProject />
                </SwiperSlide>
                <SwiperSlide>
                    <CardSkills />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
