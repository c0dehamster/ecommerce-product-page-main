import { writable, get } from "svelte/store"

import image1thumbnail from "../lib/images/image-product-1-thumbnail.jpg"

const createCartStore = () => {
	const { set, update, subscribe } = writable({
		cartItems: [
			{
				id: 0,
				name: "Fall Limited Edition Sneakers",
				price: 125,
				thumbnail: image1thumbnail,
				quantity: 3,
			}, // Test item
		],
	})

	const addToCart = purchase => {
		let itemPosition = cartItems.findIndex(item => item.id === purchase.id)

		if (itemPosition !== -1) {
			// Case 1: update an existing purchase
			update(store => {
				let cartItemsUpdated = cartItems.map(item => {
					if (item.id !== purchase.id) return item

					return {
						...item,
						quantity: item.quantity + purchase.quantity,
					}
				})

				return { ...store, cartItemsUpdated }
			})
		} else {
			// Case 2: add a new purchase
			update(store => ({
				...store,
				cartItems: [...store.cartItems, purchase],
			}))
		}
	}

	return {
		subscribe,
		addToCart,
	}
}

export const CartStore = createCartStore()
