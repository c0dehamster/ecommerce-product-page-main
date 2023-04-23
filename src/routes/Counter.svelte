<script>
	import { spring } from "svelte/motion"
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	let count = 0

	const increment = () => (count += 1)

	const decrement = () => {
		if (count > 0) count -= 1
	}

	$: {
		dispatch("counterChange", count)
	}
</script>

<div class="counter">
	<button class="button-icon" on:click={decrement}>
		<span class="sr-only">Add</span>
		<svg
			class="counter__icon"
			width="12"
			height="4"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			><defs
				><path
					d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
					id="a" /></defs
			><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" /></svg>
	</button>

	<p class="value">{count}</p>

	<button class="button-icon" on:click={increment}>
		<span class="sr-only">remove</span>
		<svg
			class="counter__icon"
			width="12"
			height="12"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			><defs
				><path
					d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
					id="b" /></defs
			><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" /></svg>
	</button>
</div>

<style>
	.counter {
		height: 3.5rem;
		border-radius: 0.625rem;

		display: flex;
		justify-content: space-between;
		align-items: center;

		background-color: var(--color-neutral-200);
	}

	.value {
		color: var(--color-neutral-800);
		font-weight: var(--font-weight-bold);
	}

	.button-icon {
		position: relative;

		height: 100%;
		border-radius: 0.625rem;

		padding-inline: 1.5rem;
	}

	.counter__icon use {
		transition: 150ms ease-in-out;
	}

	/* Active states in the design are barely visible.
	It would have been better to add a shade to the buttons themselves */

	.counter__icon:hover use {
		fill: hsl(26 100% 55% / 0.75);
	}
</style>
