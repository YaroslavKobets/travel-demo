import React, { useEffect, useState } from 'react'
import './Header.scss'

const Header = () => {
	const days = [
		{ text: '2 days', id: 2 },
		{ text: '3 days', id: 3 },
		{ text: '4 days', id: 4 },
		{ text: '5 days', id: 5 },
		{ text: '6 days', id: 6 },
		{ text: '7 days', id: 7 },
	]
	const [chooseDay, setChooseDay] = useState(days[days.length - 1].text)
	const [openList, setOpenList] = useState(false)

	function selectDay(e) {
		e.stopPropagation()
		const selectedId = Number(e.currentTarget.getAttribute('value'))
		const selectedDay = days.find(day => day.id === selectedId)
		if (selectedDay) {
			setChooseDay(selectedDay.text)
		}
		return setOpenList(false)
	}

	useEffect(() => {
		function handleClickOutside(event) {
			const daysElement = document.querySelector('.days')
			if (daysElement && !daysElement.contains(event.target)) {
				setOpenList(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div className='header'>
			<div className={`selector ${openList ? 'open' : ''}`}>
				<div className='trip'>Trips</div>
				<div className='country'>Iceland</div>
				<div className='days' onClick={() => setOpenList(true)}>
					{chooseDay} <span></span>
					<ul>
						{days
							.filter(day => day.text !== chooseDay)
							.map(day => {
								return (
									<li value={day.id} key={day.id} onClick={selectDay}>
										{day.text}
									</li>
								)
							})}
					</ul>
				</div>
			</div>
			<div className='button header__button'>
				<span></span>Create
			</div>
		</div>
	)
}

export default Header
