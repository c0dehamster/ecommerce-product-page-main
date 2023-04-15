<script>
	import iconMenu from "../lib/images/icon-menu.svg"
	import iconClose from "../lib/images/icon-close.svg"
</script>

<nav class="nav">
	<button
		class="nav__toggle-button"
		style="--background-hamburger: url({iconMenu}); --background-close: url({iconClose});"
		aria-expanded="false">
		<span class="sr-only">Menu</span>
	</button>

	<ul class="nav__list nav__list--closed">
		<li class="nav__list-item">
			<a href="#0" class="link">Collections</a>
		</li>

		<li class="nav__list-item">
			<a href="#0" class="link">Men</a>
		</li>

		<li class="nav__list-item">
			<a href="#0" class="link">Women</a>
		</li>

		<li class="nav__list-item">
			<a href="#0" class="link">About</a>
		</li>

		<li class="nav__list-item">
			<a href="#0" class="link">Contact</a>
		</li>
	</ul>
</nav>

<style>
	.nav__toggle-button {
		display: none;
	}

	.nav__list {
		display: flex;

		list-style: none;
	}

	@media screen and (max-width: 40rem) {
		.nav__toggle-button {
			display: block;
			position: relative;
			z-index: 100;
			background-image: var(--background-hamburger);
			background-repeat: no-repeat;
			background-color: transparent;
		}

		.nav__list--closed {
			display: none;
		}
	}
</style>
