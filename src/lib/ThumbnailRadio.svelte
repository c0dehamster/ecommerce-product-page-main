<script>
	export let id
	export let thumbnailImage
	export let group
</script>

<label for={id} class="thumbnail">
	<img src={thumbnailImage} alt="" class="thumbnail__image" />
	<input {id} value={id} type="radio" class="thumbnail__radio" bind:group />
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

	.thumbnail:focus::before {
		scale: 1.05;
	}

	.thumbnail:hover::after,
	.thumbnail:focus::after {
		background-color: rgb(255 255 255 / 0.25);
	}

	.thumbnail:checked::after {
		background-color: rgb(255 255 255 / 0.5);
	}
</style>
