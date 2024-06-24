import React from 'react'
import './Gallery.scss'
import Fancybox from '../Fancybox/Fancybox'

import gallery from '../../utils/gallery.json'

const Gallery = () => {
	const openGallery = () => {
		const firstGalleryItem = document.querySelector('[data-fancybox="gallery"]')
		if (firstGalleryItem) {
			firstGalleryItem.click()
		}
	}

	return (
		<Fancybox
			options={{
				Carousel: {
					infinite: false,
				},
			}}
		>
			{gallery.map(picture => {
				return (
					<a
						key={picture.id}
						href={picture.image}
						data-fancybox='gallery'
						className={`gallery__item ${
							picture === gallery[0] && 'gallery__item--main'
						}`}
					>
						<img src={picture.image} alt={picture.alt} />
					</a>
				)
			})}
			<div className='gallery__show-btn button' onClick={openGallery}>
				<img src='./src/assets/images/svg/more-squares.svg' alt='icon' />
				All photos
			</div>
		</Fancybox>
	)
}

export default Gallery
