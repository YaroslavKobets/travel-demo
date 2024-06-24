import React from 'react'
import Comment from '../Comment/Comment'
import './Highlights.scss'
const Highlights = () => {
	return (
		<div className='highlights'>
			<div className='highlights__header'>
				<h2 className='highlights__title'>Iceland’s Highlights</h2>
				<div className='highlights__controls'>
					<button className='button highlights__controls-btn'>
						<img src='./src/assets/images/svg/save.svg' alt='' />
						Add to wishlist
					</button>
					<button className='button highlights__controls-btn'>
						<img src='./src/assets/images/svg/share.svg' alt='' />
						Share
					</button>
				</div>
			</div>
			<Comment />
		</div>
	)
}

export default Highlights
