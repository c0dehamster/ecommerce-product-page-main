<script>
	import "./style.css"

	import Navigation from "./Navigation.svelte"
	import Cart from "./Cart.svelte"

	import logo from "../lib/images/logo.svg"
	import avatar from "../lib/images/image-avatar.png"
</script>

<div class="app">
	<header class="header">
		<a href="#main" class="skip-link sr-only">Skip to content</a>
		<div class="header__align-left">
			<Navigation />
			<img src={logo} alt="sneakers" class="logo" />
		</div>

		<div class="header__align-right">
			<Cart />

			<button class="button button--profile" aria-label="My profile">
				<img src={avatar} alt="" class="avatar" />
			</button>
		</div>
	</header>

	<main class="wrapper" id="main">
		<slot />
	</main>

	<Lightbox />
</div>

<style>
	.app,
	.wrapper {
		display: grid;
		height: fit-content;
		justify-items: center;
	}

	.header,
	.header__align-left,
	.header__align-right {
		display: flex;
		align-items: center;
	}

	.header__align-left,
	.header__align-right {
		gap: 1rem;
		height: 100%;
	}

	.header {
		width: 100%;
		height: 4.25rem;

		padding-inline: 1.5rem;
		justify-content: space-between;

		border-bottom: 1px solid var(--color-neutral-200);
	}

	.button--profile {
		width: 1.5rem;
		height: fit-content;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: transparent;
	}

	/* A way to achieve animated border effect */

	.button--profile::before {
		inset: 1px; /* To prevent the edge from sticking out */
		z-index: -1;
		border-radius: 50%;
		transition: 100ms linear;

		background-color: var(--color-primary-400);
	}

	/* Active states */

	.button--profile:hover::before,
	.button--profile:focus::before {
		transform: scale(1.1);
	}

	/* Media query */

	@media screen and (min-width: 50rem) {
		.wrapper {
			padding-block: 5.75rem;
		}

		.header {
			height: 7rem;
		}

		.header__align-left {
			flex-direction: row-reverse;
			gap: 3.5rem;
		}

		.header__align-right {
			gap: 2.5rem;
		}
	}

	@media screen and (min-width: 60rem) {
		.wrapper {
			max-width: 70rem;

			grid-template-columns: 1fr 1fr;
			column-gap: 8rem;
			align-items: center;

			padding-inline: 3rem;
		}

		.button--profile {
			width: 3.5rem;
		}
	}
</style>
