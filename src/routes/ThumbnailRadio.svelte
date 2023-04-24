<script>
	import { CarouselStore } from "./Carousel"

	export let value
	export let image
	export let groupName
	export let group

	let id = `${groupName}${value}`
</script>

<label
	for={id}
	class="thumbnail {$CarouselStore.currentSlide === value
		? 'thumbnail--active'
		: ''}">
	<img src={image} alt="" class="thumbnail__image" />
	<input {id} {value} type="radio" class="thumbnail__radio" bind:group />
</label>

<style>
	.thumbnail {
		position: relative;
		aspect-ratio: 1;
		border: none;
		border-radius: 0.5rem;
	}

	.thumbnail::before,
	.thumbnail::after {
		content: "";
		position: absolute;
		inset: 0;

		border-radius: 0.5rem;
	}

	.thumbnail::before {
		z-index: -1;

		background-color: var(--color-primary-400);
		transition: scale 100ms linear;
	}

	.thumbnail::after {
		transition: background-color 100ms ease-in;
	}

	.thumbnail__image {
		border-radius: 0.5rem;
	}

	.thumbnail__radio {
		display: none;
	}

	/* Active states */

	.thumbnail--active::before {
		scale: 1.05;
	}

	.thumbnail:hover::after,
	.thumbnail:focus::after {
		background-color: rgb(255 255 255 / 0.25);
	}

	.thumbnail.thumbnail--active::after {
		background-color: rgb(255 255 255 / 0.5);
	}
</style>
