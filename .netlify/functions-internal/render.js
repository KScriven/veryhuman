const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["contact.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"start-a2dcc72d.js","js":["start-a2dcc72d.js","chunks/index-dd45c2ae.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "javascript",
				pattern: /^\/javascript\/?$/,
				names: [],
				types: [],
				path: "/javascript",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "typescript",
				pattern: /^\/typescript\/?$/,
				names: [],
				types: [],
				path: "/typescript",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "things",
				pattern: /^\/things\/?$/,
				names: [],
				types: [],
				path: "/things",
				shadow: null,
				a: [0,6],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
