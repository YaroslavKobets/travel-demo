import React from 'react'
import './Comment.scss'

const Comment = () => {
	return (
		<div className='comment'>
			<div className='comment__author'>
				<div className='comment__author-picture'>
					<img src='./src/assets/images/ava.jpg' alt='' />
				</div>
				<div className='comment__author-name'>Curated by Sandra</div>
				<div className='comment__author-status'>Fyno expert</div>
			</div>
			<div className='comment__text'>
				Welcome to Iceland, a land of breathtaking landscapes and unspoiled
				natural beauty. From its majestic waterfalls and geothermal wonders to
				the vibrant culture and rich history, Iceland promises an unforgettable
				adventure for every traveler.
			</div>
		</div>
	)
}

export default Comment
