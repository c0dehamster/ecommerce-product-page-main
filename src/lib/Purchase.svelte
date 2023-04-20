<script>
	import iconDelete from "../lib/images/icon-delete.svg"

	export let purchase

	let priceFormatted = purchase.price.toFixed(2)

	$: total = (purchase.price * purchase.quantity).toFixed(2)
</script>

<div class="purchase" id={purchase.id}>
	<img src={purchase.thumbnail} alt="" class="purchase__thumbnail" />

	<div class="purchase__info">
		<p class="purchase__name">{purchase.name}</p>
		<p class="purchase__price">
			${priceFormatted} x 3 <span class="purchase__total">${total}</span>
		</p>
	</div>

	<button class="button-icon">
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
