<script>
	import ThumbnailRadio from "./ThumbnailRadio.svelte"
	import { currentSlide } from "./Carousel"

	export let images
	export let thumbnails = []

	let currentImage = 0

	$: {
		currentSlide.set(currentImage)
	}
</script>

<div class="gallery">
	<div class="lightbox">
		<img src={images[$currentSlide]} alt="" class="lightbox__image" />
	</div>

	<fieldset class="thumbnails">
		{#if thumbnails.length > 0}
			{#each thumbnails as thumbnail}
				<ThumbnailRadio
					id={thumbnail.id}
					image={thumbnail.url}
					bind:group={currentImage} />
			{/each}
		{/if}
	</fieldset>
</div>

<style>
	.gallery {
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
		max-width: 28rem;

		display: grid;
		gap: 2rem;
		grid-area: thumbnails;

		grid-template-columns: repeat(4, 1fr);

		border: none;
	}

	/* Active states */

	.lightbox:focus {
		outline: 2px solid var(--color-primary-400);
	}
</style>
