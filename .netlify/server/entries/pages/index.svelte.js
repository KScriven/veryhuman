var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2dc61825 = require("../../chunks/index-2dc61825.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-14zp0k0,.svelte-14zp0k0::before,.svelte-14zp0k0::after{box-sizing:border-box}h1.svelte-14zp0k0,p.svelte-14zp0k0{margin:0}main.svelte-14zp0k0{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;font-size:1rem;font-weight:400;max-width:50rem;text-rendering:optimizeSpeed;line-height:1.3;background-color:rgb(33, 32, 32);border-radius:2rem;margin:1.5rem}.header.svelte-14zp0k0{text-align:center}@keyframes svelte-14zp0k0-glitch{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateX(0deg) skewX(0deg)}}h1.svelte-14zp0k0{font-size:4rem;animation:svelte-14zp0k0-glitch 3s 3s infinite}.bw-caption.svelte-14zp0k0{background-color:black;color:white;width:max-content;font-weight:700;padding:1rem}.full-caption.svelte-14zp0k0{font-weight:700;padding:1rem;width:max-content;background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}a.svelte-14zp0k0{color:white}a.svelte-14zp0k0:not([class]){text-decoration-skip-ink:auto}.contact__content.svelte-14zp0k0{padding-top:7rem}p.svelte-14zp0k0:not(:last-child){padding-bottom:2rem}@media(prefers-reduced-motion: reduce){.svelte-14zp0k0,.svelte-14zp0k0::before,.svelte-14zp0k0::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}p.bw-caption.svelte-14zp0k0{padding-bottom:1.2rem}.padding-24.svelte-14zp0k0{padding:1.5rem}",
  map: null
};
let title = "Hello There";
const Routes = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-14zp0k0"}"><div class="${"padding-24 svelte-14zp0k0"}"><a class="${"bw-caption contact__content svelte-14zp0k0"}" href="${"/contact"}">contact</a>
		<a class="${"bw-caption contact__content svelte-14zp0k0"}" href="${"https://github.com/KScriven"}" target="${"blank"}">gitHub</a></div>
	<div class="${"header svelte-14zp0k0"}"><h1 class="${"svelte-14zp0k0"}">${(0, import_index_2dc61825.e)(title)}</h1>
		<p class="${"bw-caption header svelte-14zp0k0"}">black and white online</p>
		<p class="${"full-caption header svelte-14zp0k0"}">life in full colour</p></div>
	<div class="${"blog__content padding-24 svelte-14zp0k0"}"><p class="${"svelte-14zp0k0"}">Hey there, I am Kerryn, a software engineer developing my skills in the UK. Some of my work I
			put on GitHub but your welcome to read a little bit about me here. I thrive in the sunshine,
			love <u class="${"svelte-14zp0k0"}">REALLY</u>
			early mornings and the random effortless kindness of strangers. I try to make time to read physical
			books and cook meals from scratch. When I can, I make sure I get outdoors. My space online is only
			born from me attempting to implement the things I am currently learning. This blog is written with
			Svelte, as an alternative to React. If you are looking for strict opinions, I am afraid this is
			not the place, this is for my tinkering. My interests change all the time and I love to learn and
			can jump between technology spaces. So hey ... thats me. Short and sweet.
		</p>
		<p class="${"svelte-14zp0k0"}">Things that make me sad are injustices, unwanted intrusions to my personal space and red wine
			hangovers
		</p>
		<p class="${"svelte-14zp0k0"}">I am currently reading &quot;Around Africa on my bicycle&quot; by Riaan Manser</p>
		<p class="${"svelte-14zp0k0"}">My current food fixation is noodles</p>

		<div class="${"footer__caption svelte-14zp0k0"}"><footer class="${"svelte-14zp0k0"}">I like to remember that you are always only one decision away from a totally different life
			</footer></div></div>
</main>`;
});
