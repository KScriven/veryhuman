<script>
	let h1Title = 'Hello There';
</script>

<main>
	<div>
		<header>
			<h1>{h1Title}</h1>
		</header>
		<ul class="links">
			<li>
				<a href="/blog">[blog]</a>
				<a href="/contact">[contact]</a>
				<a href="/things">[things]</a>
			</li>
		</ul>
	</div>
	<div>
		<p>
			I am Kerryn, a software engineer developing my work and life, in the UK. See some of my work
			on <a href="https://github.com/KScriven"> [gitHub] </a> or just read a little bit about me here
		</p>
	</div>
	<div>
		<p>
			Things I love and that make me smile and are important to me are sunshine, REALLY early
			mornings (I am part of the 5am crew), the effortless kindness of strangers, yoga, being
			outdoors and a small handful of amazing human beings.
		</p>
	</div>
	<div><p>Things that I dont love injustice, intrusion and hangovers</p></div>
	<div>
		<footer>
			<strong>you are always one decision away from a totally different life</strong>
		</footer>
	</div>
</main>

<style>
	main {
		min-height: 100vh;
		padding: 0rem 1.5rem;
		/* text-align: center; */
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	h1 {
		font-size: 4rem;
		text-align: left;
		position: relative;
	}

	ul {
		list-style-type: none;
		padding-bottom: 2rem;
		text-align: left;
	}
	a {
		text-decoration: none;
		color: white;
	}

	footer {
		font-size: 1.125rem;
		padding-left: 0rem 20rem;
		/* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale; */
	}

	@media screen and (max-width: 600px) {
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
