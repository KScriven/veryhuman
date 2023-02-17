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
<main class="padding-24">
	<a class="bw-caption contact__content" href="/">home</a>
	<a
		class="bw-caption contact__content"
		href="https://www.linkedin.com/in/kerrynscriven/"
		target="blank">linkedIn</a
	>
	<h1>How to shoot the breeze</h1>
	<div>
		<p>
			I haven't subscribed to facebook, twitter, instagram, snapchat, [fill in the blanks here ... ]
			so you wont find me commenting or lurking much online. I am happy to sacrifice not having an
			active online presence, for more focussed time doing things that I enjoy. I am currently
			learning the acoustic guitar during the winter months to keep me going
		</p>
		<p class="p__last">
			You are welcome to email me at kerryn.lloyd[at]gmail.com or find me on LinkedIn
		</p>
		<footer>Always remember to be kind</footer>
	</div>
</main>

<style>
	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* Remove default margin */
	h1,
	p {
		margin: 0;
		/* padding-bottom: 2rem; */
	}

	/* Set core body defaults */
	main {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
		font-size: 1rem;
		font-weight: 400;
		max-width: 50rem;
		text-rendering: optimizeSpeed;
		line-height: 1.6;
		background-color: rgb(33, 32, 32);
		border-radius: 2rem;
		margin: 1.5rem;
	}

	h1 {
		font-size: 4rem;
		animation: glitch 3s 3s infinite;
	}

	.bw-caption {
		background-color: black;
		color: white;
		width: max-content;
		font-weight: 700;
		padding: 1rem;
	}

	@keyframes glitch {
		1% {
			transform: rotateX(10deg) skewX(90deg);
		}
		2% {
			transform: rotateX(0deg) skewX(0deg);
		}
	}
	a {
		color: white;
	}

	p {
		padding-bottom: 2rem;
	}

	/* A elements that don't have a class get default styles */
	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	.contact__content {
		padding-top: 7rem;
	}

	/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	h1 {
		font-size: 2.5em;
		padding-top: 2rem;
	}

	.padding-24 {
		padding: 1.5rem;
	}
</style>
