<script>
	let title = 'Hey There!';
</script>

<head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-1Q8TDQBGSW"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-1Q8TDQBGSW');
	</script>
</head>

<main>
	<div class="padding-24">
		<a class="bw-caption contact__content" href="/contact">contact</a>
		<a class="bw-caption contact__content" href="https://github.com/KScriven" target="blank"
			>gitHub</a
		>
	</div>
	<div class="header">
		<h1>{title}</h1>
		<p class="bw-caption header">black and white online</p>
		<p class="full-caption header">life in full colour</p>
	</div>
	<div class="blog__content padding-24">
		<p>
			I am Kerryn, a software engineer developing my coding skills in the UK. Some of my work I put
			on GitHub but your welcome to read a little bit about me here. I thrive in the sunshine,
			really love early mornings and random acts of kindness. I am a very private person and dont
			have much of an online presence
		</p>
		<p>
			This space is only born from me attempting to implement the things I am currently learning.
			This blog is written with Svelte, as an alternative to React. If you are looking for strict
			opinions, I am afraid this is not the place. The industry I work in is ever evolving so I like
			to keep learning through doing
		</p>
		<p>
			I enjoy quite time reading and currently on my bedside table is "Lanny" by Max Porter. My
			current food fixation is noodles and I love anything Japanese inspired! Its on my bucket list
			of places I would love to explore
		</p>

		<div class="footer__caption">
			<footer>
				<b>Remember that you are always only one decision away from a totally different life</b>
			</footer>
		</div>
	</div>
</main>

<style>
	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	p {
		margin: 0;
	}

	@keyframes glitch {
		1% {
			transform: rotateX(10deg) skewX(90deg);
		}
		2% {
			transform: rotateX(0deg) skewX(0deg);
		}
	}

	/* Set core body defaults */
	main {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
		font-size: 1rem;
		font-weight: 400;
		max-width: 50rem;
		text-rendering: optimizeSpeed;
		line-height: 1.3;
		background-color: rgb(33, 32, 32);
		border-radius: 2rem;
		margin: 1.5rem;
	}

	.header {
		text-align: center;
	}

	@keyframes glitch {
		1% {
			transform: rotateX(10deg) skewX(90deg);
		}
		2% {
			transform: rotateX(0deg) skewX(0deg);
		}
	}
	h1 {
		margin: 0px;
		margin: 0px;
		font-size: 4rem;
		animation: glitch 3s 3s infinite;
	}

	@media only screen and (max-width: 600px) {
		h1 {
			margin: 0px;
			padding-bottom: 0.5rem;
			font-size: 3.5rem;
		}
	}

	.bw-caption {
		background-color: black;
		color: white;
		width: max-content;
		font-weight: 700;
		padding: 1rem;
	}

	.full-caption {
		font-weight: 700;
		padding: 1rem;
		width: max-content;
		background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
	}

	a {
		color: white;
	}

	/* A elements that don't have a class get default styles */
	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	.contact__content {
		padding-top: 7rem;
	}

	p:not(:last-child) {
		padding-bottom: 2rem;
	}

	/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}
	p.bw-caption {
		padding-bottom: 1.2rem;
	}
	.padding-24 {
		padding-bottom: 1rem;
	}
</style>
