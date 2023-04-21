<script>
	import Purchase from "../lib/Purchase.svelte"
	import { CartStore } from "./Cart.js"

	let expanded = false
	let itemsInCart = 3

	const onClick = () => {
		expanded = !expanded
	}

	const onDelete = e => {
		CartStore.removeFromCart(e.detail)
		console.log($CartStore)
	}

	$: cartClass = `cart ${!expanded ? "" : "cart--expanded"}`
</script>

<button
	class="button-icon"
	style="--items-in-cart: {itemsInCart}"
	aria-expanded={expanded}
	aria-controls="cart"
	on:click={onClick}>
	<span class="items-in-cart">
		{itemsInCart}
	</span>

	<span class="sr-only">Cart</span>
	<svg class="icon" width="22" height="20" xmlns="http://www.w3.org/2000/svg"
		><path
			d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
			fill="#69707D"
			fill-rule="nonzero" /></svg>
</button>

<section class={cartClass} id="cart">
	<div class="cart__header">
		<h2 class="heading">Cart</h2>
	</div>

	{#if $CartStore.cartItems.length > 0}
		<ul class="cart__contents">
			{#each $CartStore.cartItems as purchase}
				<li class="cart__item">
					<Purchase {purchase} on:delete={onDelete} />
				</li>
			{/each}

			<button class="button">Checkout</button>
		</ul>
	{/if}
</section>

<style>
	.cart {
		display: none;
	}

	.button-icon {
		position: relative;
		width: 1.5rem;
		aspect-ratio: 1;
	}

	.items-in-cart {
		position: absolute;
		height: 14px;
		width: 20px;
		border-radius: 7px;
		top: -4px;
		right: -5px;

		background-color: var(--color-primary-400);
		color: var(--color-neutral-100);

		font-size: var(--font-size-200);
		font-weight: var(--font-weight-bold);
	}

	.cart__header,
	.cart__contents {
		padding-inline: 1.5rem;
	}

	.cart__header {
		padding-block: 1rem;

		display: grid;
		align-items: center;

		border-bottom: 1px solid var(--color-neutral-200);
	}

	.cart__contents {
		padding-block-start: 1.5rem;
		padding-block-end: 2rem;

		display: grid;
		align-items: start;
		gap: 1.5rem;

		list-style: none;
	}

	.heading {
		font-size: var(--font-size-400);
	}

	.button {
		align-self: end;
	}

	/* Active states */

	.icon:hover path,
	.icon:focus path {
		fill: var(--color-neutral-800);
	}

	.cart--expanded {
		position: absolute;
		top: 4.75rem;
		right: 0.5rem;
		z-index: 200;

		/* Stretch to full screen with 0.5rem of space left */
		width: min(100% - 1rem, 22.5rem);
		min-height: 16rem;
		border-radius: 0.625rem;

		display: grid;

		background-color: var(--color-neutral-100);

		box-shadow: 0 0.5rem 1.5rem 0 rgb(0 0 0 / 0.25);
	}

	/* Media query */

	@media screen and (min-width: 50rem) {
		.cart--expanded {
			top: 6rem;
			right: 5.5rem; /* Needs a better solution */
		}
	}
</style>
