const convertMinutesToHours = minutes => {
	const hours = Math.floor(minutes / 60)
	const remainingMinutes = minutes % 60
	const hoursStr = hours > 0 ? `${hours}h` : ''
	const minutesStr = remainingMinutes > 0 ? `${remainingMinutes}m` : ''
	return `${hoursStr} ${minutesStr}`.trim()
}

export default convertMinutesToHours
