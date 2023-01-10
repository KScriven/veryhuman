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
  code: ".svelte-xmtjyg,.svelte-xmtjyg::before,.svelte-xmtjyg::after{box-sizing:border-box}h1.svelte-xmtjyg,p.svelte-xmtjyg{margin:0;padding-bottom:2rem}main.svelte-xmtjyg{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;font-size:1rem;font-weight:400;max-width:50rem;text-rendering:optimizeSpeed;line-height:1.6;background-color:rgb(33, 32, 32);border-radius:2rem;margin:1.5rem}@keyframes svelte-xmtjyg-glitch{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateX(0deg) skewX(0deg)}}h1.svelte-xmtjyg{font-size:4rem;animation:svelte-xmtjyg-glitch 3s 3s infinite}.bw-caption.svelte-xmtjyg{background-color:black;color:white;width:max-content;font-weight:700;padding:1rem}a.svelte-xmtjyg{color:white}p.svelte-xmtjyg{padding-bottom:2rem}a.svelte-xmtjyg:not([class]){text-decoration-skip-ink:auto}.contact__content.svelte-xmtjyg{padding-top:7rem}@media(prefers-reduced-motion: reduce){.svelte-xmtjyg::before,.svelte-xmtjyg::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}h1.svelte-xmtjyg{font-size:2.5em;padding-top:2rem}.padding-24.svelte-xmtjyg{padding:1.5rem}",
  map: null
};
const Contact = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"padding-24 svelte-xmtjyg"}"><a class="${"bw-caption contact__content svelte-xmtjyg"}" href="${"/"}">home</a>
	<a class="${"bw-caption contact__content svelte-xmtjyg"}" href="${"https://www.linkedin.com/in/kerrynscriven/"}" target="${"blank"}">linkedIn</a>
	<h1 class="${"svelte-xmtjyg"}">How to shoot the breeze</h1>
	<div class="${"svelte-xmtjyg"}"><p class="${"svelte-xmtjyg"}">I haven&#39;t subscribed to facebook, twitter, instagram, snapchat, [fill in the blanks here ... ]
			so you wont find me commenting or lurking much online. I am happy to sacrifice not having an
			active online presence, for more focussed time doing things that I enjoy. I am currently
			learning the acoustic guitar during the winter months to keep me going. And I am trying to
			maintain a daily habit of learning, where I attempt to keep my skills relevant and my brain
			occupied!
		</p>
		<p class="${"p__last svelte-xmtjyg"}">You are welcome to email me at kerryn.lloyd[at]gmail.com or find me on LinkedIn
		</p>
		<footer class="${"svelte-xmtjyg"}">Always remember to be kind</footer></div>
</main>`;
});
