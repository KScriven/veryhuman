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
  default: () => Contact
});
var import_index_2dc61825 = require("../../chunks/index-2dc61825.js");
var contact_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-bamumz{display:flex;font-size:1.125rem;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1.svelte-bamumz{font-size:3rem}",
  map: null
};
const Contact = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header><h1 class="${"svelte-bamumz"}">How to shoot the breeze</h1></header>
<p class="${"svelte-bamumz"}"><b>Fact 1:</b></p>
<p class="${"svelte-bamumz"}">I have non-existent facebook, twitter, instagram, snapchat, [fill in more here ... ] accounts</p>
<p class="${"svelte-bamumz"}">Whilst this means I am not always up to date with the latest thing, I am happy to sacrifice that
	for more focussed time spent online or elsewhere. You are welcome to email me at
	kerryn.lloyd[at]gmail.com or find me on LinkedIn
</p>
<p class="${"svelte-bamumz"}"><b>Fact 2:</b></p>
<p class="${"svelte-bamumz"}">Learning to code is hard work so you can keep me motivated by buying me a coffee \\~/</p>`;
});
module.exports = __toCommonJS(stdin_exports);
