<script>
	let title = 'Hello There';
</script>

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
			Hey there, I am Kerryn, a software engineer developing my skills in the UK. Some of my work I
			put on GitHub but your welcome to read a little bit about me here. I thrive in the sunshine,
			love <u>REALLY</u>
			early mornings and the random effortless kindness of strangers. I try to make time to read physical
			books and cook meals from scratch. When I can, I make sure I get outdoors. My space online is only
			born from me attempting to implement the things I am currently learning. This blog is written with
			Svelte, as an alternative to React. If you are looking for strict opinions, I am afraid this is
			not the place, this is for my tinkering. My interests change all the time and I love to learn and
			can jump between technology spaces. So hey ... thats me. Short and sweet.
		</p>
		<p>
			Things that make me sad are injustices, unwanted intrusions to my personal space and red wine
			hangovers
		</p>
		<p>I am currently reading The Bridge by Iain Banks</p>
		<p>My current food fixation is noodles</p>

		<div class="footer__caption">
			<footer>
				I like to remember that you are always only one decision away from a totally different life
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

	/* Remove default margin */

	h1,
	p {
		margin: 0;
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
		font-size: 4rem;
		/* text-align: center; */
		animation: glitch 3s 3s infinite;
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
		padding: 1.5rem;
	}
</style>
