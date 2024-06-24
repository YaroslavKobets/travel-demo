import { useEffect, useState } from 'react'

import './App.scss'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Highlights from './components/Highlights/Highlights'
import TripInfo from './components/TripInfo/TripInfo'
import TripPlan from './components/TripPlan/TripPlan'
import plans from './utils/plans.json'
import BarLoader from './components/BarLoader/BarLoader'
import { loader, animatePage, scrollBlur } from './helpers/animation'

function App() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const dataFetch = () => {
			const body = document.querySelector('body')
			body.classList.add('no-scroll')
			animatePage()
			loader()

			setTimeout(() => {
				setIsLoading(false)
				body.classList.remove('no-scroll')
				scrollBlur()
			}, 5000)
		}
		dataFetch()
	}, [])

	return (
		<>
			{isLoading && <BarLoader />}
			<div className='container'>
				<Header />
				<Gallery />
				<TripInfo />
				<Highlights />
				<div className='trip-overlay'>
					{plans.map(plan => {
						return <TripPlan dataPlan={plan} key={plan.plan} />
					})}
				</div>
			</div>
		</>
	)
}

export default App
