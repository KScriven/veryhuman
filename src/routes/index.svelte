<script>
	let title = 'Hello There';
</script>

<header>
	<a href="/contact">[contact]</a>
	<a href="https://github.com/KScriven" target="blank"> [gitHub] </a>
</header>

<main>
	<h1 class="glitch">{title}</h1>
	<div class="caption">
		<p class="bw-caption">black and white online</p>
		<p class="full-caption">life in full colour</p>
	</div>
	<div>
		<p class="content">
			Hey there, I am Kerryn, a software engineer developing my work and life, in the UK. See some
			of my work on GitHub or just read a little bit about me here
		</p>
		<p>
			I love sunshine, <u>REALLY</u> early mornings (I am part of the 5am gym crew), an effortless kindness
			of a stranger, yoga and a handful of amazing human beings. I make time when I can to read books,
			cook food from scratch and get outdoors.
		</p>
		<p>Things that make me sad are injustices, intrusion and hangovers</p>
		<p>
			I am <b>currently reading</b> Snow Crash by Neal Stephenson and
			<b>my current food fixation is </b> anything with oodles of noodles
		</p>
	</div>
	<div>
		<footer>
			<b>you are always one decision away from a totally different life</b>
		</footer>
	</div>
</main>

<style>
	header {
		display: flex;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	h1 {
		margin-top: 0.1rem;
		margin-bottom: 0.1rem;
	}
	a {
		color: white;
		font-size: 1.2rem;
		display: inline;
		padding: 0.5rem;
		background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
	}

	.glitch {
		color: white;
		position: relative;
		font-size: 6vw;
		animation: glitch 3s 3s infinite;
	}
	@keyframes glitch {
		1% {
			transform: rotateX(10deg) skewX(90deg);
		}
		2% {
			transform: rotateX(0deg) skewX(0deg);
		}
	}
	@media screen and (max-width: 450px) {
		a {
			text-decoration: none;
			color: white;
			font-size: 1.2rem;
			padding: 0.5rem;
		}
		p {
			padding-top: 0.2rem;
		}

		.bw-caption {
			display: flex;
			background-color: white;
			color: black;
			width: max-content;
			font-weight: 1000;
			padding: 0.2rem;
		}

		.full-caption {
			display: flex;
			font-weight: 700;
			padding: 0.2rem;
			width: max-content;
			background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
		}
	}
</style>
