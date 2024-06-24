import React from 'react'
import styles from './InfoTuple.module.scss'
import convertMinutesToHours from '../../../helpers/minToHour'

const InfoTuple = ({ placeInfoData }) => {
	const { infoTags, tripTimeInMin } = placeInfoData

	const listInfo = [
		...(tripTimeInMin !== undefined
			? [convertMinutesToHours(tripTimeInMin)]
			: []),
		...infoTags,
	]

	return (
		<ul className={styles.infoTuple}>
			{listInfo.map((item, i) => {
				return <li key={i}>{item}</li>
			})}
		</ul>
	)
}

export default InfoTuple
