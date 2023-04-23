<script>
	import Gallery from "./Gallery.svelte"
	import Counter from "./Counter.svelte"
	import Carousel from "./Carousel.svelte"
	import ModalGallery from "./ModalGallery.svelte"

	import { product } from "./Data"
	import { CartStore } from "./Cart"

	let { id, name, price, description, images, thumbnails } = product

	let quantity = 0
	let dialog

	const showModal = () => dialog.showModal()
	const close = () => dialog.close()

	const onClick = () => {
		if (quantity === 0) return

		CartStore.addToCart({
			id,
			name,
			price: price.priceNew,
			thumbnail: thumbnails[0],
			quantity,
		})

		console.log($CartStore)
	}
</script>

<svelte:head>
	<title>Frontend Mentor | E-commerce product page</title>
</svelte:head>

<div class="carousel">
	<Carousel {images} />
</div>

<Gallery {images} {thumbnails} on:openLightbox={showModal} />

<!-- I couldn't use the carousel here due to a bug with it not resizing properly
whel initialized in an element with display: none -->

<dialog class="dialog" bind:this={dialog}>
	<div class="lightbox">
		<button class="button-icon" on:click={close}>
			<span class="sr-only">Close</span>
			<svg
				class="icon"
				width="14"
				height="15"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
					fill="#69707D"
					fill-rule="evenodd" /></svg>
		</button>

		<ModalGallery {images} {thumbnails} />
	</div>
</dialog>

<section class="product-card">
	<p class="manufacturer">Sneaker Company</p>
	<h1 class="heading">{name}</h1>
	<p class="description">
		{description}
	</p>

	<div class="price">
		<div class="price__relevant">
			<p class="price__new">${price.priceNew.toFixed(2)}</p>
			<p class="price__discount">{price.discount}%</p>
		</div>

		<p class="price__old"><s>${price.priceOld.toFixed(2)}</s></p>
	</div>

	<div class="controls">
		<div class="counter">
			<Counter on:counterChange={e => (quantity = e.detail)} />
		</div>

		<button class="button" on:click={onClick}>
			<svg
				class="icon"
				width="22"
				height="20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
					fill="#69707D"
					fill-rule="nonzero" /></svg>
			<span class="button__text">Add to cart</span>
		</button>
	</div>
</section>

<style>
	/* General */

	.product-card {
		max-width: 36rem; /* Arbitrary, to prevent weird look at intermediate screen */

		display: grid;
		row-gap: 1rem;

		padding: 1.5rem;
	}

	/* Lightbox */

	.dialog:modal {
		margin: auto;
		padding-inline: 2.5rem;
		display: grid;
		place-items: center;
		overflow: visible;

		border: none;

		background-color: transparent;
	}

	.dialog:modal::backdrop {
		background-color: rgb(0 0 0 / 0.75);
	}

	.lightbox {
		margin-inline: auto;
		max-width: 550px;

		display: grid;
	}

	.button-icon {
		justify-self: end;
		margin-block-end: 1.5rem;
	}

	/* Product info */

	.manufacturer {
		font-size: var(--font-size-300);
		text-transform: uppercase;
		letter-spacing: 1px;

		color: var(--color-primary-400);
	}

	.heading {
		font-size: var(--font-size-heading-responsive);
	}

	/* Price */

	.price,
	.price__relevant {
		display: flex;
		align-items: center;
	}

	.price {
		justify-content: space-between;
	}

	.price__relevant {
		gap: 1rem;

		font-weight: var(--font-weight-bold);
	}

	.price__new {
		color: var(--color-neutral-800);

		font-size: var(--font-size-600);
	}

	.price__discount {
		padding: 0.25rem 0.5rem;
		border-radius: 5px;

		background-color: var(--color-primary-200);
		color: var(--color-primary-400);
	}

	/* Controls */

	.controls {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1rem;
	}

	.button {
		gap: 1rem;
	}

	.icon path {
		fill: var(--color-neutral-100);
		transition: fill 100ms ease-in;
	}

	/* Active states */

	.icon:hover path,
	.icon:focus path {
		fill: var(--color-primary-400);
	}

	/* Media query */

	@media screen and (min-width: 40rem) {
		.carousel {
			display: none;
		}

		.price {
			flex-direction: column;
			justify-content: flex-start;
			align-items: start;
		}

		.controls {
			flex-direction: row;
		}

		/* I honestly don't know how to get these dimensions
		without magic numbering them */

		.counter {
			width: 9.625rem;
		}

		.button {
			flex: 1;
		}
	}
</style>
