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
  code: "header.svelte-1bzmb4n.svelte-1bzmb4n{display:flex;padding:0rem 1.5rem;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}main.svelte-1bzmb4n.svelte-1bzmb4n{padding:0rem 1.5rem;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1.svelte-1bzmb4n.svelte-1bzmb4n{font-size:4rem;text-align:left;position:relative}.caption.svelte-1bzmb4n.svelte-1bzmb4n{display:flex}.bw-caption.svelte-1bzmb4n.svelte-1bzmb4n{display:flex;background-color:white;color:black;width:max-content;font-weight:1000;padding:1rem}.full-caption.svelte-1bzmb4n.svelte-1bzmb4n{display:flex;font-weight:700;padding:1rem;width:max-content;background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}ul.svelte-1bzmb4n.svelte-1bzmb4n{list-style-type:none;text-align:left}a.svelte-1bzmb4n.svelte-1bzmb4n{text-decoration:none;color:white;font-size:1.2rem}a.svelte-1bzmb4n.svelte-1bzmb4n:hover{background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}footer.svelte-1bzmb4n.svelte-1bzmb4n{flex-shrink:0;font-size:1.25rem}.glitch.svelte-1bzmb4n.svelte-1bzmb4n{color:white;position:relative;font-size:7vw;animation:svelte-1bzmb4n-glitch 3s 3s infinite}@keyframes svelte-1bzmb4n-glitch{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateX(0deg) skewX(0deg)}}@media screen and (max-width: 600px){h1.svelte-1bzmb4n.svelte-1bzmb4n{font-size:3rem;text-align:left;position:relative}p.svelte-1bzmb4n.svelte-1bzmb4n{padding-top:1rem}.nav-links.svelte-1bzmb4n.svelte-1bzmb4n{height:auto}.nav-links.svelte-1bzmb4n a.svelte-1bzmb4n:hover{padding:0;background:transparent}.bw-caption.svelte-1bzmb4n.svelte-1bzmb4n{display:flex;background-color:white;color:black;width:max-content;font-weight:1000;padding:0.2rem}.full-caption.svelte-1bzmb4n.svelte-1bzmb4n{display:flex;font-weight:700;padding:0.2rem;width:max-content;background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}}",
  map: null
};
let title = "Hello There";
const Routes = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-1bzmb4n"}"><h1 class="${"glitch svelte-1bzmb4n"}">${(0, import_index_2dc61825.e)(title)}</h1>
	<nav class="${"nav-links svelte-1bzmb4n"}"><ul class="${"svelte-1bzmb4n"}"><li><a href="${"/blog"}" class="${"svelte-1bzmb4n"}">[blog]</a>
				<a href="${"/contact"}" class="${"svelte-1bzmb4n"}">[contact]</a>
				<a href="${"/things"}" class="${"svelte-1bzmb4n"}">[things]</a></li></ul></nav></header>

<main class="${"svelte-1bzmb4n"}"><div class="${"caption svelte-1bzmb4n"}"><p class="${"bw-caption svelte-1bzmb4n"}">black and white online</p>
		<p class="${"full-caption svelte-1bzmb4n"}">life in full colour</p></div>
	<div><p class="${"content svelte-1bzmb4n"}">Hey there, I am Kerryn, a software engineer developing my work and life, in the UK. See some
			of my work on <a href="${"https://github.com/KScriven"}" class="${"svelte-1bzmb4n"}">[gitHub] </a> or just read a little bit about
			me here
		</p>
		<p class="${"svelte-1bzmb4n"}">I love sunshine, <u>REALLY</u> early mornings (I am part of the 5am gym crew), an effortless kindness
			of a stranger, yoga and a handful of amazing human beings. I make time when I can to read books,
			cook food from scratch and get outdoors.
		</p>
		<p class="${"svelte-1bzmb4n"}">Things that make me sad are injustices, intrusion and hangovers</p>
		<p class="${"svelte-1bzmb4n"}">I am <b>currently reading</b> Snow Crash by Neal Stephenson and
			<b>my current food fixation is </b> anything with oodles of noodles
		</p></div>
	<div><footer class="${"svelte-1bzmb4n"}"><b>you are always one decision away from a totally different life</b></footer></div>
</main>`;
});
