import styles from './SliderButtons.module.scss'

const SliderButtons = ({ classes }) => {
	return (
		<div className={styles.sliderButtons}>
			<button className={classes[1]}>
				<img
					style={{ transform: 'rotate(180deg)' }}
					src='./images/svg/arrow.svg'
					alt=''
				/>
			</button>
			<button className={classes[0]}>
				<img src='./images/svg/arrow.svg' alt='' />
			</button>
		</div>
	)
}

export default SliderButtons
