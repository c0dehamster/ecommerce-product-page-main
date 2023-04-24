<script>
	import ThumbnailRadio from "./ThumbnailRadio.svelte"
	import { CarouselStore } from "./Carousel"

	export let images
	export let thumbnails = []

	let currentImageLightbox = 0

	const scrollNext = CarouselStore.increment
	const scrollPrev = CarouselStore.decrement

	$: {
		console.log(currentImageLightbox)
		CarouselStore.set({ currentSlide: currentImageLightbox })
	}
</script>

<div class="gallery">
	<div class="lightbox">
		<img
			src={images[$CarouselStore.currentSlide]}
			alt=""
			class="lightbox__image" />
		<button class="button button--previous" on:click={scrollPrev}>
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

		<button class="button button--next" on:click={scrollNext}>
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
	</div>

	<fieldset class="thumbnails">
		{#if thumbnails.length > 0}
			{#each thumbnails as thumbnail}
				<ThumbnailRadio
					id={thumbnail.id}
					image={thumbnail.url}
					bind:group={currentImageLightbox} />
			{/each}
		{/if}
	</fieldset>
</div>

<style>
	.gallery {
		max-width: 62vh;
		display: grid;
		justify-items: center;
		gap: 2rem;

		grid-template-areas:
			"lightbox lightbox lightbox lightbox"
			"lightbox lightbox lightbox lightbox"
			"lightbox lightbox lightbox lightbox"
			"lightbox lightbox lightbox lightbox"
			"thumbnails thumbnails thumbnails thumbnails";
	}

	.lightbox {
		position: relative;

		grid-column: span 4;
		grid-area: lightbox;

		border-radius: 1rem;

		cursor: pointer;

		background: transparent;
		border: none;
	}

	.lightbox__image {
		border-radius: 1rem;
	}

	.button {
		padding: 1rem;
		aspect-ratio: 1;
		border-radius: 50%;

		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;

		background-color: var(--color-neutral-100);
	}

	.icon path {
		transition: 150ms ease-in;
	}

	.button--previous {
		left: 0;
		transform: translate(-50%, -50%);
	}

	.button--next {
		right: 0;
		transform: translate(50%, -50%);
	}

	.thumbnails {
		max-width: 28rem;

		display: grid;
		gap: 2rem;
		grid-area: thumbnails;

		grid-template-columns: repeat(4, 1fr);

		border: none;
	}

	/* Active states */

	.button:hover .icon path,
	.button:focus .icon path {
		stroke: var(--color-primary-400);
	}

	.button::before {
		display: none;
	}
</style>
