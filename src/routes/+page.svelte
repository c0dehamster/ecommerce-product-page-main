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
	.gallery {
		/* Will be changed with media query */
		display: none;
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
