# veryHuman personal website

A small website built for personal use to track thoughts, findings and things for me.

## Creating this project

Whilst building this website (slowly) I am trying to learn new software development skills, be it frameworks or some simple CSS trickery.

## Developing

I start my local development server running the following commands (thanks to @SvelteKit for all the coolness).
When I develop locally I ensure that I run a version of node that is older than v12.

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

```

A local version of the website is generated and run from a [localhost](http://localhost:3000/) instance

## Building and deploying

To create a production version of my app I run the following command:

```bash
npm run build
```

You can preview the production build with `npm run preview`. Once this is committed to my branch it automatically deploys to the hosting platform [Netlify](https://www.netlify.com).

All things being well its deployed to [veryHuman](https://veryhuman.co.uk)
