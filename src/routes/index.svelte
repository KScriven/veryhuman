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
			Hey there, I am Kerryn, a software engineer developing my work and life, in the UK. See some
			of my work on GitHub or just read a little bit about me here. I love sunshine, <u>REALLY</u>
			early mornings (I am part of the 5am gym crew), the effortless kindness of strangers and yoga.
			I make time when I can to read books and cook food from scratch. I get outdoors as much as I can
			and enjoy being in nature. This online space is just a place where I can share my thoughts and
			findings on random things. Its not technology focussed particularly, if you are looking for strict
			opinions, I am afraid its not here. My interests change all the time so I find it easier not to
			just do one thing, I am a bit of this and that. This can mean my things are a bit of a mash-up
			but hey... thats me. Things that make me sad are injustices, unwanted intrusions and red wine hangovers
		</p>

		<p>I am currently reading The Bridge by Iain Banks</p>
		<p>My current food fixation is anything vegan (particularly Japanese style).</p>

		<div class="footer__caption">
			<footer>you are always one decision away from a totally different life</footer>
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
		line-height: 1.1;
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
