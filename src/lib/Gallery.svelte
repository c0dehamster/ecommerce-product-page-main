<script>
	import { createEventDispatcher } from "svelte"

	import ThumbnailButton from "./ThumbnailButton.svelte"

	export let images
	export let thumbnails = []

	const dispatch = createEventDispatcher()

	const showModal = () => {
		dispatch("showModal")
	}
</script>

<div class="gallery">
	<button class="lightbox" on:click={showModal}>
		<img src={images[0]} alt="" class="lightbox__image" />
	</button>

	<div class="thumbnails">
		{#if thumbnails.length > 0}
			{#each thumbnails as thumbnailImage}
				<ThumbnailButton {thumbnailImage} />
			{/each}
		{/if}
	</div>
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
	}

	/* Active states */

	.lightbox:focus {
		outline: 2px solid var(--color-primary-400);
	}

	@media screen and (min-width: 40rem) {
		.gallery {
			display: grid;
			gap: 2rem;

			padding: 7.5%;
			/* Additional layout for intermediate screen sizes */

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
