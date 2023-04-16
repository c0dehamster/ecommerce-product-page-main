<script>
	import image1thumbnail from "../lib/images/image-product-1-thumbnail.jpg"
	import iconDelete from "../lib/images/icon-delete.svg"
</script>

<div class="purchase">
	<img src={image1thumbnail} alt="" class="purchase__thumbnail" />

	<div class="purchase__info">
		<p class="purchase__name">Fall Limited Edition Sneakers</p>
		<p class="purchase__price">
			$125.00 x 3 <span class="purchase__total">$375.00</span>
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
