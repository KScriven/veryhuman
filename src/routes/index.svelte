<script>
	let h1Title = 'Hello There';
</script>

<main>
	<div>
		<header>
			<h1>{h1Title}</h1>
		</header>
		<button class="nav-toggle">
			<i class="fas fa-bars" />
		</button>
		<ul class="links">
			<li>
				<a href="/blog">[blog]</a>
				<a href="/contact">[contact]</a>
			</li>
		</ul>
	</div>
	<div>
		<p>
			I am Kerryn, a software engineer developing my work and life, in the UK. See some of my work
			on GitHub or just read a little bit about me here on this page
		</p>
	</div>
	<footer>
		<strong>you are always one decision away from a totally different life</strong>
	</footer>
</main>

<style>
	main {
		min-height: 100vh;
	}
	p,
	footer {
		display: flex;
		font-size: 1.125rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	h1 {
		font-size: 3rem;
	}

	ul {
		list-style-type: none;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	a {
		text-decoration: none;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: white;
		font-size: 1.5rem;
	}

	@media screen and (min-width: 800px) {
		.nav-toggle {
			display: none;
		}
		.links {
			height: auto;
			display: flex;
		}
		.links a {
			padding: 0;
			margin: 0 0.5rem;
		}
		.links a:hover {
			padding: 0;
			background: transparent;
		}
	}
</style>
