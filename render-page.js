(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/library/fn/json/stringify"), require("core-js/library/fn/object/assign"), require("core-js/library/fn/object/create"), require("core-js/library/fn/object/define-property"), require("core-js/library/fn/object/get-prototype-of"), require("core-js/library/fn/object/keys"), require("core-js/library/fn/object/set-prototype-of"), require("core-js/library/fn/symbol"), require("core-js/library/fn/symbol/iterator"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.match"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("debug"), require("fs"), require("lodash"), require("lodash/cloneDeep"), require("lodash/isEqual"), require("lodash/kebabCase"), require("minimatch"), require("path"), require("pify"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/library/fn/json/stringify", "core-js/library/fn/object/assign", "core-js/library/fn/object/create", "core-js/library/fn/object/define-property", "core-js/library/fn/object/get-prototype-of", "core-js/library/fn/object/keys", "core-js/library/fn/object/set-prototype-of", "core-js/library/fn/symbol", "core-js/library/fn/symbol/iterator", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.match", "core-js/modules/es6.regexp.replace", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "crypto", "debug", "fs", "lodash", "lodash/cloneDeep", "lodash/isEqual", "lodash/kebabCase", "minimatch", "path", "pify", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/library/fn/json/stringify"), require("core-js/library/fn/object/assign"), require("core-js/library/fn/object/create"), require("core-js/library/fn/object/define-property"), require("core-js/library/fn/object/get-prototype-of"), require("core-js/library/fn/object/keys"), require("core-js/library/fn/object/set-prototype-of"), require("core-js/library/fn/symbol"), require("core-js/library/fn/symbol/iterator"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.match"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("debug"), require("fs"), require("lodash"), require("lodash/cloneDeep"), require("lodash/isEqual"), require("lodash/kebabCase"), require("minimatch"), require("path"), require("pify"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/library/fn/json/stringify"], root["core-js/library/fn/object/assign"], root["core-js/library/fn/object/create"], root["core-js/library/fn/object/define-property"], root["core-js/library/fn/object/get-prototype-of"], root["core-js/library/fn/object/keys"], root["core-js/library/fn/object/set-prototype-of"], root["core-js/library/fn/symbol"], root["core-js/library/fn/symbol/iterator"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.match"], root["core-js/modules/es6.regexp.replace"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["crypto"], root["debug"], root["fs"], root["lodash"], root["lodash/cloneDeep"], root["lodash/isEqual"], root["lodash/kebabCase"], root["minimatch"], root["path"], root["pify"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_json_stringify__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_create__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_define_property__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_get_prototype_of__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_keys__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_set_prototype_of__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_symbol__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_symbol_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_match__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_replace__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_crypto__, __WEBPACK_EXTERNAL_MODULE_debug__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__, __WEBPACK_EXTERNAL_MODULE_lodash_isEqual__, __WEBPACK_EXTERNAL_MODULE_lodash_kebabCase__, __WEBPACK_EXTERNAL_MODULE_minimatch__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_pify__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-remark-autolink-headers/gatsby-ssr */ "./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr */ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "trackingId": "UA-47311644-5"
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-sitemap/gatsby-ssr */ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "name": "MSKf's Tree BLOG",
    "short_name": "MSKf's Tree",
    "description": "",
    "start_url": "/",
    "background_color": "#e0e0e0",
    "theme_color": "#c62828",
    "display": "minimal-ui",
    "icons": [{
      "src": "/logos/logo-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }, {
      "src": "/logos/logo-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }]
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-feed/gatsby-ssr */ "./node_modules/gatsby-plugin-feed/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "query": "\n        {\n          site {\n            siteMetadata {\n              rssMetadata {\n                site_url\n                feed_url\n                title\n                description\n                image_url\n                copyright\n              }\n            }\n          }\n        }\n      ",
    "feeds": [{
      "query": "\n            {\n              allMarkdownRemark(\n                limit: 1000,\n                sort: { order: DESC, fields: [fields___date] },\n              ) {\n                edges {\n                  node {\n                    excerpt\n                    html\n                    timeToRead\n                    fields {\n                      slug\n                      date\n                    }\n                    frontmatter {\n                      title\n                      cover\n                      date\n                      category\n                      tags\n                    }\n                  }\n                }\n              }\n            }\n          ",
      "output": "/rss.xml"
    }]
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout")
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-jsx","jsonName":"index","path":"/"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"java-java-generics-tricky-code-ee3","path":"/Java/java-generics-tricky-code"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"java-java-multi-thread-basic-d47","path":"/Java/java-multi-thread-basic"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"java-java-multi-thread-synchronize-f96","path":"/Java/java-multi-thread-synchronize"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"java-java-multi-thread-utils-93d","path":"/Java/java-multi-thread-utils"},{"componentChunkName":"component---src-pages-about-jsx","jsonName":"about-f34","path":"/about/"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-big-number-multiply-42a","path":"/algorithm/big-number-multiply"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-champagne-tower-a6d","path":"/algorithm/champagne-tower"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-check-completeness-of-a-binary-tree-6a3","path":"/algorithm/check-completeness-of-a-binary-tree"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-combinations-and-permutations-413","path":"/algorithm/combinations-and-permutations"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-find-integer-x-y-for-ax-by-c-9e8","path":"/algorithm/find-integer-x-y-for-ax-by-c"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-largest-component-size-by-common-factor-164","path":"/algorithm/largest-component-size-by-common-factor"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-linked-list-cycle-ec8","path":"/algorithm/linked-list-cycle"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-longest-palindrome-substring-e4e","path":"/algorithm/longest-palindrome-substring"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-majority-element-ad7","path":"/algorithm/majority-element"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-max-chunks-to-make-sorted-ii-5fa","path":"/algorithm/max-chunks-to-make-sorted-ii"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-python-implementation-of-koch-snowflake-e86","path":"/algorithm/python-implementation-of-koch-snowflake"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-reaching-points-87d","path":"/algorithm/reaching-points"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-regular-expression-for-multiple-of-3-52a","path":"/algorithm/regular-expression-for-multiple-of-3"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-regular-expression-matching-2b0","path":"/algorithm/regular-expression-matching"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"algorithm-swim-in-rising-water-9bc","path":"/algorithm/swim-in-rising-water"},{"componentChunkName":"component---src-templates-category-jsx","jsonName":"categories-algorithm-5cf","path":"/categories/algorithm/"},{"componentChunkName":"component---src-templates-category-jsx","jsonName":"categories-java-da8","path":"/categories/java/"},{"componentChunkName":"component---node-modules-gatsby-plugin-offline-app-shell-js","jsonName":"offline-plugin-app-shell-fallback-a30","path":"/offline-plugin-app-shell-fallback/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-algorithm-e15","path":"/tags/algorithm/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-array-a81","path":"/tags/array/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-basic-096","path":"/tags/basic/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-bitwise-8af","path":"/tags/bitwise/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-combination-0c2","path":"/tags/combination/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-dfa-aef","path":"/tags/dfa/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-dynamic-programming-f82","path":"/tags/dynamic-programming/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-graph-287","path":"/tags/graph/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-greedy-c3c","path":"/tags/greedy/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-java-util-ef2","path":"/tags/java-util/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-java-0cc","path":"/tags/java/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-jdk-ba8","path":"/tags/jdk/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-linear-time-357","path":"/tags/linear-time/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-linkedlist-c99","path":"/tags/linkedlist/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-math-f2d","path":"/tags/math/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-multi-thread-0dc","path":"/tags/multi-thread/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-permutation-d05","path":"/tags/permutation/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-python-322","path":"/tags/python/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-regular-expression-c20","path":"/tags/regular-expression/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-simulate-f3b","path":"/tags/simulate/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-string-5d7","path":"/tags/string/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-synchronize-7bc","path":"/tags/synchronize/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-tree-857","path":"/tags/tree/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-中文-cc6","path":"/tags/中文/"}],"dataPaths":{"01-01-2017-bold-mage-c31":"428/path---01-01-2017-bold-mage-c-31-3d3-Pvpylh7jEEPKUDp2aMKRoksZgnE","01-01-2017-bold-mage-e3b":"777/path---01-01-2017-bold-mage-e-3-b-4e9-ZxOnQtLZxco8j486ah3HhRGg3kE","01-02-2017-the-fallen-time-13d":"511/path---01-02-2017-the-fallen-time-13-d-c57-flE0VUhB64cwAtDGOsHOPYnus","01-02-2017-the-fallen-time-299":"727/path---01-02-2017-the-fallen-time-299-620-WTd5hfELqGDuQT8x5jnGwdRDM","01-03-2017-angels-of-mist-369":"971/path---01-03-2017-angels-of-mist-369-684-lnP5ndvXdVLl9KfYvCeQ5kg4nk","01-03-2017-angels-of-mist-90b":"270/path---01-03-2017-angels-of-mist-90-b-14a-972MbUAYwqRMzmIU5FZg7bEdnF4","02-03-2017-random-project-4-with-super-long-title-phase-one-317":"378/path---02-03-2017-random-project-4-with-super-long-title-phase-one-317-55d-NgKkRyXyFbMQpiMykoBt1Bxook","02-03-2017-random-project-4-with-super-long-title-phase-one-e72":"279/path---02-03-2017-random-project-4-with-super-long-title-phase-one-e-72-2b6-91UJRyjM79qPIVbBD5g3Tko2To","02-04-2017-the-fairys-witches-4dd":"172/path---02-04-2017-the-fairys-witches-4-dd-843-1IMab4lQYagmTq5d2bYTo5tH8","02-04-2017-the-fairys-witches-ff2":"113/path---02-04-2017-the-fairys-witches-ff-2-5bc-iUI2GKyov6Y9A7ty9KyaI1bKZlY","17-03-2017-the-butterfly-of-the-edge-0d1":"113/path---17-03-2017-the-butterfly-of-the-edge-0-d-1-7c9-JYaQhk7e9cnkOrVka6zY8DcR6w","17-03-2017-the-butterfly-of-the-edge-552":"277/path---17-03-2017-the-butterfly-of-the-edge-552-350-QupURpcZqI8Nys4r28yLIVWw0M","23-03-2017-birch-in-the-roses-a21":"428/path---23-03-2017-birch-in-the-roses-a-21-a70-o1jFBl4s2geMw9Ogw6uFxhB8","23-03-2017-birch-in-the-roses-dcf":"513/path---23-03-2017-birch-in-the-roses-dcf-9f5-fPBDXwLzgiPnlXt2jSzrmMwEOM8","about-f34":"708/path---about-f-34-4c2-0SUcWyAf8ecbYDsMhQkEfPzV8","algorithm-big-number-multiply-42a":"952/path---algorithm-big-number-multiply-42-a-3db-KWqZnwLjazfZULb0TKDrx8B7BM","algorithm-champagne-tower-a6d":"948/path---algorithm-champagne-tower-a-6-d-96c-77SLdiSCXF4TTzq3NTdPXgs5ME","algorithm-check-completeness-of-a-binary-tree-6a3":"757/path---algorithm-check-completeness-of-a-binary-tree-6-a-3-b11-xjikiOJpMUq5cLgyAyDdRIe5w","algorithm-combinations-and-permutations-413":"538/path---algorithm-combinations-and-permutations-413-7f5-J6YFxEpFGxEJ7OoqzLAgIdbOfk","algorithm-find-integer-x-y-for-ax-by-c-9e8":"704/path---algorithm-find-integer-x-y-for-ax-by-c-9-e-8-745-GaEnRQkyq8f6X9rgpCGqWbSjE","algorithm-largest-component-size-by-common-factor-164":"436/path---algorithm-largest-component-size-by-common-factor-164-206-tJDGYiWiWNldnm6RDRoLYWLKLE8","algorithm-linked-list-cycle-ec8":"459/path---algorithm-linked-list-cycle-ec-8-068-wqYWNsDuT7sKC4Xnw0eG9oAA4Q","algorithm-longest-palindrome-substring-e4e":"669/path---algorithm-longest-palindrome-substring-e-4-e-60b-l5Fg4a1KzlLKX8nEe2cvMSo9I","algorithm-majority-element-ad7":"213/path---algorithm-majority-element-ad-7-76e-r7mSlLos9F3h5q5fD9cxgxpcvmw","algorithm-max-chunks-to-make-sorted-ii-5fa":"866/path---algorithm-max-chunks-to-make-sorted-ii-5-fa-1d3-JQwee1rS3Dffcsw7USEUZ71Iy5g","algorithm-python-implementation-of-koch-snowflake-e86":"375/path---algorithm-python-implementation-of-koch-snowflake-e-86-85b-njfII3lvvbNiXAd1lN3Cx5hTOE","algorithm-reaching-points-87d":"43/path---algorithm-reaching-points-87-d-84b-j8oPaIRWuDIZp7qXc8cAvCNz2s","algorithm-regular-expression-for-multiple-of-3-52a":"147/path---algorithm-regular-expression-for-multiple-of-3-52-a-070-UK0XcRrb8avr0FiJp0lEXrVJ5A","algorithm-regular-expression-matching-2b0":"315/path---algorithm-regular-expression-matching-2-b-0-b02-RQk2afMvp3irLolfM43inAqs","algorithm-swim-in-rising-water-9bc":"817/path---algorithm-swim-in-rising-water-9-bc-4a4-igGO7pOKpH8c97ppMRiMOwCwLLY","angels-of-mist-937":"829/path---angels-of-mist-937-349-958Pe4zAqTaptLN0hn72pIdpi4","big-sample-test-859":"579/path---big-sample-test-859-fe1-DhrTDtts24nRPxThaPD2AUZSwEU","big-sample-test-be1":"171/path---big-sample-test-be-1-a84-AXgkXVZwyzGjYcqu0J4fLRHfoI","birch-in-the-roses-bc8":"298/path---birch-in-the-roses-bc-8-3e1-K5rDqNURQtGDz39BLHnaaYSkmhg","bold-mage-ca5":"48/path---bold-mage-ca-5-224-jhsZsn6biLTBADF01K6DQu0ijYg","categories-algorithm-5cf":"143/path---categories-algorithm-5-cf-baf-1os8RelikWA4XjQdQFHgAT6zik","categories-another-one-47b":"226/path---categories-another-one-47-b-ffb-BHucpMjpTi99RQZoVqGphKVWmE","categories-java-da8":"820/path---categories-java-da-8-847-p10JowMNvj7czBLn9oKKTKvw3M","categories-moar-1a3":"324/path---categories-moar-1-a-3-ffc-s8DHEXZtdRw2UgCmP8t1ItrQbk","categories-random-64f":"508/path---categories-random-64-f-f06-zDgSr3xCfEXEh0elDZhcmsxg6pc","categories-something-505":"593/path---categories-something-505-48b-w9PMI0A2IcvhSgHRYpquAGyySuw","categories-tech-169":"810/path---categories-tech-169-287-5SP03BKmlT0utdZwKPlLl3QgbtU","categories-test-3-06a":"626/path---categories-test-3-06-a-7fe-onh2QhlPVGToA0STSj5zfTkx9M","dev-404-page-5f9":"386/path---dev-404-page-5-f-9-fab-0SUcWyAf8ecbYDsMhQkEfPzV8","index":"349/path---index-6a9-nbZhmnRSxEn7ufqwpxB2ZZ0wAs","java-java-generics-tricky-code-ee3":"49/path---java-java-generics-tricky-code-ee-3-024-cko916oMtxAIyrqDeQkNqod0gk","java-java-multi-thread-basic-d47":"335/path---java-java-multi-thread-basic-d-47-653-2eTzH4Kfz9Kr94ozNb4ZVWaOT9o","java-java-multi-thread-synchronize-f96":"608/path---java-java-multi-thread-synchronize-f-96-fbe-PrcwVnyAecrIOwLU1ruTrb38u4","java-java-multi-thread-utils-93d":"184/path---java-java-multi-thread-utils-93-d-4ee-7h8Rs1GlesU8k4VJkPxGkBj3wXE","java-java-多线程同步-e97":"921/path---java-java-多线程同步-e-97-a01-Veo3Hnruf84p6z5pwZtB50LVMc","java-java-多线程工具类-dbe":"432/path---java-java-多线程工具类-dbe-9c1-EoKIq3F8gaI84Oe7CAPVHHmaNh4","java-multibasic-875":"196/path---java-multibasic-875-ea7-Ec3DDTkXsrVJ2igEH5CYCpfK8TQ","java-multisync-545":"457/path---java-multisync-545-e32-1CfYxb8GNrWy5A84VrBNVHsafw","java-multiutil-dc8":"630/path---java-multiutil-dc-8-48c-yND3PYcBf7eK6CgTnXRWQeeFLjQ","offline-plugin-app-shell-fallback-a30":"604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8","random-project-4-with-super-long-title-phase-one-525":"358/path---random-project-4-with-super-long-title-phase-one-525-075-L20kP2jrmmHuCu52OYSZI0blnis","tags-algorithm-e15":"683/path---tags-algorithm-e-15-e83-1G1Yye6X0J793xBmoSAYcSvDG0","tags-another-one-ffb":"116/path---tags-another-one-ffb-d27-oQtgOjMndHKcVMBgCFnjOJxq610","tags-array-a81":"732/path---tags-array-a-81-d93-0dL4sfUI3Ux444u8jvZiPlOkrz0","tags-basic-096":"604/path---tags-basic-096-6e3-f6q5o2EBNVw0ZBpSKPJJz1JOvw","tags-bitwise-8af":"604/path---tags-bitwise-8-af-70e-9PGZpDf3pbUgY7tO54eXi6ApQ","tags-cheese-d66":"234/path---tags-cheese-d-66-89d-HorFVoUSPslVGow4VUa58bAoMrc","tags-combination-0c2":"326/path---tags-combination-0-c-2-86e-LFpgqWd6vCixcYQQyrn8goD9NA","tags-dfa-aef":"23/path---tags-dfa-aef-4ac-ButEKz211wZyZRdMPxVJhkoI9w","tags-dynamic-programming-f82":"229/path---tags-dynamic-programming-f-82-a59-POohdzu46TEkXZDnl7lOiTnmOY","tags-graph-287":"489/path---tags-graph-287-fdd-KNsRVqeMO3S8PqBgeImSwOhJ9Ls","tags-greedy-c3c":"137/path---tags-greedy-c-3-c-979-NIjWpgdEpdmM8dOLdJFjabGSc","tags-huge-691":"20/path---tags-huge-691-a31-kT1GcZGHMsn0JjJIWvZHdTJ7rg","tags-java-0cc":"111/path---tags-java-0-cc-1e2-g8P5DsR4P95V4JuEiUK7nbVWA","tags-java-util-ef2":"59/path---tags-java-util-ef-2-1f9-NEWYDZl7Km3txjSKvX7UGayMH8","tags-jdk-ba8":"669/path---tags-jdk-ba-8-8e1-IK4aDwWnOQTbKNh2aKdE3qJtu4","tags-linear-time-357":"513/path---tags-linear-time-357-048-fkjEHGxswvEnxqnlJDylllDvgs","tags-linkedlist-c99":"987/path---tags-linkedlist-c-99-3d2-zI8nqXpCbd5tLW9kznuHNpr2SQ","tags-math-f2d":"721/path---tags-math-f-2-d-3c3-rNTEis8OmwqVvuhLZseXjqIzpM","tags-more-tags-e75":"6/path---tags-more-tags-e-75-dcf-fPLe5hx7pazEAq9q9YHEqnibkY","tags-multi-thread-0dc":"883/path---tags-multi-thread-0-dc-2ed-7BmQZpIbXIGiHySA2RKohL8a8mQ","tags-other-076":"40/path---tags-other-076-98c-5oqDxrH4WR70MVbrEBtQbAHjszk","tags-permutation-d05":"56/path---tags-permutation-d-05-c8c-j2dqUrQFVQdGtMY6KHYIc4mxHk","tags-programming-bdd":"236/path---tags-programming-bdd-844-EKC9TRNyp0v4aVHmYXJfYWEGXSQ","tags-python-322":"995/path---tags-python-322-e5f-HCeORE8KWqaQc2fPb6qL0T77sw","tags-regular-expression-c20":"141/path---tags-regular-expression-c-20-347-WuDc2IJL0TRF0geFDUFY9e0Rps","tags-say-hi-2ff":"113/path---tags-say-hi-2-ff-e61-WtrxLwg5DsKDhAemgSIdQ04pFM","tags-simulate-f3b":"681/path---tags-simulate-f-3-b-835-VNuuEP3MTTXT9qWI6HIYg1YpUo","tags-something-2a6":"648/path---tags-something-2-a-6-3e6-ajqvVeuCf05yPF21gsQ0oHbjcwE","tags-string-5d7":"286/path---tags-string-5-d-7-de2-pegxXPN7aTuLEpGtfiJSd7ivk","tags-stuff-f30":"363/path---tags-stuff-f-30-c5c-1f6kBTCUXwu5dtIBlSwn3xMJeY","tags-synchronize-7bc":"875/path---tags-synchronize-7-bc-416-59ZifCZfeyoc2OQEKpMlvLbKw","tags-tag-8aa":"609/path---tags-tag-8-aa-71b-eRSTS71xwxoTHeLDFrknkD2plJI","tags-tagging-34b":"410/path---tags-tagging-34-b-bbe-Z2wv6GMkwTmOjwr7KmAwHsMmQ","tags-test-7c5":"333/path---tags-test-7-c-5-3e3-EJYSpPydUmQAzaOWb5aqzS4vnU","tags-testing-09f":"199/path---tags-testing-09-f-cd7-nazTrKKpW49Q8Zb84ndcmoh41s","tags-tree-857":"248/path---tags-tree-857-549-RDVCWOa77tlfhZgRE7rcKmqe6gM","tags-中文-cc6":"976/path---tags-中文-cc-6-65f-c6gM6aUXYCakmKpmqg4WUXzX9RQ","test-453":"860/path---test-453-c74-BawJvyh36KKFwbrWPg4a4aYuc8","the-butterfly-of-the-edge-846":"962/path---the-butterfly-of-the-edge-846-c9a-HvNqdn5OepnKaS4R9tBcNYXXE","the-fairys-witches-ac7":"742/path---the-fairys-witches-ac-7-5d8-AYHPmcMOomJtPh94Sq9RENMUUhE","the-fallen-time-ec0":"199/path---the-fallen-time-ec-0-1c6-fcA2A2E10gGvq1DRYS80qhOyEU"}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    key: "noscript",
    id: "gatsby-noscript"
  }, "This app works best with JavaScript enabled."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n" + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);














var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;

var sanitizeComponents = function sanitizeComponents(components) {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(function (val) {
      return Array.isArray(val) ? val.length > 0 : val;
    });
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion,
    key: "generator-" + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = sanitizeComponents(components);
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = sanitizeComponents(components);
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = sanitizeComponents(components);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = join(process.cwd(), "/public/static/d", dataPaths[page.jsonName] + ".json");

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(__webpack_require__(/*! ./node_modules/gatsby-plugin-offline/app-shell.js */ "./node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-post-jsx": hot(preferDefault(__webpack_require__(/*! ./src/templates/post.jsx */ "./src/templates/post.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(__webpack_require__(/*! ./src/templates/tag.jsx */ "./src/templates/tag.jsx"))),
  "component---src-templates-category-jsx": hot(preferDefault(__webpack_require__(/*! ./src/templates/category.jsx */ "./src/templates/category.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(__webpack_require__(/*! ./src/pages/about.jsx */ "./src/pages/about.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.jsx */ "./src/pages/index.jsx")))
};

/***/ }),

/***/ "./data/SiteConfig.js":
/*!****************************!*\
  !*** ./data/SiteConfig.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

var config = {
  siteTitle: "MSKf's Tree BLOG",
  // Site <title>.
  siteTitleShort: "MSKf's Tree",
  // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "MSKF TREE BLOG",
  // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png",
  // Logo used for SEO and manifest.
  siteUrl: "https://mskf.work",
  // Domain of your website without pathPrefix.
  pathPrefix: "",
  // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "",
  // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml",
  // Path to the RSS file.
  siteFBAppID: "1825356251115265",
  // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5",
  // GA tracking ID.
  disqusShortname: "mskf-work",
  // Disqus shortname.
  postDefaultCategoryID: "Tech",
  // Default category for posts. For Disqus
  dateFromFormat: "YYYY/MM/DD",
  // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY",
  // Date format for display.
  userName: "mskf",
  // Username to display in the author segment.
  userEmail: "gattonero1052@example.com",
  // Email used for RSS feed's author segment
  userTwitter: "",
  // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth",
  // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png",
  // User avatar to display in the author segment.
  userDescription: "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",
  // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [{
    label: "GitHub",
    url: "https://github.com/Vagr9K/gatsby-advanced-starter",
    iconClassName: "fa fa-github"
  }, {
    label: "Twitter",
    url: "https://twitter.com/Vagr9K",
    iconClassName: "fa fa-twitter"
  }, {
    label: "Email",
    url: "mailto:vagr9k@gmail.com",
    iconClassName: "fa fa-envelope"
  }],
  copyright: "Copyright © 2019. Advanced User",
  // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828",
  // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.

}; // Validate
// Make sure pathPrefix is empty if not needed

if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = "/" + config.pathPrefix.replace(/^\/|\/$/g, "");
} // Make sure siteUrl doesn't have an ending forward slash


if (config.siteUrl.substr(-1) === "/") config.siteUrl = config.siteUrl.slice(0, -1); // Make sure siteRss has a starting forward slash

if (config.siteRss && config.siteRss[0] !== "/") config.siteRss = "/" + config.siteRss;
module.exports = config;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/asap/asap.js":
/*!***********************************!*\
  !*** ./node_modules/asap/asap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rawAsap = __webpack_require__(/*! ./raw */ "./node_modules/asap/raw.js");
var freeTasks = [];

/**
 * Calls a task as soon as possible after returning, in its own event, with
 * priority over IO events. An exception thrown in a task can be handled by
 * `process.on("uncaughtException") or `domain.on("error")`, but will otherwise
 * crash the process. If the error is handled, all subsequent tasks will
 * resume.
 *
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawTask.domain = process.domain;
    rawAsap(rawTask);
}

function RawTask() {
    this.task = null;
    this.domain = null;
}

RawTask.prototype.call = function () {
    if (this.domain) {
        this.domain.enter();
    }
    var threw = true;
    try {
        this.task.call();
        threw = false;
        // If the task throws an exception (presumably) Node.js restores the
        // domain stack for the next event.
        if (this.domain) {
            this.domain.exit();
        }
    } finally {
        // We use try/finally and a threw flag to avoid messing up stack traces
        // when we catch and release errors.
        if (threw) {
            // In Node.js, uncaught exceptions are considered fatal errors.
            // Re-throw them to interrupt flushing!
            // Ensure that flushing continues if an uncaught exception is
            // suppressed listening process.on("uncaughtException") or
            // domain.on("error").
            rawAsap.requestFlush();
        }
        // If the task threw an error, we do not want to exit the domain here.
        // Exiting the domain would prevent the domain from catching the error.
        this.task = null;
        this.domain = null;
        freeTasks.push(this);
    }
};



/***/ }),

/***/ "./node_modules/asap/raw.js":
/*!**********************************!*\
  !*** ./node_modules/asap/raw.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var domain; // The domain module is executed on demand
var hasSetImmediate = typeof setImmediate === "function";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including network IO events in Node.js.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Avoids a function call
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory excaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

rawAsap.requestFlush = requestFlush;
function requestFlush() {
    // Ensure flushing is not bound to any domain.
    // It is not sufficient to exit the domain, because domains exist on a stack.
    // To execute code outside of any domain, the following dance is necessary.
    var parentDomain = process.domain;
    if (parentDomain) {
        if (!domain) {
            // Lazy execute the domain module.
            // Only employed if the user elects to use domains.
            domain = __webpack_require__(/*! domain */ "domain");
        }
        domain.active = process.domain = null;
    }

    // `setImmediate` is slower that `process.nextTick`, but `process.nextTick`
    // cannot handle recursion.
    // `requestFlush` will only be called recursively from `asap.js`, to resume
    // flushing after an error is thrown into a domain.
    // Conveniently, `setImmediate` was introduced in the same version
    // `process.nextTick` started throwing recursion errors.
    if (flushing && hasSetImmediate) {
        setImmediate(flush);
    } else {
        process.nextTick(flush);
    }

    if (parentDomain) {
        domain.active = process.domain = parentDomain;
    }
}


/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/DragDropManagerImpl.js":
/*!***************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/DragDropManagerImpl.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragDropManagerImpl; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/dnd-core/node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./node_modules/dnd-core/dist/esm/reducers/index.js");
/* harmony import */ var _actions_dragDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/dragDrop */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js");
/* harmony import */ var _DragDropMonitorImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DragDropMonitorImpl */ "./node_modules/dnd-core/dist/esm/DragDropMonitorImpl.js");
/* harmony import */ var _HandlerRegistryImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HandlerRegistryImpl */ "./node_modules/dnd-core/dist/esm/HandlerRegistryImpl.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







function makeStoreInstance(debugMode) {
  // TODO: if we ever make a react-native version of this,
  // we'll need to consider how to pull off dev-tooling
  var reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], debugMode && reduxDevTools && reduxDevTools({
    name: 'dnd-core',
    instanceId: 'dnd-core'
  }));
}

