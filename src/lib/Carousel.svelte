<script>
	import emblaCarouselSvelte from "embla-carousel-svelte"

	import image1 from "./images/image-product-1.jpg"
	import image2 from "./images/image-product-2.jpg"
	import image3 from "./images/image-product-3.jpg"
	import image4 from "./images/image-product-4.jpg"

	export let currentSlide = 1

	let emblaApi

	const emblaConfig = {
		options: { loop: true },
	}

	const onInit = e => {
		emblaApi = e.detail
	}
</script>

<div class="carousel">
	<button class="button button--previous">
		<svg
			class="icon"
			width="12"
			height="18"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M11 1 3 9l8 8"
				stroke="#1D2026"
				stroke-width="3"
				fill="none"
				fill-rule="evenodd" /></svg>
	</button>

	<button class="button button--next">
		<svg
			class="icon"
			width="13"
			height="18"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="m2 1 8 8-8 8"
				stroke="#1D2026"
				stroke-width="3"
				fill="none"
				fill-rule="evenodd" /></svg>
	</button>

	<div class="embla" use:emblaCarouselSvelte={emblaConfig} on:init={onInit}>
		<div class="embla__container">
			<div class="embla__slide">
				<img src={image1} alt="" class="image" />
			</div>

			<div class="embla__slide">
				<img src={image2} alt="" class="image" />
			</div>

			<div class="embla__slide">
				<img src={image3} alt="" class="image" />
			</div>

			<div class="embla__slide">
				<img src={image4} alt="" class="image" />
			</div>
		</div>
	</div>
</div>

<style>
	.carousel {
		position: relative;
	}

	.embla {
		overflow: hidden;
		position: relative;
	}

	.button {
		padding: 1rem;
		aspect-ratio: 1;
		border-radius: 50%;

		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 100;

		background-color: var(--color-neutral-100);
	}

	.icon path {
		transition: 150ms ease-in;
	}

	.button--previous {
		left: 1rem;
	}

	.button--next {
		right: 1rem;
	}

	.embla__container {
		display: flex;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}

	.image {
		aspect-ratio: 1.25;
		object-fit: cover;
		object-position: center;
	}

	/* Active states */

	.button:hover .icon path,
	.button:focus .icon path {
		stroke: var(--color-primary-400);
	}

	.button::before {
		display: none;
	}

	@media screen and (min-width: 40rem) {
		.image {
			aspect-ratio: 1;
			border-radius: 1rem;
		}

		.button--previous {
			left: 0;
			transform: translate(-50%, -50%);
		}

		.button--next {
			right: 0;
			transform: translate(50%, -50%);
		}
	}
</style>
