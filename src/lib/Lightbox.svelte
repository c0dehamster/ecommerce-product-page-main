<script>
	import Carousel from "./Carousel.svelte"
	import ThumbnailRadio from "./ThumbnailRadio.svelte"

	export let images = []
	export let thumbnails = []
	export let open = false

	let currentSlide = 0

	const close = () => (open = false)

	$: modalClass = `modal ${open ? "modal--open" : ""}`
</script>

<!-- Carousel seems to bug out inside a dialog element -->

<div
	class={modalClass}
	on:click={close}
	on:keydown={e => {
		if (e.key === "Escape") close
	}}>
	<div class="wrapper">
		<button class="button-icon" on:click={close}>
			<span class="sr-only">Close</span>
			<svg
				class="icon"
				width="14"
				height="15"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
					fill="#69707D"
					fill-rule="evenodd" /></svg>
		</button>

		<Carousel {images} {currentSlide} />

		<fieldset class="modal__thumbnails">
			{#if thumbnails.length > 0}
				{#each thumbnails as thumbnail}
					<ThumbnailRadio
						id={thumbnail.id}
						image={thumbnail.url}
						bind:group={currentSlide} />
				{/each}
			{/if}
		</fieldset>
	</div>
</div>

<style>
	.modal {
		display: none;
	}

	.modal--open {
		position: fixed;
		inset: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: rgb(0 0 0 / 0.5);
	}

	.wrapper {
		border: none;
		overflow: visible;

		background: transparent;
		max-width: 550px;

		display: grid;
	}

	.button-icon {
		justify-self: end;
		margin-block-end: 1.5rem;
	}

	.icon path {
		fill: var(--color-neutral-100);
	}

	.modal__thumbnails {
		width: 61vh; /* Equal to the width of the carousel */
		max-width: 28rem;

		margin-block-start: 2.5rem;
		justify-self: center;

		display: flex;
		justify-content: center;
		gap: 2rem;

		border: none;
	}
</style>
