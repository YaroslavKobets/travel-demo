import React from 'react'
import Label from '../UI/Label/Label'
import InfoTuple from '../UI/InfoTuple/InfoTuple'

import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'

import './PlanCloserCard.scss'

const PlanCloserCard = ({ dayPlan, id }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id })

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	}
	return (
		<div
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={style}
			className='plan-closer-card'
		>
			<div className='plan-closer-card__image'>
				<img src={dayPlan.picture} alt='' />
			</div>
			<div className='plan-closer-card__content'>
				<div className='plan-closer-card__title'>{dayPlan.title}</div>
				{dayPlan.curatorLike && (
					<Label
						bgGlass={true}
						customClass='plan-closer-card__label'
						labelText={'Curator’s pick'}
					/>
				)}

				<InfoTuple placeInfoData={dayPlan.placeInfo} />
			</div>
			<div className='plan-closer-card__control'></div>
		</div>
	)
}

export default PlanCloserCard
