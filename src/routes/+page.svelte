<script>
	import Gallery from "../lib/Gallery.svelte"
	import Counter from "../lib/Counter.svelte"
	import Carousel from "../lib/Carousel.svelte"

	import iconCart from "../lib/images/icon-cart.svg"
</script>

<svelte:head>
	<title>Frontend Mentor | E-commerce product page</title>
</svelte:head>

<div class="carousel">
	<Carousel />
</div>

<div class="gallery">
	<Gallery />
</div>

<section class="product-card">
	<p class="manufacturer">Sneaker Company</p>
	<h1 class="heading">Fall Limited Edition Sneakers</h1>
	<p class="description">
		These low-profile sneakers are your perfect casual wear companion.
		Featuring a durable rubber outer sole, they’ll withstand everything the
		weather can offer.
	</p>

	<div class="price">
		<div class="price__relevant">
			<p class="price__new">$125.00</p>
			<p class="price__discount">50%</p>
		</div>

		<p class="price__old"><s>$250.00</s></p>
	</div>

	<Counter />

	<button class="button">
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
</section>

<style>
	/* General */

	.gallery {
		/* Will be changed with media query */
		display: none;
	}

	.product-card {
		display: grid;
		row-gap: 1rem;

		padding: 1.5rem;
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

	.button {
		gap: 1rem;
	}

	.icon path {
		fill: var(--color-neutral-100);
	}

	@media (min-width: 40rem) {
		.carousel {
			display: none;
		}

		.gallery {
			display: block;
			padding-inline: 7.5%;
		}
	}

	@media screen and (min-width: 60rem) {
		.gallery {
			padding: none;
		}
	}
</style>
