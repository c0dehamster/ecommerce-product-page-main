<script>
	import { createEventDispatcher } from "svelte"

	import ThumbnailRadio from "./ThumbnailRadio.svelte"
	import { CarouselStore } from "./Carousel"

	const dispatch = createEventDispatcher()

	export let images
	export let thumbnails = []

	const openLightbox = () => dispatch("openLightbox")

	let currentImage = 0

	$: {
		CarouselStore.set({ currentSlide: currentImage })
	}
</script>

<div class="gallery">
	<button class="lightbox" on:click={openLightbox}>
		<span class="sr-only">Open lightbox</span>
		<img
			src={images[$CarouselStore.currentSlide]}
			alt=""
			class="lightbox__image" />
	</button>

	<fieldset class="thumbnails">
		{#if thumbnails.length > 0}
			{#each thumbnails as thumbnail}
				<ThumbnailRadio
					value={thumbnail.id}
					image={thumbnail.url}
					groupName="currentImage"
					bind:group={currentImage} />
			{/each}
		{/if}
	</fieldset>
</div>

<style>
	.gallery {
		/* Will be changed with media query */
		display: none;
	}

	.lightbox {
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

	.thumbnails {
		display: grid;
		gap: 2rem;
		grid-area: thumbnails;

		border: none;
	}

	/* Active states */

	.lightbox:focus {
		outline: 2px solid var(--color-primary-400);
	}

	/* Additional layout for intermediate screen sizes */

	@media screen and (min-width: 40rem) {
		.gallery {
			display: grid;
			gap: 2rem;

			padding: 7.5%;

			grid-template-areas:
				"lightbox lightbox lightbox lightbox thumbnails"
				"lightbox lightbox lightbox lightbox thumbnails"
				"lightbox lightbox lightbox lightbox thumbnails"
				"lightbox lightbox lightbox lightbox thumbnails";
		}
	}

	@media screen and (min-width: 60rem) {
		.gallery {
			grid-template-areas:
				"lightbox lightbox lightbox lightbox"
				"lightbox lightbox lightbox lightbox"
				"lightbox lightbox lightbox lightbox"
				"lightbox lightbox lightbox lightbox"
				"thumbnails thumbnails thumbnails thumbnails";
			padding: 0;
		}

		.thumbnails {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
