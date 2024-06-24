import React, { useState } from 'react'
import './TripPlan.scss'
import Slider from '../Slider/Slider'
import PlanCloser from '../PlanCloser/PlanCloser'
const TripPlan = ({ dataPlan }) => {
	const [show, setShow] = useState(false)
	return (
		<div className='trip-plan'>
			<div className='trip-plan__overlay'></div>

			<div className='trip-plan__content'>
				<span className='trip-plan__icon'>{dataPlan.plan}</span>
				<div className='trip-description'>
					<h2 className='trip-description__title'>{dataPlan.title}</h2>
					<ul className='trip-description__tags'>
						{dataPlan.tags.map((tag, i) => {
							return <li key={i}>{tag}</li>
						})}
					</ul>
					<div className='trip-description__text'>{dataPlan.description}</div>
				</div>
			</div>

			<div className='trip-plan__content'>
				<span className='trip-plan__icon'>
					<img src='./images/svg/stars.svg' alt='' />
				</span>
				<div className='trip-plan__content-header'>
					<h3>Region highlights</h3>
					<div onClick={() => setShow(!show)} className='button'>
						<img src='./images/svg/list.svg' alt='' />
						Show daily plan
					</div>
				</div>
				{!show ? (
					<Slider dataSlide={dataPlan.region} />
				) : (
					<PlanCloser dayPlans={dataPlan.region} />
				)}
			</div>
			<div className='trip-plan__content'>
				<span className='trip-plan__icon'>
					<img src='./images/svg/bed.svg' alt='' />
				</span>
				<div className='trip-plan__content-header'>
					<h3>Where to stay</h3>
				</div>
				<Slider dataSlide={dataPlan.booking} />
			</div>
		</div>
	)
}

export default TripPlan
