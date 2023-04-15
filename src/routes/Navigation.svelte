<script>
	import iconMenu from "../lib/images/icon-menu.svg"
	import iconClose from "../lib/images/icon-close.svg"
</script>

<nav class="nav">
	<button class="button-icon button-icon--nav-toggle" aria-expanded="false">
		<span class="sr-only">Menu</span>
		<img src={iconMenu} alt="" class="icon" />
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
	.button-icon--nav-toggle {
		display: none;
	}

	.nav__list {
		display: flex;
		list-style: none;
	}

	@media screen and (max-width: 40rem) {
		.button-icon--nav-toggle {
			display: block;
			position: relative;
			z-index: 100;
		}

		.nav__list--closed {
			display: none;
		}
	}
</style>
