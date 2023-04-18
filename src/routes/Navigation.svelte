<script>
	import iconMenu from "../lib/images/icon-menu.svg"
	import iconClose from "../lib/images/icon-close.svg"

	let expanded = false

	const onClick = () => {
		expanded = !expanded
	}

	$: navListClass = `nav__list ${!expanded ? "" : "nav__list--expanded"}`
	$: backdropClass = `backdrop ${!expanded ? "" : "backdrop--expanded"}`
	$: icon = !expanded ? iconMenu : iconClose
</script>

<nav class="nav">
	<button
		class="button-icon button-icon--nav-toggle"
		aria-controls="navigation"
		aria-expanded={expanded}
		on:click={onClick}>
		<span class="sr-only">Menu</span>
		<img src={icon} alt="" class="icon" />
	</button>

	<div
		class={backdropClass}
		on:click={() => (expanded = false)}
		aria-hidden="true" />

	<ul class={navListClass} id="navigation">
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
	.nav,
	.nav__list,
	.nav__list-item {
		display: flex;
	}

	.nav {
		height: 100%;

		align-items: center;
	}

	.backdrop {
		position: absolute;
		transition: background-color 200ms ease-in;
	}

	.button-icon--nav-toggle {
		display: none;
	}

	.nav__list {
		height: 100%;

		list-style: none;
		gap: clamp(1rem, 2.5vw, 2rem);
	}

	.nav__list-item {
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

		.nav__list {
			display: flex;
			position: fixed;
			z-index: 20;
			right: 100%;
			top: 0;
			bottom: 0;
			width: 66.7%;
			min-width: fit-content;

			transition: 200ms ease-in;

			padding-block-start: 5.5rem;
			padding-inline-start: 1.5rem;

			flex-direction: column;
			justify-content: start;

			background-color: var(--color-neutral-100);
		}

		.backdrop--expanded {
			inset: 0 0 0 0;
			z-index: 10;
			background-color: rgb(0 0 0 / 0.5);
		}

		.nav__list--expanded {
			transform: translateX(100%);
		}

		.nav__list-item {
			height: fit-content;
			width: fit-content;
		}

		.link {
			font-weight: var(--font-weight-bold);
			color: var(--color-neutral-800);
		}

		.link:hover::before,
		.link:focus::before,
		.link:active::before {
			bottom: -0.25rem; /* It animates not exactly
			how I expexted but I actually like it */
		}
	}
</style>
