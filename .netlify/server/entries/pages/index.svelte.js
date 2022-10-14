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
  code: "header.svelte-xinkew{display:flex;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1.svelte-xinkew{margin-top:0.1rem;margin-bottom:0.1rem}a.svelte-xinkew{color:white;font-size:1.2rem;display:inline;padding:0.5rem;background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}.glitch.svelte-xinkew{color:white;position:relative;font-size:6vw;animation:svelte-xinkew-glitch 3s 3s infinite}@keyframes svelte-xinkew-glitch{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateX(0deg) skewX(0deg)}}@media screen and (max-width: 450px){a.svelte-xinkew{text-decoration:none;color:white;font-size:1.2rem;padding:0.5rem}p.svelte-xinkew{padding-top:0.2rem}.bw-caption.svelte-xinkew{display:flex;background-color:white;color:black;width:max-content;font-weight:1000;padding:0.2rem}.full-caption.svelte-xinkew{display:flex;font-weight:700;padding:0.2rem;width:max-content;background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}}",
  map: null
};
let title = "Hello There";
const Routes = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-xinkew"}"><a href="${"/contact"}" class="${"svelte-xinkew"}">[contact]</a>
	<a href="${"https://github.com/KScriven"}" target="${"blank"}" class="${"svelte-xinkew"}">[gitHub] </a></header>

<main><h1 class="${"glitch svelte-xinkew"}">${(0, import_index_2dc61825.e)(title)}</h1>
	<div class="${"caption"}"><p class="${"bw-caption svelte-xinkew"}">black and white online</p>
		<p class="${"full-caption svelte-xinkew"}">life in full colour</p></div>
	<div><p class="${"content svelte-xinkew"}">Hey there, I am Kerryn, a software engineer developing my work and life, in the UK. See some
			of my work on GitHub or just read a little bit about me here
		</p>
		<p class="${"svelte-xinkew"}">I love sunshine, <u>REALLY</u> early mornings (I am part of the 5am gym crew), the effortless kindness
			of strangers and yoga. I make time when I can to read books and cook food from scratch. I get outdoors
			as much as I can and enjoy being in nature, having a cold water dip.
		</p>
		<p class="${"svelte-xinkew"}">Things that make me sad are injustices, intrusion and hangovers</p>
		<p class="${"svelte-xinkew"}">I am <b>currently reading</b> Snow Crash by Neal Stephenson and
			<b>my current food fixation is </b> anything with oodles of noodles
		</p></div>
	<div><footer><b>you are always one decision away from a totally different life</b></footer></div>
</main>`;
});
