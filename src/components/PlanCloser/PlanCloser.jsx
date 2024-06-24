import React, { useState } from 'react'

import './PlanCloser.scss'
import { closestCenter, closestCorners, DndContext } from '@dnd-kit/core'
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import PlanCloserCard from '../PlanCloserCard/PlanCloserCard'

const PlanCloser = ({ dayPlans }) => {
	console.log(dayPlans)
	const [plannedDays, setPlannedDays] = useState(dayPlans)

	const getDayItemPos = id => {
		return plannedDays.findIndex(planDayItem => planDayItem.id === id)
	}

	const handleDragEnd = event => {
		const { active, over } = event

		if (active.id !== over.id) {
			setPlannedDays(items => {
				const activeIndex = getDayItemPos(active.id)
				const overIndex = getDayItemPos(over.id)

				return arrayMove(plannedDays, activeIndex, overIndex)
			})
		}
	}
	return (
		<div className='plan-closer'>
			<div className='plan-closer__day-editor'>
				<DndContext
					onDragEnd={handleDragEnd}
					collisionDetection={closestCenter}
				>
					<SortableContext
						items={plannedDays}
						strategy={verticalListSortingStrategy}
					>
						{plannedDays.map((dayPlan, index) => {
							return (
								<React.Fragment key={dayPlan.id}>
									{(index === 0 || index % 2 === 0) && (
										<div className='additional-content'>
											Day {Math.floor(index / 2) + 1}
										</div>
									)}
									<PlanCloserCard dayPlan={dayPlan} id={dayPlan.id} />
								</React.Fragment>
							)
						})}
					</SortableContext>
				</DndContext>
			</div>
		</div>
	)
}

export default PlanCloser
