import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/css/navigation'
import PlaceCard from '../PlaceCard/PlaceCard'
import './Slider.scss'
import { sliderSettings } from '../../utils/common'
import SliderButtons from '../UI/SliderButtons/SliderButtons'
const Slider = ({ dataSlide }) => {
	const navButtonClass = ['slider-buttons__next', 'slider-buttons__prev']
	return (
		<>
			<Swiper
				navigation={{
					nextEl: `.${navButtonClass[0]}`,
					prevEl: `.${navButtonClass[1]}`,
				}}
				modules={[Navigation]}
				{...sliderSettings}
			>
				<SliderButtons classes={navButtonClass} />
				{dataSlide.map((item, i) => {
					return (
						<SwiperSlide key={i}>
							<PlaceCard dataCard={item} />
						</SwiperSlide>
					)
				})}
			</Swiper>
		</>
	)
}

export default Slider
