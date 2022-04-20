<script>
	let h1Title = 'Hello There';
</script>

<main>
	<div>
		<header>
			<h1>{h1Title}</h1>
			<p class="header">black and white online, <span>life in full colour</span></p>
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
		<p class="content">
			I am Kerryn, a software engineer developing my work and life, in the UK. See some of my work
			on <a href="https://github.com/KScriven"> [gitHub] </a> or just read a little bit about me here
		</p>
		<p>
			I love sunshine, REALLY early mornings (I am part of the 5am crew), the effortless kindness of
			strangers, yoga, being outdoors and a small handful of amazing human beings.
		</p>
		<p>Things that make me sad is injustice, intrusion and hangovers</p>
	</div>
	<div class="footer">
		<footer>
			<strong>you are always one decision away from a totally different life</strong>
		</footer>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 0rem 1.5rem;
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

	span {
		font-weight: 700;
		padding: 0.2rem;
		background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
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
	.content {
		flex: 1 0 auto;
		display: block;
	}

	.footer {
		flex-shrink: 0;
		font-size: 1.25rem;
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
