<script>
	import iconDelete from "../lib/images/icon-delete.svg"

	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	export let purchase

	let priceFormatted = purchase.price.toFixed(2)

	$: total = (purchase.price * purchase.quantity).toFixed(2)

	const onDelete = e => dispatch("delete", purchase.id)
</script>

<div class="purchase" id={purchase.id}>
	<img src={purchase.thumbnail} alt="" class="purchase__thumbnail" />

	<div class="purchase__info">
		<p class="purchase__name">{purchase.name}</p>
		<p class="purchase__price">
			${priceFormatted} x {purchase.quantity}
			<span class="purchase__total">${total}</span>
		</p>
	</div>

	<button class="button-icon" on:click={onDelete}>
		<img src={iconDelete} alt="" class="icon" />
		<span class="sr-only">Remove</span>
	</button>
</div>

<style>
	.purchase {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.purchase__thumbnail {
		height: 3.125rem;

		border-radius: 0.25rem;
	}

	.purchase__total {
		font-weight: var(--font-weight-bold);
	}
</style>
