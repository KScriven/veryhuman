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
  default: () => Blog
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2dc61825 = require("../../chunks/index-2dc61825.js");
var blog_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-qo53xj{font-size:3rem;padding:0rem 1.5rem;text-align:left;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}p.svelte-qo53xj{padding:0rem 1.5rem;display:flex;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}button.svelte-qo53xj{background-color:black;color:white;padding:0.5rem;border-style:none;margin:0rem 1.5rem;font-size:1.5rem}button.svelte-qo53xj:hover{background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}@media screen and (max-width: 600px){button.svelte-qo53xj{background-color:black;color:white;padding:0.5rem;border-style:none;margin:0rem 1.5rem}button.svelte-qo53xj:hover,button.svelte-qo53xj:focus,button.svelte-qo53xj:active{background:linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)}}",
  map: null
};
const Blog = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header><a href="${"../"}"><button class="${"svelte-qo53xj"}">[Home]</button></a>
	<h1 class="${"svelte-qo53xj"}">Blog Space</h1></header>
<main><p class="${"svelte-qo53xj"}">This section is my space of recording things I have found interesting, surprising or downright
		wierd. Read at your peril!
	</p>
</main>`;
});
