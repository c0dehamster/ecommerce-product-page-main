<script>
	import "./style.css"

	import Navigation from "./Navigation.svelte"
	import Cart from "./Cart.svelte"

	import logo from "../lib/images/logo.svg"
	import avatar from "../lib/images/image-avatar.png"
</script>

<div class="app">
	<header class="header">
		<div class="header__align-left">
			<img src={logo} alt="sneakers" class="logo" />
			<Navigation />
		</div>

		<div class="header__align-right">
			<Cart />

			<button class="button button--profile" aria-label="My profile">
				<img src={avatar} alt="" class="avatar" />
			</button>
		</div>
	</header>

	<main class="wrapper">
		<slot />
	</main>
</div>