var DragDropManagerImpl =
/*#__PURE__*/
function () {
  function DragDropManagerImpl() {
    var _this = this;

    var debugMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, DragDropManagerImpl);

    this.isSetUp = false;

    this.handleRefCountChange = function () {
      var shouldSetUp = _this.store.getState().refCount > 0;

      if (_this.backend) {
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();

          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();

          _this.isSetUp = false;
        }
      }
    };

    var store = makeStoreInstance(debugMode);
    this.store = store;
    this.monitor = new _DragDropMonitorImpl__WEBPACK_IMPORTED_MODULE_3__["default"](store, new _HandlerRegistryImpl__WEBPACK_IMPORTED_MODULE_4__["default"](store));
    store.subscribe(this.handleRefCountChange);
  }

  _createClass(DragDropManagerImpl, [{
    key: "receiveBackend",
    value: function receiveBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "getMonitor",
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function getActions() {
      /* eslint-disable-next-line @typescript-eslint/no-this-alias */
      var manager = this;
      var dispatch = this.store.dispatch;

      function bindActionCreator(actionCreator) {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var action = actionCreator.apply(manager, args);

          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      var actions = Object(_actions_dragDrop__WEBPACK_IMPORTED_MODULE_2__["default"])(this);
      return Object.keys(actions).reduce(function (boundActions, key) {
        var action = actions[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }]);

  return DragDropManagerImpl;
}();



/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/DragDropMonitorImpl.js":
/*!***************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/DragDropMonitorImpl.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragDropMonitorImpl; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_matchesType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/matchesType */ "./node_modules/dnd-core/dist/esm/utils/matchesType.js");
/* harmony import */ var _utils_coords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/coords */ "./node_modules/dnd-core/dist/esm/utils/coords.js");
/* harmony import */ var _utils_dirtiness__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dirtiness */ "./node_modules/dnd-core/dist/esm/utils/dirtiness.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var DragDropMonitorImpl =
/*#__PURE__*/
function () {
  function DragDropMonitorImpl(store, registry) {
    _classCallCheck(this, DragDropMonitorImpl);

    this.store = store;
    this.registry = registry;
  }

  _createClass(DragDropMonitorImpl, [{
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        handlerIds: undefined
      };
      var handlerIds = options.handlerIds;
      invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof listener === 'function', 'listener must be a function.');
      invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
      var prevStateId = this.store.getState().stateId;

      var handleChange = function handleChange() {
        var state = _this.store.getState();

        var currentStateId = state.stateId;

        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !Object(_utils_dirtiness__WEBPACK_IMPORTED_MODULE_3__["areDirty"])(state.dirtyHandlerIds, handlerIds);

          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;

      invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof listener === 'function', 'listener must be a function.');
      var previousState = this.store.getState().dragOffset;

      var handleChange = function handleChange() {
        var nextState = _this2.store.getState().dragOffset;

        if (nextState === previousState) {
          return;
        }

        previousState = nextState;
        listener();
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId);
      invariant__WEBPACK_IMPORTED_MODULE_0___default()(source, 'Expected to find a valid source.');

      if (this.isDragging()) {
        return false;
      }

      return source.canDrag(this, sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var target = this.registry.getTarget(targetId);
      invariant__WEBPACK_IMPORTED_MODULE_0___default()(target, 'Expected to find a valid target.');

      if (!this.isDragging() || this.didDrop()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return Object(_utils_matchesType__WEBPACK_IMPORTED_MODULE_1__["default"])(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      // undefined on initial render
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId, true);
      invariant__WEBPACK_IMPORTED_MODULE_0___default()(source, 'Expected to find a valid source.');

      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }

      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();

      if (sourceType !== draggedItemType) {
        return false;
      }

      return source.isDragging(this, sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        shallow: false
      };

      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var shallow = options.shallow;

      if (!this.isDragging()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();

      if (draggedItemType && !Object(_utils_matchesType__WEBPACK_IMPORTED_MODULE_1__["default"])(targetType, draggedItemType)) {
        return false;
      }

      var targetIds = this.getTargetIds();

      if (!targetIds.length) {
        return false;
      }

      var index = targetIds.indexOf(targetId);

      if (shallow) {
        return index === targetIds.length - 1;
      } else {
        return index > -1;
      }
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return Object(_utils_coords__WEBPACK_IMPORTED_MODULE_2__["getSourceClientOffset"])(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return Object(_utils_coords__WEBPACK_IMPORTED_MODULE_2__["getDifferenceFromInitialOffset"])(this.store.getState().dragOffset);
    }
  }]);

  return DragDropMonitorImpl;
}();



/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/HandlerRegistryImpl.js":
/*!***************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/HandlerRegistryImpl.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HandlerRegistryImpl; });
/* harmony import */ var asap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! asap */ "./node_modules/asap/asap.js");
/* harmony import */ var asap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(asap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/registry */ "./node_modules/dnd-core/dist/esm/actions/registry.js");
/* harmony import */ var _utils_getNextUniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/getNextUniqueId */ "./node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interfaces */ "./node_modules/dnd-core/dist/esm/interfaces.js");
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contracts */ "./node_modules/dnd-core/dist/esm/contracts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function getNextHandlerId(role) {
  var id = Object(_utils_getNextUniqueId__WEBPACK_IMPORTED_MODULE_3__["default"])().toString();

  switch (role) {
    case _interfaces__WEBPACK_IMPORTED_MODULE_4__["HandlerRole"].SOURCE:
      return "S".concat(id);

    case _interfaces__WEBPACK_IMPORTED_MODULE_4__["HandlerRole"].TARGET:
      return "T".concat(id);

    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}

function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case 'S':
      return _interfaces__WEBPACK_IMPORTED_MODULE_4__["HandlerRole"].SOURCE;

    case 'T':
      return _interfaces__WEBPACK_IMPORTED_MODULE_4__["HandlerRole"].TARGET;

    default:
      invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "Cannot parse handler ID: ".concat(handlerId));
  }
}

function mapContainsValue(map, searchValue) {
  var entries = map.entries();
  var isDone = false;

  do {
    var _entries$next = entries.next(),
        done = _entries$next.done,
        _entries$next$value = _slicedToArray(_entries$next.value, 2),
        value = _entries$next$value[1];

    if (value === searchValue) {
      return true;
    }

    isDone = !!done;
  } while (!isDone);

  return false;
}

var HandlerRegistryImpl =
/*#__PURE__*/
function () {
  function HandlerRegistryImpl(store) {
    _classCallCheck(this, HandlerRegistryImpl);

    this.types = new Map();
    this.dragSources = new Map();
    this.dropTargets = new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }

  _createClass(HandlerRegistryImpl, [{
    key: "addSource",
    value: function addSource(type, source) {
      Object(_contracts__WEBPACK_IMPORTED_MODULE_5__["validateType"])(type);
      Object(_contracts__WEBPACK_IMPORTED_MODULE_5__["validateSourceContract"])(source);
      var sourceId = this.addHandler(_interfaces__WEBPACK_IMPORTED_MODULE_4__["HandlerRole"].SOURCE, type, source);
      this.store.dispatch(Object(_actions_registry__WEBPACK_IMPORTED_MODULE_2__["addSource"])(sourceId));
      return sourceId;
    }
  }, {
    key: "addTarget",
    value: function addTarget(type, target) {
      Object(_contracts__WEBPACK_IMPORTED_MODULE_5__["validateType"])(type, true);
      Object(_contracts__WEBPACK_IMPORTED_MODULE_5__["validateTargetContract"])(target);
      var targetId = this.addHandler(_interfaces__WEBPACK_IMPORTED_MODULE_4__["HandlerRole"].TARGET, type, target);
      this.store.dispatch(Object(_actions_registry__WEBPACK_IMPORTED_MODULE_2__["addTarget"])(targetId));
      return targetId;
    }
  }, {
    key: "containsHandler",
    value: function containsHandler(handler) {
      return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
  }, {
    key: "getSource",
    value: function getSource(sourceId) {
      var includePinned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      invariant__WEBPACK_IMPORTED_MODULE_1___default()(this.isSourceId(sourceId), 'Expected a valid source ID.');
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    }
  }, {
    key: "getTarget",
    value: function getTarget(targetId) {
      invariant__WEBPACK_IMPORTED_MODULE_1___default()(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.dropTargets.get(targetId);
    }
  }, {
    key: "getSourceType",
    value: function getSourceType(sourceId) {
      invariant__WEBPACK_IMPORTED_MODULE_1___default()(this.isSourceId(sourceId), 'Expected a valid source ID.');
      return this.types.get(sourceId);
    }
  }, {
    key: "getTargetType",
    value: function getTargetType(targetId) {
      invariant__WEBPACK_IMPORTED_MODULE_1___default()(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.types.get(targetId);
    }
  }, {
    key: "isSourceId",
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === _interfaces__WEBPACK_IMPORTED_MODULE_4__["HandlerRole"].SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === _interfaces__WEBPACK_IMPORTED_MODULE_4__["HandlerRole"].TARGET;
    }
  }, {
    key: "removeSource",
    value: function removeSource(sourceId) {
      var _this = this;

      invariant__WEBPACK_IMPORTED_MODULE_1___default()(this.getSource(sourceId), 'Expected an existing source.');
      this.store.dispatch(Object(_actions_registry__WEBPACK_IMPORTED_MODULE_2__["removeSource"])(sourceId));
      asap__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        _this.dragSources.delete(sourceId);

        _this.types.delete(sourceId);
      });
    }
  }, {
    key: "removeTarget",
    value: function removeTarget(targetId) {
      invariant__WEBPACK_IMPORTED_MODULE_1___default()(this.getTarget(targetId), 'Expected an existing target.');
      this.store.dispatch(Object(_actions_registry__WEBPACK_IMPORTED_MODULE_2__["removeTarget"])(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    }
  }, {
    key: "pinSource",
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      invariant__WEBPACK_IMPORTED_MODULE_1___default()(source, 'Expected an existing source.');
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: "unpinSource",
    value: function unpinSource() {
      invariant__WEBPACK_IMPORTED_MODULE_1___default()(this.pinnedSource, 'No source is pinned at the time.');
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function addHandler(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types.set(id, type);

      if (role === _interfaces__WEBPACK_IMPORTED_MODULE_4__["HandlerRole"].SOURCE) {
        this.dragSources.set(id, handler);
      } else if (role === _interfaces__WEBPACK_IMPORTED_MODULE_4__["HandlerRole"].TARGET) {
        this.dropTargets.set(id, handler);
      }

      return id;
    }
  }]);

  return HandlerRegistryImpl;
}();



/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js":
/*!**********************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createBeginDrag; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _local_setClientOffset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local/setClientOffset */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");




var ResetCoordinatesAction = {
  type: _types__WEBPACK_IMPORTED_MODULE_3__["INIT_COORDS"],
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    var sourceIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      publishSource: true
    };
    var _options$publishSourc = options.publishSource,
        publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc,
        clientOffset = options.clientOffset,
        getSourceClientOffset = options.getSourceClientOffset;
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry(); // Initialize the coordinates using the client offset

    manager.dispatch(Object(_local_setClientOffset__WEBPACK_IMPORTED_MODULE_1__["setClientOffset"])(clientOffset));
    verifyInvariants(sourceIds, monitor, registry); // Get the draggable source

    var sourceId = getDraggableSource(sourceIds, monitor);

    if (sourceId === null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    } // Get the source client offset


    var sourceClientOffset = null;

    if (clientOffset) {
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
      sourceClientOffset = getSourceClientOffset(sourceId);
    } // Initialize the full coordinates


    manager.dispatch(Object(_local_setClientOffset__WEBPACK_IMPORTED_MODULE_1__["setClientOffset"])(clientOffset, sourceClientOffset));
    var source = registry.getSource(sourceId);
    var item = source.beginDrag(monitor, sourceId);
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    var itemType = registry.getSourceType(sourceId);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_3__["BEGIN_DRAG"],
      payload: {
        itemType: itemType,
        item: item,
        sourceId: sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}

function verifyInvariants(sourceIds, monitor, registry) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
  sourceIds.forEach(function (sourceId) {
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
  });
}

function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}

function verifyItemIsObject(item) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_2__["isObject"])(item), 'Item must be an object.');
}

function getDraggableSource(sourceIds, monitor) {
  var sourceId = null;

  for (var i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }

  return sourceId;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js":
/*!*****************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDrop; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function createDrop(manager) {
  return function drop() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyInvariants(monitor);
    var targetIds = getDroppableTargets(monitor); // Multiple actions are dispatched here, which is why this doesn't return an action

    targetIds.forEach(function (targetId, index) {
      var dropResult = determineDropResult(targetId, index, registry, monitor);
      var action = {
        type: _types__WEBPACK_IMPORTED_MODULE_1__["DROP"],
        payload: {
          dropResult: _objectSpread({}, options, {}, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}

function verifyInvariants(monitor) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(monitor.isDragging(), 'Cannot call drop while not dragging.');
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}

function determineDropResult(targetId, index, registry, monitor) {
  var target = registry.getTarget(targetId);
  var dropResult = target ? target.drop(monitor, targetId) : undefined;
  verifyDropResultType(dropResult);

  if (typeof dropResult === 'undefined') {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }

  return dropResult;
}

function verifyDropResultType(dropResult) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof dropResult === 'undefined' || Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_2__["isObject"])(dropResult), 'Drop result must either be an object or undefined.');
}

function getDroppableTargets(monitor) {
  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js":
/*!********************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createEndDrag; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");


function createEndDrag(manager) {
  return function endDrag() {
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyIsDragging(monitor);
    var sourceId = monitor.getSourceId();
    var source = registry.getSource(sourceId, true);
    source.endDrag(monitor, sourceId);
    registry.unpinSource();
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__["END_DRAG"]
    };
  };
}

function verifyIsDragging(monitor) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js":
/*!******************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHover; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_matchesType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/matchesType */ "./node_modules/dnd-core/dist/esm/utils/matchesType.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");



function createHover(manager) {
  return function hover(targetIdsArg) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        clientOffset = _ref.clientOffset;

    verifyTargetIdsIsArray(targetIdsArg);
    var targetIds = targetIdsArg.slice(0);
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    checkInvariants(targetIds, monitor, registry);
    var draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_2__["HOVER"],
      payload: {
        targetIds: targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}

function verifyTargetIdsIsArray(targetIdsArg) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}

function checkInvariants(targetIds, monitor, registry) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(monitor.isDragging(), 'Cannot call hover while not dragging.');
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(!monitor.didDrop(), 'Cannot call hover after drop.');

  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
    var target = registry.getTarget(targetId);
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(target, 'Expected targetIds to be registered.');
  }
}

function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  // Remove those targetIds that don't match the targetType.  This
  // fixes shallow isOver which would only be non-shallow because of
  // non-matching targets.
  for (var i = targetIds.length - 1; i >= 0; i--) {
    var targetId = targetIds[i];
    var targetType = registry.getTargetType(targetId);

    if (!Object(_utils_matchesType__WEBPACK_IMPORTED_MODULE_1__["default"])(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}

function hoverAllTargets(targetIds, monitor, registry) {
  // Finally call hover on all matching targets.
  targetIds.forEach(function (targetId) {
    var target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js ***!
  \******************************************************************/
/*! exports provided: default, INIT_COORDS, BEGIN_DRAG, PUBLISH_DRAG_SOURCE, HOVER, DROP, END_DRAG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDragDropActions; });
/* harmony import */ var _beginDrag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beginDrag */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js");
/* harmony import */ var _publishDragSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publishDragSource */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js");
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hover */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js");
/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drop */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js");
/* harmony import */ var _endDrag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endDrag */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INIT_COORDS", function() { return _types__WEBPACK_IMPORTED_MODULE_5__["INIT_COORDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEGIN_DRAG", function() { return _types__WEBPACK_IMPORTED_MODULE_5__["BEGIN_DRAG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PUBLISH_DRAG_SOURCE", function() { return _types__WEBPACK_IMPORTED_MODULE_5__["PUBLISH_DRAG_SOURCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HOVER", function() { return _types__WEBPACK_IMPORTED_MODULE_5__["HOVER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROP", function() { return _types__WEBPACK_IMPORTED_MODULE_5__["DROP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "END_DRAG", function() { return _types__WEBPACK_IMPORTED_MODULE_5__["END_DRAG"]; });







function createDragDropActions(manager) {
  return {
    beginDrag: Object(_beginDrag__WEBPACK_IMPORTED_MODULE_0__["default"])(manager),
    publishDragSource: Object(_publishDragSource__WEBPACK_IMPORTED_MODULE_1__["default"])(manager),
    hover: Object(_hover__WEBPACK_IMPORTED_MODULE_2__["default"])(manager),
    drop: Object(_drop__WEBPACK_IMPORTED_MODULE_3__["default"])(manager),
    endDrag: Object(_endDrag__WEBPACK_IMPORTED_MODULE_4__["default"])(manager)
  };
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js ***!
  \**********************************************************************************/
/*! exports provided: setClientOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClientOffset", function() { return setClientOffset; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");

function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["INIT_COORDS"],
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js":
/*!******************************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPublishDragSource; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");

function createPublishDragSource(manager) {
  return function publishDragSource() {
    var monitor = manager.getMonitor();

    if (monitor.isDragging()) {
      return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__["PUBLISH_DRAG_SOURCE"]
      };
    }
  };
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js ***!
  \******************************************************************/
/*! exports provided: INIT_COORDS, BEGIN_DRAG, PUBLISH_DRAG_SOURCE, HOVER, DROP, END_DRAG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_COORDS", function() { return INIT_COORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEGIN_DRAG", function() { return BEGIN_DRAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLISH_DRAG_SOURCE", function() { return PUBLISH_DRAG_SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOVER", function() { return HOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROP", function() { return DROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_DRAG", function() { return END_DRAG; });
var INIT_COORDS = 'dnd-core/INIT_COORDS';
var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = 'dnd-core/HOVER';
var DROP = 'dnd-core/DROP';
var END_DRAG = 'dnd-core/END_DRAG';

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/registry.js":
/*!************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/registry.js ***!
  \************************************************************/
/*! exports provided: ADD_SOURCE, ADD_TARGET, REMOVE_SOURCE, REMOVE_TARGET, addSource, addTarget, removeSource, removeTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SOURCE", function() { return ADD_SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TARGET", function() { return ADD_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SOURCE", function() { return REMOVE_SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TARGET", function() { return REMOVE_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSource", function() { return addSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTarget", function() { return addTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSource", function() { return removeSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTarget", function() { return removeTarget; });
var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId: targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId: targetId
    }
  };
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/contracts.js":
/*!*****************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/contracts.js ***!
  \*****************************************************/
/*! exports provided: validateSourceContract, validateTargetContract, validateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSourceContract", function() { return validateSourceContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTargetContract", function() { return validateTargetContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateType", function() { return validateType; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


function validateSourceContract(source) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof target.hover === 'function', 'Expected hover to be a function.');
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(function (t) {
      return validateType(t, false);
    });
    return;
  }

  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof type === 'string' || _typeof(type) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/factories.js":
/*!*****************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/factories.js ***!
  \*****************************************************/
/*! exports provided: createDragDropManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDragDropManager", function() { return createDragDropManager; });
/* harmony import */ var _DragDropManagerImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragDropManagerImpl */ "./node_modules/dnd-core/dist/esm/DragDropManagerImpl.js");

function createDragDropManager(backendFactory, globalContext, backendOptions, debugMode) {
  var manager = new _DragDropManagerImpl__WEBPACK_IMPORTED_MODULE_0__["default"](debugMode);
  var backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/index.js ***!
  \*************************************************/
/*! exports provided: HandlerRole, createDragDropManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "./node_modules/dnd-core/dist/esm/interfaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HandlerRole", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__["HandlerRole"]; });

/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ "./node_modules/dnd-core/dist/esm/factories.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDragDropManager", function() { return _factories__WEBPACK_IMPORTED_MODULE_1__["createDragDropManager"]; });




/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/interfaces.js":
/*!******************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/interfaces.js ***!
  \******************************************************/
/*! exports provided: HandlerRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlerRole", function() { return HandlerRole; });
var HandlerRole;

(function (HandlerRole) {
  HandlerRole["SOURCE"] = "SOURCE";
  HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js":
/*!********************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dirtyHandlerIds; });
/* harmony import */ var _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/dragDrop */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js");
/* harmony import */ var _actions_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/registry */ "./node_modules/dnd-core/dist/esm/actions/registry.js");
/* harmony import */ var _utils_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/equality */ "./node_modules/dnd-core/dist/esm/utils/equality.js");
/* harmony import */ var _utils_dirtiness__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dirtiness */ "./node_modules/dnd-core/dist/esm/utils/dirtiness.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");





function dirtyHandlerIds() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_dirtiness__WEBPACK_IMPORTED_MODULE_3__["NONE"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["HOVER"]:
      break;

    case _actions_registry__WEBPACK_IMPORTED_MODULE_1__["ADD_SOURCE"]:
    case _actions_registry__WEBPACK_IMPORTED_MODULE_1__["ADD_TARGET"]:
    case _actions_registry__WEBPACK_IMPORTED_MODULE_1__["REMOVE_TARGET"]:
    case _actions_registry__WEBPACK_IMPORTED_MODULE_1__["REMOVE_SOURCE"]:
      return _utils_dirtiness__WEBPACK_IMPORTED_MODULE_3__["NONE"];

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["BEGIN_DRAG"]:
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["PUBLISH_DRAG_SOURCE"]:
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["END_DRAG"]:
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["DROP"]:
    default:
      return _utils_dirtiness__WEBPACK_IMPORTED_MODULE_3__["ALL"];
  }

  var _action$payload = action.payload,
      _action$payload$targe = _action$payload.targetIds,
      targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe,
      _action$payload$prevT = _action$payload.prevTargetIds,
      prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
  var result = Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_4__["xor"])(targetIds, prevTargetIds);
  var didChange = result.length > 0 || !Object(_utils_equality__WEBPACK_IMPORTED_MODULE_2__["areArraysEqual"])(targetIds, prevTargetIds);

  if (!didChange) {
    return _utils_dirtiness__WEBPACK_IMPORTED_MODULE_3__["NONE"];
  } // Check the target ids at the innermost position. If they are valid, add them
  // to the result


  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];

  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }

    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/dragOffset.js":
/*!***************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/dragOffset.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dragOffset; });
/* harmony import */ var _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/dragDrop */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js");
/* harmony import */ var _utils_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/equality */ "./node_modules/dnd-core/dist/esm/utils/equality.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function dragOffset() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["INIT_COORDS"]:
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["BEGIN_DRAG"]:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["HOVER"]:
      if (Object(_utils_equality__WEBPACK_IMPORTED_MODULE_1__["areCoordsEqual"])(state.clientOffset, payload.clientOffset)) {
        return state;
      }

      return _objectSpread({}, state, {
        clientOffset: payload.clientOffset
      });

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["END_DRAG"]:
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["DROP"]:
      return initialState;

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/dragOperation.js":
/*!******************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/dragOperation.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dragOperation; });
/* harmony import */ var _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/dragDrop */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js");
/* harmony import */ var _actions_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/registry */ "./node_modules/dnd-core/dist/esm/actions/registry.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function dragOperation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["BEGIN_DRAG"]:
      return _objectSpread({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["PUBLISH_DRAG_SOURCE"]:
      return _objectSpread({}, state, {
        isSourcePublic: true
      });

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["HOVER"]:
      return _objectSpread({}, state, {
        targetIds: payload.targetIds
      });

    case _actions_registry__WEBPACK_IMPORTED_MODULE_1__["REMOVE_TARGET"]:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }

      return _objectSpread({}, state, {
        targetIds: Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_2__["without"])(state.targetIds, payload.targetId)
      });

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["DROP"]:
      return _objectSpread({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__["END_DRAG"]:
      return _objectSpread({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reduce; });
/* harmony import */ var _dragOffset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragOffset */ "./node_modules/dnd-core/dist/esm/reducers/dragOffset.js");
/* harmony import */ var _dragOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragOperation */ "./node_modules/dnd-core/dist/esm/reducers/dragOperation.js");
/* harmony import */ var _refCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refCount */ "./node_modules/dnd-core/dist/esm/reducers/refCount.js");
/* harmony import */ var _dirtyHandlerIds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dirtyHandlerIds */ "./node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js");
/* harmony import */ var _stateId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateId */ "./node_modules/dnd-core/dist/esm/reducers/stateId.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    dirtyHandlerIds: Object(_dirtyHandlerIds__WEBPACK_IMPORTED_MODULE_3__["default"])(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread({}, action.payload, {
        prevTargetIds: Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_5__["get"])(state, 'dragOperation.targetIds', [])
      })
    }),
    dragOffset: Object(_dragOffset__WEBPACK_IMPORTED_MODULE_0__["default"])(state.dragOffset, action),
    refCount: Object(_refCount__WEBPACK_IMPORTED_MODULE_2__["default"])(state.refCount, action),
    dragOperation: Object(_dragOperation__WEBPACK_IMPORTED_MODULE_1__["default"])(state.dragOperation, action),
    stateId: Object(_stateId__WEBPACK_IMPORTED_MODULE_4__["default"])(state.stateId)
  };
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/refCount.js":
/*!*************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/refCount.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return refCount; });
/* harmony import */ var _actions_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/registry */ "./node_modules/dnd-core/dist/esm/actions/registry.js");

function refCount() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_registry__WEBPACK_IMPORTED_MODULE_0__["ADD_SOURCE"]:
    case _actions_registry__WEBPACK_IMPORTED_MODULE_0__["ADD_TARGET"]:
      return state + 1;

    case _actions_registry__WEBPACK_IMPORTED_MODULE_0__["REMOVE_SOURCE"]:
    case _actions_registry__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TARGET"]:
      return state - 1;

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/stateId.js":
/*!************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/stateId.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stateId; });
function stateId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return state + 1;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/coords.js":
/*!********************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/coords.js ***!
  \********************************************************/
/*! exports provided: add, subtract, getSourceClientOffset, getDifferenceFromInitialOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSourceClientOffset", function() { return getSourceClientOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDifferenceFromInitialOffset", function() { return getDifferenceFromInitialOffset; });
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */

function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */

function getSourceClientOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset,
      initialSourceClientOffset = state.initialSourceClientOffset;

  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }

  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */

function getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset;

  if (!clientOffset || !initialClientOffset) {
    return null;
  }

  return subtract(clientOffset, initialClientOffset);
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/dirtiness.js":
/*!***********************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/dirtiness.js ***!
  \***********************************************************/
/*! exports provided: NONE, ALL, areDirty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NONE", function() { return NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areDirty", function() { return areDirty; });
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");

var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */

function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }

  if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
    return true;
  }

  var commonIds = Object(_js_utils__WEBPACK_IMPORTED_MODULE_0__["intersection"])(handlerIds, dirtyIds);
  return commonIds.length > 0;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/equality.js":
/*!**********************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/equality.js ***!
  \**********************************************************/
/*! exports provided: strictEquality, areCoordsEqual, areArraysEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strictEquality", function() { return strictEquality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areCoordsEqual", function() { return areCoordsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areArraysEqual", function() { return areArraysEqual; });
var strictEquality = function strictEquality(a, b) {
  return a === b;
};
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */

function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */

