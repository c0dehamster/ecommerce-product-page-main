<script>
	import iconMinus from "./images/icon-minus.svg"
	import iconPlus from "./images/icon-plus.svg"
</script>

<div class="counter">
	<button class="counter__button">
		<img src={iconMinus} alt="remove" class="counter__icon" />
	</button>

	<p class="value">0</p>

	<button class="counter__button">
		<img src={iconPlus} alt="add" class="counter__icon" />
	</button>
</div>
