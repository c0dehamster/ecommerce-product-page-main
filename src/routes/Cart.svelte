<script>
	import iconCart from "../lib/images/icon-cart.svg"

	import Purchase from "../lib/Purchase.svelte"

	let expanded = false

	const onClick = () => {
		expanded = !expanded
	}

	$: cartClass = `cart ${!expanded ? "" : "cart--expanded"}`
</script>

<!-- A whole bunch of random nonsense -->

<button
	class="button-icon"
	aria-expanded={expanded}
	aria-controls="cart"
	on:click={onClick}>
	<span class="sr-only">Cart</span>
	<img src={iconCart} alt="" class="icon" />
</button>

<section class={cartClass} id="cart">
	<div class="cart__header">
		<h2 class="heading">Cart</h2>
	</div>

	<ul class="cart__contents">
		<li class="cart__item">
			<Purchase />
		</li>

		<button class="button">Checkout</button>
	</ul>
</section>

<style>
	.cart {
		display: none;
	}

	.cart__header,
	.cart__contents {
		padding-inline: 1.5rem;
	}

	.cart__header {
		padding-block: 1rem;

		display: grid;
		align-items: center;

		border-bottom: 2px solid var(--color-neutral-200);
	}

	.cart__contents {
		padding-block-start: 1.5rem;
		padding-block-end: 2rem;

		display: grid;
		align-items: start;

		list-style: none;
	}

	.heading {
		font-size: var(--font-size-400);
	}

	.button {
		align-self: end;
	}

	/* Active states */

	.cart--expanded {
		position: absolute;
		bottom: -0.5rem;
		right: 0.5rem;
		transform: translateY(100%);
		z-index: 20;

		/* Stretch to full screen with 0.5rem of space left */
		width: min(100% - 1rem, 22.5rem);
		min-height: 16rem;
		border-radius: 0.625rem;

		display: grid;

		background-color: var(--color-neutral-100);

		box-shadow: 0 0.5rem 1.5rem 0 rgb(0 0 0 / 0.25);
	}
</style>
