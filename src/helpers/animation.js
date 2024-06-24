import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const loader = () => {
	gsap.to('.bar-loader__text', 1, {
		delay: 2,
		opacity: 0,
	})
	gsap.to('.bar-loader__bar', 1.5, {
		delay: 3,
		height: 0,
		stagger: {
			amount: 0.5,
		},
		ease: 'power4.inOut',
	})
}

export const animatePage = () => {
	const tl = gsap.timeline({
		defaults: {
			ease: 'power4.inOut',
		},
	})
	tl.delay(4.5)
	tl.fromTo(
		'.header > *',
		{
			y: -100,
			opacity: 0,
		},
		{ y: 0, opacity: 1 },
		0.5
	)
		.to('.gallery__item', 3, {
			opacity: 1,
			stagger: {
				amount: 1,
			},
		})
		.to(
			'.gallery__show-btn',
			{
				scale: 1,
			},
			3
		)
		.fromTo(
			'.trip-info',
			{
				y: 50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
			},
			2.5
		)
		.fromTo(
			'.highlights__title',
			{
				x: -100,
				opacity: 0,
			},
			{ opacity: 1, x: 0 },
			2.5
		)
		.fromTo('.highlights__controls-btn', { scale: 0 }, { scale: 1 }, 4)
		.fromTo(
			'.comment__author > *',
			{
				y: 20,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				stagger: {
					amount: 0.5,
				},
			},
			4
		)
		.fromTo('.comment__text', { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 3.5)
		.fromTo(
			'.trip-plan',
			{ y: 100, opacity: 0 },
			{ y: 0, opacity: 1, duration: 2 },
			5
		)
}
const blurEnd = { filter: 'blur(0px)' }

export const notBlur = () => {
	gsap.to('.trip-plan', blurEnd)
}

export const scrollBlur = () => {
	gsap.to('.trip-overlay', {
		scrollTrigger: {
			trigger: '.trip-overlay',
			start: 'top center',
		},
		...blurEnd,
	})
}
