import { writable, get } from "svelte/store"

const createCartStore = () => {
	const { set, update, subscribe } = writable({
		cartItems: [],
	})

	const addToCart = purchase => {
		update(store => {
			let itemIndex = store.cartItems.findIndex(
				item => item.id === purchase.id
			)

			if (itemIndex === -1) {
				// Case 1: add a new purchase

				return {
					...store,
					cartItems: [purchase, ...store.cartItems],
				}
			} else {
				// Case 2: update an existing purchase

				let cartItemsUpdated = store.cartItems.map(item => {
					if (item.id !== purchase.id) return item

					return {
						...item,
						quantity: item.quantity + purchase.quantity,
					}
				})

				return {
					...store,
					cartItems: cartItemsUpdated,
				}
			}
		})
	}

	const removeFromCart = id => {
		update(store => {
			let cartItemsUpdated = store.cartItems.filter(
				item => item.id !== id
			)

			return { ...store, cartItems: cartItemsUpdated }
		})
	}

	return {
		subscribe,
		addToCart,
		removeFromCart,
	}
}

export const CartStore = createCartStore()
