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
</div>

<style>
	.app,
	.wrapper {
		display: grid;
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
	}

	.header {
		padding-block: 1rem;
		padding-inline: 1.5rem;
		justify-content: space-between;
	}

	.skip-link {
		position: absolute; /* Will be hidden later */
	}

	.button--profile {
		width: 1.5rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: transparent;
	}

	@media screen and (min-width: 40rem) {
		.header__align-left {
			flex-direction: row-reverse;
		}
	}
</style>
