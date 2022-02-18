var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
var import_index_2dc61825 = require("../../chunks/index-2dc61825.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-17qnlwm.svelte-17qnlwm{min-height:100vh}p.svelte-17qnlwm.svelte-17qnlwm,footer.svelte-17qnlwm.svelte-17qnlwm{display:flex;font-size:1.125rem;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1.svelte-17qnlwm.svelte-17qnlwm{font-size:3rem}ul.svelte-17qnlwm.svelte-17qnlwm{list-style-type:none;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a.svelte-17qnlwm.svelte-17qnlwm{text-decoration:none;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:white;font-size:1.5rem}@media screen and (min-width: 800px){.nav-toggle.svelte-17qnlwm.svelte-17qnlwm{display:none}.links.svelte-17qnlwm.svelte-17qnlwm{height:auto;display:flex}.links.svelte-17qnlwm a.svelte-17qnlwm{padding:0;margin:0 0.5rem}.links.svelte-17qnlwm a.svelte-17qnlwm:hover{padding:0;background:transparent}}",
  map: null
};
let h1Title = "Hello There";
const Routes = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-17qnlwm"}"><div><header><h1 class="${"svelte-17qnlwm"}">${(0, import_index_2dc61825.e)(h1Title)}</h1></header>
		<button class="${"nav-toggle svelte-17qnlwm"}"><i class="${"fas fa-bars"}"></i></button>
		<ul class="${"links svelte-17qnlwm"}"><li><a href="${"/blog"}" class="${"svelte-17qnlwm"}">[blog]</a>
				<a href="${"/contact"}" class="${"svelte-17qnlwm"}">[contact]</a></li></ul></div>
	<div><p class="${"svelte-17qnlwm"}">I am Kerryn, a software engineer developing my work and life, in the UK. See some of my work
			on GitHub or just read a little bit about me here on this page
		</p></div>
	<footer class="${"svelte-17qnlwm"}"><strong>you are always one decision away from a totally different life</strong></footer>
</main>`;
});
module.exports = __toCommonJS(stdin_exports);
