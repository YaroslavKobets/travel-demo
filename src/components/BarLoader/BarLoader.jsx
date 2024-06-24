import React from 'react'
import './BarLoader.scss'

const BarLoader = () => {
	return (
		<div className='bar-loader'>
			<div className='bar-loader__text'>
				This site is made with professionalism by Yaroslav Kobets
			</div>
			<div className='bar-loader__overlay'>
				<div className='bar-loader__bar'></div>
				<div className='bar-loader__bar'></div>
				<div className='bar-loader__bar'></div>
				<div className='bar-loader__bar'></div>
				<div className='bar-loader__bar'></div>
				<div className='bar-loader__bar'></div>
				<div className='bar-loader__bar'></div>
				<div className='bar-loader__bar'></div>
				<div className='bar-loader__bar'></div>
				<div className='bar-loader__bar'></div>
			</div>
		</div>
	)
}

export default BarLoader
