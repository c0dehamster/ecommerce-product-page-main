import { writable } from "svelte/store"

const createCaroselStore = () => {
	const { set, update, subscribe } = writable({
		currentSlide: 0,
	})

	const increment = () => {
		update(store => {
			let nextSlide

			store.currentSlide < 3
				? (nextSlide = store.currentSlide + 1)
				: (nextSlide = 0)
			return {
				...store,
				currentSlide: nextSlide,
			}
		})
	}

	const decrement = () => {
		update(store => {
			let nextSlide

			store.currentSlide > 0
				? (nextSlide = store.currentSlide - 1)
				: (nextSlide = 3)
			return {
				...store,
				currentSlide: nextSlide,
			}
		})
	}

	return {
		subscribe,
		set,
		increment,
		decrement,
	}
}

export const CarouselStore = createCaroselStore()
