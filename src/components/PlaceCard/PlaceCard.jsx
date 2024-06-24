import React, { useState } from 'react'
import './PlaceCard.scss'
import InfoTuple from '../UI/InfoTuple/InfoTuple'
import Label from '../UI/Label/Label'

const PlaceCard = ({ dataCard }) => {
	const [saveCard, setSaveCard] = useState(false)
	return (
		<div className='place-card'>
			<div className='place-card__picture'>
				<img src={dataCard.picture} alt='' />
				{dataCard.curatorLike ? (
					<Label
						customClass='place-card__label'
						labelText='Curator’s pick'
						bgGlass={true}
					/>
				) : (
					''
				)}

				<div
					onClick={() => setSaveCard(!saveCard)}
					className={`place-card__save ${saveCard && 'active'}`}
				>
					<img src='./src/assets/images/svg/save-card.svg' alt='' />
				</div>
			</div>
			<div className='place-card__title'>{dataCard.title}</div>
			{dataCard.rating && (
				<div className='place-card__rating'>
					<img src='./src/assets/images/svg/rating.svg' alt='' />
					<span>{dataCard.rating}/10</span>
				</div>
			)}
			<InfoTuple placeInfoData={dataCard.placeInfo} />
		</div>
	)
}

export default PlaceCard
