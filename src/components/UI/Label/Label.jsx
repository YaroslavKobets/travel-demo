import React from 'react'
import styles from './Label.module.scss'

const Label = ({ labelText, customClass, bgGlass }) => {
	return (
		<div
			className={`${styles.label} ${customClass} ${bgGlass && styles.glass}`}
		>
			{labelText}
		</div>
	)
}

export default Label