function areArraysEqual(a, b) {
  var isEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : strictEquality;

  if (a.length !== b.length) {
    return false;
  }

  for (var i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js":
/*!*****************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNextUniqueId; });
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/js_utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/js_utils.js ***!
  \**********************************************************/
/*! exports provided: get, without, isString, isObject, xor, intersection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return xor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return intersection; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// cheap lodash replacements

/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */
function get(obj, path, defaultValue) {
  return path.split('.').reduce(function (a, c) {
    return a && a[c] ? a[c] : defaultValue || null;
  }, obj);
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isString(input) {
  return typeof input === 'string';
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isObject(input) {
  return _typeof(input) === 'object';
}
/**
 * repalcement for _.xor
 * @param itemsA
 * @param itemsB
 */

function xor(itemsA, itemsB) {
  var map = new Map();

  var insertItem = function insertItem(item) {
    return map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };

  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  map.forEach(function (count, key) {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */

function intersection(itemsA, itemsB) {
  return itemsA.filter(function (t) {
    return itemsB.indexOf(t) > -1;
  });
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/matchesType.js":
/*!*************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/matchesType.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return matchesType; });
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }

  return Array.isArray(targetType) ? targetType.some(function (t) {
    return t === draggedItemType;
  }) : targetType === draggedItemType;
}

/***/ }),

/***/ "./node_modules/dnd-core/node_modules/redux/es/redux.js":
/*!**************************************************************!*\
  !*** ./node_modules/dnd-core/node_modules/redux/es/redux.js ***!
  \**************************************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

function withPrefix(path) {
  return normalizePath([ true ? "" : undefined, path].join("/"));
}

function withAssetPrefix(path) {
  return [""].concat([path.replace(/^\//, "")]).join("/");
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-feed/gatsby-ssr.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-feed/gatsby-ssr.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _internals = __webpack_require__(/*! ./internals */ "./node_modules/gatsby-plugin-feed/internals.js");

// TODO: remove for v3
var withPrefix = _gatsby.withAssetPrefix || _gatsby.withPrefix;

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  var _defaultOptions$plugi = (0, _extends2.default)({}, _internals.defaultOptions, pluginOptions),
      feeds = _defaultOptions$plugi.feeds;

  var links = feeds.map(function (_ref2, i) {
    var output = _ref2.output,
        title = _ref2.title;

    if (output.charAt(0) !== "/") {
      output = "/" + output;
    }

    return _react.default.createElement("link", {
      key: "gatsby-plugin-feed-" + i,
      rel: "alternate",
      type: "application/rss+xml",
      title: title,
      href: withPrefix(output)
    });
  });
  setHeadComponents(links);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-feed/internals.js":
/*!******************************************************!*\
  !*** ./node_modules/gatsby-plugin-feed/internals.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.defaultOptions = exports.runQuery = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var runQuery = function runQuery(handler, query) {
  return handler(query).then(function (r) {
    if (r.errors) {
      throw new Error(r.errors.join(", "));
    }

    return r.data;
  });
};

exports.runQuery = runQuery;
var defaultOptions = {
  // Override if you want to manually specify the RSS "generator" tag.
  generator: "GatsbyJS",
  // Run a default query to gather some information about the site.
  query: "\n    {\n      site {\n        siteMetadata {\n          title\n          description\n          siteUrl\n          site_url: siteUrl\n        }\n      }\n    }\n  ",
  // Setup an RSS object, merging on various feed-specific options.
  setup: function setup(_ref) {
    var _ref$query = _ref.query,
        siteMetadata = _ref$query.site.siteMetadata,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_ref$query, ["site"]);
    return (0, _extends2.default)({}, siteMetadata, rest);
  },
  // Create a default RSS feed. Others may be added by using the format below.
  feeds: [{
    query: "\n      {\n        allMarkdownRemark(\n          limit: 1000,\n          sort: {\n            order: DESC,\n            fields: [frontmatter___date]\n          }\n        ) {\n          edges {\n            node {\n              frontmatter {\n                title\n                date\n              }\n              fields {\n                slug\n              }\n              excerpt\n              html\n            }\n          }\n        }\n      }\n    ",
    // Where we will save the feed generated by this query.
    output: "rss.xml",
    // Use a title when reference a RSS feed in Link element.
    title: null
  }]
};
exports.defaultOptions = defaultOptions;

/***/ }),

/***/ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var knownOptions = {
  clientId: "string",
  sampleRate: "number",
  siteSpeedSampleRate: "number",
  alwaysSendReferrer: "boolean",
  allowAnchor: "boolean",
  cookieName: "string",
  cookieExpires: "number",
  storeGac: "boolean",
  legacyCookieDomain: "string",
  legacyHistoryImport: "boolean",
  allowLinker: "boolean"
};

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;

  if (false) {} // Lighthouse recommends pre-connecting to google analytics


  setHeadComponents([_react.default.createElement("link", {
    rel: "preconnect dns-prefetch",
    key: "preconnect-google-analytics",
    href: "https://www.google-analytics.com"
  })]);
  var excludeGAPaths = [];

  if (typeof pluginOptions.exclude !== "undefined") {
    var Minimatch = __webpack_require__(/*! minimatch */ "minimatch").Minimatch;

    pluginOptions.exclude.map(function (exclude) {
      var mm = new Minimatch(exclude);
      excludeGAPaths.push(mm.makeRe());
    });
  }

  var gaCreateOptions = {};

  for (var option in knownOptions) {
    if (typeof pluginOptions[option] === knownOptions[option]) {
      gaCreateOptions[option] = pluginOptions[option];
    }
  }

  var setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
  return setComponents([_react.default.createElement("script", {
    key: "gatsby-plugin-google-analytics",
    dangerouslySetInnerHTML: {
      __html: "\n  " + (excludeGAPaths.length ? "window.excludeGAPaths=[" + excludeGAPaths.join(",") + "];" : "") + "\n  " + (typeof pluginOptions.anonymize !== "undefined" && pluginOptions.anonymize === true ? "function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='" + pluginOptions.trackingId + "',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);" : "") + "\n  if(" + (typeof pluginOptions.respectDNT !== "undefined" && pluginOptions.respectDNT == true ? "!(navigator.doNotTrack == \"1\" || window.doNotTrack == \"1\")" : "true") + ") {\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n  }\n  if (typeof ga === \"function\") {\n    ga('create', '" + pluginOptions.trackingId + "', '" + (typeof pluginOptions.cookieDomain === "string" ? pluginOptions.cookieDomain : "auto") + "', " + (typeof pluginOptions.name === "string" ? "'" + pluginOptions.name + "', " : "") + JSON.stringify(gaCreateOptions) + ");\n      " + (typeof pluginOptions.anonymize !== "undefined" && pluginOptions.anonymize === true ? "ga('set', 'anonymizeIp', true);" : "") + "\n      " + (typeof pluginOptions.optimizeId !== "undefined" ? "ga('require', '" + pluginOptions.optimizeId + "');" : "") + "\n      " + (typeof pluginOptions.experimentId !== "undefined" ? "ga('set', 'expId', '" + pluginOptions.experimentId + "');" : "") + "\n      " + (typeof pluginOptions.variationId !== "undefined" ? "ga('set', 'expVar', '" + pluginOptions.variationId + "');" : "") + "}\n      "
    }
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

// default icons for generating icons
exports.defaultIcons = [{
  src: "icons/icon-48x48.png",
  sizes: "48x48",
  type: "image/png"
}, {
  src: "icons/icon-72x72.png",
  sizes: "72x72",
  type: "image/png"
}, {
  src: "icons/icon-96x96.png",
  sizes: "96x96",
  type: "image/png"
}, {
  src: "icons/icon-144x144.png",
  sizes: "144x144",
  type: "image/png"
}, {
  src: "icons/icon-192x192.png",
  sizes: "192x192",
  type: "image/png"
}, {
  src: "icons/icon-256x256.png",
  sizes: "256x256",
  type: "image/png"
}, {
  src: "icons/icon-384x384.png",
  sizes: "384x384",
  type: "image/png"
}, {
  src: "icons/icon-512x512.png",
  sizes: "512x512",
  type: "image/png"
}];
/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */

exports.doesIconExist = function doesIconExist(srcIcon) {
  try {
    return _fs.default.statSync(srcIcon).isFile();
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw e;
    }

    return false;
  }
};
/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */


exports.addDigestToPath = function (path, digest, method) {
  if (method === "name") {
    var parsedPath = _path.default.parse(path);

    return parsedPath.dir + "/" + parsedPath.name + "-" + digest + parsedPath.ext;
  }

  if (method === "query") {
    return path + "?v=" + digest;
  }

  return path;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _createContentDigest = _interopRequireDefault(__webpack_require__(/*! gatsby/dist/utils/create-content-digest */ "./node_modules/gatsby/dist/utils/create-content-digest.js"));

var _common = __webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");

// TODO: remove for v3
var withPrefix = _gatsby.withAssetPrefix || _gatsby.withPrefix;
var iconDigest = null;

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
  var headComponents = [];
  var srcIconExists = !!pluginOptions.icon;
  var icons = pluginOptions.icons || _common.defaultIcons;
  var legacy = typeof pluginOptions.legacy !== "undefined" ? pluginOptions.legacy : true;
  var cacheBusting = typeof pluginOptions.cache_busting_mode !== "undefined" ? pluginOptions.cache_busting_mode : "query"; // If icons were generated, also add a favicon link.

  if (srcIconExists) {
    var favicon = icons && icons.length ? icons[0].src : null;

    if (cacheBusting !== "none") {
      iconDigest = (0, _createContentDigest.default)(_fs.default.readFileSync(pluginOptions.icon));
    }

    var insertFaviconLinkTag = typeof pluginOptions.include_favicon !== "undefined" ? pluginOptions.include_favicon : true;

    if (favicon && insertFaviconLinkTag) {
      headComponents.push(_react.default.createElement("link", {
        key: "gatsby-plugin-manifest-icon-link",
        rel: "shortcut icon",
        href: withPrefix((0, _common.addDigestToPath)(favicon, iconDigest, cacheBusting))
      }));
    }
  } // Add manifest link tag.


  headComponents.push(_react.default.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: withPrefix("manifest.webmanifest"),
    crossOrigin: pluginOptions.crossOrigin
  })); // The user has an option to opt out of the theme_color meta tag being inserted into the head.

  if (pluginOptions.theme_color) {
    var insertMetaTag = typeof pluginOptions.theme_color_in_head !== "undefined" ? pluginOptions.theme_color_in_head : true;

    if (insertMetaTag) {
      headComponents.push(_react.default.createElement("meta", {
        key: "gatsby-plugin-manifest-meta",
        name: "theme-color",
        content: pluginOptions.theme_color
      }));
    }
  }

  if (legacy) {
    var iconLinkTags = icons.map(function (icon) {
      return _react.default.createElement("link", {
        key: "gatsby-plugin-manifest-apple-touch-icon-" + icon.sizes,
        rel: "apple-touch-icon",
        sizes: icon.sizes,
        href: withPrefix((0, _common.addDigestToPath)(icon.src, iconDigest, srcIconExists ? cacheBusting : "none"))
      });
    });
    headComponents = headComponents.concat(iconLinkTags);
  }

  setHeadComponents(headComponents);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/app-shell.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/app-shell.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var AppShell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AppShell, _React$Component);

  function AppShell() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AppShell.prototype;

  _proto.render = function render() {
    return _react.default.createElement(_react.default.Fragment, null);
  };

  return AppShell;
}(_react.default.Component);

var _default = AppShell;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _internals = __webpack_require__(/*! ./internals */ "./node_modules/gatsby-plugin-sitemap/internals.js");

// TODO: remove for v3
var withPrefix = _gatsby.withAssetPrefix || _gatsby.withPrefix;

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  var _defaultOptions$plugi = (0, _extends2.default)({}, _internals.defaultOptions, pluginOptions),
      output = _defaultOptions$plugi.output,
      createLinkInHead = _defaultOptions$plugi.createLinkInHead;

  if (!createLinkInHead) {
    return;
  }

  if (output.charAt(0) !== "/") {
    output = "/" + output;
  }

  setHeadComponents([_react.default.createElement("link", {
    key: "gatsby-plugin-sitemap",
    rel: "sitemap",
    type: "application/xml",
    href: withPrefix(output)
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/internals.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/internals.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.defaultOptions = exports.runQuery = exports.renameFile = exports.writeFile = exports.withoutTrailingSlash = void 0;

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _pify = _interopRequireDefault(__webpack_require__(/*! pify */ "pify"));

var _minimatch = _interopRequireDefault(__webpack_require__(/*! minimatch */ "minimatch"));

var withoutTrailingSlash = function withoutTrailingSlash(path) {
  return path === "/" ? path : path.replace(/\/$/, "");
};

exports.withoutTrailingSlash = withoutTrailingSlash;
var writeFile = (0, _pify.default)(_fs.default.writeFile);
exports.writeFile = writeFile;
var renameFile = (0, _pify.default)(_fs.default.rename);
exports.renameFile = renameFile;

var runQuery = function runQuery(handler, query, excludes, pathPrefix) {
  return handler(query).then(function (r) {
    if (r.errors) {
      throw new Error(r.errors.join(", "));
    } // Removing excluded paths


    r.data.allSitePage.edges = r.data.allSitePage.edges.filter(function (page) {
      return !excludes.some(function (excludedRoute) {
        return (0, _minimatch.default)(withoutTrailingSlash(page.node.path), excludedRoute);
      });
    }); // Add path prefix

    r.data.allSitePage.edges = r.data.allSitePage.edges.map(function (page) {
      page.node.path = (pathPrefix + page.node.path).replace(/^\/\//g, "/");
      return page;
    });

    if (!r.data.site.siteMetadata.siteUrl) {
      throw new Error("SiteMetaData 'siteUrl' property is required. Check out the documentation to see a working example: https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#how-to-use");
    } // remove trailing slash of siteUrl


    r.data.site.siteMetadata.siteUrl = withoutTrailingSlash(r.data.site.siteMetadata.siteUrl);
    return r.data;
  });
};

exports.runQuery = runQuery;
var defaultOptions = {
  query: "\n    {\n      site {\n        siteMetadata {\n          siteUrl\n        }\n      }\n\n      allSitePage {\n        edges {\n          node {\n            path\n          }\n        }\n      }\n  }",
  output: "/sitemap.xml",
  exclude: ["/dev-404-page", "/404", "/404.html", "/offline-plugin-app-shell-fallback"],
  createLinkInHead: true,
  serialize: function serialize(_ref) {
    var site = _ref.site,
        allSitePage = _ref.allSitePage;
    return allSitePage.edges.map(function (edge) {
      return {
        url: site.siteMetadata.siteUrl + edge.node.path,
        changefreq: "daily",
        priority: 0.7
      };
    });
  }
};
exports.defaultOptions = defaultOptions;

/***/ }),

/***/ "./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var pluginDefaults = {
  className: "anchor",
  icon: true,
  offsetY: 0
};

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  var _Object$assign = Object.assign(pluginDefaults, pluginOptions),
      className = _Object$assign.className,
      icon = _Object$assign.icon,
      offsetY = _Object$assign.offsetY;

  var styles = "\n    ." + className + " {\n      float: left;\n      padding-right: 4px;\n      margin-left: -20px;\n    }\n    h1 ." + className + " svg,\n    h2 ." + className + " svg,\n    h3 ." + className + " svg,\n    h4 ." + className + " svg,\n    h5 ." + className + " svg,\n    h6 ." + className + " svg {\n      visibility: hidden;\n    }\n    h1:hover ." + className + " svg,\n    h2:hover ." + className + " svg,\n    h3:hover ." + className + " svg,\n    h4:hover ." + className + " svg,\n    h5:hover ." + className + " svg,\n    h6:hover ." + className + " svg,\n    h1 ." + className + ":focus svg,\n    h2 ." + className + ":focus svg,\n    h3 ." + className + ":focus svg,\n    h4 ." + className + ":focus svg,\n    h5 ." + className + ":focus svg,\n    h6 ." + className + ":focus svg {\n      visibility: visible;\n    }\n  ";
  var script = "\n    document.addEventListener(\"DOMContentLoaded\", function(event) {\n      var hash = window.decodeURI(location.hash.replace('#', ''))\n      if (hash !== '') {\n        var element = document.getElementById(hash)\n        if (element) {\n          var offset = element.offsetTop\n          // Wait for the browser to finish rendering before scrolling.\n          setTimeout((function() {\n            window.scrollTo(0, offset - " + offsetY + ")\n          }), 0)\n        }\n      }\n    })\n  ";
  var style = icon ? _react.default.createElement("style", {
    key: "gatsby-remark-autolink-headers-style",
    type: "text/css"
  }, styles) : undefined;
  return setHeadComponents([style, _react.default.createElement("script", {
    key: "gatsby-remark-autolink-headers-script",
    dangerouslySetInnerHTML: {
      __html: script
    }
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby/dist/utils/create-content-digest.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gatsby/dist/utils/create-content-digest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const crypto = __webpack_require__(/*! crypto */ "crypto");
/**
 * createContentDigest() Encrypts an input using md5 hash of hexadecimal digest.
 *
 * @param {Object|String|Array} input - The input to encrypt
 *
 * @return {String} - The content digest
 */


const createContentDigest = input => {
  const content = typeof input !== `string` ? JSON.stringify(input) : input;
  return crypto.createHash(`md5`).update(content).digest(`hex`);
};

module.exports = createContentDigest;
//# sourceMappingURL=create-content-digest.js.map

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bin, bugs, dependencies, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = {"_args":[["gatsby@2.4.3","E:\\Projects\\gatsby-blog\\gatsby-advanced-starter"]],"_from":"gatsby@2.4.3","_id":"gatsby@2.4.3","_inBundle":false,"_integrity":"sha512-PoUSY7dRho+JwTa5igvTMc/EWOIl65WZcWIDq4kHqVDag5qtuAK1PPHieOOeFeNBInwvJQdhAxaCaDE4vfymmw==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.0.0","@babel/runtime":"7.4.4","ansi-styles":"3.2.1","bluebird":"3.5.4","ci-info":"2.0.0","clipboardy":"1.2.3","common-tags":"1.8.0","convert-hrtime":"2.0.0","core-js":"2.6.5","cross-spawn":"5.1.0","decamelize":"1.2.0","dot-prop":"4.2.0","envinfo":"5.12.1","escape-string-regexp":"1.0.5","fs-exists-cached":"1.0.0","gatsby-telemetry":"1.0.9","get-caller-file":"1.0.3","get-stream":"3.0.0","graceful-fs":"4.1.11","hosted-git-info":"2.7.1","is-stream":"1.1.0","is-valid-path":"0.1.1","jsonfile":"4.0.0","lodash":"4.17.11","map-age-cleaner":"0.1.3","meant":"1.0.1","ms":"2.1.1","nice-try":"1.0.5","npm-run-path":"2.0.2","opentracing":"0.14.3","p-finally":"1.0.0","p-is-promise":"2.1.0","path-exists":"3.0.0","path-key":"2.0.1","pify":"3.0.0","pretty-error":"2.1.1","prompts":"2.0.4","pump":"3.0.0","require-directory":"2.1.1","require-main-filename":"1.0.1","resolve-cwd":"2.0.0","set-blocking":"2.0.0","shebang-command":"1.2.0","signal-exit":"3.0.2","source-map":"0.5.7","stack-trace":"0.0.10","string-width":"2.1.1","strip-eof":"1.0.0","supports-color":"5.5.0","unique-string":"1.0.0","universalify":"0.1.2","update-notifier":"2.5.0","uuid":"3.3.2","which":"1.3.1","which-module":"2.0.0","wrap-ansi":"2.1.0","write-file-atomic":"2.4.2","xdg-basedir":"3.0.0","y18n":"3.2.1","yurnalist":"1.0.5"},"_requested":{"type":"version","registry":true,"raw":"gatsby@2.4.3","name":"gatsby","escapedName":"gatsby","rawSpec":"2.4.3","saveSpec":null,"fetchSpec":"2.4.3"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-2.4.3.tgz","_spec":"2.4.3","_where":"E:\\Projects\\gatsby-blog\\gatsby-advanced-starter","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","@stefanprobst/lokijs":"^1.5.6-b","address":"1.0.3","autoprefixer":"^9.4.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.6.3","babel-preset-gatsby":"^0.1.11","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^3.0.3","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.7.1","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.5.13","gatsby-link":"^2.1.1","gatsby-plugin-page-creator":"^2.0.12","gatsby-react-router-scroll":"^2.0.7","gatsby-telemetry":"^1.0.9","glob":"^7.1.1","got":"8.0.0","graphql":"^14.1.1","graphql-compose":"6.0.3","graphql-playground-middleware-express":"^1.7.10","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.2.2","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.4","cross-env":"^5.1.4","rimraf":"^2.6.1"},"engines":{"node":">=6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts","utils.js"],"gitHead":"5e6029b0995cc0884239b01d8762eaaccf2accc6","homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --verbose --ignore **/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"2.4.3","yargs":{"boolean-negation":false}};

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/jsonp/index.js":
/*!*************************************!*\
  !*** ./node_modules/jsonp/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var debug = __webpack_require__(/*! debug */ "debug")('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-disqus-comments/build/components/DisqusThread.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-disqus-comments/build/components/DisqusThread.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DISQUS_CONFIG = ['shortname', 'identifier', 'title', 'url', 'category_id', 'onNewComment', 'language'];
var __disqusAdded = false;

function copyProps(context, props) {
    var onNewComment = props.onNewComment,
        language = props.language,
        rest = _objectWithoutProperties(props, ['onNewComment', 'language']);

    for (var prop in rest) {
        context.page[prop] = rest[prop];
    }

    // Setting the language - if none is provided, the default one is used
    context.language = language;

    if (onNewComment) {
        context.callbacks = {
            onNewComment: [onNewComment]
        };
    }
}

var DisqusThread = function (_React$Component) {
    _inherits(DisqusThread, _React$Component);

    function DisqusThread() {
        _classCallCheck(this, DisqusThread);

        return _possibleConstructorReturn(this, (DisqusThread.__proto__ || Object.getPrototypeOf(DisqusThread)).apply(this, arguments));
    }

    _createClass(DisqusThread, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadDisqus();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.loadDisqus();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.identifier !== this.props.identifier;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = Object.keys(this.props).reduce(function (memo, key) {
                return DISQUS_CONFIG.some(function (config) {
                    return config === key;
                }) ? memo : _extends({}, memo, _defineProperty({}, key, _this2.props[key]));
            }, {});

            return _react2.default.createElement(
                'div',
                props,
                _react2.default.createElement('div', { id: 'disqus_thread' })
            );
        }
    }, {
        key: 'addDisqusScript',
        value: function addDisqusScript() {
            if (__disqusAdded) {
                return;
            }

            var child = this.disqus = document.createElement('script');
            var parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

            child.async = true;
            child.type = 'text/javascript';
            child.src = '//' + this.props.shortname + '.disqus.com/embed.js';

            parent.appendChild(child);
            __disqusAdded = true;
        }
    }, {
        key: 'loadDisqus',
        value: function loadDisqus() {
            var _this3 = this;

            var props = {};

            // Extract Disqus props that were supplied to this component
            DISQUS_CONFIG.forEach(function (prop) {
                // prop "shortname" is only necessary for loading the script, not for the config itself
                if (prop !== 'shortname' && !!_this3.props[prop]) {
                    props[prop] = _this3.props[prop];
                }
            });

            // If Disqus has already been added, reset it
            if (typeof DISQUS !== 'undefined') {
                DISQUS.reset({
                    reload: true,
                    config: function config() {
                        copyProps(this, props);

                        // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
                        this.page.url = this.page.url.replace(/#/, '') + '#!newthread';
                    }
                });
            } else {
                // Otherwise add Disqus to the page
                window.disqus_config = function () {
                    copyProps(this, props);
                };
                this.addDisqusScript();
            }
        }
    }]);

    return DisqusThread;
}(_react2.default.Component);

DisqusThread.displayName = 'DisqusThread';

DisqusThread.propTypes = {
    id: _propTypes2.default.string,

    /**
     * `shortname` tells the Disqus service your forum's shortname,
     * which is the unique identifier for your website as registered
     * on Disqus. If undefined , the Disqus embed will not load.
     */
    shortname: _propTypes2.default.string.isRequired,

    /**
     * `identifier` tells the Disqus service how to identify the
     * current page. When the Disqus embed is loaded, the identifier
     * is used to look up the correct thread. If disqus_identifier
     * is undefined, the page's URL will be used. The URL can be
     * unreliable, such as when renaming an article slug or changing
     * domains, so we recommend using your own unique way of
     * identifying a thread.
     */
    identifier: _propTypes2.default.string,

    /**
     * `title` tells the Disqus service the title of the current page.
     * This is used when creating the thread on Disqus for the first time.
     * If undefined, Disqus will use the <title> attribute of the page.
     * If that attribute could not be used, Disqus will use the URL of the page.
     */
    title: _propTypes2.default.string,

    /**
     * `url` tells the Disqus service the URL of the current page.
     * If undefined, Disqus will take the window.location.href.
     * This URL is used to look up or create a thread if disqus_identifier
     * is undefined. In addition, this URL is always saved when a thread is
     * being created so that Disqus knows what page a thread belongs to.
     */
    url: _propTypes2.default.string,

    /**
     * `category_id` tells the Disqus service the category to be used for
     * the current page. This is used when creating the thread on Disqus
     * for the first time.
     */
    category_id: _propTypes2.default.string,

    /**
     * `onNewComment` function accepts one parameter `comment` which is a
     * JavaScript object with comment `id` and `text`. This allows you to track
     * user comments and replies and run a script after a comment is posted.
     */
    onNewComment: _propTypes2.default.func,

    /**
     * `language` tells the Disqus service which language should be used.
     * Please refer to https://www.transifex.com/disqus/disqus/ on which languages can be used
     * If undefined, English is used as default one
     */
    language: _propTypes2.default.string
};

DisqusThread.defaultProps = {
    url: typeof window === 'undefined' ? null : window.location.href
};

exports.default = DisqusThread;

/***/ }),

/***/ "./node_modules/react-disqus-comments/build/main.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-disqus-comments/build/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./components/DisqusThread */ "./node_modules/react-disqus-comments/build/components/DisqusThread.js");

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js ***!
  \**************************************************************************/
/*! exports provided: isFirefox, isSafari */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return isSafari; });
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/js_utils */ "./node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js");

var isFirefox = Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_0__["memoize"])(function () {
  return /firefox/i.test(navigator.userAgent);
});
var isSafari = Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_0__["memoize"])(function () {
  return Boolean(window.safari);
});

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EnterLeaveCounter; });
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/js_utils */ "./node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EnterLeaveCounter =
/*#__PURE__*/
function () {
  function EnterLeaveCounter(isNodeInDocument) {
    _classCallCheck(this, EnterLeaveCounter);

    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }

  _createClass(EnterLeaveCounter, [{
    key: "enter",
    value: function enter(enteringNode) {
      var _this = this;

      var previousLength = this.entered.length;

      var isNodeEntered = function isNodeEntered(node) {
        return _this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
      };

      this.entered = Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_0__["union"])(this.entered.filter(isNodeEntered), [enteringNode]);
      return previousLength === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function leave(leavingNode) {
      var previousLength = this.entered.length;
      this.entered = Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_0__["without"])(this.entered.filter(this.isNodeInDocument), leavingNode);
      return previousLength > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.entered = [];
    }
  }]);

  return EnterLeaveCounter;
}();



