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
		<img src={iconCart} alt="" class="icon" />
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

	@media (min-width: 40rem) {
		.carousel {
			display: none;
		}

		.gallery {
			display: block;
		}
	}
</style>
