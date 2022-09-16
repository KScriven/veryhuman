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
  code: "h1.svelte-vrkug{font-size:3rem;padding:0rem 1.5rem;text-align:left;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}p.svelte-vrkug{padding:0rem 1.5rem;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a.svelte-vrkug{text-decoration:none;color:white}button.svelte-vrkug{background-color:black;color:white;padding:0.5rem;border-style:none;margin:0rem 1.5rem;font-size:1.5rem}button.svelte-vrkug:hover{background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}@media screen and (max-width: 600px){button.svelte-vrkug{background-color:black;color:white;padding:0.5rem;border-style:none;margin:0rem 1.5rem}button.svelte-vrkug:hover{background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}}",
  map: null
};
const Contact = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header><a href="${"../"}" class="${"svelte-vrkug"}"><button class="${"svelte-vrkug"}">[Home]</button></a>
	<h1 class="${"svelte-vrkug"}">How to shoot the breeze</h1></header>
<main><div><p class="${"svelte-vrkug"}">I haven&#39;t subscribed to facebook, twitter, instagram, snapchat, [fill in the blankshere ... ]
			Whilst this means I am not always up to date with the latest thing, I am happy to sacrifice
			that for more focussed time spent online or elsewhere. You are welcome to email me at
			kerryn.lloyd[at]gmail.com or find me on <a href="${"https://www.linkedin.com/in/kerrynscriven/"}" class="${"svelte-vrkug"}">[LinkedIn]</a>

			Learning to code is hard work so you can keep me motivated by being kind.
		</p></div>
</main>`;
});