/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/HTML5Backend.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/HTML5Backend.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML5Backend; });
/* harmony import */ var _EnterLeaveCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnterLeaveCounter */ "./node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js");
/* harmony import */ var _BrowserDetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserDetector */ "./node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js");
/* harmony import */ var _OffsetUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OffsetUtils */ "./node_modules/react-dnd-html5-backend/dist/esm/OffsetUtils.js");
/* harmony import */ var _NativeDragSources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NativeDragSources */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js");
/* harmony import */ var _NativeTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NativeTypes */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js");
/* harmony import */ var _OptionsReader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OptionsReader */ "./node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var HTML5Backend =
/*#__PURE__*/
function () {
  function HTML5Backend(manager, globalContext) {
    var _this = this;

    _classCallCheck(this, HTML5Backend);

    this.sourcePreviewNodes = new Map();
    this.sourcePreviewNodeOptions = new Map();
    this.sourceNodes = new Map();
    this.sourceNodeOptions = new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;

    this.getSourceClientOffset = function (sourceId) {
      return Object(_OffsetUtils__WEBPACK_IMPORTED_MODULE_2__["getNodeClientOffset"])(_this.sourceNodes.get(sourceId));
    };

    this.endDragNativeItem = function () {
      if (!_this.isDraggingNativeItem()) {
        return;
      }

      _this.actions.endDrag();

      _this.registry.removeSource(_this.currentNativeHandle);

      _this.currentNativeHandle = null;
      _this.currentNativeSource = null;
    };

    this.isNodeInDocument = function (node) {
      // Check the node either in the main document or in the current context
      return _this.document && _this.document.body && document.body.contains(node);
    };

    this.endDragIfSourceWasRemovedFromDOM = function () {
      var node = _this.currentDragSourceNode;

      if (_this.isNodeInDocument(node)) {
        return;
      }

      if (_this.clearCurrentDragSourceNode()) {
        _this.actions.endDrag();
      }
    };

    this.handleTopDragStartCapture = function () {
      _this.clearCurrentDragSourceNode();

      _this.dragStartSourceIds = [];
    };

    this.handleTopDragStart = function (e) {
      if (e.defaultPrevented) {
        return;
      }

      var dragStartSourceIds = _this.dragStartSourceIds;
      _this.dragStartSourceIds = null;
      var clientOffset = Object(_OffsetUtils__WEBPACK_IMPORTED_MODULE_2__["getEventClientOffset"])(e); // Avoid crashing if we missed a drop event or our previous drag died

      if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      } // Don't publish the source just yet (see why below)


      _this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: _this.getSourceClientOffset,
        clientOffset: clientOffset
      });

      var dataTransfer = e.dataTransfer;
      var nativeType = Object(_NativeDragSources__WEBPACK_IMPORTED_MODULE_3__["matchNativeItemType"])(dataTransfer);

      if (_this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
          // Use custom drag image if user specifies it.
          // If child drag source refuses drag but parent agrees,
          // use parent's node as drag image. Neither works in IE though.
          var sourceId = _this.monitor.getSourceId();

          var sourceNode = _this.sourceNodes.get(sourceId);

          var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;

          if (dragPreview) {
            var _this$getCurrentSourc = _this.getCurrentSourcePreviewNodeOptions(),
                anchorX = _this$getCurrentSourc.anchorX,
                anchorY = _this$getCurrentSourc.anchorY,
                offsetX = _this$getCurrentSourc.offsetX,
                offsetY = _this$getCurrentSourc.offsetY;

            var anchorPoint = {
              anchorX: anchorX,
              anchorY: anchorY
            };
            var offsetPoint = {
              offsetX: offsetX,
              offsetY: offsetY
            };
            var dragPreviewOffset = Object(_OffsetUtils__WEBPACK_IMPORTED_MODULE_2__["getDragPreviewOffset"])(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }

        try {
          // Firefox won't drag without setting data
          dataTransfer.setData('application/json', {});
        } catch (err) {} // IE doesn't support MIME types in setData
        // Store drag source node so we can check whether
        // it is removed from DOM and trigger endDrag manually.


        _this.setCurrentDragSourceNode(e.target); // Now we are ready to publish the drag source.. or are we not?


        var _this$getCurrentSourc2 = _this.getCurrentSourcePreviewNodeOptions(),
            captureDraggingState = _this$getCurrentSourc2.captureDraggingState;

        if (!captureDraggingState) {
          // Usually we want to publish it in the next tick so that browser
          // is able to screenshot the current (not yet dragging) state.
          //
          // It also neatly avoids a situation where render() returns null
          // in the same tick for the source element, and browser freaks out.
          setTimeout(function () {
            return _this.actions.publishDragSource();
          }, 0);
        } else {
          // In some cases the user may want to override this behavior, e.g.
          // to work around IE not supporting custom drag previews.
          //
          // When using a custom drag layer, the only way to prevent
          // the default drag preview from drawing in IE is to screenshot
          // the dragging state in which the node itself has zero opacity
          // and height. In this case, though, returning null from render()
          // will abruptly end the dragging, which is not obvious.
          //
          // This is the reason such behavior is strictly opt-in.
          _this.actions.publishDragSource();
        }
      } else if (nativeType) {
        // A native item (such as URL) dragged from inside the document
        _this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
        // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
        // Just let it drag. It's a native type (URL or text) and will be picked up in
        // dragenter handler.
        return;
      } else {
        // If by this time no drag source reacted, tell browser not to drag.
        e.preventDefault();
      }
    };

    this.handleTopDragEndCapture = function () {
      if (_this.clearCurrentDragSourceNode()) {
        // Firefox can dispatch this event in an infinite loop
        // if dragend handler does something like showing an alert.
        // Only proceed if we have not handled it already.
        _this.actions.endDrag();
      }
    };

    this.handleTopDragEnterCapture = function (e) {
      _this.dragEnterTargetIds = [];

      var isFirstEnter = _this.enterLeaveCounter.enter(e.target);

      if (!isFirstEnter || _this.monitor.isDragging()) {
        return;
      }

      var dataTransfer = e.dataTransfer;
      var nativeType = Object(_NativeDragSources__WEBPACK_IMPORTED_MODULE_3__["matchNativeItemType"])(dataTransfer);

      if (nativeType) {
        // A native item (such as file or URL) dragged from outside the document
        _this.beginDragNativeItem(nativeType);
      }
    };

    this.handleTopDragEnter = function (e) {
      var dragEnterTargetIds = _this.dragEnterTargetIds;
      _this.dragEnterTargetIds = [];

      if (!_this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        return;
      }

      _this.altKeyPressed = e.altKey;

      if (!Object(_BrowserDetector__WEBPACK_IMPORTED_MODULE_1__["isFirefox"])()) {
        // Don't emit hover in `dragenter` on Firefox due to an edge case.
        // If the target changes position as the result of `dragenter`, Firefox
        // will still happily dispatch `dragover` despite target being no longer
        // there. The easy solution is to only fire `hover` in `dragover` on FF.
        _this.actions.hover(dragEnterTargetIds, {
          clientOffset: Object(_OffsetUtils__WEBPACK_IMPORTED_MODULE_2__["getEventClientOffset"])(e)
        });
      }

      var canDrop = dragEnterTargetIds.some(function (targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });

      if (canDrop) {
        // IE requires this to fire dragover events
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      }
    };

    this.handleTopDragOverCapture = function () {
      _this.dragOverTargetIds = [];
    };

    this.handleTopDragOver = function (e) {
      var dragOverTargetIds = _this.dragOverTargetIds;
      _this.dragOverTargetIds = [];

      if (!_this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        // Prevent default "drop and blow away the whole document" action.
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }

        return;
      }

      _this.altKeyPressed = e.altKey;

      _this.actions.hover(dragOverTargetIds || [], {
        clientOffset: Object(_OffsetUtils__WEBPACK_IMPORTED_MODULE_2__["getEventClientOffset"])(e)
      });

      var canDrop = (dragOverTargetIds || []).some(function (targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });

      if (canDrop) {
        // Show user-specified drop effect.
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      } else if (_this.isDraggingNativeItem()) {
        // Don't show a nice cursor but still prevent default
        // "drop and blow away the whole document" action.
        e.preventDefault();
      } else {
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }
      }
    };

    this.handleTopDragLeaveCapture = function (e) {
      if (_this.isDraggingNativeItem()) {
        e.preventDefault();
      }

      var isLastLeave = _this.enterLeaveCounter.leave(e.target);

      if (!isLastLeave) {
        return;
      }

      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      }
    };

    this.handleTopDropCapture = function (e) {
      _this.dropTargetIds = [];
      e.preventDefault();

      if (_this.isDraggingNativeItem()) {
        _this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
      }

      _this.enterLeaveCounter.reset();
    };

    this.handleTopDrop = function (e) {
      var dropTargetIds = _this.dropTargetIds;
      _this.dropTargetIds = [];

      _this.actions.hover(dropTargetIds, {
        clientOffset: Object(_OffsetUtils__WEBPACK_IMPORTED_MODULE_2__["getEventClientOffset"])(e)
      });

      _this.actions.drop({
        dropEffect: _this.getCurrentDropEffect()
      });

      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      } else {
        _this.endDragIfSourceWasRemovedFromDOM();
      }
    };

    this.handleSelectStart = function (e) {
      var target = e.target; // Only IE requires us to explicitly say
      // we want drag drop operation to start

      if (typeof target.dragDrop !== 'function') {
        return;
      } // Inputs and textareas should be selectable


      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      } // For other targets, ask IE
      // to enable drag and drop


      e.preventDefault();
      target.dragDrop();
    };

    this.options = new _OptionsReader__WEBPACK_IMPORTED_MODULE_5__["OptionsReader"](globalContext);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new _EnterLeaveCounter__WEBPACK_IMPORTED_MODULE_0__["default"](this.isNodeInDocument);
  } // public for test


  _createClass(HTML5Backend, [{
    key: "setup",
    value: function setup() {
      if (this.window === undefined) {
        return;
      }

      if (this.window.__isReactDndBackendSetUp) {
        throw new Error('Cannot have two HTML5 backends at the same time.');
      }

      this.window.__isReactDndBackendSetUp = true;
      this.addEventListeners(this.window);
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.window === undefined) {
        return;
      }

      this.window.__isReactDndBackendSetUp = false;
      this.removeEventListeners(this.window);
      this.clearCurrentDragSourceNode();

      if (this.asyncEndDragFrameId) {
        this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function connectDragPreview(sourceId, node, options) {
      var _this2 = this;

      this.sourcePreviewNodeOptions.set(sourceId, options);
      this.sourcePreviewNodes.set(sourceId, node);
      return function () {
        _this2.sourcePreviewNodes.delete(sourceId);

        _this2.sourcePreviewNodeOptions.delete(sourceId);
      };
    }
  }, {
    key: "connectDragSource",
    value: function connectDragSource(sourceId, node, options) {
      var _this3 = this;

      this.sourceNodes.set(sourceId, node);
      this.sourceNodeOptions.set(sourceId, options);

      var handleDragStart = function handleDragStart(e) {
        return _this3.handleDragStart(e, sourceId);
      };

      var handleSelectStart = function handleSelectStart(e) {
        return _this3.handleSelectStart(e);
      };

      node.setAttribute('draggable', 'true');
      node.addEventListener('dragstart', handleDragStart);
      node.addEventListener('selectstart', handleSelectStart);
      return function () {
        _this3.sourceNodes.delete(sourceId);

        _this3.sourceNodeOptions.delete(sourceId);

        node.removeEventListener('dragstart', handleDragStart);
        node.removeEventListener('selectstart', handleSelectStart);
        node.setAttribute('draggable', 'false');
      };
    }
  }, {
    key: "connectDropTarget",
    value: function connectDropTarget(targetId, node) {
      var _this4 = this;

      var handleDragEnter = function handleDragEnter(e) {
        return _this4.handleDragEnter(e, targetId);
      };

      var handleDragOver = function handleDragOver(e) {
        return _this4.handleDragOver(e, targetId);
      };

      var handleDrop = function handleDrop(e) {
        return _this4.handleDrop(e, targetId);
      };

      node.addEventListener('dragenter', handleDragEnter);
      node.addEventListener('dragover', handleDragOver);
      node.addEventListener('drop', handleDrop);
      return function () {
        node.removeEventListener('dragenter', handleDragEnter);
        node.removeEventListener('dragover', handleDragOver);
        node.removeEventListener('drop', handleDrop);
      };
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(target) {
      // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
      if (!target.addEventListener) {
        return;
      }

      target.addEventListener('dragstart', this.handleTopDragStart);
      target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.addEventListener('dragend', this.handleTopDragEndCapture, true);
      target.addEventListener('dragenter', this.handleTopDragEnter);
      target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.addEventListener('dragover', this.handleTopDragOver);
      target.addEventListener('dragover', this.handleTopDragOverCapture, true);
      target.addEventListener('drop', this.handleTopDrop);
      target.addEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners(target) {
      // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
      if (!target.removeEventListener) {
        return;
      }

      target.removeEventListener('dragstart', this.handleTopDragStart);
      target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
      target.removeEventListener('dragenter', this.handleTopDragEnter);
      target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.removeEventListener('dragover', this.handleTopDragOver);
      target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
      target.removeEventListener('drop', this.handleTopDrop);
      target.removeEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function getCurrentSourceNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
      return _objectSpread({
        dropEffect: this.altKeyPressed ? 'copy' : 'move'
      }, sourceNodeOptions || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function getCurrentDropEffect() {
      if (this.isDraggingNativeItem()) {
        // It makes more sense to default to 'copy' for native resources
        return 'copy';
      }

      return this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function getCurrentSourcePreviewNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
      return _objectSpread({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: false
      }, sourcePreviewNodeOptions || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function isDraggingNativeItem() {
      var itemType = this.monitor.getItemType();
      return Object.keys(_NativeTypes__WEBPACK_IMPORTED_MODULE_4__).some(function (key) {
        return _NativeTypes__WEBPACK_IMPORTED_MODULE_4__[key] === itemType;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function beginDragNativeItem(type) {
      this.clearCurrentDragSourceNode();
      this.currentNativeSource = Object(_NativeDragSources__WEBPACK_IMPORTED_MODULE_3__["createNativeDragSource"])(type);
      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
      this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function setCurrentDragSourceNode(node) {
      var _this5 = this;

      this.clearCurrentDragSourceNode();
      this.currentDragSourceNode = node; // A timeout of > 0 is necessary to resolve Firefox issue referenced
      // See:
      //   * https://github.com/react-dnd/react-dnd/pull/928
      //   * https://github.com/react-dnd/react-dnd/issues/869

      var MOUSE_MOVE_TIMEOUT = 1000; // Receiving a mouse event in the middle of a dragging operation
      // means it has ended and the drag source node disappeared from DOM,
      // so the browser didn't dispatch the dragend event.
      //
      // We need to wait before we start listening for mousemove events.
      // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
      // immediately in some browsers.
      //
      // See:
      //   * https://github.com/react-dnd/react-dnd/pull/928
      //   * https://github.com/react-dnd/react-dnd/issues/869
      //

      this.mouseMoveTimeoutTimer = setTimeout(function () {
        return _this5.window && _this5.window.addEventListener('mousemove', _this5.endDragIfSourceWasRemovedFromDOM, true);
      }, MOUSE_MOVE_TIMEOUT);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function clearCurrentDragSourceNode() {
      if (this.currentDragSourceNode) {
        this.currentDragSourceNode = null;

        if (this.window) {
          this.window.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
          this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        }

        this.mouseMoveTimeoutTimer = null;
        return true;
      }

      return false;
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(e, sourceId) {
      if (e.defaultPrevented) {
        return;
      }

      if (!this.dragStartSourceIds) {
        this.dragStartSourceIds = [];
      }

      this.dragStartSourceIds.unshift(sourceId);
    }
  }, {
    key: "handleDragEnter",
    value: function handleDragEnter(e, targetId) {
      this.dragEnterTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDragOver",
    value: function handleDragOver(e, targetId) {
      if (this.dragOverTargetIds === null) {
        this.dragOverTargetIds = [];
      }

      this.dragOverTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e, targetId) {
      this.dropTargetIds.unshift(targetId);
    }
  }, {
    key: "window",
    get: function get() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function get() {
      return this.options.document;
    }
  }]);

  return HTML5Backend;
}();



/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonotonicInterpolant; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MonotonicInterpolant =
/*#__PURE__*/
function () {
  function MonotonicInterpolant(xs, ys) {
    _classCallCheck(this, MonotonicInterpolant);

    var length = xs.length; // Rearrange xs and ys so that xs is sorted

    var indexes = [];

    for (var i = 0; i < length; i++) {
      indexes.push(i);
    }

    indexes.sort(function (a, b) {
      return xs[a] < xs[b] ? -1 : 1;
    }); // Get consecutive differences and slopes

    var dys = [];
    var dxs = [];
    var ms = [];
    var dx;
    var dy;

    for (var _i = 0; _i < length - 1; _i++) {
      dx = xs[_i + 1] - xs[_i];
      dy = ys[_i + 1] - ys[_i];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    } // Get degree-1 coefficients


    var c1s = [ms[0]];

    for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
      var m2 = ms[_i2];
      var mNext = ms[_i2 + 1];

      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[_i2];
        var dxNext = dxs[_i2 + 1];
        var common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }

    c1s.push(ms[ms.length - 1]); // Get degree-2 and degree-3 coefficients

    var c2s = [];
    var c3s = [];
    var m;

    for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
      m = ms[_i3];
      var c1 = c1s[_i3];
      var invDx = 1 / dxs[_i3];

      var _common = c1 + c1s[_i3 + 1] - m - m;

      c2s.push((m - c1 - _common) * invDx);
      c3s.push(_common * invDx * invDx);
    }

    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }

  _createClass(MonotonicInterpolant, [{
    key: "interpolate",
    value: function interpolate(x) {
      var xs = this.xs,
          ys = this.ys,
          c1s = this.c1s,
          c2s = this.c2s,
          c3s = this.c3s; // The rightmost point in the dataset should give an exact result

      var i = xs.length - 1;

      if (x === xs[i]) {
        return ys[i];
      } // Search for the interval x is in, returning the corresponding y if x is one of the original xs


      var low = 0;
      var high = c3s.length - 1;
      var mid;

      while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        var xHere = xs[mid];

        if (xHere < x) {
          low = mid + 1;
        } else if (xHere > x) {
          high = mid - 1;
        } else {
          return ys[mid];
        }
      }

      i = Math.max(0, high); // Interpolate

      var diff = x - xs[i];
      var diffSq = diff * diff;
      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
  }]);

  return MonotonicInterpolant;
}();



/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js ***!
  \*********************************************************************************************/
/*! exports provided: NativeDragSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDragSource", function() { return NativeDragSource; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NativeDragSource =
/*#__PURE__*/
function () {
  function NativeDragSource(config) {
    var _this = this;

    _classCallCheck(this, NativeDragSource);

    this.config = config;
    this.item = {};
    Object.keys(this.config.exposeProperties).forEach(function (property) {
      Object.defineProperty(_this.item, property, {
        configurable: true,
        enumerable: true,
        get: function get() {
          // eslint-disable-next-line no-console
          console.warn("Browser doesn't allow reading \"".concat(property, "\" until the drop event."));
          return null;
        }
      });
    });
  }

  _createClass(NativeDragSource, [{
    key: "mutateItemByReadingDataTransfer",
    value: function mutateItemByReadingDataTransfer(dataTransfer) {
      var _this2 = this;

      var newProperties = {};

      if (dataTransfer) {
        Object.keys(this.config.exposeProperties).forEach(function (property) {
          newProperties[property] = {
            value: _this2.config.exposeProperties[property](dataTransfer, _this2.config.matchesTypes)
          };
        });
      }

      Object.defineProperties(this.item, newProperties);
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      return true;
    }
  }, {
    key: "beginDrag",
    value: function beginDrag() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {// empty
    }
  }]);

  return NativeDragSource;
}();

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js ***!
  \****************************************************************************************************/
/*! exports provided: getDataFromDataTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataFromDataTransfer", function() { return getDataFromDataTransfer; });
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
    return resultSoFar || dataTransfer.getData(typeToTry);
  }, '');
  return result != null ? result : defaultValue;
}

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js ***!
  \**********************************************************************************/
/*! exports provided: createNativeDragSource, matchNativeItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNativeDragSource", function() { return createNativeDragSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchNativeItemType", function() { return matchNativeItemType; });
/* harmony import */ var _nativeTypesConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nativeTypesConfig */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js");
/* harmony import */ var _NativeDragSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NativeDragSource */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js");


function createNativeDragSource(type) {
  return new _NativeDragSource__WEBPACK_IMPORTED_MODULE_1__["NativeDragSource"](_nativeTypesConfig__WEBPACK_IMPORTED_MODULE_0__["nativeTypesConfig"][type]);
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }

  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(_nativeTypesConfig__WEBPACK_IMPORTED_MODULE_0__["nativeTypesConfig"]).filter(function (nativeItemType) {
    var matchesTypes = _nativeTypesConfig__WEBPACK_IMPORTED_MODULE_0__["nativeTypesConfig"][nativeItemType].matchesTypes;
    return matchesTypes.some(function (t) {
      return dataTransferTypes.indexOf(t) > -1;
    });
  })[0] || null;
}

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js ***!
  \**********************************************************************************************/
/*! exports provided: nativeTypesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeTypesConfig", function() { return nativeTypesConfig; });
/* harmony import */ var _NativeTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NativeTypes */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js");
/* harmony import */ var _getDataFromDataTransfer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDataFromDataTransfer */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js");
var _nativeTypesConfig;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, _NativeTypes__WEBPACK_IMPORTED_MODULE_0__["FILE"], {
  exposeProperties: {
    files: function files(dataTransfer) {
      return Array.prototype.slice.call(dataTransfer.files);
    },
    items: function items(dataTransfer) {
      return dataTransfer.items;
    }
  },
  matchesTypes: ['Files']
}), _defineProperty(_nativeTypesConfig, _NativeTypes__WEBPACK_IMPORTED_MODULE_0__["URL"], {
  exposeProperties: {
    urls: function urls(dataTransfer, matchesTypes) {
      return Object(_getDataFromDataTransfer__WEBPACK_IMPORTED_MODULE_1__["getDataFromDataTransfer"])(dataTransfer, matchesTypes, '').split('\n');
    }
  },
  matchesTypes: ['Url', 'text/uri-list']
}), _defineProperty(_nativeTypesConfig, _NativeTypes__WEBPACK_IMPORTED_MODULE_0__["TEXT"], {
  exposeProperties: {
    text: function text(dataTransfer, matchesTypes) {
      return Object(_getDataFromDataTransfer__WEBPACK_IMPORTED_MODULE_1__["getDataFromDataTransfer"])(dataTransfer, matchesTypes, '');
    }
  },
  matchesTypes: ['Text', 'text/plain']
}), _nativeTypesConfig);

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js ***!
  \**********************************************************************/
/*! exports provided: FILE, URL, TEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE", function() { return FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT", function() { return TEXT; });
var FILE = '__NATIVE_FILE__';
var URL = '__NATIVE_URL__';
var TEXT = '__NATIVE_TEXT__';

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/OffsetUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/OffsetUtils.js ***!
  \**********************************************************************/
/*! exports provided: getNodeClientOffset, getEventClientOffset, getDragPreviewOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeClientOffset", function() { return getNodeClientOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventClientOffset", function() { return getEventClientOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDragPreviewOffset", function() { return getDragPreviewOffset; });
/* harmony import */ var _BrowserDetector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowserDetector */ "./node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js");
/* harmony import */ var _MonotonicInterpolant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MonotonicInterpolant */ "./node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js");


var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

  if (!el) {
    return null;
  }

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left;

  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}

function isImageNode(node) {
  return node.nodeName === 'IMG' && (Object(_BrowserDetector__WEBPACK_IMPORTED_MODULE_0__["isFirefox"])() || !document.documentElement.contains(node));
}

function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight; // Work around @2x coordinate discrepancies in browsers

  if (Object(_BrowserDetector__WEBPACK_IMPORTED_MODULE_0__["isSafari"])() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }

  return {
    dragPreviewWidth: dragPreviewWidth,
    dragPreviewHeight: dragPreviewHeight
  };
}

function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  // The browsers will use the image intrinsic size under different conditions.
  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
  var isImage = isImageNode(dragPreview);
  var dragPreviewNode = isImage ? sourceNode : dragPreview;
  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  var offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  var sourceWidth = sourceNode.offsetWidth,
      sourceHeight = sourceNode.offsetHeight;
  var anchorX = anchorPoint.anchorX,
      anchorY = anchorPoint.anchorY;

  var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight),
      dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth,
      dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;

  var calculateYOffset = function calculateYOffset() {
    var interpolantY = new _MonotonicInterpolant__WEBPACK_IMPORTED_MODULE_1__["default"]([0, 0.5, 1], [// Dock to the top
    offsetFromDragPreview.y, // Align at the center
    offsetFromDragPreview.y / sourceHeight * dragPreviewHeight, // Dock to the bottom
    offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
    var y = interpolantY.interpolate(anchorY); // Work around Safari 8 positioning bug

    if (Object(_BrowserDetector__WEBPACK_IMPORTED_MODULE_0__["isSafari"])() && isImage) {
      // We'll have to wait for @3x to see if this is entirely correct
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }

    return y;
  };

  var calculateXOffset = function calculateXOffset() {
    // Interpolate coordinates depending on anchor point
    // If you know a simpler way to do this, let me know
    var interpolantX = new _MonotonicInterpolant__WEBPACK_IMPORTED_MODULE_1__["default"]([0, 0.5, 1], [// Dock to the left
    offsetFromDragPreview.x, // Align at the center
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth, // Dock to the right
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
    return interpolantX.interpolate(anchorX);
  }; // Force offsets if specified in the options.


  var offsetX = offsetPoint.offsetX,
      offsetY = offsetPoint.offsetY;
  var isManualOffsetX = offsetX === 0 || offsetX;
  var isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js ***!
  \************************************************************************/
/*! exports provided: OptionsReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsReader", function() { return OptionsReader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OptionsReader =
/*#__PURE__*/
function () {
  function OptionsReader(globalContext) {
    _classCallCheck(this, OptionsReader);

    this.globalContext = globalContext;
  }

  _createClass(OptionsReader, [{
    key: "window",
    get: function get() {
      if (this.globalContext) {
        return this.globalContext;
      } else if (typeof window !== 'undefined') {
        return window;
      }

      return undefined;
    }
  }, {
    key: "document",
    get: function get() {
      if (this.window) {
        return this.window.document;
      }

      return undefined;
    }
  }]);

  return OptionsReader;
}();

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/getEmptyImage.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/getEmptyImage.js ***!
  \************************************************************************/
/*! exports provided: getEmptyImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmptyImage", function() { return getEmptyImage; });
var emptyImage;
function getEmptyImage() {
  if (!emptyImage) {
    emptyImage = new Image();
    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  }

  return emptyImage;
}

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/index.js ***!
  \****************************************************************/
/*! exports provided: getEmptyImage, NativeTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HTML5Backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTML5Backend */ "./node_modules/react-dnd-html5-backend/dist/esm/HTML5Backend.js");
/* harmony import */ var _NativeTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NativeTypes */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "NativeTypes", function() { return _NativeTypes__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _getEmptyImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEmptyImage */ "./node_modules/react-dnd-html5-backend/dist/esm/getEmptyImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEmptyImage", function() { return _getEmptyImage__WEBPACK_IMPORTED_MODULE_2__["getEmptyImage"]; });






var createHTML5Backend = function createHTML5Backend(manager, context) {
  return new _HTML5Backend__WEBPACK_IMPORTED_MODULE_0__["default"](manager, context);
};

/* harmony default export */ __webpack_exports__["default"] = (createHTML5Backend);

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js ***!
  \*************************************************************************/
/*! exports provided: memoize, without, union */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
// cheap lodash replacements
function memoize(fn) {
  var result = null;

  var memoized = function memoized() {
    if (result == null) {
      result = fn();
    }

    return result;
  };

  return memoized;
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
function union(itemsA, itemsB) {
  var set = new Set();

  var insertItem = function insertItem(item) {
    return set.add(item);
  };

  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  set.forEach(function (key) {
    return result.push(key);
  });
  return result;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/DndContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/DndContext.js ***!
  \**************************************************************/
/*! exports provided: DndContext, createDndContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndContext", function() { return DndContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDndContext", function() { return createDndContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dnd_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dnd-core */ "./node_modules/dnd-core/dist/esm/index.js");


/**
 * Create the React Context
 */

var DndContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
  dragDropManager: undefined
});
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */

function createDndContext(backend, context, options, debugMode) {
  return {
    dragDropManager: Object(dnd_core__WEBPACK_IMPORTED_MODULE_1__["createDragDropManager"])(backend, context, options, debugMode)
  };
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/DndProvider.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/DndProvider.js ***!
  \***************************************************************/
/*! exports provided: DndProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndProvider", function() { return DndProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DndContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DndContext */ "./node_modules/react-dnd/dist/esm/common/DndContext.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var refCount = 0;
/**
 * A React component that provides the React-DnD context
 */

var DndProvider = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _getDndContextValue = getDndContextValue(props),
      _getDndContextValue2 = _slicedToArray(_getDndContextValue, 2),
      manager = _getDndContextValue2[0],
      isGlobalInstance = _getDndContextValue2[1]; // memoized from props

  /**
   * If the global context was used to store the DND context
   * then where theres no more references to it we should
   * clean it up to avoid memory leaks
   */


  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (isGlobalInstance) {
      refCount++;
    }

    return function () {
      if (isGlobalInstance) {
        refCount--;

        if (refCount === 0) {
          var context = getGlobalContext();
          context[instanceSymbol] = null;
        }
      }
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DndContext__WEBPACK_IMPORTED_MODULE_1__["DndContext"].Provider, {
    value: manager
  }, children);
});
DndProvider.displayName = 'DndProvider';

function getDndContextValue(props) {
  if ('manager' in props) {
    var _manager = {
      dragDropManager: props.manager
    };
    return [_manager, false];
  }

  var manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  var isGlobalInstance = !props.context;
  return [manager, isGlobalInstance];
}

var instanceSymbol = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');

function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var debugMode = arguments.length > 3 ? arguments[3] : undefined;
  var ctx = context;

  if (!ctx[instanceSymbol]) {
    ctx[instanceSymbol] = Object(_DndContext__WEBPACK_IMPORTED_MODULE_1__["createDndContext"])(backend, context, options, debugMode);
  }

  return ctx[instanceSymbol];
}

function getGlobalContext() {
  return typeof global !== 'undefined' ? global : window;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/DragPreviewImage.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/DragPreviewImage.js ***!
  \********************************************************************/
/*! exports provided: DragPreviewImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragPreviewImage", function() { return DragPreviewImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/*
 * A utility for rendering a drag preview image
 */

var DragPreviewImage = react__WEBPACK_IMPORTED_MODULE_0__["memo"](function (_ref) {
  var connect = _ref.connect,
      src = _ref.src;

  if (typeof Image !== 'undefined') {
    var img = new Image();
    img.src = src;

    img.onload = function () {
      return connect(img);
    };
  }

  return null;
});
DragPreviewImage.displayName = 'DragPreviewImage';

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js ***!
  \*************************************************************************/
/*! exports provided: DragSourceMonitorImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragSourceMonitorImpl", function() { return DragSourceMonitorImpl; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl =
/*#__PURE__*/
function () {
  function DragSourceMonitorImpl(manager) {
    _classCallCheck(this, DragSourceMonitorImpl);

    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }

  _createClass(DragSourceMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      invariant__WEBPACK_IMPORTED_MODULE_0___default()(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }

      invariant__WEBPACK_IMPORTED_MODULE_0___default()(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DragSourceMonitorImpl;
}();

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js ***!
  \*************************************************************************/
/*! exports provided: DropTargetMonitorImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropTargetMonitorImpl", function() { return DropTargetMonitorImpl; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var isCallingCanDrop = false;
var DropTargetMonitorImpl =
/*#__PURE__*/
function () {
  function DropTargetMonitorImpl(manager) {
    _classCallCheck(this, DropTargetMonitorImpl);

    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }

  _createClass(DropTargetMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      // Cut out early if the target id has not been set. This should prevent errors
      // where the user has an older version of dnd-core like in
      // https://github.com/react-dnd/react-dnd/issues/1310
      if (!this.targetId) {
        return false;
      }

      invariant__WEBPACK_IMPORTED_MODULE_0___default()(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');

      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }

      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DropTargetMonitorImpl;
}();

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/SourceConnector.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/SourceConnector.js ***!
  \*******************************************************************/
/*! exports provided: SourceConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceConnector", function() { return SourceConnector; });
/* harmony import */ var _wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapConnectorHooks */ "./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js");
/* harmony import */ var _utils_isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isRef */ "./node_modules/react-dnd/dist/esm/utils/isRef.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SourceConnector =
/*#__PURE__*/
function () {
  function SourceConnector(backend) {
    var _this = this;

    _classCallCheck(this, SourceConnector);

    this.hooks = Object(_wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__["default"])({
      dragSource: function dragSource(node, options) {
        _this.clearDragSource();

        _this.dragSourceOptions = options || null;

        if (Object(_utils_isRef__WEBPACK_IMPORTED_MODULE_1__["isRef"])(node)) {
          _this.dragSourceRef = node;
        } else {
          _this.dragSourceNode = node;
        }

        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node, options) {
        _this.clearDragPreview();

        _this.dragPreviewOptions = options || null;

        if (Object(_utils_isRef__WEBPACK_IMPORTED_MODULE_1__["isRef"])(node)) {
          _this.dragPreviewRef = node;
        } else {
          _this.dragPreviewNode = node;
        }

        _this.reconnectDragPreview();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null; // The drag preview may either be attached via ref or connect function

    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }

  _createClass(SourceConnector, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();

      if (didChange) {
        this.disconnectDragSource();
      }

      if (!this.handlerId) {
        return;
      }

      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();

      if (!this.handlerId) {
        this.disconnectDragPreview();
      } else if (this.dragPreview && didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.disconnectDragPreview();
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = undefined;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = undefined;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "dragSource",
    get: function get() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }]);

  return SourceConnector;
}();

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/TargetConnector.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/TargetConnector.js ***!
  \*******************************************************************/
/*! exports provided: TargetConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetConnector", function() { return TargetConnector; });
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapConnectorHooks */ "./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js");
/* harmony import */ var _utils_isRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/isRef */ "./node_modules/react-dnd/dist/esm/utils/isRef.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TargetConnector =
/*#__PURE__*/
function () {
  function TargetConnector(backend) {
    var _this = this;

    _classCallCheck(this, TargetConnector);

    this.hooks = Object(_wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_1__["default"])({
      dropTarget: function dropTarget(node, options) {
        _this.clearDropTarget();

        _this.dropTargetOptions = options;

        if (Object(_utils_isRef__WEBPACK_IMPORTED_MODULE_2__["isRef"])(node)) {
          _this.dropTargetRef = node;
        } else {
          _this.dropTargetNode = node;
        }

        _this.reconnect();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }

  _createClass(TargetConnector, [{
    key: "reconnect",
    value: function reconnect() {
      // if nothing has changed then don't resubscribe
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();

      if (didChange) {
        this.disconnectDropTarget();
      }

      var dropTarget = this.dropTarget;

      if (!this.handlerId) {
        return;
      }

      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !shallowequal__WEBPACK_IMPORTED_MODULE_0___default()(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = undefined;
      }
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dropTarget;
    }
  }, {
    key: "dropTargetOptions",
    get: function get() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "dropTarget",
    get: function get() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }]);

  return TargetConnector;
}();

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/index.js ***!
  \*********************************************************/
/*! exports provided: DndContext, createDndContext, DndProvider, DragPreviewImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DndContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DndContext */ "./node_modules/react-dnd/dist/esm/common/DndContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DndContext", function() { return _DndContext__WEBPACK_IMPORTED_MODULE_0__["DndContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDndContext", function() { return _DndContext__WEBPACK_IMPORTED_MODULE_0__["createDndContext"]; });

/* harmony import */ var _DndProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DndProvider */ "./node_modules/react-dnd/dist/esm/common/DndProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DndProvider", function() { return _DndProvider__WEBPACK_IMPORTED_MODULE_1__["DndProvider"]; });

/* harmony import */ var _DragPreviewImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DragPreviewImage */ "./node_modules/react-dnd/dist/esm/common/DragPreviewImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragPreviewImage", function() { return _DragPreviewImage__WEBPACK_IMPORTED_MODULE_2__["DragPreviewImage"]; });





/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/registration.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/registration.js ***!
  \****************************************************************/
/*! exports provided: registerTarget, registerSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerTarget", function() { return registerTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSource", function() { return registerSource; });
function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function () {
    return registry.removeTarget(targetId);
  }];
}
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);
  return [sourceId, function () {
    return registry.removeSource(sourceId);
  }];
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrapConnectorHooks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cloneWithRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cloneWithRef */ "./node_modules/react-dnd/dist/esm/utils/cloneWithRef.js");



function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }

  var displayName = element.type.displayName || element.type.name || 'the component';
  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + 'drag source or a drop target itself.');
}

function wrapHookToRecognizeElement(hook) {
  return function () {
    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // When passed a node, call the hook straight away.
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options); // return the node so it can be chained (e.g. when within callback refs
      // <div ref={node => connectDragSource(connectDropTarget(node))}/>

      return node;
    } // If passed a ReactElement, clone it and attach this function as a ref.
    // This helps us achieve a neat API where user doesn't even know that refs
    // are being used under the hood.


    var element = elementOrNode;
    throwIfCompositeComponentElement(element); // When no options are passed, use the hook directly

    var ref = options ? function (node) {
      return hook(node, options);
    } : hook;
    return Object(_utils_cloneWithRef__WEBPACK_IMPORTED_MODULE_1__["cloneWithRef"])(element, ref);
  };
}

function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function (key) {
    var hook = hooks[key]; // ref objects should be passed straight through without wrapping

    if (key.endsWith('Ref')) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);

      wrappedHooks[key] = function () {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/decorators/DragLayer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/decorators/DragLayer.js ***!
  \*****************************************************************/
/*! exports provided: DragLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragLayer", function() { return DragLayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/react-dnd/dist/esm/utils/js_utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/react-dnd/dist/esm/decorators/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








function DragLayer(collect) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["checkDecoratorArguments"])('DragLayer', 'collect[, options]', collect, options);
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer', collect);
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. ' + 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer', options);
  return function decorateLayer(DecoratedComponent) {
    var Decorated = DecoratedComponent;
    var _options$arePropsEqua = options.arePropsEqual,
        arePropsEqual = _options$arePropsEqua === void 0 ? shallowequal__WEBPACK_IMPORTED_MODULE_1___default.a : _options$arePropsEqua;
    var displayName = Decorated.displayName || Decorated.name || 'Component';

    var DragLayerContainer =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(DragLayerContainer, _React$Component);

      function DragLayerContainer() {
        var _this;

        _classCallCheck(this, DragLayerContainer);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(DragLayerContainer).apply(this, arguments));
        _this.isCurrentlyMounted = false;
        _this.ref = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();

        _this.handleChange = function () {
          if (!_this.isCurrentlyMounted) {
            return;
          }

          var nextState = _this.getCurrentState();

          if (!shallowequal__WEBPACK_IMPORTED_MODULE_1___default()(nextState, _this.state)) {
            _this.setState(nextState);
          }
        };

        return _this;
      }

      _createClass(DragLayerContainer, [{
        key: "getDecoratedComponentInstance",
        value: function getDecoratedComponentInstance() {
          invariant__WEBPACK_IMPORTED_MODULE_3___default()(this.ref.current, 'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()');
          return this.ref.current;
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !arePropsEqual(nextProps, this.props) || !shallowequal__WEBPACK_IMPORTED_MODULE_1___default()(nextState, this.state);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.isCurrentlyMounted = true;
          this.handleChange();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.isCurrentlyMounted = false;

          if (this.unsubscribeFromOffsetChange) {
            this.unsubscribeFromOffsetChange();
            this.unsubscribeFromOffsetChange = undefined;
          }

          if (this.unsubscribeFromStateChange) {
            this.unsubscribeFromStateChange();
            this.unsubscribeFromStateChange = undefined;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_index__WEBPACK_IMPORTED_MODULE_4__["DndContext"].Consumer, null, function (_ref) {
            var dragDropManager = _ref.dragDropManager;

            if (dragDropManager === undefined) {
              return null;
            }

            _this2.receiveDragDropManager(dragDropManager); // Let componentDidMount fire to initialize the collected state


            if (!_this2.isCurrentlyMounted) {
              return null;
            }

            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Decorated, Object.assign({}, _this2.props, _this2.state, {
              ref: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isRefable"])(Decorated) ? _this2.ref : null
            }));
          });
        }
      }, {
        key: "receiveDragDropManager",
        value: function receiveDragDropManager(dragDropManager) {
          if (this.manager !== undefined) {
            return;
          }

          this.manager = dragDropManager;
          invariant__WEBPACK_IMPORTED_MODULE_3___default()(_typeof(dragDropManager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to render a DndProvider component in your top-level component. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
          var monitor = this.manager.getMonitor();
          this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
          this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);
        }
      }, {
        key: "getCurrentState",
        value: function getCurrentState() {
          if (!this.manager) {
            return {};
          }

          var monitor = this.manager.getMonitor();
          return collect(monitor, this.props);
        }
      }]);

      return DragLayerContainer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    DragLayerContainer.displayName = "DragLayer(".concat(displayName, ")");
    DragLayerContainer.DecoratedComponent = DecoratedComponent;
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(DragLayerContainer, DecoratedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/decorators/DragSource.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/decorators/DragSource.js ***!
  \******************************************************************/
/*! exports provided: DragSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragSource", function() { return DragSource; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/react-dnd/dist/esm/utils/js_utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-dnd/dist/esm/decorators/utils.js");
/* harmony import */ var _decorateHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorateHandler */ "./node_modules/react-dnd/dist/esm/decorators/decorateHandler.js");
/* harmony import */ var _common_registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/registration */ "./node_modules/react-dnd/dist/esm/common/registration.js");
/* harmony import */ var _common_DragSourceMonitorImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/DragSourceMonitorImpl */ "./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js");
/* harmony import */ var _common_SourceConnector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/SourceConnector */ "./node_modules/react-dnd/dist/esm/common/SourceConnector.js");
/* harmony import */ var _utils_isValidType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/isValidType */ "./node_modules/react-dnd/dist/esm/utils/isValidType.js");
/* harmony import */ var _createSourceFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createSourceFactory */ "./node_modules/react-dnd/dist/esm/decorators/createSourceFactory.js");









