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
	.nav {
		height: 100%;
	}

	.button-icon--nav-toggle {
		display: none;
	}

	.nav__list {
		height: 100%;
		display: flex;

		list-style: none;
		gap: clamp(1rem, 2.5vw, 2rem);
	}

	.nav__list-item {
		display: flex;
		align-items: center;
		position: relative;
		height: 100%;
	}

	.link::before {
		content: "";
		position: absolute;
		left: 50%;
		right: 50%;
		bottom: 0;
		border-bottom: 0.25rem solid var(--color-primary-400);
		transition: 200ms ease-in;
	}

	/* Active states */

	.link:hover::before,
	.link:focus::before,
	.link:active::before {
		left: 0;
		right: 0;
	}

	@media screen and (max-width: 50rem) {
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
