<script>
	let title = 'Hello There';
</script>

<header>
	<!-- <nav class="nav-links"> -->
	<ul>
		<li>
			<a href="/contact">[contact]</a>
		</li>
	</ul>
	<!-- </nav> -->
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
			of my work on <a href="https://github.com/KScriven"> [gitHub] </a> or just read a little bit about
			me here
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
		/* padding: 0rem 1.5rem; */
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	a {
		text-decoration: none;
		color: white;
		font-size: 1.2rem;
		display: block;
		padding: 0.5rem 0.5rem;
	}

	a:hover {
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
	@media screen and (max-width: 600px) {
		h1 {
			display: inline;
			padding-top: 2rem;
			font-size: 3rem;
			position: relative;
		}

		ul {
			list-style-type: none;
			text-align: left;
		}

		.glitch {
			color: white;
			position: relative;
			font-size: 6vw;
			animation: glitch 3s 3s infinite;
		}

		a {
			text-decoration: none;
			color: white;
			font-size: 1.2rem;
		}

		a:hover {
			background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
		}

		@keyframes glitch {
			1% {
				transform: rotateX(10deg) skewX(90deg);
			}
			2% {
				transform: rotateX(0deg) skewX(0deg);
			}
		}
		p {
			padding-top: 1rem;
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