/**
 * Decorates a component as a dragsource
 * @param type The dragsource type
 * @param spec The drag source specification
 * @param collect The props collector function
 * @param options DnD options
 */

function DragSource(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkDecoratorArguments"])('DragSource', 'type, spec, collect[, options]', type, spec, collect, options);
  var getType = type;

  if (typeof type !== 'function') {
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_isValidType__WEBPACK_IMPORTED_MODULE_7__["isValidType"])(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', type);

    getType = function getType() {
      return type;
    };
  }

  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', spec);
  var createSource = Object(_createSourceFactory__WEBPACK_IMPORTED_MODULE_8__["default"])(spec);
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', collect);
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', collect);
  return function decorateSource(DecoratedComponent) {
    return Object(_decorateHandler__WEBPACK_IMPORTED_MODULE_3__["default"])({
      containerDisplayName: 'DragSource',
      createHandler: createSource,
      registerHandler: _common_registration__WEBPACK_IMPORTED_MODULE_4__["registerSource"],
      createConnector: function createConnector(backend) {
        return new _common_SourceConnector__WEBPACK_IMPORTED_MODULE_6__["SourceConnector"](backend);
      },
      createMonitor: function createMonitor(manager) {
        return new _common_DragSourceMonitorImpl__WEBPACK_IMPORTED_MODULE_5__["DragSourceMonitorImpl"](manager);
      },
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/decorators/DropTarget.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/decorators/DropTarget.js ***!
  \******************************************************************/
/*! exports provided: DropTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropTarget", function() { return DropTarget; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/react-dnd/dist/esm/utils/js_utils.js");
/* harmony import */ var _common_registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/registration */ "./node_modules/react-dnd/dist/esm/common/registration.js");
/* harmony import */ var _utils_isValidType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/isValidType */ "./node_modules/react-dnd/dist/esm/utils/isValidType.js");
/* harmony import */ var _common_TargetConnector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/TargetConnector */ "./node_modules/react-dnd/dist/esm/common/TargetConnector.js");
/* harmony import */ var _common_DropTargetMonitorImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/DropTargetMonitorImpl */ "./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/react-dnd/dist/esm/decorators/utils.js");
/* harmony import */ var _decorateHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorateHandler */ "./node_modules/react-dnd/dist/esm/decorators/decorateHandler.js");
/* harmony import */ var _createTargetFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTargetFactory */ "./node_modules/react-dnd/dist/esm/decorators/createTargetFactory.js");









function DropTarget(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["checkDecoratorArguments"])('DropTarget', 'type, spec, collect[, options]', type, spec, collect, options);
  var getType = type;

  if (typeof type !== 'function') {
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_isValidType__WEBPACK_IMPORTED_MODULE_3__["isValidType"])(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', type);

    getType = function getType() {
      return type;
    };
  }

  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', spec);
  var createTarget = Object(_createTargetFactory__WEBPACK_IMPORTED_MODULE_8__["default"])(spec);
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
  return function decorateTarget(DecoratedComponent) {
    return Object(_decorateHandler__WEBPACK_IMPORTED_MODULE_7__["default"])({
      containerDisplayName: 'DropTarget',
      createHandler: createTarget,
      registerHandler: _common_registration__WEBPACK_IMPORTED_MODULE_2__["registerTarget"],
      createMonitor: function createMonitor(manager) {
        return new _common_DropTargetMonitorImpl__WEBPACK_IMPORTED_MODULE_5__["DropTargetMonitorImpl"](manager);
      },
      createConnector: function createConnector(backend) {
        return new _common_TargetConnector__WEBPACK_IMPORTED_MODULE_4__["TargetConnector"](backend);
      },
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/decorators/createSourceFactory.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/decorators/createSourceFactory.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSourceFactory; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/react-dnd/dist/esm/utils/js_utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-dnd/dist/esm/decorators/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];

var SourceImpl =
/*#__PURE__*/
function () {
  function SourceImpl(spec, monitor, ref) {
    var _this = this;

    _classCallCheck(this, SourceImpl);

    this.props = null;

    this.beginDrag = function () {
      if (!_this.props) {
        return;
      }

      var item = _this.spec.beginDrag(_this.props, _this.monitor, _this.ref.current);

      if (false) {}

      return item;
    };

    this.spec = spec;
    this.monitor = monitor;
    this.ref = ref;
  }

  _createClass(SourceImpl, [{
    key: "receiveProps",
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      if (!this.props) {
        return false;
      }

      if (!this.spec.canDrag) {
        return true;
      }

      return this.spec.canDrag(this.props, this.monitor);
    }
  }, {
    key: "isDragging",
    value: function isDragging(globalMonitor, sourceId) {
      if (!this.props) {
        return false;
      }

      if (!this.spec.isDragging) {
        return sourceId === globalMonitor.getSourceId();
      }

      return this.spec.isDragging(this.props, this.monitor);
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      if (!this.props) {
        return;
      }

      if (!this.spec.endDrag) {
        return;
      }

      this.spec.endDrag(this.props, this.monitor, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getDecoratedComponent"])(this.ref));
    }
  }]);

  return SourceImpl;
}();

function createSourceFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', ALLOWED_SPEC_METHODS.join(', '), key);
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', key, key, spec[key]);
  });
  REQUIRED_SPEC_METHODS.forEach(function (key) {
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', key, key, spec[key]);
  });
  return function createSource(monitor, ref) {
    return new SourceImpl(spec, monitor, ref);
  };
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/decorators/createTargetFactory.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/decorators/createTargetFactory.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTargetFactory; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/react-dnd/dist/esm/utils/js_utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-dnd/dist/esm/decorators/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

var TargetImpl =
/*#__PURE__*/
function () {
  function TargetImpl(spec, monitor, ref) {
    _classCallCheck(this, TargetImpl);

    this.props = null;
    this.spec = spec;
    this.monitor = monitor;
    this.ref = ref;
  }

  _createClass(TargetImpl, [{
    key: "receiveProps",
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: "receiveMonitor",
    value: function receiveMonitor(monitor) {
      this.monitor = monitor;
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      if (!this.spec.canDrop) {
        return true;
      }

      return this.spec.canDrop(this.props, this.monitor);
    }
  }, {
    key: "hover",
    value: function hover() {
      if (!this.spec.hover) {
        return;
      }

      this.spec.hover(this.props, this.monitor, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getDecoratedComponent"])(this.ref));
    }
  }, {
    key: "drop",
    value: function drop() {
      if (!this.spec.drop) {
        return undefined;
      }

      var dropResult = this.spec.drop(this.props, this.monitor, this.ref.current);

      if (false) {}

      return dropResult;
    }
  }]);

  return TargetImpl;
}();

function createTargetFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', ALLOWED_SPEC_METHODS.join(', '), key);
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', key, key, spec[key]);
  });
  return function createTarget(monitor, ref) {
    return new TargetImpl(spec, monitor, ref);
  };
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/decorators/decorateHandler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/decorators/decorateHandler.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return decorateHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/react-dnd/dist/esm/utils/js_utils.js");
/* harmony import */ var _disposables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disposables */ "./node_modules/react-dnd/dist/esm/decorators/disposables.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/react-dnd/dist/esm/decorators/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









function decorateHandler(_ref) {
  var DecoratedComponent = _ref.DecoratedComponent,
      createHandler = _ref.createHandler,
      createMonitor = _ref.createMonitor,
      createConnector = _ref.createConnector,
      registerHandler = _ref.registerHandler,
      containerDisplayName = _ref.containerDisplayName,
      getType = _ref.getType,
      collect = _ref.collect,
      options = _ref.options;
  var _options$arePropsEqua = options.arePropsEqual,
      arePropsEqual = _options$arePropsEqua === void 0 ? shallowequal__WEBPACK_IMPORTED_MODULE_1___default.a : _options$arePropsEqua;
  var Decorated = DecoratedComponent;
  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

  var DragDropContainer =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DragDropContainer, _React$Component);

    function DragDropContainer(props) {
      var _this;

      _classCallCheck(this, DragDropContainer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DragDropContainer).call(this, props));
      _this.decoratedRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();

      _this.handleChange = function () {
        var nextState = _this.getCurrentState();

        if (!shallowequal__WEBPACK_IMPORTED_MODULE_1___default()(nextState, _this.state)) {
          _this.setState(nextState);
        }
      };

      _this.disposable = new _disposables__WEBPACK_IMPORTED_MODULE_6__["SerialDisposable"]();

      _this.receiveProps(props);

      _this.dispose();

      return _this;
    }

    _createClass(DragDropContainer, [{
      key: "getHandlerId",
      value: function getHandlerId() {
        return this.handlerId;
      }
    }, {
      key: "getDecoratedComponentInstance",
      value: function getDecoratedComponentInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_2___default()(this.decoratedRef.current, 'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()');
        return this.decoratedRef.current;
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !arePropsEqual(nextProps, this.props) || !shallowequal__WEBPACK_IMPORTED_MODULE_1___default()(nextState, this.state);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.disposable = new _disposables__WEBPACK_IMPORTED_MODULE_6__["SerialDisposable"]();
        this.currentType = undefined;
        this.receiveProps(this.props);
        this.handleChange();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!arePropsEqual(this.props, prevProps)) {
          this.receiveProps(this.props);
          this.handleChange();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.dispose();
      }
    }, {
      key: "receiveProps",
      value: function receiveProps(props) {
        if (!this.handler) {
          return;
        }

        this.handler.receiveProps(props);
        this.receiveType(getType(props));
      }
    }, {
      key: "receiveType",
      value: function receiveType(type) {
        if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {
          return;
        }

        if (type === this.currentType) {
          return;
        }

        this.currentType = type;

        var _registerHandler = registerHandler(type, this.handler, this.manager),
            _registerHandler2 = _slicedToArray(_registerHandler, 2),
            handlerId = _registerHandler2[0],
            unregister = _registerHandler2[1];

        this.handlerId = handlerId;
        this.handlerMonitor.receiveHandlerId(handlerId);
        this.handlerConnector.receiveHandlerId(handlerId);
        var globalMonitor = this.manager.getMonitor();
        var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, {
          handlerIds: [handlerId]
        });
        this.disposable.setDisposable(new _disposables__WEBPACK_IMPORTED_MODULE_6__["CompositeDisposable"](new _disposables__WEBPACK_IMPORTED_MODULE_6__["Disposable"](unsubscribe), new _disposables__WEBPACK_IMPORTED_MODULE_6__["Disposable"](unregister)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.disposable.dispose();

        if (this.handlerConnector) {
          this.handlerConnector.receiveHandlerId(null);
        }
      }
    }, {
      key: "getCurrentState",
      value: function getCurrentState() {
        if (!this.handlerConnector) {
          return {};
        }

        var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor, this.props);

        if (false) {}

        return nextState;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_index__WEBPACK_IMPORTED_MODULE_4__["DndContext"].Consumer, null, function (_ref2) {
          var dragDropManager = _ref2.dragDropManager;

          _this2.receiveDragDropManager(dragDropManager);

          if (typeof requestAnimationFrame !== 'undefined') {
            requestAnimationFrame(function () {
              return _this2.handlerConnector.reconnect();
            });
          }

          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Decorated, Object.assign({}, _this2.props, _this2.getCurrentState(), {
            // NOTE: if Decorated is a Function Component, decoratedRef will not be populated unless it's a refforwarding component.
            ref: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isRefable"])(Decorated) ? _this2.decoratedRef : null
          }));
        });
      }
    }, {
      key: "receiveDragDropManager",
      value: function receiveDragDropManager(dragDropManager) {
        if (this.manager !== undefined) {
          return;
        }

        invariant__WEBPACK_IMPORTED_MODULE_2___default()(dragDropManager !== undefined, 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to render a DndProvider component in your top-level component. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

        if (dragDropManager === undefined) {
          return;
        }

        this.manager = dragDropManager;
        this.handlerMonitor = createMonitor(dragDropManager);
        this.handlerConnector = createConnector(dragDropManager.getBackend());
        this.handler = createHandler(this.handlerMonitor, this.decoratedRef);
      }
    }]);

    return DragDropContainer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  DragDropContainer.DecoratedComponent = DecoratedComponent;
  DragDropContainer.displayName = "".concat(containerDisplayName, "(").concat(displayName, ")");
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(DragDropContainer, DecoratedComponent);
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/decorators/disposables.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/decorators/disposables.js ***!
  \*******************************************************************/
/*! exports provided: Disposable, CompositeDisposable, SerialDisposable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disposable", function() { return Disposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeDisposable", function() { return CompositeDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialDisposable", function() { return SerialDisposable; });
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/react-dnd/dist/esm/utils/js_utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Provides a set of static methods for creating Disposables.
 * @param {Function} action Action to run during the first call to dispose.
 * The action is guaranteed to be run at most once.
 */

var Disposable =
/*#__PURE__*/
function () {
  function Disposable(action) {
    _classCallCheck(this, Disposable);

    this.isDisposed = false;
    this.action = Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(action) ? action : _utils_js_utils__WEBPACK_IMPORTED_MODULE_0__["noop"];
  }
  /**
   * Validates whether the given object is a disposable
   * @param {Object} Object to test whether it has a dispose method
   * @returns {Boolean} true if a disposable object, else false.
   */


  _createClass(Disposable, [{
    key: "dispose",

    /** Performs the task of cleaning up resources. */
    value: function dispose() {
      if (!this.isDisposed) {
        this.action();
        this.isDisposed = true;
      }
    }
  }], [{
    key: "isDisposable",
    value: function isDisposable(d) {
      return d && Object(_utils_js_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(d.dispose);
    }
  }, {
    key: "_fixup",
    value: function _fixup(result) {
      return Disposable.isDisposable(result) ? result : Disposable.empty;
    }
    /**
     * Creates a disposable object that invokes the specified action when disposed.
     * @param {Function} dispose Action to run during the first call to dispose.
     * The action is guaranteed to be run at most once.
     * @return {Disposable} The disposable object that runs the given action upon disposal.
     */

  }, {
    key: "create",
    value: function create(action) {
      return new Disposable(action);
    }
  }]);

  return Disposable;
}();
/**
 * Gets the disposable that does nothing when disposed.
 */

Disposable.empty = {
  dispose: _utils_js_utils__WEBPACK_IMPORTED_MODULE_0__["noop"]
};
/**
 * Represents a group of disposable resources that are disposed together.
 * @constructor
 */

var CompositeDisposable =
/*#__PURE__*/
function () {
  function CompositeDisposable() {
    _classCallCheck(this, CompositeDisposable);

    this.isDisposed = false;

    for (var _len = arguments.length, disposables = new Array(_len), _key = 0; _key < _len; _key++) {
      disposables[_key] = arguments[_key];
    }

    this.disposables = disposables;
  }
  /**
   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
   * @param {Any} item Disposable to add.
   */


  _createClass(CompositeDisposable, [{
    key: "add",
    value: function add(item) {
      if (this.isDisposed) {
        item.dispose();
      } else {
        this.disposables.push(item);
      }
    }
    /**
     * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
     * @param {Any} item Disposable to remove.
     * @returns {Boolean} true if found; false otherwise.
     */

  }, {
    key: "remove",
    value: function remove(item) {
      var shouldDispose = false;

      if (!this.isDisposed) {
        var idx = this.disposables.indexOf(item);

        if (idx !== -1) {
          shouldDispose = true;
          this.disposables.splice(idx, 1);
          item.dispose();
        }
      }

      return shouldDispose;
    }
    /**
     *  Disposes all disposables in the group and removes them from the group but
     *  does not dispose the CompositeDisposable.
     */

  }, {
    key: "clear",
    value: function clear() {
      if (!this.isDisposed) {
        var len = this.disposables.length;
        var currentDisposables = new Array(len);

        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }

        this.disposables = [];

        for (var _i = 0; _i < len; _i++) {
          currentDisposables[_i].dispose();
        }
      }
    }
    /**
     *  Disposes all disposables in the group and removes them from the group.
     */

  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var len = this.disposables.length;
        var currentDisposables = new Array(len);

        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }

        this.disposables = [];

        for (var _i2 = 0; _i2 < len; _i2++) {
          currentDisposables[_i2].dispose();
        }
      }
    }
  }]);

  return CompositeDisposable;
}();
/**
 * Represents a disposable resource whose underlying disposable resource can
 * be replaced by another disposable resource, causing automatic disposal of
 * the previous underlying disposable resource.
 */

var SerialDisposable =
/*#__PURE__*/
function () {
  function SerialDisposable() {
    _classCallCheck(this, SerialDisposable);

    this.isDisposed = false;
  }
  /**
   * Gets the underlying disposable.
   * @returns {Any} the underlying disposable.
   */


  _createClass(SerialDisposable, [{
    key: "getDisposable",
    value: function getDisposable() {
      return this.current;
    }
  }, {
    key: "setDisposable",
    value: function setDisposable(value) {
      var shouldDispose = this.isDisposed;

      if (!shouldDispose) {
        var old = this.current;
        this.current = value;

        if (old) {
          old.dispose();
        }
      }

      if (shouldDispose && value) {
        value.dispose();
      }
    }
    /** Performs the task of cleaning up resources. */

  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var old = this.current;
        this.current = undefined;

        if (old) {
          old.dispose();
        }
      }
    }
  }]);

  return SerialDisposable;
}();

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/decorators/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/decorators/index.js ***!
  \*************************************************************/
/*! exports provided: DragSource, DropTarget, DragLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DragSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragSource */ "./node_modules/react-dnd/dist/esm/decorators/DragSource.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragSource", function() { return _DragSource__WEBPACK_IMPORTED_MODULE_0__["DragSource"]; });

/* harmony import */ var _DropTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropTarget */ "./node_modules/react-dnd/dist/esm/decorators/DropTarget.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropTarget", function() { return _DropTarget__WEBPACK_IMPORTED_MODULE_1__["DropTarget"]; });

/* harmony import */ var _DragLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DragLayer */ "./node_modules/react-dnd/dist/esm/decorators/DragLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragLayer", function() { return _DragLayer__WEBPACK_IMPORTED_MODULE_2__["DragLayer"]; });





/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/decorators/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/decorators/utils.js ***!
  \*************************************************************/
/*! exports provided: getDecoratedComponent, isClassComponent, isRefForwardingComponent, isRefable, checkDecoratorArguments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecoratedComponent", function() { return getDecoratedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassComponent", function() { return isClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRefForwardingComponent", function() { return isRefForwardingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRefable", function() { return isRefable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDecoratorArguments", function() { return checkDecoratorArguments; });
function getDecoratedComponent(instanceRef) {
  var currentRef = instanceRef.current;

  if (currentRef == null) {
    return null;
  } else if (currentRef.decoratedRef) {
    // go through the private field in decorateHandler to avoid the invariant hit
    return currentRef.decoratedRef.current;
  } else {
    return currentRef;
  }
}
function isClassComponent(Component) {
  return Component && Component.prototype && typeof Component.prototype.render === 'function';
}
function isRefForwardingComponent(C) {
  return C && C.$$typeof && C.$$typeof.toString() === 'Symbol(react.forward_ref)';
}
function isRefable(C) {
  return isClassComponent(C) || isRefForwardingComponent(C);
}
function checkDecoratorArguments(functionName, signature) {
  if (false) { var arg, i; }
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/index.js ***!
  \********************************************************/
/*! exports provided: useDrag, useDrop, useDragLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useDrag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDrag */ "./node_modules/react-dnd/dist/esm/hooks/useDrag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDrag", function() { return _useDrag__WEBPACK_IMPORTED_MODULE_0__["useDrag"]; });

/* harmony import */ var _useDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDrop */ "./node_modules/react-dnd/dist/esm/hooks/useDrop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDrop", function() { return _useDrop__WEBPACK_IMPORTED_MODULE_1__["useDrop"]; });

/* harmony import */ var _useDragLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDragLayer */ "./node_modules/react-dnd/dist/esm/hooks/useDragLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDragLayer", function() { return _useDragLayer__WEBPACK_IMPORTED_MODULE_2__["useDragLayer"]; });





/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/drag.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/drag.js ***!
  \****************************************************************/
