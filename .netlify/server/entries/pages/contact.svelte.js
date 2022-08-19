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
  code: "h1.svelte-1g5veiy{font-size:3rem;padding:0rem 1.5rem;text-align:left;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}p.svelte-1g5veiy{padding:0rem 1.5rem;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.container.svelte-1g5veiy{column-count:2}a.svelte-1g5veiy{text-decoration:none;color:white}button.svelte-1g5veiy{background-color:black;color:white;padding:0.5rem;border-style:none;margin:0rem 1.5rem;font-size:1.5rem}button.svelte-1g5veiy:hover{background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}@media screen and (max-width: 600px){button.svelte-1g5veiy{background-color:black;color:white;padding:0.5rem;border-style:none;margin:0rem 1.5rem}button.svelte-1g5veiy:hover{background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}}",
  map: null
};
const Contact = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header><a href="${"../"}" class="${"svelte-1g5veiy"}"><button class="${"svelte-1g5veiy"}">[Home]</button></a>
	<h1 class="${"svelte-1g5veiy"}">How to shoot the breeze</h1></header>
<main><div class="${"container svelte-1g5veiy"}"><p class="${"svelte-1g5veiy"}">I haven&#39;t subscribed to facebook, twitter, instagram, snapchat, [fill in the blankshere ... ]
			Whilst this means I am not always up to date with the latest thing, I am happy to sacrifice
			that for more focussed time spent online or elsewhere. You are welcome to email me at
			kerryn.lloyd[at]gmail.com or find me on <a href="${"https://www.linkedin.com/in/kerrynscriven/"}" class="${"svelte-1g5veiy"}">[LinkedIn]</a>

			Learning to code is hard work so you can keep me motivated by, when chatting, by being kind.
		</p></div>
</main>`;
});
