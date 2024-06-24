import React from 'react'
import './TripInfo.scss'
import scrollToElement from '../../helpers/scrollTo'

const TripInfo = () => {
	return (
		<div className='trip-info'>
			<div className='trip-info__item'>
				<div className='trip-info__item-name'>Trip duration</div>
				<div className='trip-info__item-value'>7 days</div>
			</div>
			<div className='trip-info__item'>
				<div className='trip-info__item-name'>Exploration</div>
				<div className='trip-info__item-value'>4 regions</div>
			</div>
			<div className='trip-info__item'>
				<div className='trip-info__item-name'>Flight</div>
				<div className='trip-info__item-value'>7h 20m from SFO</div>
			</div>

			<div
				onClick={() => scrollToElement('.trip-overlay')}
				className='trip-info__show-btn button'
			>
				View itinerary
			</div>
		</div>
	)
}

export default TripInfo