/*! exports provided: useDragSourceMonitor, useDragHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragSourceMonitor", function() { return useDragSourceMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragHandler", function() { return useDragHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/registration */ "./node_modules/react-dnd/dist/esm/common/registration.js");
/* harmony import */ var _useDragDropManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDragDropManager */ "./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js");
/* harmony import */ var _common_DragSourceMonitorImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/DragSourceMonitorImpl */ "./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js");
/* harmony import */ var _common_SourceConnector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/SourceConnector */ "./node_modules/react-dnd/dist/esm/common/SourceConnector.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function useDragSourceMonitor() {
  var manager = Object(_useDragDropManager__WEBPACK_IMPORTED_MODULE_3__["useDragDropManager"])();
  var monitor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _common_DragSourceMonitorImpl__WEBPACK_IMPORTED_MODULE_4__["DragSourceMonitorImpl"](manager);
  }, [manager]);
  var connector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _common_SourceConnector__WEBPACK_IMPORTED_MODULE_5__["SourceConnector"](manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDragHandler(spec, monitor, connector) {
  var manager = Object(_useDragDropManager__WEBPACK_IMPORTED_MODULE_3__["useDragDropManager"])();
  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      beginDrag: function beginDrag() {
        var _spec$current = spec.current,
            begin = _spec$current.begin,
            item = _spec$current.item;

        if (begin) {
          var beginResult = begin(monitor);
          invariant__WEBPACK_IMPORTED_MODULE_1___default()(beginResult == null || _typeof(beginResult) === 'object', 'dragSpec.begin() must either return an object, undefined, or null');
          return beginResult || item || {};
        }

        return item || {};
      },
      canDrag: function canDrag() {
        if (typeof spec.current.canDrag === 'boolean') {
          return spec.current.canDrag;
        } else if (typeof spec.current.canDrag === 'function') {
          return spec.current.canDrag(monitor);
        } else {
          return true;
        }
      },
      isDragging: function isDragging(globalMonitor, target) {
        var isDragging = spec.current.isDragging;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
      },
      endDrag: function endDrag() {
        var end = spec.current.end;

        if (end) {
          end(monitor.getItem(), monitor);
        }

        connector.reconnect();
      }
    };
  }, []);
  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function registerHandler() {
    var _registerSource = Object(_common_registration__WEBPACK_IMPORTED_MODULE_2__["registerSource"])(spec.current.item.type, handler, manager),
        _registerSource2 = _slicedToArray(_registerSource, 2),
        handlerId = _registerSource2[0],
        unregister = _registerSource2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, []);
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/drop.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/drop.js ***!
  \****************************************************************/
/*! exports provided: useDropTargetMonitor, useDropHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDropTargetMonitor", function() { return useDropTargetMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDropHandler", function() { return useDropHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/registration */ "./node_modules/react-dnd/dist/esm/common/registration.js");
/* harmony import */ var _useDragDropManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDragDropManager */ "./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js");
/* harmony import */ var _common_TargetConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/TargetConnector */ "./node_modules/react-dnd/dist/esm/common/TargetConnector.js");
/* harmony import */ var _common_DropTargetMonitorImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/DropTargetMonitorImpl */ "./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function useDropTargetMonitor() {
  var manager = Object(_useDragDropManager__WEBPACK_IMPORTED_MODULE_2__["useDragDropManager"])();
  var monitor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _common_DropTargetMonitorImpl__WEBPACK_IMPORTED_MODULE_4__["DropTargetMonitorImpl"](manager);
  }, [manager]);
  var connector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _common_TargetConnector__WEBPACK_IMPORTED_MODULE_3__["TargetConnector"](manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDropHandler(spec, monitor, connector) {
  var manager = Object(_useDragDropManager__WEBPACK_IMPORTED_MODULE_2__["useDragDropManager"])();
  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      canDrop: function canDrop() {
        var canDrop = spec.current.canDrop;
        return canDrop ? canDrop(monitor.getItem(), monitor) : true;
      },
      hover: function hover() {
        var hover = spec.current.hover;

        if (hover) {
          hover(monitor.getItem(), monitor);
        }
      },
      drop: function drop() {
        var drop = spec.current.drop;

        if (drop) {
          return drop(monitor.getItem(), monitor);
        }
      }
    };
  }, [monitor]);
  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__["useIsomorphicLayoutEffect"])(function registerHandler() {
    var _registerTarget = Object(_common_registration__WEBPACK_IMPORTED_MODULE_1__["registerTarget"])(spec.current.accept, handler, manager),
        _registerTarget2 = _slicedToArray(_registerTarget, 2),
        handlerId = _registerTarget2[0],
        unregister = _registerTarget2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [monitor, connector]);
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js ***!
  \************************************************************************/
/*! exports provided: useCollector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCollector", function() { return useCollector; });
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */

function useCollector(monitor, collect, onUpdate) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return collect(monitor);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      collected = _useState2[0],
      setCollected = _useState2[1];

  var updateCollected = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var nextValue = collect(monitor);

    if (!shallowequal__WEBPACK_IMPORTED_MODULE_0___default()(collected, nextValue)) {
      setCollected(nextValue);

      if (onUpdate) {
        onUpdate();
      }
    }
  }, [collected, monitor, onUpdate]); // update the collected properties after the first render
  // and the components are attached to dnd-core

  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__["useIsomorphicLayoutEffect"])(updateCollected, []);
  return [collected, updateCollected];
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js ***!
  \******************************************************************************/
/*! exports provided: useDragDropManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragDropManager", function() { return useDragDropManager; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_DndContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/DndContext */ "./node_modules/react-dnd/dist/esm/common/DndContext.js");



/**
 * A hook to retrieve the DragDropManager from Context
 */

function useDragDropManager() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_common_DndContext__WEBPACK_IMPORTED_MODULE_2__["DndContext"]),
      dragDropManager = _useContext.dragDropManager;

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(dragDropManager != null, 'Expected drag drop context');
  return dragDropManager;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js ***!
  \*************************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // suppress the useLayoutEffect warning on server side.

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js ***!
  \****************************************************************************/
/*! exports provided: useMonitorOutput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMonitorOutput", function() { return useMonitorOutput; });
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
/* harmony import */ var _useCollector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCollector */ "./node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useMonitorOutput(monitor, collect, onCollect) {
  var _useCollector = Object(_useCollector__WEBPACK_IMPORTED_MODULE_1__["useCollector"])(monitor, collect, onCollect),
      _useCollector2 = _slicedToArray(_useCollector, 2),
      collected = _useCollector2[0],
      updateCollected = _useCollector2[1];

  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__["useIsomorphicLayoutEffect"])(function subscribeToMonitorStateChange() {
    var handlerId = monitor.getHandlerId();

    if (handlerId == null) {
      return undefined;
    }

    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/useDrag.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/useDrag.js ***!
  \**********************************************************/
/*! exports provided: useDrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDrag", function() { return useDrag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _internal_useMonitorOutput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/useMonitorOutput */ "./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js");
/* harmony import */ var _internal_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
/* harmony import */ var _internal_drag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/drag */ "./node_modules/react-dnd/dist/esm/hooks/internal/drag.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * useDragSource hook
 * @param sourceSpec The drag source specification *
 */

function useDrag(spec) {
  var specRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(spec);
  specRef.current = spec; // TODO: wire options into createSourceConnector

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(spec.item != null, 'item must be defined');
  invariant__WEBPACK_IMPORTED_MODULE_1___default()(spec.item.type != null, 'item type must be defined');

  var _useDragSourceMonitor = Object(_internal_drag__WEBPACK_IMPORTED_MODULE_4__["useDragSourceMonitor"])(),
      _useDragSourceMonitor2 = _slicedToArray(_useDragSourceMonitor, 2),
      monitor = _useDragSourceMonitor2[0],
      connector = _useDragSourceMonitor2[1];

  Object(_internal_drag__WEBPACK_IMPORTED_MODULE_4__["useDragHandler"])(specRef, monitor, connector);
  var result = Object(_internal_useMonitorOutput__WEBPACK_IMPORTED_MODULE_2__["useMonitorOutput"])(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDragSource = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return connector.hooks.dragSource();
  }, [connector]);
  var connectDragPreview = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return connector.hooks.dragPreview();
  }, [connector]);
  Object(_internal_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    connector.dragSourceOptions = specRef.current.options || null;
    connector.reconnect();
  }, [connector]);
  Object(_internal_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    connector.dragPreviewOptions = specRef.current.previewOptions || null;
    connector.reconnect();
  }, [connector]);
  return [result, connectDragSource, connectDragPreview];
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/useDragLayer.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/useDragLayer.js ***!
  \***************************************************************/
/*! exports provided: useDragLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragLayer", function() { return useDragLayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _internal_useDragDropManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/useDragDropManager */ "./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js");
/* harmony import */ var _internal_useCollector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/useCollector */ "./node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 * useDragLayer Hook
 * @param collector The property collector
 */

function useDragLayer(collect) {
  var dragDropManager = Object(_internal_useDragDropManager__WEBPACK_IMPORTED_MODULE_1__["useDragDropManager"])();
  var monitor = dragDropManager.getMonitor();

  var _useCollector = Object(_internal_useCollector__WEBPACK_IMPORTED_MODULE_2__["useCollector"])(monitor, collect),
      _useCollector2 = _slicedToArray(_useCollector, 2),
      collected = _useCollector2[0],
      updateCollected = _useCollector2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return monitor.subscribeToOffsetChange(updateCollected);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return monitor.subscribeToStateChange(updateCollected);
  });
  return collected;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/useDrop.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/useDrop.js ***!
  \**********************************************************/
/*! exports provided: useDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDrop", function() { return useDrop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _internal_useMonitorOutput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/useMonitorOutput */ "./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js");
/* harmony import */ var _internal_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
/* harmony import */ var _internal_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/drop */ "./node_modules/react-dnd/dist/esm/hooks/internal/drop.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * useDropTarget Hook
 * @param spec The drop target specification
 */

function useDrop(spec) {
  var specRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(spec);
  specRef.current = spec;
  invariant__WEBPACK_IMPORTED_MODULE_1___default()(spec.accept != null, 'accept must be defined');

  var _useDropTargetMonitor = Object(_internal_drop__WEBPACK_IMPORTED_MODULE_4__["useDropTargetMonitor"])(),
      _useDropTargetMonitor2 = _slicedToArray(_useDropTargetMonitor, 2),
      monitor = _useDropTargetMonitor2[0],
      connector = _useDropTargetMonitor2[1];

  Object(_internal_drop__WEBPACK_IMPORTED_MODULE_4__["useDropHandler"])(specRef, monitor, connector);
  var result = Object(_internal_useMonitorOutput__WEBPACK_IMPORTED_MODULE_2__["useMonitorOutput"])(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDropTarget = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return connector.hooks.dropTarget();
  }, [connector]);
  Object(_internal_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    connector.dropTargetOptions = spec.options || null;
    connector.reconnect();
  }, [spec.options]);
  return [result, connectDropTarget];
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/index.js ***!
  \**************************************************/
/*! exports provided: DndContext, createDndContext, DndProvider, DragPreviewImage, useDrag, useDrop, useDragLayer, DragSource, DropTarget, DragLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/react-dnd/dist/esm/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DndContext", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["DndContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDndContext", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["createDndContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DndProvider", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["DndProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragPreviewImage", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["DragPreviewImage"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./node_modules/react-dnd/dist/esm/hooks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDrag", function() { return _hooks__WEBPACK_IMPORTED_MODULE_1__["useDrag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDrop", function() { return _hooks__WEBPACK_IMPORTED_MODULE_1__["useDrop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDragLayer", function() { return _hooks__WEBPACK_IMPORTED_MODULE_1__["useDragLayer"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "./node_modules/react-dnd/dist/esm/decorators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragSource", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["DragSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropTarget", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["DropTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragLayer", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["DragLayer"]; });





/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/utils/cloneWithRef.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/utils/cloneWithRef.js ***!
  \***************************************************************/
/*! exports provided: cloneWithRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneWithRef", function() { return cloneWithRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);



function setRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else {
    ref.current = node;
  }
}

function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  invariant__WEBPACK_IMPORTED_MODULE_1___default()(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(element, {
      ref: newRef
    });
  } else {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(element, {
      ref: function ref(node) {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/utils/isRef.js":
/*!********************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/utils/isRef.js ***!
  \********************************************************/
/*! exports provided: isRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return isRef; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isRef(obj) {
  return (// eslint-disable-next-line no-prototype-builtins
    obj !== null && _typeof(obj) === 'object' && obj.hasOwnProperty('current')
  );
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/utils/isValidType.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/utils/isValidType.js ***!
  \**************************************************************/
/*! exports provided: isValidType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidType", function() { return isValidType; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isValidType(type, allowArray) {
  return typeof type === 'string' || _typeof(type) === 'symbol' || !!allowArray && Array.isArray(type) && type.every(function (t) {
    return isValidType(t, false);
  });
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/utils/js_utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/utils/js_utils.js ***!
  \***********************************************************/
/*! exports provided: isFunction, noop, isPlainObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// cheap lodash replacements
function isFunction(input) {
  return typeof input === 'function';
}
function noop() {// noop
}

function isObjectLike(input) {
  return _typeof(input) === 'object' && input !== null;
}

function isPlainObject(input) {
  if (!isObjectLike(input)) {
    return false;
  }

  if (Object.getPrototypeOf(input) === null) {
    return true;
  }

  var proto = input;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(input) === proto;
}

/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.production.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.production.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-is.production.min.js */ "./node_modules/react-is/cjs/react-is.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-share/es/EmailIcon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-share/es/EmailIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var EmailIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('email', {
  icon: 'M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z',
  mask: 'M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z',
  color: '#7f7f7f'
});

/* harmony default export */ __webpack_exports__["default"] = (EmailIcon);

/***/ }),

/***/ "./node_modules/react-share/es/EmailShareButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/EmailShareButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");





function emailLink(url, _ref) {
  var subject = _ref.subject,
      body = _ref.body;

  return 'mailto:' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({ subject: subject, body: body || url });
}

var EmailShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('email', emailLink, function (props) {
  return {
    subject: props.subject,
    body: props.body
  };
}, {
  subject: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  body: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  openWindow: false,
  onClick: function onClick(link) {
    window.location.href = link;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (EmailShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/FacebookIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/FacebookIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var FacebookIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('facebook', {
  icon: 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z',
  mask: 'M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z',
  color: '#3b5998'
});

/* harmony default export */ __webpack_exports__["default"] = (FacebookIcon);

/***/ }),

/***/ "./node_modules/react-share/es/FacebookShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/FacebookShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function facebookLink(url, _ref) {
  var quote = _ref.quote,
      hashtag = _ref.hashtag;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'facebook.url');

  return 'https://www.facebook.com/sharer/sharer.php' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    u: url,
    quote: quote,
    hashtag: hashtag
  });
}

var FacebookShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('facebook', facebookLink, function (props) {
  /* eslint-disable no-console */
  if (props.picture) {
    console.warn('FacebookShareButton warning: picture is a deprecated prop.');
  }

  if (props.title) {
    console.warn('FacebookShareButton warning: title is a deprecated prop. Use "quote" instead.');
  }

  if (props.description) {
    console.warn('FacebookShareButton warning: description is a deprecated prop.\n      Use "quote" instead.');
  }
  /* eslint-enable no-console */

  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  quote: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  hashtag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (FacebookShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/FacebookShareCount.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-share/es/FacebookShareCount.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");




function getFacebookShareCount(shareUrl, callback) {
  var endpoint = 'https://graph.facebook.com/?id=' + shareUrl;

  jsonp__WEBPACK_IMPORTED_MODULE_0___default()(endpoint, function (err, data) {
    callback(!err && data && data.share && data.share.share_count ? data.share.share_count : undefined);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(getFacebookShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/GooglePlusIcon.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-share/es/GooglePlusIcon.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var GooglePlusIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('google', {
  icon: 'M25.3,30.1v3.8h6.3c-0.3,1.6-1.9,4.8-6.3,4.8c-3.8,0-6.9-3.1-6.9-7s3.1-7,6.9-7c2.2,0,3.6,0.9,4.4,1.7l3-2.9c-1.9-1.8-4.4-2.9-7.4-2.9c-6.1,0-11.1,5-11.1,11.1s5,11.1,11.1,11.1c6.4,0,10.7-4.5,10.7-10.9c0-0.7-0.1-1.3-0.2-1.8H25.3L25.3,30.1z M49.8,28.9h-3.2v-3.2h-3.2v3.2h-3.2v3.2h3.2v3.2h3.2v-3.2h3.2',
  mask: 'M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z',
  color: '#dd4b39'
});

/* harmony default export */ __webpack_exports__["default"] = (GooglePlusIcon);

/***/ }),

/***/ "./node_modules/react-share/es/GooglePlusShareButton.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-share/es/GooglePlusShareButton.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");





function googlePlusLink(url) {
  assert__WEBPACK_IMPORTED_MODULE_0___default()(url, 'googlePlus.url');

  return 'https://plus.google.com/share' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({ url: url });
}

var GooglePlusShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('googlePlus', googlePlusLink, undefined, undefined, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (GooglePlusShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/GooglePlusShareCount.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-share/es/GooglePlusShareCount.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ieDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ieDetection */ "./node_modules/react-share/es/utils/ieDetection.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");




function getGooglePlusShareCount(shareUrl, callback) {
  if (Object(_utils_ieDetection__WEBPACK_IMPORTED_MODULE_1__["default"])(11)) {
    /* eslint-disable no-console */
    console.error('Google plus share count is not supported in <=IE10!');
    /* eslint-enable no-console */
    return;
  }

  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://clients6.google.com/rpc');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

  xhr.send(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'pos.plusones.get',
    id: 'p',
    params: {
      nolog: true,
      id: shareUrl,
      source: 'widget',
      userId: '@viewer',
      groupId: '@self'
    },
    jsonrpc: '2.0',
    key: 'p',
    apiVersion: 'v1'
  }));

  xhr.onload = function onSuccessdata() {
    var data = JSON.parse(this.responseText);
    callback(data ? data.result.metadata.globalCounts.count : undefined);
  };

  xhr.onerror = function onErrordata() {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getGooglePlusShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/LineIcon.js":
/*!*************************************************!*\
  !*** ./node_modules/react-share/es/LineIcon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var LineIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('line', {
  icon: 'M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z',
  mask: '',
  color: '#00b800'
});

/* harmony default export */ __webpack_exports__["default"] = (LineIcon);

/***/ }),

/***/ "./node_modules/react-share/es/LineShareButton.js":
/*!********************************************************!*\
  !*** ./node_modules/react-share/es/LineShareButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");







function lineLink(url, _ref) {
  var title = _ref.title;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'line.url');

  return 'https://social-plugins.line.me/lineit/share' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_3__["default"])({
    url: url,
    text: title
  });
}

var LineShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('line', lineLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 500,
  windowHeight: 500
});

/* harmony default export */ __webpack_exports__["default"] = (LineShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/LinkedinIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/LinkedinIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var LinkedinIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('linkedin', {
  icon: 'M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z',
  mask: 'M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z',
  color: '#007fb1'
});

/* harmony default export */ __webpack_exports__["default"] = (LinkedinIcon);

/***/ }),

/***/ "./node_modules/react-share/es/LinkedinShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/LinkedinShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function linkedinLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'linkedin.url');

  return 'https://linkedin.com/shareArticle' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title,
    summary: description
  });
}

var LinkedinShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('linkedin', linkedinLink, function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 750,
  windowHeight: 600
});

/* harmony default export */ __webpack_exports__["default"] = (LinkedinShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/LinkedinShareCount.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-share/es/LinkedinShareCount.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");





function getLinkedinShareCount(shareUrl, callback) {
  var url = 'https://www.linkedin.com/countserv/count/share';

  return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: shareUrl,
    format: 'jsonp'
  }), function (err, data) {
    callback(data ? data.count : undefined);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getLinkedinShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/LivejournalIcon.js":
/*!********************************************************!*\
  !*** ./node_modules/react-share/es/LivejournalIcon.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var LivejournalIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('livejournal', {
  icon: 'M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z',
  mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
  color: '#21A5D8'
});

/* harmony default export */ __webpack_exports__["default"] = (LivejournalIcon);

/***/ }),

/***/ "./node_modules/react-share/es/LivejournalShareButton.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-share/es/LivejournalShareButton.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function livejournalLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'livejournal.url');

  return 'https://www.livejournal.com/update.bml' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    subject: title,
    event: description
  });
}

var LivejournalShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('livejournal', livejournalLink, function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (LivejournalShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/MailruIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/MailruIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var MailruIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('mailru', {
  icon: 'M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z',
  mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
  color: '#168DE2'
});

/* harmony default export */ __webpack_exports__["default"] = (MailruIcon);

/***/ }),

/***/ "./node_modules/react-share/es/MailruShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/MailruShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function mailruLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'mailru.url');

  return 'https://connect.mail.ru/share' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title,
    description: description,
    imageurl: image
  });
}

var MailruShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('mailru', mailruLink, function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (MailruShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/OKIcon.js":
/*!***********************************************!*\
  !*** ./node_modules/react-share/es/OKIcon.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var OKIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('ok', {
  icon: 'M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z ',
  mask: 'M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z',
  color: '#f2720c'
});

/* harmony default export */ __webpack_exports__["default"] = (OKIcon);

/***/ }),

/***/ "./node_modules/react-share/es/OKShareButton.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/OKShareButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function okLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'ok.url');

  return 'https://connect.ok.ru/offer' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title,
    description: description,
    imageUrl: image
  });
}

var OKShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('ok', okLink, function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (OKShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/OKShareCount.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/OKShareCount.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");





function getOKShareCount(shareUrl, callback) {
  if (!window.OK) {
    window.OK = {
      Share: {
        count: function count(index, _count) {
          return window.OK.callbacks[index](_count);
        }
      },
      callbacks: []
    };
  }

  var url = 'https://connect.ok.ru/dk';
  var index = window.OK.callbacks.length;

  window.ODKL = {
    updateCount: function updateCount(a, b) {
      window.OK.callbacks[index](b);
    }
  };
  window.OK.callbacks.push(callback);

  return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url + (0, _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'st.cmd': 'extLike',
    uid: 'odklcnt0',
    ref: shareUrl
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getOKShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/PinterestIcon.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/PinterestIcon.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var PinterestIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('pinterest', {
  icon: 'M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z',
  mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
  color: '#cb2128'
});

/* harmony default export */ __webpack_exports__["default"] = (PinterestIcon);

/***/ }),

/***/ "./node_modules/react-share/es/PinterestShareButton.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-share/es/PinterestShareButton.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function pinterestLink(url, _ref) {
  var media = _ref.media,
      description = _ref.description;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'pinterest.url');
  assert__WEBPACK_IMPORTED_MODULE_1___default()(media, 'pinterest.media');

  return 'https://pinterest.com/pin/create/button/' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    media: media,
    description: description
  });
}

var PinterestShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('pinterest', pinterestLink, function (props) {
  return {
    media: props.media,
    description: props.description
  };
}, {
  media: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 1000,
  windowHeight: 730
});

/* harmony default export */ __webpack_exports__["default"] = (PinterestShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/PinterestShareCount.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/PinterestShareCount.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");





function getPinterestShareCount(shareUrl, callback) {
  var url = 'https://api.pinterest.com/v1/urls/count.json';

  return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: shareUrl
  }), function (err, data) {
    callback(data ? data.count : undefined);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getPinterestShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/RedditIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/RedditIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var RedditIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('reddit', {
  icon: 'm 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z',
  color: '#5f99cf'
});

/* harmony default export */ __webpack_exports__["default"] = (RedditIcon);

/***/ }),

/***/ "./node_modules/react-share/es/RedditShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/RedditShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function redditLink(url, _ref) {
  var title = _ref.title;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'reddit.url');

  return 'https://www.reddit.com/submit' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title
  });
}

var RedditShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('reddit', redditLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (RedditShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/RedditShareCount.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/RedditShareCount.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");




function getRedditShareCount(shareUrl, callback) {
  var endpoint = 'https://www.reddit.com/api/info.json?limit=1&url=' + shareUrl;

  jsonp__WEBPACK_IMPORTED_MODULE_0___default()(endpoint, { param: 'jsonp' }, function (err, response) {
    callback(!err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : undefined);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(getRedditShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/TelegramIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/TelegramIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var TelegramIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('telegram', {
  icon: 'm45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957',
  mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
  color: '#37aee2'
});

/* harmony default export */ __webpack_exports__["default"] = (TelegramIcon);

/***/ }),

/***/ "./node_modules/react-share/es/TelegramShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/TelegramShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function telegramLink(url, _ref) {
  var title = _ref.title;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'telegram.url');

  return 'https://telegram.me/share/' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    text: title
  });
}

var TelegramShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('telegram', telegramLink, function (props) {
  return {
    title: props.title,
    via: props.via
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  via: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (TelegramShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/TumblrIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/TumblrIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var TumblrIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('tumblr', {
  icon: 'M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z',
  mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
  color: '#2c4762'
});

/* harmony default export */ __webpack_exports__["default"] = (TumblrIcon);

/***/ }),

/***/ "./node_modules/react-share/es/TumblrShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/TumblrShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function tumblrLink(url, _ref) {
  var title = _ref.title,
      caption = _ref.caption,
      tags = _ref.tags,
      posttype = _ref.posttype;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'tumblr.url');

  return 'https://www.tumblr.com/widgets/share/tool' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    canonicalUrl: url,
    title: title,
    caption: caption,
    tags: tags,
    posttype: posttype
  });
}

var TumblrShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('tumblr', tumblrLink, function (props) {
  return {
    title: props.title,
    tags: props.tags.join(','),
    caption: props.caption,
    posttype: props.posttype
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  caption: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  posttype: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
}, {
  tags: [],
  posttype: 'link',
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (TumblrShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/TumblrShareCount.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/TumblrShareCount.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");





function getTumblrShareCount(shareUrl, callback) {
  var endpoint = 'https://api.tumblr.com/v2/share/stats';

  return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(endpoint + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: shareUrl
  }), function (err, data) {
    callback(data ? data.note_count : undefined);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getTumblrShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/TwitterIcon.js":
/*!****************************************************!*\
  !*** ./node_modules/react-share/es/TwitterIcon.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var TwitterIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('twitter', {
  icon: 'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z',
  mask: 'M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z',
  color: '#00aced'
});

/* harmony default export */ __webpack_exports__["default"] = (TwitterIcon);

/***/ }),

/***/ "./node_modules/react-share/es/TwitterShareButton.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-share/es/TwitterShareButton.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function twitterLink(url, _ref) {
  var title = _ref.title,
      via = _ref.via,
      _ref$hashtags = _ref.hashtags,
      hashtags = _ref$hashtags === undefined ? [] : _ref$hashtags;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'twitter.url');
  assert__WEBPACK_IMPORTED_MODULE_1___default()(Array.isArray(hashtags), 'twitter.hashtags is not an array');

  return 'https://twitter.com/share' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    text: title,
    via: via,
    hashtags: hashtags.join(',')
  });
}

var TwitterShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('twitter', twitterLink, function (props) {
  return {
    hashtags: props.hashtags,
    title: props.title,
    via: props.via
  };
}, {
  hashtags: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  via: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (TwitterShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/VKIcon.js":
/*!***********************************************!*\
  !*** ./node_modules/react-share/es/VKIcon.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var VKIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('vk', {
  icon: 'M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
  mask: 'M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
  color: '#45668e'
});

/* harmony default export */ __webpack_exports__["default"] = (VKIcon);

/***/ }),

/***/ "./node_modules/react-share/es/VKShareButton.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/VKShareButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function vkLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'vk.url');

  return 'https://vk.com/share.php' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title,
    description: description,
    image: image
  });
}

var VKShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('vk', vkLink, function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (VKShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/VKShareCount.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/VKShareCount.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");





function getVKShareCount(shareUrl, callback) {
  if (!window.VK) {
    window.VK = {
      Share: {
        count: function count(index, _count) {
          return window.VK.callbacks[index](_count);
        }
      },
      callbacks: []
    };
  }

  var url = 'https://vk.com/share.php';
  var index = window.VK.callbacks.length;

  window.VK.callbacks.push(callback);

  return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
    act: 'count',
    index: index,
    url: shareUrl
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getVKShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/ViberIcon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-share/es/ViberIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var ViberIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('viber', {
  icon: 'm31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z',
  mask: '',
  color: '#7C529E'
});

/* harmony default export */ __webpack_exports__["default"] = (ViberIcon);

/***/ }),

/***/ "./node_modules/react-share/es/ViberShareButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/ViberShareButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function viberLink(url, _ref) {
  var title = _ref.title;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'viber.url');
  return 'viber://forward' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    text: (title || '') + ' ' + url
  });
}

var ViberShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('viber', viberLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (ViberShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/WeiboShareButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/WeiboShareButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function weiboLink(url, _ref) {
  var title = _ref.title,
      image = _ref.image;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'weibo.url');
  assert__WEBPACK_IMPORTED_MODULE_1___default()(image, 'weibo.image');

  return 'http://service.weibo.com/share/share.php?' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title,
    pic: image
  });
}

var WeiboShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('weibo', weiboLink, function (props) {
  return {
    title: props.title,
    image: props.image
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (WeiboShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/WhatsappIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/WhatsappIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var WhatsappIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('whatsapp', {
  icon: 'm42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915',
  mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
  color: '#2cb742'
});

/* harmony default export */ __webpack_exports__["default"] = (WhatsappIcon);

/***/ }),

/***/ "./node_modules/react-share/es/WhatsappShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/WhatsappShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function whatsappLink(url, _ref) {
  var title = _ref.title,
      separator = _ref.separator;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'whatsapp.url');
  return 'https://api.whatsapp.com/send' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    text: title ? title + separator + url : url
  });
}

var WhatsappShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('whatsapp', whatsappLink, function (props) {
  return {
    title: props.title,
    separator: props.separator
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  separator: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  separator: ' ',
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (WhatsappShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/WorkplaceIcon.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/WorkplaceIcon.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var WorkplaceIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('workplace', {
  icon: 'M34.019,10.292c0.21,0.017,0.423,0.034,0.636,0.049 c3.657,0.262,6.976,1.464,9.929,3.635c3.331,2.448,5.635,5.65,6.914,9.584c0.699,2.152,0.983,4.365,0.885,6.623 c-0.136,3.171-1.008,6.13-2.619,8.867c-0.442,0.75-0.908,1.492-1.495,2.141c-0.588,0.651-1.29,1.141-2.146,1.383 c-1.496,0.426-3.247-0.283-3.961-1.642c-0.26-0.494-0.442-1.028-0.654-1.548c-1.156-2.838-2.311-5.679-3.465-8.519 c-0.017-0.042-0.037-0.082-0.065-0.145c-0.101,0.245-0.192,0.472-0.284,0.698c-1.237,3.051-2.475,6.103-3.711,9.155 c-0.466,1.153-1.351,1.815-2.538,2.045c-1.391,0.267-2.577-0.154-3.496-1.247c-0.174-0.209-0.31-0.464-0.415-0.717 c-2.128-5.22-4.248-10.442-6.37-15.665c-0.012-0.029-0.021-0.059-0.036-0.104c0.054-0.003,0.103-0.006,0.15-0.006 c1.498-0.001,2.997,0,4.495-0.004c0.12-0.001,0.176,0.03,0.222,0.146c1.557,3.846,3.117,7.691,4.679,11.536 c0.018,0.046,0.039,0.091,0.067,0.159c0.273-0.673,0.536-1.32,0.797-1.968c1.064-2.627,2.137-5.25,3.19-7.883 c0.482-1.208,1.376-1.917,2.621-2.135c1.454-0.255,2.644,0.257,3.522,1.449c0.133,0.18,0.229,0.393,0.313,0.603 c1.425,3.495,2.848,6.991,4.269,10.488c0.02,0.047,0.04,0.093,0.073,0.172c0.196-0.327,0.385-0.625,0.559-0.935 c0.783-1.397,1.323-2.886,1.614-4.461c0.242-1.312,0.304-2.634,0.187-3.962c-0.242-2.721-1.16-5.192-2.792-7.38 c-2.193-2.939-5.086-4.824-8.673-5.625c-1.553-0.346-3.124-0.405-4.705-0.257c-3.162,0.298-6.036,1.366-8.585,3.258 c-3.414,2.534-5.638,5.871-6.623,10.016c-0.417,1.76-0.546,3.547-0.384,5.348c0.417,4.601,2.359,8.444,5.804,11.517 c2.325,2.073,5.037,3.393,8.094,3.989c1.617,0.317,3.247,0.395,4.889,0.242c1-0.094,1.982-0.268,2.952-0.529 c0.04-0.01,0.081-0.018,0.128-0.028c0,1.526,0,3.047,0,4.586c-0.402,0.074-0.805,0.154-1.21,0.221 c-0.861,0.14-1.728,0.231-2.601,0.258c-0.035,0.002-0.071,0.013-0.108,0.021c-0.493,0-0.983,0-1.476,0 c-0.049-0.007-0.1-0.018-0.149-0.022c-0.315-0.019-0.629-0.033-0.945-0.058c-1.362-0.105-2.702-0.346-4.017-0.716 c-3.254-0.914-6.145-2.495-8.66-4.752c-2.195-1.971-3.926-4.29-5.176-6.963c-1.152-2.466-1.822-5.057-1.993-7.774 c-0.014-0.226-0.033-0.451-0.05-0.676c0-0.502,0-1.003,0-1.504c0.008-0.049,0.02-0.099,0.022-0.148 c0.036-1.025,0.152-2.043,0.338-3.052c0.481-2.616,1.409-5.066,2.8-7.331c2.226-3.625,5.25-6.386,9.074-8.254 c2.536-1.24,5.217-1.947,8.037-2.126c0.23-0.015,0.461-0.034,0.691-0.051C33.052,10.292,33.535,10.292,34.019,10.292z',
  color: '#3b3d4a'
});

/* harmony default export */ __webpack_exports__["default"] = (WorkplaceIcon);

/***/ }),

/***/ "./node_modules/react-share/es/WorkplaceShareButton.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-share/es/WorkplaceShareButton.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function workplaceLink(url, _ref) {
  var quote = _ref.quote,
      hashtag = _ref.hashtag;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'workplace.url');

  return 'https://work.facebook.com/sharer.php' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    u: url,
    quote: quote,
    hashtag: hashtag
  });
}

var WorkplaceShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('workplace', workplaceLink, function (props) {
  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  quote: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  hashtag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (WorkplaceShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-share/es/index.js ***!
  \**********************************************/
/*! exports provided: FacebookShareCount, GooglePlusShareCount, LinkedinShareCount, PinterestShareCount, VKShareCount, OKShareCount, RedditShareCount, TumblrShareCount, FacebookShareButton, GooglePlusShareButton, LinkedinShareButton, TwitterShareButton, PinterestShareButton, VKShareButton, OKShareButton, TelegramShareButton, WhatsappShareButton, RedditShareButton, EmailShareButton, TumblrShareButton, LivejournalShareButton, MailruShareButton, ViberShareButton, WorkplaceShareButton, LineShareButton, WeiboShareButton, FacebookIcon, TwitterIcon, GooglePlusIcon, LinkedinIcon, PinterestIcon, VKIcon, OKIcon, TelegramIcon, WhatsappIcon, RedditIcon, TumblrIcon, MailruIcon, EmailIcon, LivejournalIcon, ViberIcon, WorkplaceIcon, LineIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FacebookShareCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FacebookShareCount */ "./node_modules/react-share/es/FacebookShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookShareCount", function() { return _FacebookShareCount__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _GooglePlusShareCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GooglePlusShareCount */ "./node_modules/react-share/es/GooglePlusShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GooglePlusShareCount", function() { return _GooglePlusShareCount__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _LinkedinShareCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkedinShareCount */ "./node_modules/react-share/es/LinkedinShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedinShareCount", function() { return _LinkedinShareCount__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _PinterestShareCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PinterestShareCount */ "./node_modules/react-share/es/PinterestShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinterestShareCount", function() { return _PinterestShareCount__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _VKShareCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VKShareCount */ "./node_modules/react-share/es/VKShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VKShareCount", function() { return _VKShareCount__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _OKShareCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OKShareCount */ "./node_modules/react-share/es/OKShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OKShareCount", function() { return _OKShareCount__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _RedditShareCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RedditShareCount */ "./node_modules/react-share/es/RedditShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedditShareCount", function() { return _RedditShareCount__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _TumblrShareCount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TumblrShareCount */ "./node_modules/react-share/es/TumblrShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TumblrShareCount", function() { return _TumblrShareCount__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _FacebookShareButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FacebookShareButton */ "./node_modules/react-share/es/FacebookShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookShareButton", function() { return _FacebookShareButton__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _GooglePlusShareButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GooglePlusShareButton */ "./node_modules/react-share/es/GooglePlusShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GooglePlusShareButton", function() { return _GooglePlusShareButton__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _LinkedinShareButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LinkedinShareButton */ "./node_modules/react-share/es/LinkedinShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedinShareButton", function() { return _LinkedinShareButton__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _TwitterShareButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TwitterShareButton */ "./node_modules/react-share/es/TwitterShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterShareButton", function() { return _TwitterShareButton__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _PinterestShareButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PinterestShareButton */ "./node_modules/react-share/es/PinterestShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinterestShareButton", function() { return _PinterestShareButton__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _VKShareButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./VKShareButton */ "./node_modules/react-share/es/VKShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VKShareButton", function() { return _VKShareButton__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _OKShareButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OKShareButton */ "./node_modules/react-share/es/OKShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OKShareButton", function() { return _OKShareButton__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _TelegramShareButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TelegramShareButton */ "./node_modules/react-share/es/TelegramShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TelegramShareButton", function() { return _TelegramShareButton__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _WhatsappShareButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./WhatsappShareButton */ "./node_modules/react-share/es/WhatsappShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhatsappShareButton", function() { return _WhatsappShareButton__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _RedditShareButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RedditShareButton */ "./node_modules/react-share/es/RedditShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedditShareButton", function() { return _RedditShareButton__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _EmailShareButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EmailShareButton */ "./node_modules/react-share/es/EmailShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailShareButton", function() { return _EmailShareButton__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _TumblrShareButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TumblrShareButton */ "./node_modules/react-share/es/TumblrShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TumblrShareButton", function() { return _TumblrShareButton__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _LivejournalShareButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./LivejournalShareButton */ "./node_modules/react-share/es/LivejournalShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivejournalShareButton", function() { return _LivejournalShareButton__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _MailruShareButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./MailruShareButton */ "./node_modules/react-share/es/MailruShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailruShareButton", function() { return _MailruShareButton__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _ViberShareButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ViberShareButton */ "./node_modules/react-share/es/ViberShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViberShareButton", function() { return _ViberShareButton__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _WorkplaceShareButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./WorkplaceShareButton */ "./node_modules/react-share/es/WorkplaceShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkplaceShareButton", function() { return _WorkplaceShareButton__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _LineShareButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./LineShareButton */ "./node_modules/react-share/es/LineShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineShareButton", function() { return _LineShareButton__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _WeiboShareButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./WeiboShareButton */ "./node_modules/react-share/es/WeiboShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeiboShareButton", function() { return _WeiboShareButton__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _FacebookIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./FacebookIcon */ "./node_modules/react-share/es/FacebookIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return _FacebookIcon__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _TwitterIcon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./TwitterIcon */ "./node_modules/react-share/es/TwitterIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return _TwitterIcon__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _GooglePlusIcon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./GooglePlusIcon */ "./node_modules/react-share/es/GooglePlusIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GooglePlusIcon", function() { return _GooglePlusIcon__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _LinkedinIcon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./LinkedinIcon */ "./node_modules/react-share/es/LinkedinIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedinIcon", function() { return _LinkedinIcon__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _PinterestIcon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./PinterestIcon */ "./node_modules/react-share/es/PinterestIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinterestIcon", function() { return _PinterestIcon__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _VKIcon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./VKIcon */ "./node_modules/react-share/es/VKIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VKIcon", function() { return _VKIcon__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _OKIcon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./OKIcon */ "./node_modules/react-share/es/OKIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OKIcon", function() { return _OKIcon__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _TelegramIcon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./TelegramIcon */ "./node_modules/react-share/es/TelegramIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TelegramIcon", function() { return _TelegramIcon__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _WhatsappIcon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./WhatsappIcon */ "./node_modules/react-share/es/WhatsappIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhatsappIcon", function() { return _WhatsappIcon__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _RedditIcon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./RedditIcon */ "./node_modules/react-share/es/RedditIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedditIcon", function() { return _RedditIcon__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _TumblrIcon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./TumblrIcon */ "./node_modules/react-share/es/TumblrIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TumblrIcon", function() { return _TumblrIcon__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _MailruIcon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./MailruIcon */ "./node_modules/react-share/es/MailruIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailruIcon", function() { return _MailruIcon__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _EmailIcon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./EmailIcon */ "./node_modules/react-share/es/EmailIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailIcon", function() { return _EmailIcon__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _LivejournalIcon__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./LivejournalIcon */ "./node_modules/react-share/es/LivejournalIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivejournalIcon", function() { return _LivejournalIcon__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _ViberIcon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ViberIcon */ "./node_modules/react-share/es/ViberIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViberIcon", function() { return _ViberIcon__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _WorkplaceIcon__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./WorkplaceIcon */ "./node_modules/react-share/es/WorkplaceIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkplaceIcon", function() { return _WorkplaceIcon__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _LineIcon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./LineIcon */ "./node_modules/react-share/es/LineIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineIcon", function() { return _LineIcon__WEBPACK_IMPORTED_MODULE_42__["default"]; });















































/***/ }),

/***/ "./node_modules/react-share/es/utils/createShareButton.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-share/es/utils/createShareButton.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ieDetection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ieDetection */ "./node_modules/react-share/es/utils/ieDetection.js");














var isPromise = function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7___default()(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

function windowOpen(url, _ref, onShareWindowClose) {
  var name = _ref.name,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 400 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 550 : _ref$width;

  /* eslint-disable no-mixed-operators */
  var left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2;
  var top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2;
  /* eslint-enable no-mixed-operators */

  var config = {
    height: height,
    width: width,
    left: left,
    top: top,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes'
  };

  var shareDialog = window.open(url, Object(_ieDetection__WEBPACK_IMPORTED_MODULE_11__["default"])(10) ? '' : name, babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(config).map(function (key) {
    return key + '=' + config[key];
  }).join(', '));

  if (onShareWindowClose) {
    var interval = window.setInterval(function () {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onShareWindowClose(shareDialog);
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.error(e);
        /* eslint-enable no-console */
      }
    }, 1000);
  }

  return shareDialog;
}

var ShareButton = function (_PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ShareButton, _PureComponent);

  function ShareButton() {
    var _ref2;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ShareButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref2 = ShareButton.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(ShareButton)).call.apply(_ref2, [this].concat(args))), _this), _this.onClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          openWindow = _this$props.openWindow,
          beforeOnClick = _this$props.beforeOnClick;


      if (disabled) {
        return;
      }

      e.preventDefault();

      var link = _this.link();

      var clickHandler = openWindow ? function () {
        return _this.openWindow(link);
      } : function () {
        return onClick(link);
      };

      if (beforeOnClick) {
        var returnVal = beforeOnClick();

        if (isPromise(returnVal)) {
          returnVal.then(clickHandler);
        } else {
          clickHandler();
        }
      } else {
        clickHandler();
      }
    }, _this.onKeyPress = function (e) {
      if (e.key === 'Enter' || e.key === 13 || e.key === ' ' || e.key === 32) {
        _this.onClick(e);
      }
    }, _this.openWindow = function (link) {
      var _this$props2 = _this.props,
          onShareWindowClose = _this$props2.onShareWindowClose,
          windowWidth = _this$props2.windowWidth,
          windowHeight = _this$props2.windowHeight;


      var windowOptions = {
        height: windowHeight,
        width: windowWidth
      };

      windowOpen(link, windowOptions, onShareWindowClose);
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ShareButton, [{
    key: 'link',
    value: function link() {
      var _props = this.props,
          url = _props.url,
          opts = _props.opts,
          networkLink = _props.networkLink;

      return networkLink(url, opts);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          additionalProps = _props2.additionalProps,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          disabledStyle = _props2.disabledStyle,
          name = _props2.name,
          network = _props2.network,
          role = _props2.role,
          style = _props2.style,
          tabIndex = _props2.tabIndex;


      var classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()('SocialMediaShareButton', 'SocialMediaShareButton--' + network, {
        'SocialMediaShareButton--disabled': !!disabled,
        disabled: !!disabled
      }, className);

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          name: name
        }, additionalProps, {
          role: role,
          tabIndex: tabIndex,
          onClick: this.onClick,
          onKeyPress: this.onKeyPress,
          className: classes,
          style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, disabled ? disabledStyle : {}) }),
        children
      );
    }
  }]);

  return ShareButton;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

ShareButton.propTypes = {
  additionalProps: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  disabledStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  name: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  network: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  networkLink: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  opts: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  openWindow: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  url: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  role: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  windowWidth: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  windowHeight: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  beforeOnClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onShareWindowClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number])
};
ShareButton.defaultProps = {
  disabledStyle: {
    opacity: 0.6
  },
  openWindow: true,
  role: 'button',
  tabIndex: '0'
};


function createShareButton(network, link) {
  var optsMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return {};
  };
  var propTypes = arguments[3];
  var defaultProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var CreatedButton = function CreatedButton(props) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ShareButton, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      network: network,
      networkLink: link,
      opts: optsMap(props) }));
  };

  CreatedButton.propTypes = propTypes;
  CreatedButton.defaultProps = defaultProps;

  return CreatedButton;
}

/* harmony default export */ __webpack_exports__["default"] = (createShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/utils/iconFactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/utils/iconFactory.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return iconFactory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function iconFactory(network, iconConfig) {
  var Icon = function Icon(props) {
    var className = props.className,
        iconBgStyle = props.iconBgStyle,
        logoFillColor = props.logoFillColor,
        round = props.round,
        size = props.size;


    var baseStyle = {
      width: size,
      height: size
    };

    var classes = 'social-icon social-icon--' + network + ' ' + className;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { style: baseStyle },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'svg',
        {
          viewBox: '0 0 64 64',
          width: size,
          height: size,
          className: classes },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'g',
          null,
          !round ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', {
            width: '64',
            height: '64',
            fill: iconConfig.color,
            style: iconBgStyle }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('circle', {
            cx: '32',
            cy: '32',
            r: '31',
            fill: iconConfig.color,
            style: iconBgStyle })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'g',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', { d: iconConfig.icon, fill: logoFillColor })
        )
      )
    );
  };

  Icon.propTypes = {
    className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    iconBgStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    logoFillColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    round: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  };

  Icon.defaultProps = {
    className: '',
    iconBgStyle: {},
    logoFillColor: 'white',
    size: 64
  };

  return Icon;
}

/***/ }),

/***/ "./node_modules/react-share/es/utils/ieDetection.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/utils/ieDetection.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isInternetExplorerBefore; });
/*
 * This detection method identifies Internet Explorers up until version 11.
 *
 * Reference: https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
 */
function isInternetExplorerBefore(version) {
  var iematch = /MSIE ([0-9]+)/g.exec(window.navigator.userAgent);

  return iematch ? +iematch[1] < version : false;
}

/***/ }),

/***/ "./node_modules/react-share/es/utils/objectToGetParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-share/es/utils/objectToGetParams.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectToGetParams; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

/* eslint-disable prefer-template */
function objectToGetParams(object) {
  return '?' + babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object).filter(function (key) {
    return !!object[key];
  }).map(function (key) {
    return key + '=' + encodeURIComponent(object[key]);
  }).join('&');
}
/* eslint-enable prefer-template */

/***/ }),

/***/ "./node_modules/react-share/es/utils/shareCountFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-share/es/utils/shareCountFactory.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shareCountFactory; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);










var SocialMediaShareCount = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SocialMediaShareCount, _Component);

  function SocialMediaShareCount(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SocialMediaShareCount);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (SocialMediaShareCount.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(SocialMediaShareCount)).call(this, props));

    _this._isMounted = false;
    _this.state = { count: 0 };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SocialMediaShareCount, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
      this.updateCount(this.props.url);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.url !== this.props.url) {
        this.updateCount(nextProps.url);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'updateCount',
    value: function updateCount(url) {
      var _this2 = this;

      if (this.props.getCount) {
        this.setState({
          isLoading: true
        });

        this.props.getCount(url, function (count) {
          if (_this2._isMounted) {
            _this2.setState({
              count: count,
              isLoading: false
            });
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          count = _state.count,
          isLoading = _state.isLoading;
      var _props = this.props,
          children = _props.children,
          className = _props.className;


      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('SocialMediaShareCount', className) },
        !isLoading && children(count || 0)
      );
    }
  }]);

  return SocialMediaShareCount;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SocialMediaShareCount.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  getCount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  url: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
};

SocialMediaShareCount.defaultProps = {
  children: function children(shareCount) {
    return shareCount;
  }
};

function shareCountFactory(getCount) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SocialMediaShareCount, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ getCount: getCount }, props));
  };
}

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractWidget = function (_React$Component) {
  _inherits(AbstractWidget, _React$Component);

  function AbstractWidget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AbstractWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AbstractWidget.__proto__ || Object.getPrototypeOf(AbstractWidget)).call.apply(_ref, [this].concat(args))), _this), _this.loadWidget = function () {
      var $script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js"); // eslint-disable-line global-require

      $script.ready('twitter-widgets', function () {
        if (!window.twttr) {
          // If the script tag fails to load, scriptjs.ready() will still trigger.
          // Let's avoid the JS exceptions when that happens.
          console.error('Failure to load window.twttr, aborting load.'); // eslint-disable-line no-console
          return;
        }

        // Delete existing
        AbstractWidget.removeChildren(_this.widgetWrapper);

        // Create widget
        _this.props.ready(window.twttr, _this.widgetWrapper, _this.done);
      });
    }, _this.done = function () {
      if (_this.willUnmount) {
        AbstractWidget.removeChildrenExceptLast(_this.widgetWrapper);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AbstractWidget, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.willUnmount = false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadWidget();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.loadWidget();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.willUnmount = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        ref: function ref(c) {
          _this2.widgetWrapper = c;
        }
      });
    }
  }], [{
    key: 'removeChildren',
    value: function removeChildren(node) {
      if (node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
    }
  }, {
    key: 'removeChildrenExceptLast',
    value: function removeChildrenExceptLast(node) {
      if (node) {
        while (node.childNodes.length > 1) {
          node.removeChild(node.firstChild);
        }
      }
    }
  }]);

  return AbstractWidget;
}(_react2.default.Component);

AbstractWidget.propTypes = {
  ready: _propTypes2.default.func.isRequired
};
exports.default = AbstractWidget;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Follow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Follow.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Follow = function (_React$Component) {
  _inherits(Follow, _React$Component);

  function Follow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Follow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Follow.__proto__ || Object.getPrototypeOf(Follow)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          username = _this$props.username,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createFollowButton(username, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Follow, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('username') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Follow;
}(_react2.default.Component);

Follow.propTypes = {
  username: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Follow.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Follow;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Hashtag.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Hashtag.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hashtag = function (_React$Component) {
  _inherits(Hashtag, _React$Component);

  function Hashtag() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hashtag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hashtag.__proto__ || Object.getPrototypeOf(Hashtag)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          hashtag = _this$props.hashtag,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createHashtagButton(hashtag, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hashtag, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('hashtag') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Hashtag;
}(_react2.default.Component);

Hashtag.propTypes = {
  hashtag: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Hashtag.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Hashtag;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Mention.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Mention.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mention = function (_React$Component) {
  _inherits(Mention, _React$Component);

  function Mention() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mention);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mention.__proto__ || Object.getPrototypeOf(Mention)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          username = _this$props.username,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createMentionButton(username, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mention, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('username') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Mention;
}(_react2.default.Component);

Mention.propTypes = {
  username: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Mention.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Mention;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Share.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Share.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_React$Component) {
  _inherits(Share, _React$Component);

  function Share() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          url = _this$props.url,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createShareButton(url, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Share, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('url') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Share;
}(_react2.default.Component);

Share.propTypes = {
  url: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Share.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Share;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Timeline.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Timeline.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Timeline);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          dataSource = _this$props.dataSource,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options and dataSource must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createTimeline((0, _cloneDeep2.default)(dataSource), element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Timeline, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('dataSource') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Timeline;
}(_react2.default.Component);

Timeline.propTypes = {
  dataSource: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Timeline.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Timeline;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/components/Tweet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/components/Tweet.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(/*! ./AbstractWidget */ "./node_modules/react-twitter-widgets/dist/components/AbstractWidget.js");

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tweet = function (_React$Component) {
  _inherits(Tweet, _React$Component);

  function Tweet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tweet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tweet.__proto__ || Object.getPrototypeOf(Tweet)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          tweetId = _this$props.tweetId,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createTweet(tweetId, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tweet, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('tweetId') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Tweet;
}(_react2.default.Component);

Tweet.propTypes = {
  tweetId: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Tweet.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Tweet;

/***/ }),

/***/ "./node_modules/react-twitter-widgets/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-twitter-widgets/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tweet = exports.Timeline = exports.Share = exports.Mention = exports.Hashtag = exports.Follow = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _Follow2 = __webpack_require__(/*! ./components/Follow */ "./node_modules/react-twitter-widgets/dist/components/Follow.js");

var _Follow3 = _interopRequireDefault(_Follow2);

var _Hashtag2 = __webpack_require__(/*! ./components/Hashtag */ "./node_modules/react-twitter-widgets/dist/components/Hashtag.js");

var _Hashtag3 = _interopRequireDefault(_Hashtag2);

var _Mention2 = __webpack_require__(/*! ./components/Mention */ "./node_modules/react-twitter-widgets/dist/components/Mention.js");

var _Mention3 = _interopRequireDefault(_Mention2);

var _Share2 = __webpack_require__(/*! ./components/Share */ "./node_modules/react-twitter-widgets/dist/components/Share.js");

var _Share3 = _interopRequireDefault(_Share2);

var _Timeline2 = __webpack_require__(/*! ./components/Timeline */ "./node_modules/react-twitter-widgets/dist/components/Timeline.js");

var _Timeline3 = _interopRequireDefault(_Timeline2);

var _Tweet2 = __webpack_require__(/*! ./components/Tweet */ "./node_modules/react-twitter-widgets/dist/components/Tweet.js");

var _Tweet3 = _interopRequireDefault(_Tweet2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_exenv.canUseDOM) {
  var $script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js"); // eslint-disable-line global-require
  $script('https://platform.twitter.com/widgets.js', 'twitter-widgets');
}

exports.Follow = _Follow3.default;
exports.Hashtag = _Hashtag3.default;
exports.Mention = _Mention3.default;
exports.Share = _Share3.default;
exports.Timeline = _Timeline3.default;
exports.Tweet = _Tweet3.default;

/***/ }),

/***/ "./node_modules/scriptjs/dist/script.js":
/*!**********************************************!*\
  !*** ./node_modules/scriptjs/dist/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      fn(el)
      return 1
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/url-join/lib/url-join.js":
/*!***********************************************!*\
  !*** ./node_modules/url-join/lib/url-join.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (name, context, definition) {
  if ( true && module.exports) module.exports = definition();
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
})('urljoin', this, function () {

  function normalize (strArray) {
    var resultArray = [];

    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
      var first = strArray.shift();
      strArray[0] = first + strArray[0];
    }

    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(/^file:\/\/\//)) {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
    } else {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
    }

    for (var i = 0; i < strArray.length; i++) {
      var component = strArray[i];

      if (typeof component !== 'string') {
        throw new TypeError('Url must be a string. Received ' + component);
      }

      if (component === '') { continue; }

      if (i > 0) {
        // Removing the starting slashes for each component but the first.
        component = component.replace(/^[\/]+/, '');
      }
      if (i < strArray.length - 1) {
        // Removing the ending slashes for each component but the last.
        component = component.replace(/[\/]+$/, '');
      } else {
        // For the last component we will combine multiple slashes to a single one.
        component = component.replace(/[\/]+$/, '/');
      }

      resultArray.push(component);

    }

    var str = resultArray.join('/');
    // Each input component is now separated by a single slash except the possible first plain protocol part.

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    var parts = str.split('?');
    str = parts.shift() + (parts.length > 0 ? '?': '') + parts.join('&');

    return str;
  }

  return function () {
    var input;

    if (typeof arguments[0] === 'object') {
      input = arguments[0];
    } else {
      input = [].slice.call(arguments);
    }

    return normalize(input);
  };

});


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/components/About/About.css":
/*!****************************************!*\
  !*** ./src/components/About/About.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/About/About.jsx":
/*!****************************************!*\
  !*** ./src/components/About/About.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.css */ "./src/components/About/About.css");
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_About_css__WEBPACK_IMPORTED_MODULE_2__);




var About =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(About, _Component);

  function About() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = About.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "about"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Edit About component or pages/about.jsx to include your information."));
  };

  return About;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Data/localstorage.js":
/*!*********************************************!*\
  !*** ./src/components/Data/localstorage.js ***!
  \*********************************************/
/*! exports provided: getTree, setTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTree", function() { return getTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTree", function() { return setTree; });
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tree_treehelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tree/treehelper */ "./src/components/Tree/treehelper.js");


var NAME = "MSKf's Tree Blog V1.0";

var isBrowser = function isBrowser() {
  var hasWindow = 1;

  try {
    window;
  } catch (e) {
    hasWindow = 0;
  }

  return !!hasWindow;
};

var getTree = function getTree() {
  if (!isBrowser()) return;
  var str = window.localStorage.getItem(NAME);
  var root = null;

  if (!str) {
    root = Object(_Tree_treehelper__WEBPACK_IMPORTED_MODULE_1__["generate"])();
    setTree(root);
  } else {
    root = JSON.parse(str); //add circle reference

    Object(_Tree_treehelper__WEBPACK_IMPORTED_MODULE_1__["firsrOrderTraverseConsumer"])(root, function (node, prev) {
      node.parent = prev;
    });
  }

  return root;
};

var setTree = function setTree(node) {
  if (!isBrowser()) return;

  var root = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(Object(_Tree_treehelper__WEBPACK_IMPORTED_MODULE_1__["getRoot"])(node)); //remove circle reference and temp properties


  Object(_Tree_treehelper__WEBPACK_IMPORTED_MODULE_1__["firsrOrderTraverseConsumer"])(root, function (node) {
    for (var key in node) {
      if (key[0] == '_') {
        delete node[key];
      }
    } //remove fake nodes


    node.children = node.children.filter(function (n) {
      return !n.isFake;
    });
    node.parent = null;
  });
  var str = JSON.stringify(root);
  window.localStorage.setItem(NAME, str);
};



/***/ }),

/***/ "./src/components/Disqus/Disqus.jsx":
/*!******************************************!*\
  !*** ./src/components/Disqus/Disqus.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-disqus-comments */ "./node_modules/react-disqus-comments/build/main.js");
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_disqus_comments__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__);







