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
  default: () => Contact
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2dc61825 = require("../../chunks/index-2dc61825.js");
var contact_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1o9wxvu{display:flex;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}main.svelte-1o9wxvu{padding:0rem 1.5rem;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1.svelte-1o9wxvu{margin-top:0.1rem;margin-bottom:0.1rem}a.svelte-1o9wxvu{color:white;font-size:1.2rem;display:inline;padding:0.5rem;background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}@media screen and (max-width: 450px){a.svelte-1o9wxvu{text-decoration:none;color:white;font-size:1.2rem;padding:0.5rem}p.svelte-1o9wxvu{padding-top:0.2rem}}",
  map: null
};
const Contact = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-1o9wxvu"}"><a href="${"/"}" class="${"svelte-1o9wxvu"}">[home]</a>
	<a href="${"https://www.linkedin.com/in/kerrynscriven/"}" class="${"svelte-1o9wxvu"}">[linkedIn]</a></header>
<main class="${"svelte-1o9wxvu"}"><h1 class="${"svelte-1o9wxvu"}">How to shoot the breeze</h1>
	<div><p class="${"svelte-1o9wxvu"}">I haven&#39;t subscribed to facebook, twitter, instagram, snapchat, [fill in the blanks here ... ]
			Whilst this means I am not always up to date with the latest thing, I am happy to sacrifice
			that for more focussed time spent online or elsewhere.
		</p>
		<p class="${"svelte-1o9wxvu"}">You are welcome to email me at kerryn.lloyd[at]gmail.com or find me on LinkedIn</p>
		<p class="${"svelte-1o9wxvu"}">Learning to code is hard work so you can keep me motivated by being kind.</p></div>
</main>`;
});
