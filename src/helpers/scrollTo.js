import { notBlur } from './animation'

const scrollToElement = elementId => {
	const element = document.querySelector(elementId)

	if (element) {
		window.scrollTo({
			behavior: 'smooth',
			top: element.offsetTop,
		})
	}
	notBlur()
}

export default scrollToElement
