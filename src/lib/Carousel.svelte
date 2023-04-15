<script>
	import emblaCarouselSvelte from "embla-carousel-svelte"

	import image1 from "./images/image-product-1.jpg"
	import image2 from "./images/image-product-2.jpg"
	import image3 from "./images/image-product-3.jpg"
	import image4 from "./images/image-product-4.jpg"
	import image1thumbnail from "./images/image-product-1-thumbnail.jpg"
	import image2thumbnail from "./images/image-product-2-thumbnail.jpg"
	import image3thumbnail from "./images/image-product-3-thumbnail.jpg"
	import image4thumbnail from "./images/image-product-4-thumbnail.jpg"

	export let currentSlide = 1

	let emblaApi

	const emblaConfig = {
		options: { loop: true },
	}

	const onInit = e => {
		emblaApi = e.detail
	}
</script>

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

<style>
	.embla {
		overflow: hidden;
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
</style>