var Disqus =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Disqus, _Component);

  function Disqus(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      toasts: []
    };
    _this.notifyAboutComment = _this.notifyAboutComment.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    _this.onSnackbarDismiss = _this.onSnackbarDismiss.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    return _this;
  }

  var _proto = Disqus.prototype;

  _proto.onSnackbarDismiss = function onSnackbarDismiss() {
    var _this$state$toasts = this.state.toasts,
        toasts = _this$state$toasts.slice(1);

    this.setState({
      toasts: toasts
    });
  };

  _proto.notifyAboutComment = function notifyAboutComment() {
    var toasts = this.state.toasts.slice();
    toasts.push({
      text: "New comment available!"
    });
    this.setState({
      toasts: toasts
    });
  };

  _proto.render = function render() {
    var postNode = this.props.postNode;

    if (!_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.disqusShortname) {
      return null;
    }

    var post = postNode.frontmatter;
    var url = url_join__WEBPACK_IMPORTED_MODULE_4___default()(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.siteUrl, _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.pathPrefix, postNode.fields.slug);
    console.log(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.disqusShortname);
    console.log(post.title);
    console.log(url);
    console.log(post.category_id);
    console.log(this.notifyAboutComment);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_disqus_comments__WEBPACK_IMPORTED_MODULE_3___default.a, {
      shortname: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.disqusShortname,
      identifier: post.title,
      title: post.title,
      url: url,
      category_id: post.category_id,
      onNewComment: this.notifyAboutComment
    });
  };

  return Disqus;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Disqus);

/***/ }),

/***/ "./src/components/PostListing/PostListing.jsx":
/*!****************************************************!*\
  !*** ./src/components/PostListing/PostListing.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "core-js/modules/es6.regexp.match");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Tags_Tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tags/Tags */ "./src/components/Tags/Tags.jsx");
/* harmony import */ var _list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.css */ "./src/components/PostListing/list.css");
/* harmony import */ var _list_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_list_css__WEBPACK_IMPORTED_MODULE_6__);








var PostListing =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(PostListing, _React$Component);

  function PostListing() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PostListing.prototype;

  _proto.getPostList = function getPostList() {
    var postList = [];
    this.props.postEdges.forEach(function (postEdge) {
      if (!postEdge.node.rawMarkdownBody) return;
      var paras = postEdge.node.rawMarkdownBody.match(/(#{1,5} .*[\n\r])/g) || [];
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags || [],
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        abstract: postEdge.node.frontmatter.abstract || paras.map(function (p) {
          return p.replace(/^#+/, '').trim();
        }).join('  ')
      });
    });
    return postList;
  };

  _proto.render = function render() {
    var _this = this;

    var postList = this.getPostList();
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, postList.map(function (post) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "post-list",
        key: post.path
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "post-left"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "post-title"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: post.path,
        key: post.title
      }, post.title)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "post-tags"
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "post-abstract"
      }, post.abstract)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "post-right"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "post-tags"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Tags_Tags__WEBPACK_IMPORTED_MODULE_5__["PostListTags"], {
        refresh: _this.props.refresh,
        tags: post.tags
      }))));
    }));
  };

  return PostListing;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostListing);

/***/ }),

/***/ "./src/components/PostListing/list.css":
/*!*********************************************!*\
  !*** ./src/components/PostListing/list.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PostTags/PostTags.jsx":
/*!**********************************************!*\
  !*** ./src/components/PostTags/PostTags.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/kebabCase */ "lodash/kebabCase");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");





var PostTags =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostTags, _Component);

  function PostTags() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PostTags.prototype;

  _proto.render = function render() {
    var tags = this.props.tags;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "post-tag-container"
    }, tags && tags.map(function (tag) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        key: tag,
        style: {
          textDecoration: "none"
        },
        to: "/tags/" + lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1___default()(tag)
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", null, tag));
    }));
  };

  return PostTags;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PostTags);

/***/ }),

/***/ "./src/components/SEO/SEO.jsx":
/*!************************************!*\
  !*** ./src/components/SEO/SEO.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);






var SEO =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SEO, _Component);

  function SEO() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SEO.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        postNode = _this$props.postNode,
        postPath = _this$props.postPath,
        postSEO = _this$props.postSEO;
    var title;
    var description;
    var image;
    var postURL;

    if (postSEO) {
      var postMeta = postNode.frontmatter;
      title = postMeta.title;
      description = postMeta.description ? postMeta.description : postNode.excerpt;
      image = postMeta.cover;
      postURL = url_join__WEBPACK_IMPORTED_MODULE_3___default()(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteUrl, _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.pathPrefix, postPath);
    } else {
      title = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitle;
      description = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteDescription;
      image = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteLogo;
    }

    image = url_join__WEBPACK_IMPORTED_MODULE_3___default()(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteUrl, _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.pathPrefix, image);
    var blogURL = url_join__WEBPACK_IMPORTED_MODULE_3___default()(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteUrl, _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.pathPrefix);
    var schemaOrgJSONLD = [{
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitleAlt ? _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitleAlt : ""
    }];

    if (postSEO) {
      schemaOrgJSONLD.push({
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": postURL,
            name: title,
            image: image
          }
        }]
      }, {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogURL,
        name: title,
        alternateName: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitleAlt ? _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitleAlt : "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image
        },
        description: description
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "description",
      content: description
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "image",
      content: image
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      type: "application/ld+json"
    }, JSON.stringify(schemaOrgJSONLD)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:url",
      content: postSEO ? postURL : blogURL
    }), postSEO ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:type",
      content: "article"
    }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:title",
      content: title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:description",
      content: description
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:image",
      content: image
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "fb:app_id",
      content: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteFBAppID ? _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteFBAppID : ""
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "twitter:creator",
      content: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.userTwitter ? _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.userTwitter : ""
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "twitter:title",
      content: title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "twitter:description",
      content: description
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "twitter:image",
      content: image
    }));
  };

  return SEO;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./src/components/SocialLinks/SocialLinks.css":
/*!****************************************************!*\
  !*** ./src/components/SocialLinks/SocialLinks.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/SocialLinks/SocialLinks.jsx":
/*!****************************************************!*\
  !*** ./src/components/SocialLinks/SocialLinks.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SocialLinks_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SocialLinks.css */ "./src/components/SocialLinks/SocialLinks.css");
/* harmony import */ var _SocialLinks_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SocialLinks_css__WEBPACK_IMPORTED_MODULE_5__);







var SocialLinks =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SocialLinks, _Component);

  function SocialLinks() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SocialLinks.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        postNode = _this$props.postNode,
        postPath = _this$props.postPath,
        mobile = _this$props.mobile;
    var post = postNode.frontmatter;
    var url = url_join__WEBPACK_IMPORTED_MODULE_3___default()(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteUrl, _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.pathPrefix, postPath);
    var iconSize = mobile ? 36 : 48;

    var filter = function filter(count) {
      return count > 0 ? count : "";
    };

    var renderShareCount = function renderShareCount(count) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "share-count"
      }, filter(count));
    };

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "social-links"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["RedditShareButton"], {
      url: url,
      title: post.title
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["RedditIcon"], {
      round: true,
      size: iconSize
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["RedditShareCount"], {
      url: url
    }, function (count) {
      return renderShareCount(count);
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterShareButton"], {
      url: url,
      title: post.title
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterIcon"], {
      round: true,
      size: iconSize
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookShareButton"], {
      url: url,
      quote: postNode.excerpt
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookIcon"], {
      round: true,
      size: iconSize
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookShareCount"], {
      url: url
    }, function (count) {
      return renderShareCount(count);
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["LinkedinShareButton"], {
      url: url,
      title: post.title,
      description: postNode.excerpt
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["LinkedinIcon"], {
      round: true,
      size: iconSize
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["LinkedinShareCount"], {
      url: url
    }, function (count) {
      return renderShareCount(count);
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TelegramShareButton"], {
      url: url
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TelegramIcon"], {
      round: true,
      size: iconSize
    })));
  };

  return SocialLinks;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SocialLinks);

/***/ }),

/***/ "./src/components/Tags/Tags.jsx":
/*!**************************************!*\
  !*** ./src/components/Tags/Tags.jsx ***!
  \**************************************/
/*! exports provided: getColor, PostListTags, TAGS_OUTSIDE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return getColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListTags", function() { return PostListTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_OUTSIDE", function() { return TAGS_OUTSIDE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _tags_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags.css */ "./src/components/Tags/tags.css");
/* harmony import */ var _tags_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tags_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _Tree_treehelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tree/treehelper */ "./src/components/Tree/treehelper.js");





var TAGS_OUTSIDE = '-1';
var COLORS = ['#478BA2', '#DE585D', '#E97658', '#E2A490', '#89D4DB'];

var getColor = function getColor(str) {
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return COLORS[sum % COLORS.length];
};

var PostListTag = function PostListTag(_ref) {
  var tag = _ref.tag,
      refresh = _ref.refresh;

  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrag"])({
    item: {
      name: tag,
      type: TAGS_OUTSIDE
    },
    end: function end(item, monitor) {
      var dropResult = monitor.getDropResult();

      if (item && dropResult) {
        var child = Object(_Tree_treehelper__WEBPACK_IMPORTED_MODULE_4__["addChild"])(dropResult.node, tag);
        refresh();
      }
    },
    collect: function collect(monitor) {
      return {
        isDragging: monitor.isDragging()
      };
    }
  }),
      isDragging = _useDrag[0].isDragging,
      drag = _useDrag[1];

  var color = getColor(tag);
  var opacity = isDragging ? 0.4 : 1;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: drag,
    key: tag,
    className: "tag-item",
    style: {
      opacity: opacity,
      color: color
    }
  }, tag);
};

var PostListTags = function PostListTags(_ref2) {
  var tags = _ref2.tags,
      refresh = _ref2.refresh;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tag-list"
  }, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostListTag, {
      key: tag,
      tag: tag,
      refresh: refresh
    });
  }));
};




/***/ }),

/***/ "./src/components/Tags/tags.css":
/*!**************************************!*\
  !*** ./src/components/Tags/tags.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/Tree/tree.css":
/*!**************************************!*\
  !*** ./src/components/Tree/tree.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/Tree/tree.jsx":
/*!**************************************!*\
  !*** ./src/components/Tree/tree.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tree_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree.css */ "./src/components/Tree/tree.css");
/* harmony import */ var _tree_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tree_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tags_Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tags/Tags */ "./src/components/Tags/Tags.jsx");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _treehelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treehelper */ "./src/components/Tree/treehelper.js");
/* harmony import */ var _Data_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/localstorage */ "./src/components/Data/localstorage.js");







var MAX_DEPTH = 4;
var TreeLevels = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5'
};
var TreeLevelsArray = [TreeLevels.ONE, TreeLevels.TWO, TreeLevels.THREE, TreeLevels.FOUR];

var TreeLevel = function TreeLevel(_ref) {
  var level = _ref.level,
      accept = _ref.accept,
      lastDroppedItem = _ref.lastDroppedItem,
      onDrop = _ref.onDrop,
      nodes = _ref.nodes,
      refresh = _ref.refresh;

  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_4__["useDrop"])({
    accept: accept,
    drop: function drop() {
      return {
        level: level
      };
    },
    collect: function collect(monitor) {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      };
    }
  }),
      _useDrop$ = _useDrop[0],
      isOver = _useDrop$.isOver,
      canDrop = _useDrop$.canDrop,
      drop = _useDrop[1];

  var isActive = canDrop && isOver;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "nodes-horizontal " + (isActive ? 'blink' : ''),
    ref: drop
  }, nodes.map(function (node) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TreeNode, {
      refresh: refresh,
      node: node,
      key: node.id
    });
  }));
};

var TreeNode = function TreeNode(_ref2) {
  var node = _ref2.node,
      refresh = _ref2.refresh;
  var inputRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

  var onKeyPressTemp = function onKeyPressTemp(e) {
    if (e.key == 'Enter') {
      node.value = inputRef.value || '-';
      node.isTemp = 0;
      refresh();
    }
  };

  var onDoubleClickNode = function onDoubleClickNode(e) {
    node.isTemp = 1;
    refresh();
  };

  var _useDrop2 = Object(react_dnd__WEBPACK_IMPORTED_MODULE_4__["useDrop"])({
    accept: node.level === MAX_DEPTH - 1 ? [] : [_Tags_Tags__WEBPACK_IMPORTED_MODULE_3__["TAGS_OUTSIDE"]],
    drop: function drop() {
      return {
        node: node
      };
    },
    collect: function collect(monitor) {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      };
    }
  }),
      _useDrop2$ = _useDrop2[0],
      isOver = _useDrop2$.isOver,
      canDrop = _useDrop2$.canDrop,
      drop = _useDrop2[1];

  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_4__["useDrag"])({
    item: {
      name: node.value,
      type: TreeLevelsArray[node.level]
    },
    end: function end(item, monitor) {
      var dropResult = monitor.getDropResult();

      if (item && dropResult) {
        if (dropResult.level > node.level) {
          var child = Object(_treehelper__WEBPACK_IMPORTED_MODULE_5__["addChild"])(node, '');
          child.isTemp = 1;
          refresh();
        } else if (dropResult.level < node.level) {
          var i = 0;

          for (; i < node.parent.children.length; i++) {
            if (node === node.parent.children[i]) break;
          }

          node.parent.children.splice(i, 1);
          refresh();
        } // alert(`You dropped ${item.name} into ${dropResult.name}!`)

      }
    },
    collect: function collect(monitor) {
      return {
        isDragging: monitor.isDragging()
      };
    }
  }),
      isDragging = _useDrag[0].isDragging,
      drag = _useDrag[1];

  var isActive = canDrop && isOver;
  var opacity = isDragging ? 0.4 : isActive ? .2 : 1;
  var color = Object(_Tags_Tags__WEBPACK_IMPORTED_MODULE_3__["getColor"])(node.value);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: function ref(_ref3) {
      return node._domObject = _ref3;
    },
    className: "nodes-node",
    style: {
      flex: node._spaceCount || 1
    }
  }, node.isFake ? '' : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: drag,
    className: "tag-item",
    style: {
      opacity: opacity,
      color: color
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: drop
  }, node.isTemp ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tree-node-input"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    defaultValue: node.value,
    ref: function ref(input) {
      return inputRef = input;
    },
    autoFocus: "true",
    onKeyPress: onKeyPressTemp
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onDoubleClick: onDoubleClickNode
  }, node.value))));
};

var Tree =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Tree, _React$Component);

  function Tree() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      displayPanel: false,
      nodes: []
    };
    var root = Object(_Data_localstorage__WEBPACK_IMPORTED_MODULE_6__["getTree"])();
    _this.state = {
      forceRefresh: false,
      nodes: [],
      lines: [],
      root: root,
      rootId: 'root'
    };
    return _this;
  }

  var _proto = Tree.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.refreshTree({
      tree: this.state.root,
      id: 'root'
    }); //bind refresh back

    this.props.refreshBinder(this.refresh.bind(this));
  };

  _proto.refresh = function refresh() {
    this.refreshTree({
      tree: this.state.root,
      id: this.state.rootId
    });
  };

  _proto.refreshTree = function refreshTree(_ref4) {
    var tree = _ref4.tree,
        id = _ref4.id;
    this.setState({
      forceRefresh: !this.state.forceRefresh,
      nodes: this.getTreeNodes({
        tree: tree,
        id: id
      })
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.displayPanel != this.state.displayPanel || prevState.forceRefresh != this.state.forceRefresh) {
      Object(_Data_localstorage__WEBPACK_IMPORTED_MODULE_6__["setTree"])(this.state.root);
      var lines = Object(_treehelper__WEBPACK_IMPORTED_MODULE_5__["getLines"])(this.state.nodes[0][0]);
      this.setState({
        lines: lines
      });
    }
  };

  _proto.getTreeNodes = function getTreeNodes(data) {
    var node = Object(_treehelper__WEBPACK_IMPORTED_MODULE_5__["firsrOrderTraverseFind"])(data.tree, data.id);
    if (!node) return;
    var nodes = Object(_treehelper__WEBPACK_IMPORTED_MODULE_5__["getTreeArray"])(node, MAX_DEPTH);
    return nodes;
  };

  _proto.toggleTree = function toggleTree() {
    this.setState({
      displayPanel: !this.state.displayPanel
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var nodes2d = this.state.nodes || [];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      className: "tree-svg",
      style: {
        display: this.state.displayPanel ? 'inherit' : 'none'
      }
    }, this.state.lines.map(function (line) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
        strokeWidth: "10",
        x1: line.start.x,
        y1: line.start.y,
        x2: line.end.x,
        y2: line.end.y,
        stroke: line.color
      });
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tree-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tree",
      onClick: this.toggleTree.bind(this)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Tree"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tree-panel",
      style: {
        display: this.state.displayPanel ? 'flex' : 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tree-body"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tree-content"
    }, nodes2d.map(function (nodes1d, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TreeLevel, {
        level: i,
        refresh: _this2.refresh.bind(_this2),
        key: i,
        nodes: nodes1d,
        accept: [].concat(i > 0 ? TreeLevelsArray[i - 1] : []).concat(i < TreeLevelsArray.length - 1 ? TreeLevelsArray[i + 1] : [])
      });
    })))));
  };

  return Tree;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Tree);

/***/ }),

/***/ "./src/components/Tree/treehelper.js":
/*!*******************************************!*\
  !*** ./src/components/Tree/treehelper.js ***!
  \*******************************************/
/*! exports provided: addChild, getRoot, firsrOrderTraverseConsumer, firsrOrderTraverseFind, getTreeArray, generate, getLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChild", function() { return addChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoot", function() { return getRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firsrOrderTraverseConsumer", function() { return firsrOrderTraverseConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firsrOrderTraverseFind", function() { return firsrOrderTraverseFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeArray", function() { return getTreeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLines", function() { return getLines; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tags_Tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tags/Tags */ "./src/components/Tags/Tags.jsx");



/**
 * No node can have two child nodes sharing the same name
 *
 * Every node has a unique path from root, so to say, a unique full name
 *
 * Maximum height of the tree shown in the screen  is constant
 *
 * Maximum children of a node is constant
 *
 * Can only add tree nodes within such height
 *
 * Take the leaf node as a new root, so to add new node in the next level
 *
 * Search the full name of node to get it  as the root
 */

var Node = function Node(value) {
  this.id = Math.random().toString().substr(2);
  this.children = [];
  this.value = value;
  this.parent = null;
  this.isTemp = 0;
  this.isFake = 0;
};

var addChild = function addChild(node, value) {
  var child = new Node(value);
  child.parent = node;
  child.level = (node.level | 0) + 1;
  node.children.push(child);
  return child;
};

var getRoot = function getRoot(node) {
  if (node.parent == null) return node;
  return findRoot(node.parent);
};

var firsrOrderTraverseConsumer = function firsrOrderTraverseConsumer(node, consumer, prev) {
  if (!node) return;
  consumer(node, prev);

  for (var i = 0; i < node.children.length; i++) {
    firsrOrderTraverseConsumer(node.children[i], consumer, node);
  }
};

var firsrOrderTraverseFind = function firsrOrderTraverseFind(node, id) {
  if (!node) return null;else if (node.id == id) return node;
  var res = null;

  for (var i = 0; !res && i < node.children.length; i++) {
    res = firsrOrderTraverseFind(node.children[i], id);
  }

  return res;
};

var getFakeNode = function getFakeNode() {
  var fakeNode = new Node('');
  fakeNode.isFake = 1;
  return fakeNode;
};

var getTreeArray = function getTreeArray(node, maxDepth) {
  //remove space count
  firsrOrderTraverseConsumer(node, function (n) {
    return n._spaceCount = 0;
  });

  var recursiveAddCount = function recursiveAddCount(node, root) {
    while (node != root) {
      node = node.parent;
      node._spaceCount = (node._spaceCount || 1) + 1;
    }
  };

  var S = 'SPLITTER';
  var tmp = [node, S],
      depth = 0,
      nodes = [],
      childCount = 0,
      root = node;

  do {
    while (tmp[0] != S) {
      var cur = tmp.splice(0, 1)[0];
      if (cur.children.length == 0) childCount++;
      if (cur._needToAdd) recursiveAddCount(cur, root);

      for (var i = 0; i < cur.children.length; i++) {
        if (i > 0) cur.children[i]._needToAdd = true;
        tmp.push(cur.children[i]);
      }
    }

    tmp.push(tmp.splice(0, 1)[0]);
    depth++;
  } while (depth < maxDepth && tmp.length > 1);

  var finalDepth = depth;
  depth = 0; //把所有不是底层的叶子节点往下复制

  tmp = [node, S];

  do {
    nodes[depth] = [];

    while (tmp[0] != S) {
      var _cur = tmp.splice(0, 1)[0];

      if ((_cur.isFake || _cur.children.length == 0) && depth < finalDepth - 1) {
        tmp.push(getFakeNode());
      }

      nodes[depth].push(_cur);
      _cur.level = depth;
      if (_cur.isFake) continue;

      for (var _i = 0; _i < _cur.children.length; _i++) {
        tmp.push(_cur.children[_i]);
      }
    }

    tmp.push(tmp.splice(0, 1)[0]);
    depth++;
  } while (depth < maxDepth && tmp.length > 1);

  for (var _i2 = 0; _i2 <= maxDepth - nodes.length; _i2++) {
    nodes.push([]);
  }

  return nodes;
};

var getLines = function getLines(node) {
  if (!node || !node._domObject) return [];

  var start = node._domObject.getClientRects()[0],
      res = [];

  if (!start || !start.x) return [];

  for (var i = 0; i < node.children.length; i++) {
    if (!node.children[i]._domObject) continue;

    var end = node.children[i]._domObject.getClientRects()[0];

    res.push({
      color: Object(_Tags_Tags__WEBPACK_IMPORTED_MODULE_2__["getColor"])(node.value),
      start: {
        x: start.left + start.width / 2,
        y: start.top + start.height / 2
      },
      end: {
        x: end.left + end.width / 2,
        y: end.top + end.height / 2
      }
    });
    res = res.concat(getLines(node.children[i]));
    console.log(res);
  }

  return res;
};

var generate = function generate() {
  var root = new Node('ROOT');
  root.id = 'root';
  root.level = 0;
  return root;
};

var generateTest = function generateTest() {
  // let root = new Node(1)
  // let f11 = new Node(2),
  //   f12 = new Node(3),
  //   f21 = new Node(4),
  //   f22 = new Node(5),
  //   f23 = new Node(6),
  //   f24 = new Node(7)
  // root.children.push(f11)
  // root.children.push(f12)
  // f11.parent = root
  // f12.parent = root
  //
  // f11.children.push(f21)
  // f11.children.push(f22)
  // f21.parent = f11
  // f22.parent = f11
  //
  // f12.children.push(f23)
  // f12.children.push(f24)
  // f23.parent = f12
  // f24.parent = f12
  var root = new Node(1);
  root.id = 'root';
  var f11 = new Node(2),
      f12 = new Node(3),
      f13 = new Node(4),
      f21 = new Node(5),
      f22 = new Node(6),
      f23 = new Node(7),
      f24 = new Node(8);
  root.children.push(f11);
  root.children.push(f12);
  root.children.push(f13);
  f11.parent = root;
  f12.parent = root;
  f13.parent = root;
  f11.children.push(f21);
  f12.children.push(f22);
  f21.parent = f11;
  f22.parent = f12;
  f13.children.push(f23);
  f13.children.push(f24);
  f23.parent = f13;
  f24.parent = f13;
  return root;
};



/***/ }),

/***/ "./src/components/UserInfo/UserInfo.jsx":
/*!**********************************************!*\
  !*** ./src/components/UserInfo/UserInfo.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_twitter_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-twitter-widgets */ "./node_modules/react-twitter-widgets/dist/index.js");
/* harmony import */ var react_twitter_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_twitter_widgets__WEBPACK_IMPORTED_MODULE_2__);




var UserInfo =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(UserInfo, _Component);

  function UserInfo() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserInfo.prototype;

  _proto.render = function render() {
    var userTwitter = this.props.config.userTwitter;
    var expanded = this.props.expanded;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_twitter_widgets__WEBPACK_IMPORTED_MODULE_2__["Follow"], {
      username: userTwitter,
      options: {
        count: expanded ? true : "none"
      }
    });
  };

  return UserInfo;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./src/layout/index.css":
/*!******************************!*\
  !*** ./src/layout/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/layout/index.jsx":
/*!******************************!*\
  !*** ./src/layout/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainLayout; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/layout/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);






var MainLayout =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MainLayout, _React$Component);

  function MainLayout() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MainLayout.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "description",
      content: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteDescription
    })), children);
  };

  return MainLayout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./src/pages/about.jsx":
/*!*****************************!*\
  !*** ./src/pages/about.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ "./src/layout/index.jsx");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/About/About */ "./src/components/About/About.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__);







var AboutPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AboutPage, _Component);

  function AboutPage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AboutPage.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "about-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: "About | " + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_About_About__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
  };

  return AboutPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ "./src/layout/index.jsx");
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _components_Tree_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Tree/tree */ "./src/components/Tree/tree.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");












var Index =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Index, _React$Component);

  function Index() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Index.prototype;

  _proto.refresh = function refresh() {
    if (typeof this.refreshBindBack === 'function') this.refreshBindBack();
  };

  _proto.refreshBinder = function refreshBinder(fn) {
    this.refreshBindBack = fn;
  };

  _proto.render = function render() {
    //ignore drafts
    var postEdges = this.props.data.allMarkdownRemark.edges.filter(function (edge) {
      return !edge.node.frontmatter.draft;
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dnd__WEBPACK_IMPORTED_MODULE_9__["DndProvider"], {
      backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_10__["default"]
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "index-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tree_tree__WEBPACK_IMPORTED_MODULE_6__["default"], {
      refreshBinder: this.refreshBinder.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_4__["default"], {
      refresh: this.refresh.bind(this),
      postEdges: postEdges
    }))));
  };

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
/* eslint no-undef: "off" */

var pageQuery = "2960067163";

/***/ }),

/***/ "./src/templates/b16-tomorrow-dark.css":
/*!*********************************************!*\
  !*** ./src/templates/b16-tomorrow-dark.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/templates/category.jsx":
/*!************************************!*\
  !*** ./src/templates/category.jsx ***!
  \************************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ "./src/layout/index.jsx");
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__);







var CategoryTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(CategoryTemplate, _React$Component);

  function CategoryTemplate() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CategoryTemplate.prototype;

  _proto.render = function render() {
    var category = this.props.pageContext.category;
    var postEdges = this.props.data.allMarkdownRemark.edges;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "category-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: "Posts in category \"" + category + "\" | " + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_4__["default"], {
      postEdges: postEdges
    })));
  };

  return CategoryTemplate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* eslint no-undef: "off" */



var pageQuery = "4191571131";

/***/ }),

/***/ "./src/templates/post.css":
/*!********************************!*\
  !*** ./src/templates/post.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/templates/post.jsx":
/*!********************************!*\
  !*** ./src/templates/post.jsx ***!
  \********************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ "./src/layout/index.jsx");
/* harmony import */ var _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserInfo/UserInfo */ "./src/components/UserInfo/UserInfo.jsx");
/* harmony import */ var _components_Disqus_Disqus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Disqus/Disqus */ "./src/components/Disqus/Disqus.jsx");
/* harmony import */ var _components_PostTags_PostTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostTags/PostTags */ "./src/components/PostTags/PostTags.jsx");
/* harmony import */ var _components_SocialLinks_SocialLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SocialLinks/SocialLinks */ "./src/components/SocialLinks/SocialLinks.jsx");
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _b16_tomorrow_dark_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./b16-tomorrow-dark.css */ "./src/templates/b16-tomorrow-dark.css");
/* harmony import */ var _b16_tomorrow_dark_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_b16_tomorrow_dark_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _post_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post.css */ "./src/templates/post.css");
/* harmony import */ var _post_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_post_css__WEBPACK_IMPORTED_MODULE_11__);













var PostTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostTemplate, _React$Component);

  function PostTemplate() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PostTemplate.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        pageContext = _this$props.pageContext;
    var slug = pageContext.slug;
    var postNode = data.markdownRemark;
    var post = postNode.frontmatter;

    if (!post.id) {
      post.id = slug;
    }

    if (!post.category_id) {
      post.category_id = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_9___default.a.postDefaultCategoryID;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, post.title + " | " + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_9___default.a.siteTitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postPath: slug,
      postNode: postNode,
      postSEO: true
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, post.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: postNode.html
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "post-meta"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostTags_PostTags__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tags: post.tags
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SocialLinks_SocialLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postPath: slug,
      postNode: postNode
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_9___default.a
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Disqus_Disqus__WEBPACK_IMPORTED_MODULE_5__["default"], {
      postNode: postNode
    }))));
  };

  return PostTemplate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* eslint no-undef: "off" */



var pageQuery = "1675071777";

/***/ }),

/***/ "./src/templates/tag.jsx":
/*!*******************************!*\
  !*** ./src/templates/tag.jsx ***!
  \*******************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ "./src/layout/index.jsx");
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__);







var TagTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(TagTemplate, _React$Component);

  function TagTemplate() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TagTemplate.prototype;

  _proto.render = function render() {
    var tag = this.props.pageContext.tag;
    var postEdges = this.props.data.allMarkdownRemark.edges;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tag-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: "Posts tagged as \"" + tag + "\" | " + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_4__["default"], {
      postEdges: postEdges
    })));
  };

  return TagTemplate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* eslint no-undef: "off" */



var pageQuery = "3824571933";

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_json_stringify__;

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_assign__;

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_create__;

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_define_property__;

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_get_prototype_of__;

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_keys__;

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_set_prototype_of__;

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_symbol__;

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_symbol_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.match":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.match" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_match__;

/***/ }),

/***/ "core-js/modules/es6.regexp.replace":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_replace__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_crypto__;

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_debug__;

/***/ }),

/***/ "domain":
/*!*************************!*\
  !*** external "domain" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("domain");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__;

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isEqual__;

/***/ }),

/***/ "lodash/kebabCase":
/*!***********************************!*\
  !*** external "lodash/kebabCase" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_kebabCase__;

/***/ }),

/***/ "minimatch":
/*!****************************!*\
  !*** external "minimatch" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_minimatch__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "pify":
/*!***********************!*\
  !*** external "pify" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_pify__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map