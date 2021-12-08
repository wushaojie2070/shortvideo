"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************************************************!*\
  !*** D:/code/githubcode/411shortvideo/main.js?{"page":"pages%2Ftabbar%2Ftabbar-1%2Ftabbar-1"} ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_tabbar_tabbar_1_tabbar_1_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/tabbar/tabbar-1/tabbar-1.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_tabbar_tabbar_1_tabbar_1_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_tabbar_tabbar_1_tabbar_1_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/tabbar/tabbar-1/tabbar-1'\n        _pages_tabbar_tabbar_1_tabbar_1_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_tabbar_tabbar_1_tabbar_1_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsd0ZBQUc7QUFDWCxRQUFRLHdGQUFHO0FBQ1gsUUFBUSx3RkFBRztBQUNYLGdCQUFnQix3RkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy90YWJiYXIvdGFiYmFyLTEvdGFiYmFyLTEubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy90YWJiYXIvdGFiYmFyLTEvdGFiYmFyLTEnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************************************************!*\
  !*** D:/code/githubcode/411shortvideo/main.js?{"type":"appStyle"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************************************************!*\
  !*** D:/code/githubcode/411shortvideo/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/githubcode/411shortvideo/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!****************************************************************************************!*\
  !*** D:/code/githubcode/411shortvideo/pages/tabbar/tabbar-1/tabbar-1.nvue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabbar_1_nvue_vue_type_template_id_47e83c57_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbar-1.nvue?vue&type=template&id=47e83c57&mpType=page */ 5);\n/* harmony import */ var _tabbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbar-1.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tabbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tabbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./tabbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./tabbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _tabbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _tabbar_1_nvue_vue_type_template_id_47e83c57_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _tabbar_1_nvue_vue_type_template_id_47e83c57_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"a8f72330\",\n  false,\n  _tabbar_1_nvue_vue_type_template_id_47e83c57_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/tabbar/tabbar-1/tabbar-1.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHFFQUE2RDtBQUNqSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMscUVBQTZEO0FBQ3RIOztBQUVBOztBQUVBO0FBQ2tMO0FBQ2xMLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90YWJiYXItMS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3ZTgzYzU3Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWJiYXItMS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmJhci0xLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3RhYmJhci0xLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi90YWJiYXItMS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL2NvbXBpbGVyL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJhOGY3MjMzMFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy90YWJiYXIvdGFiYmFyLTEvdGFiYmFyLTEubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**********************************************************************************************************************!*\
  !*** D:/code/githubcode/411shortvideo/pages/tabbar/tabbar-1/tabbar-1.nvue?vue&type=template&id=47e83c57&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_template_id_47e83c57_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tabbar-1.nvue?vue&type=template&id=47e83c57&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_template_id_47e83c57_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_template_id_47e83c57_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_template_id_47e83c57_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_template_id_47e83c57_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/githubcode/411shortvideo/pages/tabbar/tabbar-1/tabbar-1.nvue?vue&type=template&id=47e83c57&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", { staticClass: ["container"] }, [
        _c(
          "view",
          {
            staticStyle: {
              position: "fixed",
              marginTop: "100upx",
              right: "40upx"
            },
            on: { click: _vm.tolistVideo }
          },
          [
            _c(
              "u-text",
              {
                staticStyle: {
                  padding: "10upx",
                  paddingLeft: "40upx",
                  paddingRight: "40upx",
                  borderRadius: "20upx",
                  backgroundColor: "#F8F8F8",
                  fontSize: "14px"
                },
                appendAsTree: true,
                attrs: { append: "tree" }
              },
              [_vm._v("H5/小程序")]
            )
          ]
        ),
        _c(
          "view",
          {
            staticStyle: {
              position: "fixed",
              marginTop: "200upx",
              right: "40upx"
            },
            on: { click: _vm.toTwoVideo }
          },
          [
            _c(
              "u-text",
              {
                staticStyle: {
                  padding: "10upx",
                  paddingLeft: "40upx",
                  paddingRight: "40upx",
                  borderRadius: "20upx",
                  backgroundColor: "#F8F8F8",
                  fontSize: "14px"
                },
                appendAsTree: true,
                attrs: { append: "tree" }
              },
              [_vm._v("第二种预加载方案")]
            )
          ]
        ),
        _c(
          "view",
          {
            style:
              "width: " +
              _vm.windowWidth +
              "px; height: " +
              _vm.boxStyle.height +
              "px;"
          },
          [
            _c(
              "list",
              {
                ref: "listBox",
                attrs: {
                  loadmoreoffset: _vm.wHeight * 3,
                  showScrollbar: false,
                  pagingEnabled: true,
                  scrollable: true
                },
                on: { loadmore: _vm.getData, scroll: _vm.scrolls }
              },
              [
                _c(
                  "refresh",
                  {
                    staticClass: ["refresh"],
                    attrs: { display: _vm.refreshing ? "show" : "hide" },
                    on: {
                      refresh: _vm.onrefresh,
                      pullingdown: _vm.onpullingdown
                    }
                  },
                  [
                    _c(
                      "loading",
                      { staticStyle: { backgroundColor: "#FFFFFF" } },
                      [
                        _c("u-image", {
                          style:
                            "width: 80upx; height: 40upx; margin-top: 80upx; margin-bottom: 30upx; margin-left: " +
                            (_vm.windowWidth - 200) +
                            "px;",
                          attrs: { src: "/static/img/index/logins.gif" }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._l(_vm.dataList, function(item, i) {
                  return _c(
                    "cell",
                    { key: i, appendAsTree: true, attrs: { append: "tree" } },
                    [
                      _c(
                        "div",
                        {
                          style:
                            "width: " +
                            _vm.windowWidth +
                            "px; height: " +
                            _vm.boxStyle.height +
                            "px;",
                          on: {
                            disappear: function($event) {
                              _vm.stop()
                            }
                          }
                        },
                        [
                          _c(
                            "view",
                            { staticClass: ["root"] },
                            [
                              Math.abs(_vm.k - i) <= 1
                                ? _c("u-video", {
                                    ref: "item" + i,
                                    refInFor: true,
                                    style: _vm.boxStyle,
                                    attrs: {
                                      id: item._id,
                                      loop: true,
                                      src: item.src,
                                      muted: item.isplay,
                                      enableProgressGesture: false,
                                      pageGesture: false,
                                      controls: false,
                                      httpCache: true,
                                      showLoading: false,
                                      showFullscreenBtn: false,
                                      showCenterPlayBtn: false,
                                      objectFit: _vm.object_fit
                                    },
                                    on: {
                                      play: function($event) {
                                        _vm.playIngs(i)
                                      },
                                      timeupdate: function($event) {
                                        _vm.timeupdate($event, i)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              !item.playIng
                                ? _c("u-image", {
                                    style:
                                      "width: " +
                                      _vm.windowWidth +
                                      "px; height: " +
                                      (_vm.wHeight - _vm.deleteHeight) +
                                      "px; position: absolute;",
                                    attrs: {
                                      src:
                                        item.src +
                                        "?x-oss-process=video/snapshot,t_100,f_jpg",
                                      mode: _vm.mode
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _c(
                            "view",
                            {
                              staticClass: ["videoHover"],
                              style: _vm.boxStyle,
                              on: {
                                click: function($event) {
                                  _vm.tapVideoHover(item.state, $event)
                                }
                              }
                            },
                            [
                              item.state == "pause"
                                ? _c("u-image", {
                                    staticClass: ["playState"],
                                    attrs: { src: "/static/img/index/play.png" }
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _c(
                            "view",
                            { staticClass: ["userInfo"] },
                            [
                              item.isShowProgressBarTime == false
                                ? _c("u-image", {
                                    staticClass: ["userAvatar"],
                                    attrs: {
                                      src: item.href,
                                      mode: "aspectFill"
                                    },
                                    on: { click: _vm.tozuozhe }
                                  })
                                : _vm._e(),
                              item.isShowProgressBarTime == false
                                ? _c(
                                    "view",
                                    {
                                      staticStyle: {
                                        opacity: "0.9",
                                        marginTop: "17px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.cLike(item.like)
                                        }
                                      }
                                    },
                                    [
                                      item.like
                                        ? _c("u-image", {
                                            staticStyle: {
                                              width: "40px",
                                              height: "40px",
                                              position: "absolute",
                                              right: "6px"
                                            },
                                            attrs: {
                                              src: "/static/img/index/xin.png"
                                            }
                                          })
                                        : _vm._e(),
                                      !item.like
                                        ? _c("u-image", {
                                            staticStyle: {
                                              width: "40px",
                                              height: "40px",
                                              position: "absolute",
                                              right: "6px"
                                            },
                                            attrs: {
                                              src: "/static/img/index/xin-2.png"
                                            }
                                          })
                                        : _vm._e(),
                                      _c(
                                        "u-text",
                                        {
                                          class: { likeNumActive: item.like },
                                          staticStyle: {
                                            color: "#FFFFFF",
                                            marginTop: "5px",
                                            fontSize: "14px",
                                            textAlign: "center",
                                            marginTop: "40px",
                                            fontWeight: "bold"
                                          },
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [_vm._v(_vm._s(item.like_n))]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              item.isShowProgressBarTime == false
                                ? _c(
                                    "view",
                                    {
                                      staticClass: ["comment"],
                                      staticStyle: {
                                        opacity: "0.9",
                                        marginTop: "17px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.toComment(i)
                                        }
                                      }
                                    },
                                    [
                                      _c("u-image", {
                                        staticStyle: {
                                          width: "35px",
                                          height: "35px",
                                          position: "absolute",
                                          right: "7px"
                                        },
                                        attrs: {
                                          src:
                                            "/static/img/index/liaotian-2.png"
                                        }
                                      }),
                                      _c(
                                        "u-text",
                                        {
                                          staticStyle: {
                                            color: "#FFFFFF",
                                            marginTop: "5px",
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            marginTop: "40px"
                                          },
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [_vm._v(_vm._s(item.sms_n))]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              item.isShowProgressBarTime == false
                                ? _c(
                                    "view",
                                    {
                                      staticStyle: {
                                        opacity: "0.9",
                                        marginTop: "17px"
                                      },
                                      on: { click: _vm.share }
                                    },
                                    [
                                      _c("u-image", {
                                        staticStyle: {
                                          width: "40px",
                                          height: "40px",
                                          position: "absolute",
                                          right: "5px"
                                        },
                                        attrs: {
                                          src:
                                            "/static/img/index/share-fill.png"
                                        }
                                      }),
                                      _c(
                                        "u-text",
                                        {
                                          staticStyle: {
                                            color: "#FFFFFF",
                                            marginTop: "5px",
                                            fontSize: "14px",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            marginTop: "40px"
                                          },
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [_vm._v("分享")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _c("view", { staticClass: ["content"] }, [
                            _c(
                              "u-text",
                              {
                                staticClass: ["userName"],
                                style:
                                  "width: " + (_vm.windowWidth - 90) + "px;",
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v(_vm._s(item.title))]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["words"],
                                style:
                                  "width: " + (_vm.windowWidth - 90) + "px;",
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [
                                _vm._v(
                                  _vm._s(item.msg) + "-" + _vm._s(_vm.k + 1)
                                )
                              ]
                            )
                          ]),
                          item.isShowimage == true
                            ? _c("u-image", {
                                style:
                                  "width: 120upx; height: 160upx; border-radius: 10upx; position: absolute; bottom: " +
                                  (_vm.ProgressBarBottom + 160) +
                                  "upx; left: " +
                                  (_vm.currentPositions - 15) +
                                  "px;",
                                attrs: {
                                  src:
                                    item.src +
                                    "?x-oss-process=video/snapshot,t_" +
                                    _vm.currenttimes +
                                    "000,f_jpg",
                                  mode: "aspectFill"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  )
                })
              ],
              2
            ),
            _vm.dataList[_vm.k].isShowProgressBarTime == true
              ? _c(
                  "view",
                  {
                    style:
                      "position: absolute; bottom: " +
                      (_vm.ProgressBarBottom + 70) +
                      "upx; left: " +
                      (_vm.windowWidth * 2 - 500) +
                      "upx;"
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticStyle: { fontSize: "18px", color: "#F1F1F1" },
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.changeTime) +
                            " / " +
                            _vm._s(_vm.videoTimes)
                        )
                      ]
                    )
                  ]
                )
              : _vm._e(),
            _vm.isDragging == false
              ? _c(
                  "view",
                  {
                    style:
                      "position: absolute; bottom: " +
                      (_vm.ProgressBarBottom - 20) +
                      "upx; left: 0;",
                    on: {
                      touchmove: _vm.touchmove,
                      touchend: _vm.touchend,
                      touchstart: _vm.touchstart
                    }
                  },
                  [
                    _c(
                      "u-text",
                      {
                        style: "width: " + _vm.windowWidth + "px; opacity: 0;",
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [_vm._v(".")]
                    ),
                    _c("view", {
                      style:
                        "width: " +
                        _vm.windowWidth +
                        "px; height: 4upx; background-color: #C8C7CC; position: absolute; bottom: " +
                        _vm.ProgressBarBottom +
                        "upx; opacity: " +
                        _vm.ProgressBarOpacity +
                        ";"
                    }),
                    _vm.dataList[_vm.k].isShowProgressBarTime == false
                      ? _c("view", {
                          style:
                            "width: " +
                            _vm.currentPosition +
                            "px; height: 4upx; background-color: #FFFFFF; position: absolute; bottom: " +
                            _vm.ProgressBarBottom +
                            "upx; left: 0; opacity: " +
                            (_vm.ProgressBarOpacity - 0.1) +
                            ";"
                        })
                      : _vm._e(),
                    _vm.dataList[_vm.k].isShowProgressBarTime == true
                      ? _c("view", {
                          style:
                            "width: " +
                            _vm.currentPositions +
                            "px; height: 8upx; background-color: #FFFFFF; position: absolute; bottom: " +
                            _vm.ProgressBarBottom +
                            "upx; left: 0; opacity: " +
                            (_vm.ProgressBarOpacity + 0.05) +
                            ";"
                        })
                      : _vm._e(),
                    _vm.dataList[_vm.k].isShowProgressBarTime == false
                      ? _c("view", {
                          style:
                            "width: 4px; height: 4px; background-color: #FFFFFF; border-radius: 10px; position: absolute; bottom: " +
                            (_vm.ProgressBarBottom - 2) +
                            "upx; left: " +
                            _vm.currentPosition +
                            "px; opacity: " +
                            _vm.ProgressBarOpacity +
                            ";"
                        })
                      : _vm._e(),
                    _vm.dataList[_vm.k].isShowProgressBarTime == true
                      ? _c("view", {
                          style:
                            "width: " +
                            _vm.dotWidth +
                            "px; height: " +
                            _vm.dotWidth +
                            "px; background-color: #FFFFFF; border-radius: 10px; position: absolute; bottom: " +
                            (_vm.ProgressBarBottom - 5) +
                            "upx; left: " +
                            (_vm.currentPositions - 5) +
                            "px; opacity: " +
                            _vm.ProgressBarOpacity +
                            ";"
                        })
                      : _vm._e()
                  ]
                )
              : _vm._e()
          ]
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!****************************************************************************************************************!*\
  !*** D:/code/githubcode/411shortvideo/pages/tabbar/tabbar-1/tabbar-1.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _compiler_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tabbar-1.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _compiler_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_compiler_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _compiler_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _compiler_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_compiler_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdlLENBQWdCLG1mQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vY29tcGlsZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vY29tcGlsZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi9jb21waWxlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJiYXItMS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vY29tcGlsZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vY29tcGlsZXIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi9jb21waWxlci9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJiYXItMS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/githubcode/411shortvideo/pages/tabbar/tabbar-1/tabbar-1.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, __webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// import userList from './data.js'//这个是假数据\nvar _default = {\n  data: function data() {\n    return {\n      //下面打🌟号的是必须要的基础字段\n      //下面打💗号的是拥有滑动条的必须字段\n      dataList: [{ //1\n        \"_id\": \"1\", //1.每一个视频独有 id （自定义）\n        \"username\": \"意识到\", //2.视频拥有者名称\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\", //3.头像\n        \"title\": \"\", //4.第一行标题\n        \"msg\": \"mood\", //5.第二行内容\n        \"state\": \"pause\", //6.初始状态标志（不改）\n        \"like\": 0, //7.是否是自己喜欢，0不喜欢，1喜欢。默认不喜欢\n        \"like_n\": 0, //8.喜欢数量\n        \"sms_n\": 0, //9.评论数\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/710b0cf7-bed9-4805-a2fb-0b703483dbec.MOV\", //10.视频链接\n        \"playNumber\": 0, //11.播放视频的数量\n        \"pinlun\": [], //12.评论\n        \"playIng\": false, //13.播放（默认这个即可）\n        \"isShowimage\": false, //14.是否显示封面（默认这个即可）\n        \"isShowProgressBarTime\": false, //15.是否显示进度条（默认这个即可）\n        \"isplay\": true //16.是否播放音频（默认这个即可）\n      }, { //2\n        \"_id\": \"2\",\n        \"username\": \"阿水的哈\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"像不像你妈看见你打游戏时的样子\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 4,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/ec383f81-6896-4274-8861-e329ae1376b4.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true },\n      { //3\n        \"_id\": \"60edc229f3ff4f000138cb76\",\n        \"username\": \"阿斯达达\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"最向往的地方-林俊杰\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 0,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/53543262-55f5-4685-a5e3-b56ce75bcb88.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true },\n      { //4\n        \"_id\": \"60edc16570f7740001aa165a\",\n        \"username\": \"阿斯顿\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"Ring Ring Ring\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 0,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/bfc86ab8-bb3b-4cef-a5d2-8c5edce4ef17.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true },\n      { //5\n        \"_id\": \"60edbacf5e31f50001a66f9c\",\n        \"username\": \"史蒂夫\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"有何不可\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 3,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/5017a17a-389b-45e0-8d91-711c9dc76759.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true },\n      { //6\n        \"_id\": \"60ed95fa01033700016f1acf\",\n        \"username\": \"阿斯达\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"破茧\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 2,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/209180d8-3dfd-42ea-9ef5-5f98ae0d95e1.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true },\n      { //7\n        \"_id\": \"60e8dd308a69dc0001f1435a\",\n        \"username\": \"很久很久\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"后会无期-徐良-汪苏泷\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 1,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/c8f7a17f-6eb8-453a-9f43-944ecc7a9f11.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true },\n      { //8\n        \"_id\": \"60e86d052881d300012eb3e9\",\n        \"username\": \"哈哈哈哈哈\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"笑死了哈哈哈哈哈\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 0,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/f905c750-c70e-46b2-aaa6-37778d308f13.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true },\n      { //9\n        \"_id\": \"60e86b658a69dc0001f003ae\",\n        \"username\": \"望·即\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"Justin Biber- As long as you love me\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 0,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/9392e85c-36db-473f-8ec3-4f8ed83a382a.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true },\n      { //10\n        \"_id\": \"60e86a9e9056cd000110da51\",\n        \"username\": \"user\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"苹果2019年发布会开场动画\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 0,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/e1cd785e-56ae-4c96-a713-126bf2950e19.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true },\n      {\n        //11\n        \"_id\": \"60e86a9e9056cd000110da5q\",\n        \"username\": \"user\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"每天笑一笑\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 0,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/97b50a6d-f77d-4418-b38d-844e0b9eec97.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true },\n      {\n        //12\n        \"_id\": \"60e86a9e9026cd000119da5q\",\n        \"username\": \"user\",\n        \"href\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/247c9ea8-c708-440b-9dbf-3c3facb728ee.png\",\n        \"title\": \"\",\n        \"msg\": \"老外真会玩\",\n        \"state\": \"pause\",\n        \"like\": 0,\n        \"like_n\": 0,\n        \"sms_n\": 0,\n        \"src\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2908110e-6da2-4899-8b44-d45c153457ad/c061b07a-4b34-4d6d-aa1a-2cf41679f17c.mp4\",\n        \"playNumber\": 0,\n        \"pinlun\": [],\n        \"playIng\": false,\n        \"isShowimage\": false,\n        \"isShowProgressBarTime\": false,\n        \"isplay\": true }],\n      //用于数据循环的列表🌟💗\n      wHeight: 0, //获取的屏幕高度🌟💗\n      boxStyle: { //视频，图片封面样式🌟💗\n        'height': 0,\n        'width': 0 },\n\n      k: 0, //默认为0🌟💗\n      playIngIds: [], //正在播放的视频id列队，列队用于处理滑动过快导致的跳频问题🌟💗\n      ready: false, //可忽略\n      isDragging: false, //false代表停止滑动🌟💗\n      refreshing: true, //用于下拉刷新🌟💗\n      windowWidth: 0, //获取屏幕宽度🌟💗\n      dex: [0, 0], //用于判断是上滑还是下滑，第一个存旧值，第二个存新值【目前在1.0.7已经废弃】\n      currents: 0, //用于左右滑动，0代表视频界面，1代表右滑界面🌟💗\n      platform: '', //用于获取操作系统：ios、android🌟💗\n      playIng: false, //用于视频初始化时是否播放，默认不播放🌟💗\n      videoTime: '', //视频总时长，这个主要用来截取时间数值💗\n      videoTimes: '', //视频时长，用这个来获取时间值，例如：00:30这个时间值💗\n      changeTime: '', //显示滑动进度条时变化的时间💗\n      isShowimage: false, //是否显示封面【1.0.4已废弃，但是意思需要记住】\n      currenttimes: 0, //当前时间💗\n      isShowProgressBarTime: false, //是否拖动进度条，如果拖动（true）则显示进度条时间，否则不显示（false）【1.0.4已废弃，但是意思需要记住】\n      ProgressBarOpacity: 0.7, //进度条不拖动时的默认值，就是透明的💗\n      dotWidth: 0, //播放的小圆点，默认没有💗\n      deleteHeight: 0, //测试高度🌟💗\n      percent: 0, //百分小数💗\n      currentPosition: 0, //滑块当前位置💗//2.0已弃用，现已用于后端参数\n      currentPositions: 0, //滑块当前位置的副本💗//2.0已弃用，现已用于后端参数\n      newTime: 0, //跟手滑动后的最新时间💗\n      timeNumber: 0, //🌟💗\n      ProgressBarBottom: 20, //进度条离底部的距离💗\n      object_fit: 'contain', //视频样式默认包含🌟💗\n      mode: 'aspectFit', //图片封面样式🌟💗\n      timeout: \"\", //🌟用来阻止 setTimeout()方法\n      voice: \"\", //🌟用来阻止 setTimeout()方法\n      oldVideo: \"\" };\n\n  },\n  watch: {\n    k: function k(_k, old_k) {var _this = this; //监听 k 值的变化，可以控制视频的播放与暂停\n      __f__(\"log\", _k, \" at pages/tabbar/tabbar-1/tabbar-1.nvue:428\");\n      this.dataList[old_k].state = 'stop'; //如果是被滑走的视频，就停止播放\n      this.dataList[old_k].playIng = false; //如果视频暂停，就加载封面\n      this.dataList[old_k].isplay = true;\n      uni.createVideoContext(this.dataList[old_k]._id, this).play();\n      clearTimeout(this.oldVideo);\n      this.oldVideo = setTimeout(function () {\n        uni.createVideoContext(_this.dataList[old_k]._id, _this).seek(0);\n        uni.createVideoContext(_this.dataList[old_k]._id, _this).pause();\n        __f__(\"log\", '预留第' + (old_k + 1) + '个视频：' + _this.dataList[old_k]._id, \" at pages/tabbar/tabbar-1/tabbar-1.nvue:437\");\n      }, 500);\n      // 2.0版本已经去掉了下面这一句，视频不用暂停，只需要把声音禁止就行\n      // uni.createVideoContext(this.dataList[old_k]._id + '' + old_k,this).stop()//如果视频暂停，那么旧视频停止，这里的this.dataList[old_k]._id + '' + old_k，后面加 old_k 是为了每一个视频的 id 值不同，这样就可以大程度的避免串音问题\n      __f__(\"log\", '已经暂停 --> 第' + (old_k + 1) + '个视频～', \" at pages/tabbar/tabbar-1/tabbar-1.nvue:441\"); //提示\n      uni.createVideoContext(this.dataList[_k]._id, this).play();\n      clearTimeout(this.voice);\n      this.voice = setTimeout(function () {\n        _this.dataList[_k].isplay = false;\n      }, 300);\n      setTimeout(function () {\n        _this.dataList[_k].playIng = true;\n      }, 850);\n      //【2.0版本更新内容】- start\n      var p = _k;\n      ++p;\n      setTimeout(function () {\n        uni.createVideoContext(_this.dataList[p]._id, _this).play();\n      }, 20);\n      clearTimeout(this.timeout);\n      this.timeout = setTimeout(function () {\n        uni.createVideoContext(_this.dataList[p]._id, _this).seek(0);\n        uni.createVideoContext(_this.dataList[p]._id, _this).pause();\n        __f__(\"log\", '预加载第' + (p + 1) + '个视频：' + _this.dataList[p]._id, \" at pages/tabbar/tabbar-1/tabbar-1.nvue:460\");\n      }, 1500);\n      //【2.0版本更新内容】- end\n    } },\n\n  // onShow(){\n  // \tconsole.log('回到前台');\n  // \tthis.dataList[this.k].state = 'play';\n  // \tuni.createVideoContext(this.dataList[this.k]._id,this).play()\n  // },\n  onHide: function onHide() {\n    this.dataList[this.k].state = 'pause'; //界面隐藏也要停止播放视频\n    uni.createVideoContext(this.dataList[this.k]._id, this).pause(); //暂停以后继续播放\n    __f__(\"log\", '到后台', \" at pages/tabbar/tabbar-1/tabbar-1.nvue:473\");\n  },\n  onLoad: function onLoad() {var _this2 = this;\n    uni.getSystemInfo({\n      success: function success(e) {\n        _this2.platform = e.platform; //获取操作系统\n        if (e.model == 'iPhone12' || e.model == 'iPhone11' || e.model == 'iPhoneX') {\n          _this2.deleteHeight = 32; //这里的数值只是做模拟，可自行更改\n        }\n      } });\n\n    this.windowWidth = uni.getSystemInfoSync().screenWidth; //获取屏幕宽度\n    this.boxStyle.width = this.windowWidth + 'px'; //给宽度加px\n    this.wHeight = uni.getSystemInfoSync().screenHeight; //获取屏幕高度\n    this.boxStyle.height = this.wHeight - this.deleteHeight; //可以自行更改视频高度，想视频不那么高，就把0改大一点\n    this.ready = true;\n    this.username = uni.getStorageSync('username');\n    this.get(); //这一步，加载视频数据\n  },\n  onReady: function onReady() {},\n  methods: {\n    toTwoVideo: function toTwoVideo() {\n      uni.navigateTo({\n        url: '../new_index/new_index' });\n\n    },\n    tolistVideo: function tolistVideo() {\n      uni.navigateTo({\n        url: '../nvueSwiper/nvueSwiper' });\n\n    },\n    getData: function getData() {\n      // var msg = userList\n      for (var i = 0; i < 10; i++) {\n        this.dataList.push(this.datalist[i]);\n      }\n    },\n    touchstart: function touchstart(event) {\n      this.dataList[this.k].isShowimage = true; //刚触摸的时候就要显示预览视频图片了\n      this.dataList[this.k].isShowProgressBarTime = true; //显示时间线\n      this.ProgressBarOpacity = 1; //让滑块显示起来更明显一点\n      this.dotWidth = 10; //让点显示起来更明显一点\n    },\n    touchend: function touchend() {//当手松开后，跳到最新时间\n      uni.createVideoContext(this.dataList[this.k]._id, this).seek(this.newTime);\n      if (this.dataList[this.k].state == 'pause') {\n        this.dataList[this.k].state = 'play';\n        uni.createVideoContext(this.dataList[this.k]._id, this).play();\n      }\n      this.dataList[this.k].isShowProgressBarTime = false; //触摸结束后，隐藏时间线\n      this.dataList[this.k].isShowimage = false; //触摸结束后，隐藏时间预览\n      this.ProgressBarOpacity = 0.5; //隐藏起来进度条，不那么明显了\n      this.dotWidth = 0; //隐藏起来进度条，不那么明显了\n    },\n    touchmove: function touchmove(event) {//当手移动滑块时，计算位置、百分小数、新的时间\n      var msg = [];\n      if (this.videoTime !== '') {\n        msg = this.videoTime.split(':');\n      }\n      var timeNumber = Number(msg[0]) * 60 + Number(msg[1]);\n      this.currentPositions = event.changedTouches[0].screenX;\n      this.percent = this.currentPositions / this.windowWidth;\n      this.newTime = this.percent * timeNumber;\n      this.currenttimes = parseInt(this.newTime);\n      var theTime = this.newTime;\n      var middle = 0; // 分\n      if (theTime > 60) {\n        middle = parseInt(theTime / 60);\n        theTime = parseInt(theTime % 60);\n      }\n      this.changeTime = \"\".concat(\n      Math.round(middle) > 9 ? Math.round(middle) : '0' + Math.round(middle), \":\").concat(Math.round(theTime) > 9 ? Math.round(theTime) : '0' + Math.round(theTime));\n    },\n    timeupdate: function timeupdate(event, index) {var _this3 = this; //计算滑块当前位置，计算当前百分小数\n      // console.log(index)\n      if (index == this.k) {\n        // console.log(event)\n        var currenttime = event.detail.currentTime;\n        this.timeNumber = Math.round(event.detail.duration);\n        this.getTime();\n        this.percent = currenttime / this.timeNumber;\n        this.currentPosition = this.windowWidth * this.percent;\n        var theTime = currenttime;\n        var middle = 0; // 分\n        if (theTime > 60) {\n          middle = parseInt(theTime / 60);\n          theTime = parseInt(theTime % 60);\n        }\n        this.changeTime = \"\".concat(\n        Math.round(middle) > 9 ? Math.round(middle) : '0' + Math.round(middle), \":\").concat(Math.round(theTime) > 9 ? Math.round(theTime) : '0' + Math.round(theTime));\n        //自动切换视频\n        if (currenttime == this.timeNumber - 1) {\n          var dom = __webpack_provided_uni_dot_requireNativePlugin('dom');\n          var doms = 'item' + (this.k + 1);\n          setTimeout(function () {\n            var el = _this3.$refs[doms][0];\n            dom.scrollToElement(el, {\n              offset: 0,\n              animated: true });\n\n          }, 500);\n        }\n      }\n    },\n    getTime: function getTime() {//得到时间函数\n      this.videoTime = this.formatSeconds(this.timeNumber);\n      // console.log(that.videoTime)\n      var msg = [];\n      if (this.videoTime !== '') {\n        msg = this.videoTime.split(':');\n      }\n      this.videoTimes = \"\".concat(msg[0] > 9 ? msg[0] : '0' + msg[0], \":\").concat(msg[1] > 9 ? msg[1] : '0' + msg[1]);\n    },\n    formatSeconds: function formatSeconds(value) {//获取时间函数\n      var theTime = parseInt(value); // 秒\n      var middle = 0; // 分\n      if (theTime > 60) {\n        middle = parseInt(theTime / 60);\n        theTime = parseInt(theTime % 60);\n      }\n      return \"\".concat(middle > 9 ? middle : middle, \":\").concat(theTime > 9 ? theTime : theTime);\n    },\n    playIngs: function playIngs(index) {\n      //\n    },\n    moreVideo: function moreVideo(index) {\n\n    },\n    toVideo: function toVideo(index) {\n\n    },\n    erweima: function erweima() {\n\n    },\n    tozuozhe: function tozuozhe() {\n      this.currents = 1; //点击头像以后就会切换\n    },\n    stop: function stop() {\n      // console.log('stop')\n    },\n    scrolls: function scrolls(event) {\n      this.isDragging = event.isDragging;\n      if (!event.isDragging) {//isDragging：判断用户是不是在滑动，滑动：true，停止滑动：false。我们要用户停止滑动时才给 k 赋值，这样就可以避免很多麻烦\n        var i = Math.round(Math.abs(event.contentOffset.y) / (this.wHeight - this.deleteHeight +\n        1)); //先用绝对值取出滑动的距离，然后除以屏幕高度，取一个整，就知道你现在滑动到哪一个视频了\n        if (i !== this.k) {//这里加判断是因为这个方法会执行很多次，会造成重复请求，所以这里写一个限制\n          this.k = i; //判断了用户没有滑动，确认了用户的确是在看这个视频，然后就赋值啦\n          this.dataList[this.k].state = 'play';\n          __f__(\"log\", '正在播放 --> 第' + (this.k + 1) + '个视频～', \" at pages/tabbar/tabbar-1/tabbar-1.nvue:621\");\n        }\n      }\n    },\n    get: function get() {var _this4 = this;\n      // 这个方法主要就是用来第一次进入视频播放时用来处理的\n      this.dataList = userList; //这个就是赋值加载视频啦\n      this.dataList[0].state = \"play\";\n      setTimeout(function () {\n        //这里的延迟是为了避免执行时间太快而直接跳过执行的 bug\n        uni.createVideoContext(_this4.dataList[0]._id, _this4).seek(0);\n        uni.createVideoContext(_this4.dataList[0]._id, _this4).play();\n      }, 200);\n      this.dataList[this.k].isplay = false;\n      setTimeout(function () {\n        _this4.dataList[_this4.k].playIng = true;\n      }, 500);\n      var p = 0;\n      setTimeout(function () {\n        ++p;\n        uni.createVideoContext(_this4.dataList[p]._id, _this4).play();\n        setTimeout(function () {\n          uni.createVideoContext(_this4.dataList[p]._id, _this4).seek(0);\n          uni.createVideoContext(_this4.dataList[p]._id, _this4).pause();\n          __f__(\"log\", '预加载第' + (p + 1) + '个视频：' + _this4.dataList[p]._id, \" at pages/tabbar/tabbar-1/tabbar-1.nvue:645\");\n        }, 2000);\n      }, 50);\n    },\n    onpullingdown: function onpullingdown() {\n      // console.log('正在下拉刷新，此时手还在触摸没有松开')\n      this.refreshing = true;\n    },\n    onrefresh: function onrefresh() {var _this5 = this;\n      // console.log('下拉刷新完毕，此时手松开了')\n      setTimeout(function () {\n        _this5.refreshing = false;\n      }, 1000);\n    },\n    //点击播放&&暂停\n    tapVideoHover: function tapVideoHover(state, event) {\n      this.dataList[this.k].isShowimage = false;\n      this.dataList[this.k].isShowProgressBarTime = false;\n      this.ProgressBarOpacity = 0.5;\n      this.dotWidth = 0;\n      __f__(\"log\", 'state--', state, \" at pages/tabbar/tabbar-1/tabbar-1.nvue:665\");\n      if (state == 'play' || state == 'continue') {\n        this.dataList[this.k].state = 'pause';\n      } else {\n        this.dataList[this.k].state = 'continue';\n      }\n      if (this.dataList[this.k].state == 'continue') {\n        uni.createVideoContext(this.dataList[this.k]._id, this).play(); //暂停以后继续播放\n      }\n      if (this.dataList[this.k].state == 'pause') {\n        uni.createVideoContext(this.dataList[this.k]._id, this).pause(); //暂停以后继续播放\n      }\n    },\n    toComment: function toComment() {\n\n    },\n    share: function share() {\n\n    },\n    cLike: function cLike(sss) {\n      this.dataList[this.k].like = !this.dataList[this.k].like;\n      var video = this.dataList[this.k];\n      sss ? video.like_n -= 1 : video.like_n += 1;\n      /*\n                                                   这里我介绍一种我在真实数据的常用办法：\n                                                   js里面有一个方法叫做 indexOf() 这个方法很有用，免去了写 for 循环\n                                                   \t（这里插一句：for 循环的效率要比其他的 例如：forEach、map 效率要高）\n                                                   真实数据一般是返回一个视频的大数组，然后视频里的参数有一个参数就是 like 参数，\n                                                   把 like 参数设置成数组，然后点赞就把名字添加进去。也就是在后端存储下来的数据，\n                                                   实际上是一个数组。当渲染到前端页面时，我们就把每一个视频数据拿过来，做一个判断\n                                                   如果，like数组里有自己，那么就把like值设置为 1 ，表示自己已经点赞，如果没有\n                                                   自己就设置为 0 \n                                                   */\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL3RhYmJhci0xL3RhYmJhci0xLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStLQTtlQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREEsRUFDQTtBQUNBLHlCQUZBLEVBRUE7QUFDQSx3SUFIQSxFQUdBO0FBQ0EsbUJBSkEsRUFJQTtBQUNBLHFCQUxBLEVBS0E7QUFDQSx3QkFOQSxFQU1BO0FBQ0EsaUJBUEEsRUFPQTtBQUNBLG1CQVJBLEVBUUE7QUFDQSxrQkFUQSxFQVNBO0FBQ0EsdUlBVkEsRUFVQTtBQUNBLHVCQVhBLEVBV0E7QUFDQSxvQkFaQSxFQVlBO0FBQ0Esd0JBYkEsRUFhQTtBQUNBLDRCQWRBLEVBY0E7QUFDQSxzQ0FmQSxFQWVBO0FBQ0Esc0JBaEJBLENBZ0JBO0FBaEJBLFNBaUJBO0FBQ0Esa0JBREE7QUFFQSwwQkFGQTtBQUdBLHdJQUhBO0FBSUEsbUJBSkE7QUFLQSxnQ0FMQTtBQU1BLHdCQU5BO0FBT0EsaUJBUEE7QUFRQSxtQkFSQTtBQVNBLGtCQVRBO0FBVUEsdUlBVkE7QUFXQSx1QkFYQTtBQVlBLG9CQVpBO0FBYUEsd0JBYkE7QUFjQSw0QkFkQTtBQWVBLHNDQWZBO0FBZ0JBLHNCQWhCQSxFQWpCQTtBQWtDQTtBQUNBLHlDQURBO0FBRUEsMEJBRkE7QUFHQSx3SUFIQTtBQUlBLG1CQUpBO0FBS0EsMkJBTEE7QUFNQSx3QkFOQTtBQU9BLGlCQVBBO0FBUUEsbUJBUkE7QUFTQSxrQkFUQTtBQVVBLHVJQVZBO0FBV0EsdUJBWEE7QUFZQSxvQkFaQTtBQWFBLHdCQWJBO0FBY0EsNEJBZEE7QUFlQSxzQ0FmQTtBQWdCQSxzQkFoQkEsRUFsQ0E7QUFtREE7QUFDQSx5Q0FEQTtBQUVBLHlCQUZBO0FBR0Esd0lBSEE7QUFJQSxtQkFKQTtBQUtBLCtCQUxBO0FBTUEsd0JBTkE7QUFPQSxpQkFQQTtBQVFBLG1CQVJBO0FBU0Esa0JBVEE7QUFVQSx1SUFWQTtBQVdBLHVCQVhBO0FBWUEsb0JBWkE7QUFhQSx3QkFiQTtBQWNBLDRCQWRBO0FBZUEsc0NBZkE7QUFnQkEsc0JBaEJBLEVBbkRBO0FBb0VBO0FBQ0EseUNBREE7QUFFQSx5QkFGQTtBQUdBLHdJQUhBO0FBSUEsbUJBSkE7QUFLQSxxQkFMQTtBQU1BLHdCQU5BO0FBT0EsaUJBUEE7QUFRQSxtQkFSQTtBQVNBLGtCQVRBO0FBVUEsdUlBVkE7QUFXQSx1QkFYQTtBQVlBLG9CQVpBO0FBYUEsd0JBYkE7QUFjQSw0QkFkQTtBQWVBLHNDQWZBO0FBZ0JBLHNCQWhCQSxFQXBFQTtBQXFGQTtBQUNBLHlDQURBO0FBRUEseUJBRkE7QUFHQSx3SUFIQTtBQUlBLG1CQUpBO0FBS0EsbUJBTEE7QUFNQSx3QkFOQTtBQU9BLGlCQVBBO0FBUUEsbUJBUkE7QUFTQSxrQkFUQTtBQVVBLHVJQVZBO0FBV0EsdUJBWEE7QUFZQSxvQkFaQTtBQWFBLHdCQWJBO0FBY0EsNEJBZEE7QUFlQSxzQ0FmQTtBQWdCQSxzQkFoQkEsRUFyRkE7QUFzR0E7QUFDQSx5Q0FEQTtBQUVBLDBCQUZBO0FBR0Esd0lBSEE7QUFJQSxtQkFKQTtBQUtBLDRCQUxBO0FBTUEsd0JBTkE7QUFPQSxpQkFQQTtBQVFBLG1CQVJBO0FBU0Esa0JBVEE7QUFVQSx1SUFWQTtBQVdBLHVCQVhBO0FBWUEsb0JBWkE7QUFhQSx3QkFiQTtBQWNBLDRCQWRBO0FBZUEsc0NBZkE7QUFnQkEsc0JBaEJBLEVBdEdBO0FBdUhBO0FBQ0EseUNBREE7QUFFQSwyQkFGQTtBQUdBLHdJQUhBO0FBSUEsbUJBSkE7QUFLQSx5QkFMQTtBQU1BLHdCQU5BO0FBT0EsaUJBUEE7QUFRQSxtQkFSQTtBQVNBLGtCQVRBO0FBVUEsdUlBVkE7QUFXQSx1QkFYQTtBQVlBLG9CQVpBO0FBYUEsd0JBYkE7QUFjQSw0QkFkQTtBQWVBLHNDQWZBO0FBZ0JBLHNCQWhCQSxFQXZIQTtBQXdJQTtBQUNBLHlDQURBO0FBRUEseUJBRkE7QUFHQSx3SUFIQTtBQUlBLG1CQUpBO0FBS0EscURBTEE7QUFNQSx3QkFOQTtBQU9BLGlCQVBBO0FBUUEsbUJBUkE7QUFTQSxrQkFUQTtBQVVBLHVJQVZBO0FBV0EsdUJBWEE7QUFZQSxvQkFaQTtBQWFBLHdCQWJBO0FBY0EsNEJBZEE7QUFlQSxzQ0FmQTtBQWdCQSxzQkFoQkEsRUF4SUE7QUF5SkE7QUFDQSx5Q0FEQTtBQUVBLDBCQUZBO0FBR0Esd0lBSEE7QUFJQSxtQkFKQTtBQUtBLCtCQUxBO0FBTUEsd0JBTkE7QUFPQSxpQkFQQTtBQVFBLG1CQVJBO0FBU0Esa0JBVEE7QUFVQSx1SUFWQTtBQVdBLHVCQVhBO0FBWUEsb0JBWkE7QUFhQSx3QkFiQTtBQWNBLDRCQWRBO0FBZUEsc0NBZkE7QUFnQkEsc0JBaEJBLEVBekpBO0FBMEtBO0FBQ0E7QUFDQSx5Q0FGQTtBQUdBLDBCQUhBO0FBSUEsd0lBSkE7QUFLQSxtQkFMQTtBQU1BLHNCQU5BO0FBT0Esd0JBUEE7QUFRQSxpQkFSQTtBQVNBLG1CQVRBO0FBVUEsa0JBVkE7QUFXQSx1SUFYQTtBQVlBLHVCQVpBO0FBYUEsb0JBYkE7QUFjQSx3QkFkQTtBQWVBLDRCQWZBO0FBZ0JBLHNDQWhCQTtBQWlCQSxzQkFqQkEsRUExS0E7QUE0TEE7QUFDQTtBQUNBLHlDQUZBO0FBR0EsMEJBSEE7QUFJQSx3SUFKQTtBQUtBLG1CQUxBO0FBTUEsc0JBTkE7QUFPQSx3QkFQQTtBQVFBLGlCQVJBO0FBU0EsbUJBVEE7QUFVQSxrQkFWQTtBQVdBLHVJQVhBO0FBWUEsdUJBWkE7QUFhQSxvQkFiQTtBQWNBLHdCQWRBO0FBZUEsNEJBZkE7QUFnQkEsc0NBaEJBO0FBaUJBLHNCQWpCQSxFQTVMQSxDQUhBO0FBaU5BO0FBQ0EsZ0JBbE5BLEVBa05BO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLGtCQUZBLEVBbk5BOztBQXVOQSxVQXZOQSxFQXVOQTtBQUNBLG9CQXhOQSxFQXdOQTtBQUNBLGtCQXpOQSxFQXlOQTtBQUNBLHVCQTFOQSxFQTBOQTtBQUNBLHNCQTNOQSxFQTJOQTtBQUNBLG9CQTVOQSxFQTROQTtBQUNBLGlCQTdOQSxFQTZOQTtBQUNBLGlCQTlOQSxFQThOQTtBQUNBLGtCQS9OQSxFQStOQTtBQUNBLG9CQWhPQSxFQWdPQTtBQUNBLG1CQWpPQSxFQWlPQTtBQUNBLG9CQWxPQSxFQWtPQTtBQUNBLG9CQW5PQSxFQW1PQTtBQUNBLHdCQXBPQSxFQW9PQTtBQUNBLHFCQXJPQSxFQXFPQTtBQUNBLGtDQXRPQSxFQXNPQTtBQUNBLDZCQXZPQSxFQXVPQTtBQUNBLGlCQXhPQSxFQXdPQTtBQUNBLHFCQXpPQSxFQXlPQTtBQUNBLGdCQTFPQSxFQTBPQTtBQUNBLHdCQTNPQSxFQTJPQTtBQUNBLHlCQTVPQSxFQTRPQTtBQUNBLGdCQTdPQSxFQTZPQTtBQUNBLG1CQTlPQSxFQThPQTtBQUNBLDJCQS9PQSxFQStPQTtBQUNBLDJCQWhQQSxFQWdQQTtBQUNBLHVCQWpQQSxFQWlQQTtBQUNBLGlCQWxQQSxFQWtQQTtBQUNBLGVBblBBLEVBbVBBO0FBQ0Esa0JBcFBBOztBQXNQQSxHQXhQQTtBQXlQQTtBQUNBLEtBREEsYUFDQSxFQURBLEVBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSwwQ0FGQSxDQUVBO0FBQ0EsMkNBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxFQUlBLEdBSkE7QUFLQTtBQUNBO0FBQ0EsdUdBZEEsQ0FjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEVBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxFQUlBLElBSkE7QUFLQTtBQUNBLEtBckNBLEVBelBBOztBQWdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFyU0Esb0JBcVNBO0FBQ0EsMENBREEsQ0FDQTtBQUNBLG9FQUZBLENBRUE7QUFDQTtBQUNBLEdBelNBO0FBMFNBLFFBMVNBLG9CQTBTQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQSxDQUNBO0FBQ0E7QUFDQSxtQ0FEQSxDQUNBO0FBQ0E7QUFDQSxPQU5BOztBQVFBLDJEQVRBLENBU0E7QUFDQSxrREFWQSxDQVVBO0FBQ0Esd0RBWEEsQ0FXQTtBQUNBLDREQVpBLENBWUE7QUFDQTtBQUNBO0FBQ0EsZUFmQSxDQWVBO0FBQ0EsR0ExVEE7QUEyVEEsU0EzVEEscUJBMlRBLEVBM1RBO0FBNFRBO0FBQ0EsY0FEQSx3QkFDQTtBQUNBO0FBQ0EscUNBREE7O0FBR0EsS0FMQTtBQU1BLGVBTkEseUJBTUE7QUFDQTtBQUNBLHVDQURBOztBQUdBLEtBVkE7QUFXQSxXQVhBLHFCQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhCQTtBQWlCQSxjQWpCQSxzQkFpQkEsS0FqQkEsRUFpQkE7QUFDQSwrQ0FEQSxDQUNBO0FBQ0EseURBRkEsQ0FFQTtBQUNBLGtDQUhBLENBR0E7QUFDQSx5QkFKQSxDQUlBO0FBQ0EsS0F0QkE7QUF1QkEsWUF2QkEsc0JBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQU5BLENBTUE7QUFDQSxnREFQQSxDQU9BO0FBQ0Esb0NBUkEsQ0FRQTtBQUNBLHdCQVRBLENBU0E7QUFDQSxLQWpDQTtBQWtDQSxhQWxDQSxxQkFrQ0EsS0FsQ0EsRUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQVhBLENBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBREEsY0FDQSx5RUFEQTtBQUVBLEtBcERBO0FBcURBLGNBckRBLHNCQXFEQSxLQXJEQSxFQXFEQSxLQXJEQSxFQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQVJBLENBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBREEsY0FDQSx5RUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSw0QkFGQTs7QUFJQSxXQU5BLEVBTUEsR0FOQTtBQU9BO0FBQ0E7QUFDQSxLQW5GQTtBQW9GQSxXQXBGQSxxQkFvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUZBO0FBNkZBLGlCQTdGQSx5QkE2RkEsS0E3RkEsRUE2RkE7QUFDQSxvQ0FEQSxDQUNBO0FBQ0EscUJBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJHQTtBQXNHQSxZQXRHQSxvQkFzR0EsS0F0R0EsRUFzR0E7QUFDQTtBQUNBLEtBeEdBO0FBeUdBLGFBekdBLHFCQXlHQSxLQXpHQSxFQXlHQTs7QUFFQSxLQTNHQTtBQTRHQSxXQTVHQSxtQkE0R0EsS0E1R0EsRUE0R0E7O0FBRUEsS0E5R0E7QUErR0EsV0EvR0EscUJBK0dBOztBQUVBLEtBakhBO0FBa0hBLFlBbEhBLHNCQWtIQTtBQUNBLHdCQURBLENBQ0E7QUFDQSxLQXBIQTtBQXFIQSxRQXJIQSxrQkFxSEE7QUFDQTtBQUNBLEtBdkhBO0FBd0hBLFdBeEhBLG1CQXdIQSxLQXhIQSxFQXdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBREEsR0FEQSxDQUVBO0FBQ0E7QUFDQSxxQkFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5JQTtBQW9JQSxPQXBJQSxpQkFvSUE7QUFDQTtBQUNBLCtCQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxFQUlBLEdBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLEVBSUEsSUFKQTtBQUtBLE9BUkEsRUFRQSxFQVJBO0FBU0EsS0EzSkE7QUE0SkEsaUJBNUpBLDJCQTRKQTtBQUNBO0FBQ0E7QUFDQSxLQS9KQTtBQWdLQSxhQWhLQSx1QkFnS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsSUFGQTtBQUdBLEtBcktBO0FBc0tBO0FBQ0EsaUJBdktBLHlCQXVLQSxLQXZLQSxFQXVLQSxLQXZLQSxFQXVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSx3RUFEQSxDQUNBO0FBQ0E7QUFDQSxLQXhMQTtBQXlMQSxhQXpMQSx1QkF5TEE7O0FBRUEsS0EzTEE7QUE0TEEsU0E1TEEsbUJBNExBOztBQUVBLEtBOUxBO0FBK0xBLFNBL0xBLGlCQStMQSxHQS9MQSxFQStMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUEsS0E3TUEsRUE1VEEsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblx0XHQ8dmlldyBAY2xpY2s9XCJ0b2xpc3RWaWRlb1wiIHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyBtYXJnaW4tdG9wOiAxMDB1cHg7IHJpZ2h0OiA0MHVweDtcIj5cclxuXHRcdFx0PHRleHRcclxuXHRcdFx0XHRzdHlsZT1cInBhZGRpbmc6IDEwdXB4OyBwYWRkaW5nLWxlZnQ6IDQwdXB4OyBwYWRkaW5nLXJpZ2h0OiA0MHVweDsgYm9yZGVyLXJhZGl1czogMjB1cHg7IGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7IGZvbnQtc2l6ZTogMTRweDtcIj5INS/lsI/nqIvluo88L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBAY2xpY2s9XCJ0b1R3b1ZpZGVvXCIgc3R5bGU9XCJwb3NpdGlvbjogZml4ZWQ7IG1hcmdpbi10b3A6IDIwMHVweDsgcmlnaHQ6IDQwdXB4O1wiPlxyXG5cdFx0XHQ8dGV4dFxyXG5cdFx0XHRcdHN0eWxlPVwicGFkZGluZzogMTB1cHg7IHBhZGRpbmctbGVmdDogNDB1cHg7IHBhZGRpbmctcmlnaHQ6IDQwdXB4OyBib3JkZXItcmFkaXVzOiAyMHVweDsgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODsgZm9udC1zaXplOiAxNHB4O1wiPuesrOS6jOenjemihOWKoOi9veaWueahiDwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IDpzdHlsZT1cIid3aWR0aDogJysgd2luZG93V2lkdGggKydweDsgaGVpZ2h0OiAnKyBib3hTdHlsZS5oZWlnaHQgKydweDsnXCI+XHJcblx0XHRcdDwhLS0gXHJcblx0XHQgMS7ov5nph4znmoQgc3dpcGVyIOS4jeaYr+eUqOadpeaOp+WItuinhumikea7keWKqOeahO+8jOiAjOaYr+eUqOadpeaOp+WItuW3puWPs+a7keWKqOeahO+8jOWmguaenOS4jemcgOimgeeahOWPr+S7peaUueaIkCB2aWV3XHJcblx0XHQgXHJcblx0XHQgMi7kuLrkuoYg6KeG6aKR5peg6ZmQ5Yqg6L2977yM5bey57uP5oqKIDIxIOihjOeahCBhcHBlYXIg5Y675o6J5LqG77yM5Yqg5LiK5LqGIGxvYWRtb3JlIOaWueazle+8iOesrDEw6KGM77yJXHJcblx0XHQgXHJcblx0XHQgMy7nlLHkuo7mlrnms5Xmr5TovoPlpJrvvIzlj6/ku6Xph4flj5bkuIvpnaLnmoTmlrnlvI/mn6XnnIvku6PnoIHvvJpcclxuXHRcdCDvvIgx77yJTWFj77ya5oyJ5L2PIG9wdGlvbiDplK7vvIznhLblkI7ngrnlh7vmlrnms5XlkI3vvIzljbPlj6/ot7PovazliLDmlrnms5VcclxuXHRcdCDvvIgy77yJd2luZG93c++8muaMieS9jyBBbHQg6ZSu77yM54S25ZCO6byg5qCH5bem5Ye777yM5Y2z5Y+v6Lez6L2s5Yiw5pa55rOVXHJcblx0XHQgLS0+XHJcblx0XHRcdDxsaXN0IEBsb2FkbW9yZT1cImdldERhdGFcIiBAc2Nyb2xsPVwic2Nyb2xsc1wiIDpsb2FkbW9yZW9mZnNldD1cIndIZWlnaHQqM1wiIDpzaG93LXNjcm9sbGJhcj1cImZhbHNlXCJcclxuXHRcdFx0XHRyZWY9XCJsaXN0Qm94XCIgOnBhZ2luZ0VuYWJsZWQ9XCJ0cnVlXCIgOnNjcm9sbGFibGU9XCJ0cnVlXCI+XHJcblx0XHRcdFx0PCEtLSDliLfmlrDmqKHlnZcgLS0+XHJcblx0XHRcdFx0PHJlZnJlc2ggY2xhc3M9XCJyZWZyZXNoXCIgQHJlZnJlc2g9XCJvbnJlZnJlc2hcIiBAcHVsbGluZ2Rvd249XCJvbnB1bGxpbmdkb3duXCJcclxuXHRcdFx0XHRcdDpkaXNwbGF5PVwicmVmcmVzaGluZyA/ICdzaG93JyA6ICdoaWRlJ1wiPlxyXG5cdFx0XHRcdFx0PGxvYWRpbmcgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiQC9zdGF0aWMvaW1nL2luZGV4L2xvZ2lucy5naWZcIlxyXG5cdFx0XHRcdFx0XHRcdDpzdHlsZT1cIid3aWR0aDogODB1cHg7IGhlaWdodDogNDB1cHg7IG1hcmdpbi10b3A6IDgwdXB4OyBtYXJnaW4tYm90dG9tOiAzMHVweDsgbWFyZ2luLWxlZnQ6ICcrICh3aW5kb3dXaWR0aCAtIDIwMCkgKydweDsnXCI+XHJcblx0XHRcdFx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L2xvYWRpbmc+XHJcblx0XHRcdFx0PC9yZWZyZXNoPlxyXG5cclxuXHRcdFx0XHQ8IS0tIOW+queOr+aVsOaNriAtLT5cclxuXHRcdFx0XHQ8Y2VsbCB2LWZvcj1cIihpdGVtLGkpIGluIGRhdGFMaXN0XCIgOmtleT1cImlcIj5cclxuXHRcdFx0XHRcdDwhLS0g55SoZGl25oqK6KeG6aKR5qih57uE5aWX6LW35p2lIC0tPlxyXG5cdFx0XHRcdFx0PGRpdiA6c3R5bGU9XCInd2lkdGg6ICcrIHdpbmRvd1dpZHRoICsncHg7IGhlaWdodDogJysgYm94U3R5bGUuaGVpZ2h0ICsncHg7J1wiIEBkaXNhcHBlYXI9XCJzdG9wKClcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb290XCI+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSBcclxuXHRcdFx0XHRcdFx05YW35L2T6KeG6aKR5Y+C5pWw5Y+v5Lul5Y+C6ICD5a6Y5pa55paH5qGjXHJcblx0XHRcdFx0XHRcdOivtOaYju+8mlxyXG5cdFx0XHRcdFx0XHQxLnYtaWblvojlhbPplK7vvIzov5nph4zkuLvopoHmmK/kuLrkuoblh4/lsJEgZG9tIOWFg+e0oOOAkOi/meagt+aJjeS4jeS8muWKoOi9veinhumikeWkmuS6humXqumAgOOAke+8jFxyXG5cdFx0XHRcdFx0XHRcdOi/memHjCBNYXRoLmFicyhrLWkpPD01IOS5n+WwseaYr+W+gOS4iumihOWKoOi9vSA1IOS4quinhumike+8jOW+gOS4i+mihOWKoOi9vSA1IFxyXG5cdFx0XHRcdFx0XHRcdOS4quinhumikei/meagt+WBmueahOebrueahOaYr+S4uuS6huiuqeinhumikeiDveWkn+aPkOWJjeWKoOi9veS9huaYr+S4jeaSreaUvu+8jOWcqOecn+ato+a7keWIsOS9jVxyXG5cdFx0XHRcdFx0XHRcdOe9rueahOaXtuWAmeaSreaUvuinhumikeOAglxyXG5cdFx0XHRcdFx0XHRcdOOAkDIuMC4x5bCx5pivICAxICBNYXRoLmFicyhrLWkpPD0x77ya6K+35Yu/5L+u5pS577yM6K6w5L2P77yM6KaB5LiN54S25Lya5o+Q5YmN5pKt5pS+5b6I5aSa6KeG6aKR44CRXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDIu6KaB5rOo5oSPIEBwbGF5PVwicGxheUluZ3NcIiDph4zpnaLnmoQgcGxheUluZ3Mg5pa55rOV77yM6L+Z5Liq5pa55rOV5Y+q5piv5Zyo6KeG6aKR5pKt5pS+55qE5pe25YCZXHJcblx0XHRcdFx0XHRcdFx06LW35pWI5p6c77yM5oiR5Lus5o6n5Yi26KeG6aKR5pKt5pS+5LiN5piv55So6L+Z5Liq55qE44CC6L+Z5Liq55qE5Li76KaB5L2c55So5piv57uZ6KeG6aKR5bCB6Z2i55qE44CC5oiR5Lus5YWI55SoXHJcblx0XHRcdFx0XHRcdFx05LiL6Z2i55qE6KeG6aKR5bCB6Z2i55uW5L2P6KeG6aKR77yM562J5Yiw6KeG6aKR5pKt5pS+55qE5pe25YCZ77yM5oiR5Lus5LiN6KaB5oCl552A55u05o6l5pKt5pS+77yM6ICM5piv5bu26L+f5LiA5LiL5LiL77yMXHJcblx0XHRcdFx0XHRcdFx0MzAwLTYwMG1z5bem5Y+z44CC5Zug5Li66KeG6aKR5pKt5pS+6ZyA6KaB5LiA54K554K55pe26Ze077yM6L+Z54K55pe26Ze06YeM5Lya6buR5bGP77yM6L+Z5Liq5pe25YCZ5oiR5Lus5bCx55SoXHJcblx0XHRcdFx0XHRcdFx05LiL6Z2i55qE5bCB6Z2i55uW5L2P77yM6L+Z5qC355So5oi35bCx5LiN5Lya5pyJ5LuO6buR5bGP5Yiw5pyJ55S76Z2i55qE5oSf6KeJ5LqG77yM5L2G5piv5aaC5p6c6YGH5Yiw6KeG6aKR5aSq5aSn77yM57yT5YayXHJcblx0XHRcdFx0XHRcdFx05pe26Ze05aSq6ZW/77yM6L+Y5piv5Lya5Ye6546w55+t5pqC55qE6buR5bGP77yM5aSn6YOo5YiG5piv5LiN5Lya5pyJ6buR5bGP55qE77yI6L+Z5qC355uW5L2P55qE6K+d77yJ44CCXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx044CQ5pu05paw6K6w5b2V77yaMi4w54mI44CR5bey57uP6Kej5Yaz5LqG6KeG6aKR6buR5bGP6Zeu6aKY77yM5ZKM5Yqg6L296YCf5bqm5oWi55qE5oOF5Ya177yM5aaC5p6c6L+Y5piv5Ye6546w5LqG6buR5bGP77yMXHJcblx0XHRcdFx0XHRcdFx05oSP5ZGz552A5q2k5pe25omL5ruR5Yqo55qE6YCf5bqm77yM5bey57uP6LaF6L+H5LqG6KeG6aKR5Yqg6L2955qE6YCf5bqm77yM5a+55LqO6L+Z5Liq6Zeu6aKY77yM5bu66K6u5L+u5pS5IHByZWxvYWROdW1iZXIgXHJcblx0XHRcdFx0XHRcdFx05Y+Y6YeP77yM5b2T5a6D55qE5YC85aSn5LiA54K555qE5pe25YCZ5bCx5Lya5o+Q5YmN5Yqg6L296KeG6aKR77yM6L+Z5qC355So5oi35Zyo5ruR5Yiw6KeG6aKR55qE5pe25YCZ5bCx5LiN5Lya5pyJ5YGc6aG/5oSf5LqGXHJcblx0XHRcdFx0XHRcdFx044CQ5rOo5oSP44CR77ya6ICB55So5oi35ZyoIHZpZGVvIOS4reWinuWKoOWSjOS/ruaUuSBcclxuXHRcdFx0XHRcdFx0XHTvvIgx77yJOm11dGVkPVwiIWl0ZW0ucGxheUluZ1wi77yMXHJcblx0XHRcdFx0XHRcdFx077yIMu+8iUB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZSgkZXZlbnQsaSlcIlxyXG5cdFx0XHRcdFx0XHRcdO+8iDPvvInmioogMTk5IOihjOazqOmHiuS6hu+8jFxyXG5cdFx0XHRcdFx0XHRcdO+8iDTvvIk6aWQ9XCJpdGVtLl9pZFwi77yMXHJcblx0XHRcdFx0XHRcdFx077yINe+8ieS/ruaUue+8mnVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFt0aGlzLmtdLl9pZCArICcnICsgdGhpcy5rLHRoaXMpIOS4ulxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3RoaXMua10uX2lkLHRoaXMpXHJcblx0XHRcdFx0XHRcdFx077yINu+8ieWcqCB0aW1ldXBkYXRlIOaWueazlemHjOWKoOWFpe+8jGlmKGluZGV4ID09IHRoaXMuayl75oqK6YeM6Z2i55qE5Yqg5LiA5Liq5oC755qE5Yik5patfVxyXG5cdFx0XHRcdFx0XHQzLuWFtuS7lueahOS4i+mdouacieivpuino1xyXG5cdFx0XHRcdFx0XHQgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZGVvIHYtaWY9XCJNYXRoLmFicyhrLWkpPD0xXCIgOnJlZj1cIidpdGVtJytpXCIgOmlkPVwiaXRlbS5faWRcIiA6bG9vcD1cInRydWVcIiA6c3JjPVwiaXRlbS5zcmNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Om11dGVkPVwiaXRlbS5pc3BsYXlcIiBAcGxheT1cInBsYXlJbmdzKGkpXCIgOmVuYWJsZS1wcm9ncmVzcy1nZXN0dXJlPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OnBhZ2UtZ2VzdHVyZT1cImZhbHNlXCIgOmNvbnRyb2xzPVwiZmFsc2VcIiA6aHR0cC1jYWNoZT1cInRydWVcIiA6c2hvdy1sb2FkaW5nPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OnNob3ctZnVsbHNjcmVlbi1idG49XCJmYWxzZVwiIDpzaG93LWNlbnRlci1wbGF5LWJ0bj1cImZhbHNlXCIgOnN0eWxlPVwiYm94U3R5bGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Om9iamVjdC1maXQ9XCJvYmplY3RfZml0XCIgQHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlKCRldmVudCxpKVwiPjwvdmlkZW8+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSDov5nph4zmmK/lsIHpnaIgLS0+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCIhaXRlbS5wbGF5SW5nXCIgOnNyYz1cIml0ZW0uc3JjKyc/eC1vc3MtcHJvY2Vzcz12aWRlby9zbmFwc2hvdCx0XzEwMCxmX2pwZydcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Om1vZGU9XCJtb2RlXCJcclxuXHRcdFx0XHRcdFx0XHRcdDpzdHlsZT1cIid3aWR0aDogJysgd2luZG93V2lkdGggKydweDsgaGVpZ2h0OiAnKyAod0hlaWdodCAtIGRlbGV0ZUhlaWdodCkgKydweDsgcG9zaXRpb246IGFic29sdXRlOydcIj5cclxuXHRcdFx0XHRcdFx0XHQ8L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gXHJcblx0XHRcdFx0XHRcdG1vZGU6IOWbvueJh+ijgeWJquOAgee8qeaUvueahOaooeW8j1xyXG5cdFx0XHRcdFx0XHRtb2RlIOaciSAxNCDnp43mqKHlvI/vvIzlhbbkuK0gNSDnp43mmK/nvKnmlL7mqKHlvI/vvIw5IOenjeaYr+ijgeWJquaooeW8j+OAglxyXG5cdFx0XHRcdFx0XHRodHRwczovL3VuaWFwcC5kY2xvdWQuaW8vY29tcG9uZW50L2ltYWdlXHJcblx0XHRcdFx0XHRcdCAtLT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOebtOaOpeeUqCB2aWV3IOWwseihjOS6hu+8jOS4gOagt+aYr+WPr+S7peimhuebluWOn+eUn+e7hOS7tueahCAtLT5cclxuXHRcdFx0XHRcdFx0PCEtLSDov5nkuKrmmK/mmoLlgZzml7blh7rnjrDnmoTlm77moIcgLS0+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW9Ib3ZlclwiIEBjbGljaz1cInRhcFZpZGVvSG92ZXIoaXRlbS5zdGF0ZSwkZXZlbnQpXCIgOnN0eWxlPVwiYm94U3R5bGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIml0ZW0uc3RhdGU9PSdwYXVzZSdcIiBjbGFzcz1cInBsYXlTdGF0ZVwiIHNyYz1cIkAvc3RhdGljL2ltZy9pbmRleC9wbGF5LnBuZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VySW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gMS7lpLTlg48gLS0+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSBmYWxzZVwiIEBjbGljaz1cInRvenVvemhlXCIgY2xhc3M9XCJ1c2VyQXZhdGFyXCJcclxuXHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJpdGVtLmhyZWZcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAyLueCuei1niAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gZmFsc2VcIiBAY2xpY2s9XCJjTGlrZShpdGVtLmxpa2UpO1wiXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIm9wYWNpdHk6IDAuOTsgbWFyZ2luLXRvcDogMTdweDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXRlbS5saWtlXCIgc3JjPVwiQC9zdGF0aWMvaW1nL2luZGV4L3hpbi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDZweDtcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCIhaXRlbS5saWtlXCIgc3JjPVwiQC9zdGF0aWMvaW1nL2luZGV4L3hpbi0yLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogNnB4O1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImNvbG9yOiAjRkZGRkZGOyBtYXJnaW4tdG9wOiA1cHg7IGZvbnQtc2l6ZTogMTRweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiA0MHB4OyBmb250LXdlaWdodDogYm9sZDtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6Y2xhc3M9XCJ7J2xpa2VOdW1BY3RpdmUnOml0ZW0ubGlrZX1cIj57e2l0ZW0ubGlrZV9ufX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gMy7or4TorrogLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIml0ZW0uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID09IGZhbHNlXCIgY2xhc3M9XCJjb21tZW50XCIgQGNsaWNrPVwidG9Db21tZW50KGkpXCJcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwib3BhY2l0eTogMC45OyBtYXJnaW4tdG9wOiAxN3B4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIkAvc3RhdGljL2ltZy9pbmRleC9saWFvdGlhbi0yLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDM1cHg7IGhlaWdodDogMzVweDsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogN3B4O1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImNvbG9yOiAjRkZGRkZGOyBtYXJnaW4tdG9wOiA1cHg7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLXRvcDogNDBweDtcIj57e2l0ZW0uc21zX259fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA0LuWIhuS6qyAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gZmFsc2VcIiBAY2xpY2s9XCJzaGFyZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIm9wYWNpdHk6IDAuOTsgbWFyZ2luLXRvcDogMTdweDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCJAL3N0YXRpYy9pbWcvaW5kZXgvc2hhcmUtZmlsbC5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDVweDtcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgbWFyZ2luLXRvcDogNXB4OyBmb250LXNpemU6IDE0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDQwcHg7XCI+5YiG5LqrPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOacgOW6leS4i+eahOaWh+Wtl+mDqOWIhiAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1c2VyTmFtZVwiIDpzdHlsZT1cIid3aWR0aDogJysgKHdpbmRvd1dpZHRoIC0gOTApICsncHg7J1wiPnt7aXRlbS50aXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gaT17e2l9fSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIndvcmRzXCJcclxuXHRcdFx0XHRcdFx0XHRcdDpzdHlsZT1cIid3aWR0aDogJysgKHdpbmRvd1dpZHRoIC0gOTApICsncHg7J1wiPnt7aXRlbS5tc2d9fS17e2srMX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gaz17e2t9fSAtLT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIDEu6KeG6aKR6aKE6KeI5pe255qE5Zu+54mH77yMY3VycmVudHRpbWVz77ya5bCx5piv6I635Y+W5b2T5YmN5ruR5Z2X55qE5pe26Ze054K577yM5aaC5p6c5LiN6ZyA6KaB77yM5Y+v5Lul5rOo6YeK5o6JIC0tPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIDIu5aaC5p6c5L2/55So5LiL6Z2i55qE6KeG6aKR6aKE6KeI55qE6K+d6KaB5rOo5oSP55qE5piv6KeG6aKR6ZO+5o6l5pyA5aW95piv6Zi/6YeM5LqR5LiK55qE77yM5Zug5Li6XHJcblx0XHRcdFx0XHRcdFx0aHR0cHM6Ly94eHh4eHh4eHgubXA0P3gtb3NzLXByb2Nlc3M9dmlkZW8vc25hcHNob3QsdF8xMDAwLGZfanBnXHJcblx0XHRcdFx0XHRcdFx06L+Z5Liq5piv6Zi/6YeM5LqR55qE5Lic6KW/77yM6Iez5LqO5YW25LuW55qE6KeG6aKR5oiq5bin5oiR6L+Y5rKh5pyJ6K+V6L+H44CCXHJcblx0XHRcdFx0XHRcdFx0LS0+XHJcblx0XHRcdFx0XHRcdDwhLS0gMy7pmL/ph4zkupHop4bpopHmiKrluKflnLDlnYDvvJpodHRwczovL2hlbHAuYWxpeXVuLmNvbS9kb2N1bWVudF9kZXRhaWwvNjQ1NTUuaHRtbCAtLT5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLmlzU2hvd2ltYWdlID09IHRydWVcIlxyXG5cdFx0XHRcdFx0XHRcdDpzcmM9XCJpdGVtLnNyYysnP3gtb3NzLXByb2Nlc3M9dmlkZW8vc25hcHNob3QsdF8nKyBjdXJyZW50dGltZXMgKycwMDAsZl9qcGcnXCJcclxuXHRcdFx0XHRcdFx0XHRtb2RlPVwiYXNwZWN0RmlsbFwiXHJcblx0XHRcdFx0XHRcdFx0OnN0eWxlPVwiJ3dpZHRoOiAxMjB1cHg7IGhlaWdodDogMTYwdXB4OyBib3JkZXItcmFkaXVzOiAxMHVweDsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206ICcrIChQcm9ncmVzc0JhckJvdHRvbSArIDE2MCkgKyd1cHg7IGxlZnQ6ICcrIChjdXJyZW50UG9zaXRpb25zIC0gMTUpICsncHg7J1wiPlxyXG5cdFx0XHRcdFx0XHQ8L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9jZWxsPlxyXG5cdFx0XHQ8L2xpc3Q+XHJcblx0XHRcdDwhLS0gMS7ms6jmhI/vvJrov5vluqbmnaHov5nnsbvmi5bmi73nmoTkuJzopb/kuI3og73mlL7ov5tibG9ja1xcY2VsbOi/meS6m+W+queOr+S9k+S4reeahO+8jOimgeS4jeeEtnRvdWNobW92ZeaWueazleS8muaNleaNieacieivryAtLT5cclxuXHRcdFx0PHZpZXcgdi1pZj1cImRhdGFMaXN0W2tdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSB0cnVlXCJcclxuXHRcdFx0XHQ6c3R5bGU9XCIncG9zaXRpb246IGFic29sdXRlOyBib3R0b206ICcrIChQcm9ncmVzc0JhckJvdHRvbSArIDcwKSArJ3VweDsgbGVmdDogJysgKHdpbmRvd1dpZHRoKjIgLSA1MDApICsndXB4OydcIj5cclxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMThweDsgY29sb3I6ICNGMUYxRjE7XCI+e3tjaGFuZ2VUaW1lfX0gLyB7e3ZpZGVvVGltZXN9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOi/memHjOWwseaYr+i/m+W6puadoeS6hu+8mue6r+aJi+W3pei/m+W6puadoe+8jOiwg+aVtOS9jee9rueahOivneWwseaKiuS7luS7rOeahCBib3R0b20g5pS55oiQ5LiA5LiL5bCx6KGM5LqGIC0tPlxyXG5cdFx0XHQ8dmlldyB2LWlmPVwiaXNEcmFnZ2luZyA9PSBmYWxzZVwiIEB0b3VjaG1vdmU9XCJ0b3VjaG1vdmVcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZFwiIEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiXHJcblx0XHRcdFx0OnN0eWxlPVwiJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAnKyAoUHJvZ3Jlc3NCYXJCb3R0b20gLSAyMCkgKyd1cHg7IGxlZnQ6IDA7J1wiPlxyXG5cdFx0XHRcdDwhLS0gMS7ov5nkuIDmraXlv4XpobvliqDvvIzkuLrkuobpgILphY3kvY7nq6/mnLrlnosgLS0+XHJcblx0XHRcdFx0PHRleHQgOnN0eWxlPVwiJ3dpZHRoOiAnKyB3aW5kb3dXaWR0aCArJ3B4OyBvcGFjaXR5OiAwOydcIj4uPC90ZXh0PlxyXG5cdFx0XHRcdDwhLS0gMi7ov5nmmK/mnKrliqDovb3nmoTml7bnmoTlj7PovrnnmoTngbDoibLpg6jliIYgLS0+XHJcblx0XHRcdFx0PHZpZXdcclxuXHRcdFx0XHRcdDpzdHlsZT1cIid3aWR0aDogJysgd2luZG93V2lkdGggKydweDsgaGVpZ2h0OiA0dXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDN0NDOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogJysgUHJvZ3Jlc3NCYXJCb3R0b20gKyd1cHg7IG9wYWNpdHk6ICcrIFByb2dyZXNzQmFyT3BhY2l0eSArJzsnXCI+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gMy7ov5nph4zmiJHph4fnlKjnmoTliIbnprvlvI/lip7ms5XvvJrlsLHmmK/orqnmu5HliqjmoLflvI/lkozkuI3mu5HliqjnmoTmoLflvI/liIblvIDvvIzov5nmoLfnm7jkupLkuI3lubLmibDvvIzlj6/ku6Xpgb/lhY3ov5vluqbmnaHpl6rliqjnmoTpl67popggLS0+XHJcblx0XHRcdFx0PCEtLSA0LuazqOaEj++8mmlzU2hvd1Byb2dyZXNzQmFyVGltZSDliqDlhaXkuobov5Tlm57mlbDmja7kuK0gLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cImRhdGFMaXN0W2tdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSBmYWxzZVwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCInd2lkdGg6ICcrIChjdXJyZW50UG9zaXRpb24pICsncHg7IGhlaWdodDogNHVweDsgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206ICcrIFByb2dyZXNzQmFyQm90dG9tICsndXB4OyBsZWZ0OiAwOyBvcGFjaXR5OiAnKyAoUHJvZ3Jlc3NCYXJPcGFjaXR5IC0gMC4xKSArJzsnXCI+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJkYXRhTGlzdFtrXS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gdHJ1ZVwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCInd2lkdGg6ICcrIChjdXJyZW50UG9zaXRpb25zKSArJ3B4OyBoZWlnaHQ6IDh1cHg7IGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAnKyBQcm9ncmVzc0JhckJvdHRvbSArJ3VweDsgbGVmdDogMDsgb3BhY2l0eTogJysgKFByb2dyZXNzQmFyT3BhY2l0eSArIDAuMDUpICsnOydcIj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cImRhdGFMaXN0W2tdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSBmYWxzZVwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCInd2lkdGg6IDRweDsgaGVpZ2h0OiA0cHg7IGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAnKyAoUHJvZ3Jlc3NCYXJCb3R0b20gLSAyKSArJ3VweDsgbGVmdDogJysgKGN1cnJlbnRQb3NpdGlvbikgKydweDsgb3BhY2l0eTogJysgUHJvZ3Jlc3NCYXJPcGFjaXR5ICsnOydcIj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cImRhdGFMaXN0W2tdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSB0cnVlXCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cIid3aWR0aDogJysgZG90V2lkdGggKydweDsgaGVpZ2h0OiAnKyBkb3RXaWR0aCArJ3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyBib3JkZXItcmFkaXVzOiAxMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogJysgKFByb2dyZXNzQmFyQm90dG9tIC0gNSkgKyd1cHg7IGxlZnQ6ICcrIChjdXJyZW50UG9zaXRpb25zIC0gNSkgKydweDsgb3BhY2l0eTogJysgUHJvZ3Jlc3NCYXJPcGFjaXR5ICsnOydcIj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0Ly8gaW1wb3J0IHVzZXJMaXN0IGZyb20gJy4vZGF0YS5qcycvL+i/meS4quaYr+WBh+aVsOaNrlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly/kuIvpnaLmiZPwn4yf5Y+355qE5piv5b+F6aG76KaB55qE5Z+656GA5a2X5q61XHJcblx0XHRcdFx0Ly/kuIvpnaLmiZPwn5KX5Y+355qE5piv5oul5pyJ5ruR5Yqo5p2h55qE5b+F6aG75a2X5q61XHJcblx0XHRcdFx0ZGF0YUxpc3Q6IFt7IC8vMVxyXG5cdFx0XHRcdFx0XCJfaWRcIjogXCIxXCIsIC8vMS7mr4/kuIDkuKrop4bpopHni6zmnIkgaWQg77yI6Ieq5a6a5LmJ77yJXHJcblx0XHRcdFx0XHRcInVzZXJuYW1lXCI6IFwi5oSP6K+G5YiwXCIsIC8vMi7op4bpopHmi6XmnInogIXlkI3np7BcclxuXHRcdFx0XHRcdFwiaHJlZlwiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMjkwODExMGUtNmRhMi00ODk5LThiNDQtZDQ1YzE1MzQ1N2FkLzI0N2M5ZWE4LWM3MDgtNDQwYi05ZGJmLTNjM2ZhY2I3MjhlZS5wbmdcIiwgLy8zLuWktOWDj1xyXG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlwiLCAvLzQu56ys5LiA6KGM5qCH6aKYXHJcblx0XHRcdFx0XHRcIm1zZ1wiOiBcIm1vb2RcIiwgLy81LuesrOS6jOihjOWGheWuuVxyXG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBcInBhdXNlXCIsIC8vNi7liJ3lp4vnirbmgIHmoIflv5fvvIjkuI3mlLnvvIlcclxuXHRcdFx0XHRcdFwibGlrZVwiOiAwLCAvLzcu5piv5ZCm5piv6Ieq5bex5Zac5qyi77yMMOS4jeWWnOasou+8jDHllpzmrKLjgILpu5jorqTkuI3llpzmrKJcclxuXHRcdFx0XHRcdFwibGlrZV9uXCI6IDAsIC8vOC7llpzmrKLmlbDph49cclxuXHRcdFx0XHRcdFwic21zX25cIjogMCwgLy85LuivhOiuuuaVsFxyXG5cdFx0XHRcdFx0XCJzcmNcIjogXCJodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLTI5MDgxMTBlLTZkYTItNDg5OS04YjQ0LWQ0NWMxNTM0NTdhZC83MTBiMGNmNy1iZWQ5LTQ4MDUtYTJmYi0wYjcwMzQ4M2RiZWMuTU9WXCIsIC8vMTAu6KeG6aKR6ZO+5o6lXHJcblx0XHRcdFx0XHRcInBsYXlOdW1iZXJcIjogMCwgLy8xMS7mkq3mlL7op4bpopHnmoTmlbDph49cclxuXHRcdFx0XHRcdFwicGlubHVuXCI6IFtdLCAvLzEyLuivhOiuulxyXG5cdFx0XHRcdFx0XCJwbGF5SW5nXCI6IGZhbHNlLCAvLzEzLuaSreaUvu+8iOm7mOiupOi/meS4quWNs+WPr++8iVxyXG5cdFx0XHRcdFx0XCJpc1Nob3dpbWFnZVwiOiBmYWxzZSwgLy8xNC7mmK/lkKbmmL7npLrlsIHpnaLvvIjpu5jorqTov5nkuKrljbPlj6/vvIlcclxuXHRcdFx0XHRcdFwiaXNTaG93UHJvZ3Jlc3NCYXJUaW1lXCI6IGZhbHNlLCAvLzE1LuaYr+WQpuaYvuekuui/m+W6puadoe+8iOm7mOiupOi/meS4quWNs+WPr++8iVxyXG5cdFx0XHRcdFx0XCJpc3BsYXlcIjogdHJ1ZSAvLzE2LuaYr+WQpuaSreaUvumfs+mike+8iOm7mOiupOi/meS4quWNs+WPr++8iVxyXG5cdFx0XHRcdH0sIHsgLy8yXHJcblx0XHRcdFx0XHRcIl9pZFwiOiBcIjJcIixcclxuXHRcdFx0XHRcdFwidXNlcm5hbWVcIjogXCLpmL/msLTnmoTlk4hcIixcclxuXHRcdFx0XHRcdFwiaHJlZlwiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMjkwODExMGUtNmRhMi00ODk5LThiNDQtZDQ1YzE1MzQ1N2FkLzI0N2M5ZWE4LWM3MDgtNDQwYi05ZGJmLTNjM2ZhY2I3MjhlZS5wbmdcIixcclxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJcIixcclxuXHRcdFx0XHRcdFwibXNnXCI6IFwi5YOP5LiN5YOP5L2g5aaI55yL6KeB5L2g5omT5ri45oiP5pe255qE5qC35a2QXCIsXHJcblx0XHRcdFx0XHRcInN0YXRlXCI6IFwicGF1c2VcIixcclxuXHRcdFx0XHRcdFwibGlrZVwiOiAwLFxyXG5cdFx0XHRcdFx0XCJsaWtlX25cIjogMCxcclxuXHRcdFx0XHRcdFwic21zX25cIjogNCxcclxuXHRcdFx0XHRcdFwic3JjXCI6IFwiaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS0yOTA4MTEwZS02ZGEyLTQ4OTktOGI0NC1kNDVjMTUzNDU3YWQvZWMzODNmODEtNjg5Ni00Mjc0LTg4NjEtZTMyOWFlMTM3NmI0Lm1wNFwiLFxyXG5cdFx0XHRcdFx0XCJwbGF5TnVtYmVyXCI6IDAsXHJcblx0XHRcdFx0XHRcInBpbmx1blwiOiBbXSxcclxuXHRcdFx0XHRcdFwicGxheUluZ1wiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwiaXNTaG93aW1hZ2VcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzU2hvd1Byb2dyZXNzQmFyVGltZVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwiaXNwbGF5XCI6IHRydWVcclxuXHRcdFx0XHR9LCB7IC8vM1xyXG5cdFx0XHRcdFx0XCJfaWRcIjogXCI2MGVkYzIyOWYzZmY0ZjAwMDEzOGNiNzZcIixcclxuXHRcdFx0XHRcdFwidXNlcm5hbWVcIjogXCLpmL/mlq/ovr7ovr5cIixcclxuXHRcdFx0XHRcdFwiaHJlZlwiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMjkwODExMGUtNmRhMi00ODk5LThiNDQtZDQ1YzE1MzQ1N2FkLzI0N2M5ZWE4LWM3MDgtNDQwYi05ZGJmLTNjM2ZhY2I3MjhlZS5wbmdcIixcclxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJcIixcclxuXHRcdFx0XHRcdFwibXNnXCI6IFwi5pyA5ZCR5b6A55qE5Zyw5pa5Leael+S/iuadsFwiLFxyXG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBcInBhdXNlXCIsXHJcblx0XHRcdFx0XHRcImxpa2VcIjogMCxcclxuXHRcdFx0XHRcdFwibGlrZV9uXCI6IDAsXHJcblx0XHRcdFx0XHRcInNtc19uXCI6IDAsXHJcblx0XHRcdFx0XHRcInNyY1wiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMDQ1NTQ1NGQtYjM3My00NzY4LWFhMzktZGMxMjI2ZmMxMzYyLzUzNTQzMjYyLTU1ZjUtNDY4NS1hNWUzLWI1NmNlNzViY2I4OC5tcDRcIixcclxuXHRcdFx0XHRcdFwicGxheU51bWJlclwiOiAwLFxyXG5cdFx0XHRcdFx0XCJwaW5sdW5cIjogW10sXHJcblx0XHRcdFx0XHRcInBsYXlJbmdcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzU2hvd2ltYWdlXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJpc1Nob3dQcm9ncmVzc0JhclRpbWVcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzcGxheVwiOiB0cnVlXHJcblx0XHRcdFx0fSwgeyAvLzRcclxuXHRcdFx0XHRcdFwiX2lkXCI6IFwiNjBlZGMxNjU3MGY3NzQwMDAxYWExNjVhXCIsXHJcblx0XHRcdFx0XHRcInVzZXJuYW1lXCI6IFwi6Zi/5pav6aG/XCIsXHJcblx0XHRcdFx0XHRcImhyZWZcIjogXCJodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLTI5MDgxMTBlLTZkYTItNDg5OS04YjQ0LWQ0NWMxNTM0NTdhZC8yNDdjOWVhOC1jNzA4LTQ0MGItOWRiZi0zYzNmYWNiNzI4ZWUucG5nXCIsXHJcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXHJcblx0XHRcdFx0XHRcIm1zZ1wiOiBcIlJpbmcgUmluZyBSaW5nXCIsXHJcblx0XHRcdFx0XHRcInN0YXRlXCI6IFwicGF1c2VcIixcclxuXHRcdFx0XHRcdFwibGlrZVwiOiAwLFxyXG5cdFx0XHRcdFx0XCJsaWtlX25cIjogMCxcclxuXHRcdFx0XHRcdFwic21zX25cIjogMCxcclxuXHRcdFx0XHRcdFwic3JjXCI6IFwiaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS0wNDU1NDU0ZC1iMzczLTQ3NjgtYWEzOS1kYzEyMjZmYzEzNjIvYmZjODZhYjgtYmIzYi00Y2VmLWE1ZDItOGM1ZWRjZTRlZjE3Lm1wNFwiLFxyXG5cdFx0XHRcdFx0XCJwbGF5TnVtYmVyXCI6IDAsXHJcblx0XHRcdFx0XHRcInBpbmx1blwiOiBbXSxcclxuXHRcdFx0XHRcdFwicGxheUluZ1wiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwiaXNTaG93aW1hZ2VcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzU2hvd1Byb2dyZXNzQmFyVGltZVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwiaXNwbGF5XCI6IHRydWVcclxuXHRcdFx0XHR9LCB7IC8vNVxyXG5cdFx0XHRcdFx0XCJfaWRcIjogXCI2MGVkYmFjZjVlMzFmNTAwMDFhNjZmOWNcIixcclxuXHRcdFx0XHRcdFwidXNlcm5hbWVcIjogXCLlj7LokoLlpKtcIixcclxuXHRcdFx0XHRcdFwiaHJlZlwiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMjkwODExMGUtNmRhMi00ODk5LThiNDQtZDQ1YzE1MzQ1N2FkLzI0N2M5ZWE4LWM3MDgtNDQwYi05ZGJmLTNjM2ZhY2I3MjhlZS5wbmdcIixcclxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJcIixcclxuXHRcdFx0XHRcdFwibXNnXCI6IFwi5pyJ5L2V5LiN5Y+vXCIsXHJcblx0XHRcdFx0XHRcInN0YXRlXCI6IFwicGF1c2VcIixcclxuXHRcdFx0XHRcdFwibGlrZVwiOiAwLFxyXG5cdFx0XHRcdFx0XCJsaWtlX25cIjogMCxcclxuXHRcdFx0XHRcdFwic21zX25cIjogMyxcclxuXHRcdFx0XHRcdFwic3JjXCI6IFwiaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS0wNDU1NDU0ZC1iMzczLTQ3NjgtYWEzOS1kYzEyMjZmYzEzNjIvNTAxN2ExN2EtMzg5Yi00NWUwLThkOTEtNzExYzlkYzc2NzU5Lm1wNFwiLFxyXG5cdFx0XHRcdFx0XCJwbGF5TnVtYmVyXCI6IDAsXHJcblx0XHRcdFx0XHRcInBpbmx1blwiOiBbXSxcclxuXHRcdFx0XHRcdFwicGxheUluZ1wiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwiaXNTaG93aW1hZ2VcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzU2hvd1Byb2dyZXNzQmFyVGltZVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwiaXNwbGF5XCI6IHRydWVcclxuXHRcdFx0XHR9LCB7IC8vNlxyXG5cdFx0XHRcdFx0XCJfaWRcIjogXCI2MGVkOTVmYTAxMDMzNzAwMDE2ZjFhY2ZcIixcclxuXHRcdFx0XHRcdFwidXNlcm5hbWVcIjogXCLpmL/mlq/ovr5cIixcclxuXHRcdFx0XHRcdFwiaHJlZlwiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMjkwODExMGUtNmRhMi00ODk5LThiNDQtZDQ1YzE1MzQ1N2FkLzI0N2M5ZWE4LWM3MDgtNDQwYi05ZGJmLTNjM2ZhY2I3MjhlZS5wbmdcIixcclxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJcIixcclxuXHRcdFx0XHRcdFwibXNnXCI6IFwi56C06IynXCIsXHJcblx0XHRcdFx0XHRcInN0YXRlXCI6IFwicGF1c2VcIixcclxuXHRcdFx0XHRcdFwibGlrZVwiOiAwLFxyXG5cdFx0XHRcdFx0XCJsaWtlX25cIjogMCxcclxuXHRcdFx0XHRcdFwic21zX25cIjogMixcclxuXHRcdFx0XHRcdFwic3JjXCI6IFwiaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS0wNDU1NDU0ZC1iMzczLTQ3NjgtYWEzOS1kYzEyMjZmYzEzNjIvMjA5MTgwZDgtM2RmZC00MmVhLTllZjUtNWY5OGFlMGQ5NWUxLm1wNFwiLFxyXG5cdFx0XHRcdFx0XCJwbGF5TnVtYmVyXCI6IDAsXHJcblx0XHRcdFx0XHRcInBpbmx1blwiOiBbXSxcclxuXHRcdFx0XHRcdFwicGxheUluZ1wiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwiaXNTaG93aW1hZ2VcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzU2hvd1Byb2dyZXNzQmFyVGltZVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwiaXNwbGF5XCI6IHRydWVcclxuXHRcdFx0XHR9LCB7IC8vN1xyXG5cdFx0XHRcdFx0XCJfaWRcIjogXCI2MGU4ZGQzMDhhNjlkYzAwMDFmMTQzNWFcIixcclxuXHRcdFx0XHRcdFwidXNlcm5hbWVcIjogXCLlvojkuYXlvojkuYVcIixcclxuXHRcdFx0XHRcdFwiaHJlZlwiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMjkwODExMGUtNmRhMi00ODk5LThiNDQtZDQ1YzE1MzQ1N2FkLzI0N2M5ZWE4LWM3MDgtNDQwYi05ZGJmLTNjM2ZhY2I3MjhlZS5wbmdcIixcclxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJcIixcclxuXHRcdFx0XHRcdFwibXNnXCI6IFwi5ZCO5Lya5peg5pyfLeW+kOiJry3msaroi4/ms7dcIixcclxuXHRcdFx0XHRcdFwic3RhdGVcIjogXCJwYXVzZVwiLFxyXG5cdFx0XHRcdFx0XCJsaWtlXCI6IDAsXHJcblx0XHRcdFx0XHRcImxpa2VfblwiOiAwLFxyXG5cdFx0XHRcdFx0XCJzbXNfblwiOiAxLFxyXG5cdFx0XHRcdFx0XCJzcmNcIjogXCJodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLTA0NTU0NTRkLWIzNzMtNDc2OC1hYTM5LWRjMTIyNmZjMTM2Mi9jOGY3YTE3Zi02ZWI4LTQ1M2EtOWY0My05NDRlY2M3YTlmMTEubXA0XCIsXHJcblx0XHRcdFx0XHRcInBsYXlOdW1iZXJcIjogMCxcclxuXHRcdFx0XHRcdFwicGlubHVuXCI6IFtdLFxyXG5cdFx0XHRcdFx0XCJwbGF5SW5nXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJpc1Nob3dpbWFnZVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwiaXNTaG93UHJvZ3Jlc3NCYXJUaW1lXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJpc3BsYXlcIjogdHJ1ZVxyXG5cdFx0XHRcdH0sIHsgLy84XHJcblx0XHRcdFx0XHRcIl9pZFwiOiBcIjYwZTg2ZDA1Mjg4MWQzMDAwMTJlYjNlOVwiLFxyXG5cdFx0XHRcdFx0XCJ1c2VybmFtZVwiOiBcIuWTiOWTiOWTiOWTiOWTiFwiLFxyXG5cdFx0XHRcdFx0XCJocmVmXCI6IFwiaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS0yOTA4MTEwZS02ZGEyLTQ4OTktOGI0NC1kNDVjMTUzNDU3YWQvMjQ3YzllYTgtYzcwOC00NDBiLTlkYmYtM2MzZmFjYjcyOGVlLnBuZ1wiLFxyXG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlwiLFxyXG5cdFx0XHRcdFx0XCJtc2dcIjogXCLnrJHmrbvkuoblk4jlk4jlk4jlk4jlk4hcIixcclxuXHRcdFx0XHRcdFwic3RhdGVcIjogXCJwYXVzZVwiLFxyXG5cdFx0XHRcdFx0XCJsaWtlXCI6IDAsXHJcblx0XHRcdFx0XHRcImxpa2VfblwiOiAwLFxyXG5cdFx0XHRcdFx0XCJzbXNfblwiOiAwLFxyXG5cdFx0XHRcdFx0XCJzcmNcIjogXCJodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLTI5MDgxMTBlLTZkYTItNDg5OS04YjQ0LWQ0NWMxNTM0NTdhZC9mOTA1Yzc1MC1jNzBlLTQ2YjItYWFhNi0zNzc3OGQzMDhmMTMubXA0XCIsXHJcblx0XHRcdFx0XHRcInBsYXlOdW1iZXJcIjogMCxcclxuXHRcdFx0XHRcdFwicGlubHVuXCI6IFtdLFxyXG5cdFx0XHRcdFx0XCJwbGF5SW5nXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJpc1Nob3dpbWFnZVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwiaXNTaG93UHJvZ3Jlc3NCYXJUaW1lXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJpc3BsYXlcIjogdHJ1ZVxyXG5cdFx0XHRcdH0sIHsgLy85XHJcblx0XHRcdFx0XHRcIl9pZFwiOiBcIjYwZTg2YjY1OGE2OWRjMDAwMWYwMDNhZVwiLFxyXG5cdFx0XHRcdFx0XCJ1c2VybmFtZVwiOiBcIuacm8K35Y2zXCIsXHJcblx0XHRcdFx0XHRcImhyZWZcIjogXCJodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLTI5MDgxMTBlLTZkYTItNDg5OS04YjQ0LWQ0NWMxNTM0NTdhZC8yNDdjOWVhOC1jNzA4LTQ0MGItOWRiZi0zYzNmYWNiNzI4ZWUucG5nXCIsXHJcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXHJcblx0XHRcdFx0XHRcIm1zZ1wiOiBcIkp1c3RpbiBCaWJlci0gQXMgbG9uZyBhcyB5b3UgbG92ZSBtZVwiLFxyXG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBcInBhdXNlXCIsXHJcblx0XHRcdFx0XHRcImxpa2VcIjogMCxcclxuXHRcdFx0XHRcdFwibGlrZV9uXCI6IDAsXHJcblx0XHRcdFx0XHRcInNtc19uXCI6IDAsXHJcblx0XHRcdFx0XHRcInNyY1wiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMDQ1NTQ1NGQtYjM3My00NzY4LWFhMzktZGMxMjI2ZmMxMzYyLzkzOTJlODVjLTM2ZGItNDczZi04ZWMzLTRmOGVkODNhMzgyYS5tcDRcIixcclxuXHRcdFx0XHRcdFwicGxheU51bWJlclwiOiAwLFxyXG5cdFx0XHRcdFx0XCJwaW5sdW5cIjogW10sXHJcblx0XHRcdFx0XHRcInBsYXlJbmdcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzU2hvd2ltYWdlXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJpc1Nob3dQcm9ncmVzc0JhclRpbWVcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzcGxheVwiOiB0cnVlXHJcblx0XHRcdFx0fSwgeyAvLzEwXHJcblx0XHRcdFx0XHRcIl9pZFwiOiBcIjYwZTg2YTllOTA1NmNkMDAwMTEwZGE1MVwiLFxyXG5cdFx0XHRcdFx0XCJ1c2VybmFtZVwiOiBcInVzZXJcIixcclxuXHRcdFx0XHRcdFwiaHJlZlwiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMjkwODExMGUtNmRhMi00ODk5LThiNDQtZDQ1YzE1MzQ1N2FkLzI0N2M5ZWE4LWM3MDgtNDQwYi05ZGJmLTNjM2ZhY2I3MjhlZS5wbmdcIixcclxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJcIixcclxuXHRcdFx0XHRcdFwibXNnXCI6IFwi6Iu55p6cMjAxOeW5tOWPkeW4g+S8muW8gOWcuuWKqOeUu1wiLFxyXG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBcInBhdXNlXCIsXHJcblx0XHRcdFx0XHRcImxpa2VcIjogMCxcclxuXHRcdFx0XHRcdFwibGlrZV9uXCI6IDAsXHJcblx0XHRcdFx0XHRcInNtc19uXCI6IDAsXHJcblx0XHRcdFx0XHRcInNyY1wiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMDQ1NTQ1NGQtYjM3My00NzY4LWFhMzktZGMxMjI2ZmMxMzYyL2UxY2Q3ODVlLTU2YWUtNGM5Ni1hNzEzLTEyNmJmMjk1MGUxOS5tcDRcIixcclxuXHRcdFx0XHRcdFwicGxheU51bWJlclwiOiAwLFxyXG5cdFx0XHRcdFx0XCJwaW5sdW5cIjogW10sXHJcblx0XHRcdFx0XHRcInBsYXlJbmdcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzU2hvd2ltYWdlXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJpc1Nob3dQcm9ncmVzc0JhclRpbWVcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzcGxheVwiOiB0cnVlXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0Ly8xMVxyXG5cdFx0XHRcdFx0XCJfaWRcIjogXCI2MGU4NmE5ZTkwNTZjZDAwMDExMGRhNXFcIixcclxuXHRcdFx0XHRcdFwidXNlcm5hbWVcIjogXCJ1c2VyXCIsXHJcblx0XHRcdFx0XHRcImhyZWZcIjogXCJodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLTI5MDgxMTBlLTZkYTItNDg5OS04YjQ0LWQ0NWMxNTM0NTdhZC8yNDdjOWVhOC1jNzA4LTQ0MGItOWRiZi0zYzNmYWNiNzI4ZWUucG5nXCIsXHJcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXHJcblx0XHRcdFx0XHRcIm1zZ1wiOiBcIuavj+WkqeeskeS4gOeskVwiLFxyXG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBcInBhdXNlXCIsXHJcblx0XHRcdFx0XHRcImxpa2VcIjogMCxcclxuXHRcdFx0XHRcdFwibGlrZV9uXCI6IDAsXHJcblx0XHRcdFx0XHRcInNtc19uXCI6IDAsXHJcblx0XHRcdFx0XHRcInNyY1wiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMjkwODExMGUtNmRhMi00ODk5LThiNDQtZDQ1YzE1MzQ1N2FkLzk3YjUwYTZkLWY3N2QtNDQxOC1iMzhkLTg0NGUwYjllZWM5Ny5tcDRcIixcclxuXHRcdFx0XHRcdFwicGxheU51bWJlclwiOiAwLFxyXG5cdFx0XHRcdFx0XCJwaW5sdW5cIjogW10sXHJcblx0XHRcdFx0XHRcInBsYXlJbmdcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzU2hvd2ltYWdlXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJpc1Nob3dQcm9ncmVzc0JhclRpbWVcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzcGxheVwiOiB0cnVlXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0Ly8xMlxyXG5cdFx0XHRcdFx0XCJfaWRcIjogXCI2MGU4NmE5ZTkwMjZjZDAwMDExOWRhNXFcIixcclxuXHRcdFx0XHRcdFwidXNlcm5hbWVcIjogXCJ1c2VyXCIsXHJcblx0XHRcdFx0XHRcImhyZWZcIjogXCJodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLTI5MDgxMTBlLTZkYTItNDg5OS04YjQ0LWQ0NWMxNTM0NTdhZC8yNDdjOWVhOC1jNzA4LTQ0MGItOWRiZi0zYzNmYWNiNzI4ZWUucG5nXCIsXHJcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiXCIsXHJcblx0XHRcdFx0XHRcIm1zZ1wiOiBcIuiAgeWkluecn+S8mueOqVwiLFxyXG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBcInBhdXNlXCIsXHJcblx0XHRcdFx0XHRcImxpa2VcIjogMCxcclxuXHRcdFx0XHRcdFwibGlrZV9uXCI6IDAsXHJcblx0XHRcdFx0XHRcInNtc19uXCI6IDAsXHJcblx0XHRcdFx0XHRcInNyY1wiOiBcImh0dHBzOi8vdmtjZXl1Z3UuY2RuLmJzcGFwcC5jb20vVktDRVlVR1UtMjkwODExMGUtNmRhMi00ODk5LThiNDQtZDQ1YzE1MzQ1N2FkL2MwNjFiMDdhLTRiMzQtNGQ2ZC1hYTFhLTJjZjQxNjc5ZjE3Yy5tcDRcIixcclxuXHRcdFx0XHRcdFwicGxheU51bWJlclwiOiAwLFxyXG5cdFx0XHRcdFx0XCJwaW5sdW5cIjogW10sXHJcblx0XHRcdFx0XHRcInBsYXlJbmdcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzU2hvd2ltYWdlXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJpc1Nob3dQcm9ncmVzc0JhclRpbWVcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcImlzcGxheVwiOiB0cnVlXHJcblx0XHRcdFx0fSxdLCAvL+eUqOS6juaVsOaNruW+queOr+eahOWIl+ihqPCfjJ/wn5KXXHJcblx0XHRcdFx0d0hlaWdodDogMCwgLy/ojrflj5bnmoTlsY/luZXpq5jluqbwn4yf8J+Sl1xyXG5cdFx0XHRcdGJveFN0eWxlOiB7IC8v6KeG6aKR77yM5Zu+54mH5bCB6Z2i5qC35byP8J+Mn/CfkpdcclxuXHRcdFx0XHRcdCdoZWlnaHQnOiAwLFxyXG5cdFx0XHRcdFx0J3dpZHRoJzogMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGs6IDAsIC8v6buY6K6k5Li6MPCfjJ/wn5KXXHJcblx0XHRcdFx0cGxheUluZ0lkczogW10sIC8v5q2j5Zyo5pKt5pS+55qE6KeG6aKRaWTliJfpmJ/vvIzliJfpmJ/nlKjkuo7lpITnkIbmu5Hliqjov4flv6vlr7zoh7TnmoTot7PpopHpl67popjwn4yf8J+Sl1xyXG5cdFx0XHRcdHJlYWR5OiBmYWxzZSwgLy/lj6/lv73nlaVcclxuXHRcdFx0XHRpc0RyYWdnaW5nOiBmYWxzZSwgLy9mYWxzZeS7o+ihqOWBnOatoua7keWKqPCfjJ/wn5KXXHJcblx0XHRcdFx0cmVmcmVzaGluZzogdHJ1ZSwgLy/nlKjkuo7kuIvmi4nliLfmlrDwn4yf8J+Sl1xyXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiAwLCAvL+iOt+WPluWxj+W5leWuveW6pvCfjJ/wn5KXXHJcblx0XHRcdFx0ZGV4OiBbMCwgMF0sIC8v55So5LqO5Yik5pat5piv5LiK5ruR6L+Y5piv5LiL5ruR77yM56ys5LiA5Liq5a2Y5pen5YC877yM56ys5LqM5Liq5a2Y5paw5YC844CQ55uu5YmN5ZyoMS4wLjflt7Lnu4/lup/lvIPjgJFcclxuXHRcdFx0XHRjdXJyZW50czogMCwgLy/nlKjkuo7lt6blj7Pmu5HliqjvvIww5Luj6KGo6KeG6aKR55WM6Z2i77yMMeS7o+ihqOWPs+a7keeVjOmdovCfjJ/wn5KXXHJcblx0XHRcdFx0cGxhdGZvcm06ICcnLCAvL+eUqOS6juiOt+WPluaTjeS9nOezu+e7n++8mmlvc+OAgWFuZHJvaWTwn4yf8J+Sl1xyXG5cdFx0XHRcdHBsYXlJbmc6IGZhbHNlLCAvL+eUqOS6juinhumikeWIneWni+WMluaXtuaYr+WQpuaSreaUvu+8jOm7mOiupOS4jeaSreaUvvCfjJ/wn5KXXHJcblx0XHRcdFx0dmlkZW9UaW1lOiAnJywgLy/op4bpopHmgLvml7bplb/vvIzov5nkuKrkuLvopoHnlKjmnaXmiKrlj5bml7bpl7TmlbDlgLzwn5KXXHJcblx0XHRcdFx0dmlkZW9UaW1lczogJycsIC8v6KeG6aKR5pe26ZW/77yM55So6L+Z5Liq5p2l6I635Y+W5pe26Ze05YC877yM5L6L5aaC77yaMDA6MzDov5nkuKrml7bpl7TlgLzwn5KXXHJcblx0XHRcdFx0Y2hhbmdlVGltZTogJycsIC8v5pi+56S65ruR5Yqo6L+b5bqm5p2h5pe25Y+Y5YyW55qE5pe26Ze08J+Sl1xyXG5cdFx0XHRcdGlzU2hvd2ltYWdlOiBmYWxzZSwgLy/mmK/lkKbmmL7npLrlsIHpnaLjgJAxLjAuNOW3suW6n+W8g++8jOS9huaYr+aEj+aAnemcgOimgeiusOS9j+OAkVxyXG5cdFx0XHRcdGN1cnJlbnR0aW1lczogMCwgLy/lvZPliY3ml7bpl7Twn5KXXHJcblx0XHRcdFx0aXNTaG93UHJvZ3Jlc3NCYXJUaW1lOiBmYWxzZSwgLy/mmK/lkKbmi5bliqjov5vluqbmnaHvvIzlpoLmnpzmi5bliqjvvIh0cnVl77yJ5YiZ5pi+56S66L+b5bqm5p2h5pe26Ze077yM5ZCm5YiZ5LiN5pi+56S677yIZmFsc2XvvInjgJAxLjAuNOW3suW6n+W8g++8jOS9huaYr+aEj+aAnemcgOimgeiusOS9j+OAkVxyXG5cdFx0XHRcdFByb2dyZXNzQmFyT3BhY2l0eTogMC43LCAvL+i/m+W6puadoeS4jeaLluWKqOaXtueahOm7mOiupOWAvO+8jOWwseaYr+mAj+aYjueahPCfkpdcclxuXHRcdFx0XHRkb3RXaWR0aDogMCwgLy/mkq3mlL7nmoTlsI/lnIbngrnvvIzpu5jorqTmsqHmnInwn5KXXHJcblx0XHRcdFx0ZGVsZXRlSGVpZ2h0OiAwLCAvL+a1i+ivlemrmOW6pvCfjJ/wn5KXXHJcblx0XHRcdFx0cGVyY2VudDogMCwgLy/nmb7liIblsI/mlbDwn5KXXHJcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uOiAwLCAvL+a7keWdl+W9k+WJjeS9jee9rvCfkpcvLzIuMOW3suW8g+eUqO+8jOeOsOW3sueUqOS6juWQjuerr+WPguaVsFxyXG5cdFx0XHRcdGN1cnJlbnRQb3NpdGlvbnM6IDAsIC8v5ruR5Z2X5b2T5YmN5L2N572u55qE5Ymv5pys8J+Sly8vMi4w5bey5byD55So77yM546w5bey55So5LqO5ZCO56uv5Y+C5pWwXHJcblx0XHRcdFx0bmV3VGltZTogMCwgLy/ot5/miYvmu5HliqjlkI7nmoTmnIDmlrDml7bpl7Twn5KXXHJcblx0XHRcdFx0dGltZU51bWJlcjogMCwgLy/wn4yf8J+Sl1xyXG5cdFx0XHRcdFByb2dyZXNzQmFyQm90dG9tOiAyMCwgLy/ov5vluqbmnaHnprvlupXpg6jnmoTot53nprvwn5KXXHJcblx0XHRcdFx0b2JqZWN0X2ZpdDogJ2NvbnRhaW4nLCAvL+inhumikeagt+W8j+m7mOiupOWMheWQq/CfjJ/wn5KXXHJcblx0XHRcdFx0bW9kZTogJ2FzcGVjdEZpdCcsIC8v5Zu+54mH5bCB6Z2i5qC35byP8J+Mn/CfkpdcclxuXHRcdFx0XHR0aW1lb3V0OiBcIlwiLCAvL/CfjJ/nlKjmnaXpmLvmraIgc2V0VGltZW91dCgp5pa55rOVXHJcblx0XHRcdFx0dm9pY2U6IFwiXCIsIC8v8J+Mn+eUqOadpemYu+atoiBzZXRUaW1lb3V0KCnmlrnms5VcclxuXHRcdFx0XHRvbGRWaWRlbzogXCJcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0ayhrLCBvbGRfaykgeyAvL+ebkeWQrCBrIOWAvOeahOWPmOWMlu+8jOWPr+S7peaOp+WItuinhumikeeahOaSreaUvuS4juaaguWBnFxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGspXHJcblx0XHRcdFx0dGhpcy5kYXRhTGlzdFtvbGRfa10uc3RhdGUgPSAnc3RvcCcgLy/lpoLmnpzmmK/ooqvmu5HotbDnmoTop4bpopHvvIzlsLHlgZzmraLmkq3mlL5cclxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W29sZF9rXS5wbGF5SW5nID0gZmFsc2UgLy/lpoLmnpzop4bpopHmmoLlgZzvvIzlsLHliqDovb3lsIHpnaJcclxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W29sZF9rXS5pc3BsYXkgPSB0cnVlXHJcblx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W29sZF9rXS5faWQsIHRoaXMpLnBsYXkoKVxyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLm9sZFZpZGVvKVxyXG5cdFx0XHRcdHRoaXMub2xkVmlkZW8gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtvbGRfa10uX2lkLCB0aGlzKS5zZWVrKDApXHJcblx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3Rbb2xkX2tdLl9pZCwgdGhpcykucGF1c2UoKVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+mihOeVmeesrCcgKyAob2xkX2sgKyAxKSArICfkuKrop4bpopHvvJonICsgdGhpcy5kYXRhTGlzdFtvbGRfa10uX2lkKVxyXG5cdFx0XHRcdH0sIDUwMClcclxuXHRcdFx0XHQvLyAyLjDniYjmnKzlt7Lnu4/ljrvmjonkuobkuIvpnaLov5nkuIDlj6XvvIzop4bpopHkuI3nlKjmmoLlgZzvvIzlj6rpnIDopoHmiorlo7Dpn7PnpoHmraLlsLHooYxcclxuXHRcdFx0XHQvLyB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3Rbb2xkX2tdLl9pZCArICcnICsgb2xkX2ssdGhpcykuc3RvcCgpLy/lpoLmnpzop4bpopHmmoLlgZzvvIzpgqPkuYjml6fop4bpopHlgZzmraLvvIzov5nph4znmoR0aGlzLmRhdGFMaXN0W29sZF9rXS5faWQgKyAnJyArIG9sZF9r77yM5ZCO6Z2i5YqgIG9sZF9rIOaYr+S4uuS6huavj+S4gOS4quinhumikeeahCBpZCDlgLzkuI3lkIzvvIzov5nmoLflsLHlj6/ku6XlpKfnqIvluqbnmoTpgb/lhY3kuLLpn7Ppl67pophcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn5bey57uP5pqC5YGcIC0tPiDnrKwnICsgKG9sZF9rICsgMSkgKyAn5Liq6KeG6aKR772eJykgLy/mj5DnpLpcclxuXHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3Rba10uX2lkLCB0aGlzKS5wbGF5KClcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy52b2ljZSlcclxuXHRcdFx0XHR0aGlzLnZvaWNlID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0W2tdLmlzcGxheSA9IGZhbHNlXHJcblx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhTGlzdFtrXS5wbGF5SW5nID0gdHJ1ZVxyXG5cdFx0XHRcdH0sIDg1MClcclxuXHRcdFx0XHQvL+OAkDIuMOeJiOacrOabtOaWsOWGheWuueOAkS0gc3RhcnRcclxuXHRcdFx0XHR2YXIgcCA9IGtcclxuXHRcdFx0XHRcdCsrcFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3BdLl9pZCwgdGhpcykucGxheSgpXHJcblx0XHRcdFx0fSwgMjApXHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcclxuXHRcdFx0XHR0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtwXS5faWQsIHRoaXMpLnNlZWsoMClcclxuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtwXS5faWQsIHRoaXMpLnBhdXNlKClcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfpooTliqDovb3nrKwnICsgKHAgKyAxKSArICfkuKrop4bpopHvvJonICsgdGhpcy5kYXRhTGlzdFtwXS5faWQpXHJcblx0XHRcdFx0fSwgMTUwMClcclxuXHRcdFx0XHQvL+OAkDIuMOeJiOacrOabtOaWsOWGheWuueOAkS0gZW5kXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyBvblNob3coKXtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coJ+WbnuWIsOWJjeWPsCcpO1xyXG5cdFx0Ly8gXHR0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPSAncGxheSc7XHJcblx0XHQvLyBcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFt0aGlzLmtdLl9pZCx0aGlzKS5wbGF5KClcclxuXHRcdC8vIH0sXHJcblx0XHRvbkhpZGUoKSB7XHJcblx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9ICdwYXVzZSc7IC8v55WM6Z2i6ZqQ6JeP5Lmf6KaB5YGc5q2i5pKt5pS+6KeG6aKRXHJcblx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFt0aGlzLmtdLl9pZCwgdGhpcykucGF1c2UoKTsgLy/mmoLlgZzku6XlkI7nu6fnu63mkq3mlL5cclxuXHRcdFx0Y29uc29sZS5sb2coJ+WIsOWQjuWPsCcpO1xyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IChlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXRmb3JtID0gZS5wbGF0Zm9ybSAvL+iOt+WPluaTjeS9nOezu+e7n1xyXG5cdFx0XHRcdFx0aWYgKGUubW9kZWwgPT0gJ2lQaG9uZTEyJyB8fCBlLm1vZGVsID09ICdpUGhvbmUxMScgfHwgZS5tb2RlbCA9PSAnaVBob25lWCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kZWxldGVIZWlnaHQgPSAzMiAvL+i/memHjOeahOaVsOWAvOWPquaYr+WBmuaooeaLn++8jOWPr+iHquihjOabtOaUuVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0dGhpcy53aW5kb3dXaWR0aCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbldpZHRoIC8v6I635Y+W5bGP5bmV5a695bqmXHJcblx0XHRcdHRoaXMuYm94U3R5bGUud2lkdGggPSB0aGlzLndpbmRvd1dpZHRoICsgJ3B4JyAvL+e7meWuveW6puWKoHB4XHJcblx0XHRcdHRoaXMud0hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbkhlaWdodDsgLy/ojrflj5blsY/luZXpq5jluqZcclxuXHRcdFx0dGhpcy5ib3hTdHlsZS5oZWlnaHQgPSB0aGlzLndIZWlnaHQgLSB0aGlzLmRlbGV0ZUhlaWdodDsgLy/lj6/ku6Xoh6rooYzmm7TmlLnop4bpopHpq5jluqbvvIzmg7Pop4bpopHkuI3pgqPkuYjpq5jvvIzlsLHmioow5pS55aSn5LiA54K5XHJcblx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnVzZXJuYW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VybmFtZScpXHJcblx0XHRcdHRoaXMuZ2V0KCkgLy/ov5nkuIDmraXvvIzliqDovb3op4bpopHmlbDmja5cclxuXHRcdH0sXHJcblx0XHRvblJlYWR5KCkge30sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHRvVHdvVmlkZW8oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnLi4vbmV3X2luZGV4L25ld19pbmRleCdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b2xpc3RWaWRlbygpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuLi9udnVlU3dpcGVyL252dWVTd2lwZXInXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0RGF0YSgpIHtcclxuXHRcdFx0XHQvLyB2YXIgbXNnID0gdXNlckxpc3RcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YUxpc3QucHVzaCh0aGlzLmRhdGFsaXN0W2ldKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hzdGFydChldmVudCkge1xyXG5cdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5pc1Nob3dpbWFnZSA9IHRydWUgLy/liJrop6bmkbjnmoTml7blgJnlsLHopoHmmL7npLrpooTop4jop4bpopHlm77niYfkuoZcclxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID0gdHJ1ZSAvL+aYvuekuuaXtumXtOe6v1xyXG5cdFx0XHRcdHRoaXMuUHJvZ3Jlc3NCYXJPcGFjaXR5ID0gMSAvL+iuqea7keWdl+aYvuekuui1t+adpeabtOaYjuaYvuS4gOeCuVxyXG5cdFx0XHRcdHRoaXMuZG90V2lkdGggPSAxMCAvL+iuqeeCueaYvuekuui1t+adpeabtOaYjuaYvuS4gOeCuVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaGVuZCgpIHsgLy/lvZPmiYvmnb7lvIDlkI7vvIzot7PliLDmnIDmlrDml7bpl7RcclxuXHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5faWQsIHRoaXMpLnNlZWsodGhpcy5uZXdUaW1lKVxyXG5cdFx0XHRcdGlmICh0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPT0gJ3BhdXNlJykge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLnN0YXRlID0gJ3BsYXknXHJcblx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5faWQsIHRoaXMpLnBsYXkoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID0gZmFsc2UgLy/op6bmkbjnu5PmnZ/lkI7vvIzpmpDol4/ml7bpl7Tnur9cclxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNTaG93aW1hZ2UgPSBmYWxzZSAvL+inpuaRuOe7k+adn+WQju+8jOmakOiXj+aXtumXtOmihOiniFxyXG5cdFx0XHRcdHRoaXMuUHJvZ3Jlc3NCYXJPcGFjaXR5ID0gMC41IC8v6ZqQ6JeP6LW35p2l6L+b5bqm5p2h77yM5LiN6YKj5LmI5piO5pi+5LqGXHJcblx0XHRcdFx0dGhpcy5kb3RXaWR0aCA9IDAgLy/pmpDol4/otbfmnaXov5vluqbmnaHvvIzkuI3pgqPkuYjmmI7mmL7kuoZcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2htb3ZlKGV2ZW50KSB7IC8v5b2T5omL56e75Yqo5ruR5Z2X5pe277yM6K6h566X5L2N572u44CB55m+5YiG5bCP5pWw44CB5paw55qE5pe26Ze0XHJcblx0XHRcdFx0dmFyIG1zZyA9IFtdXHJcblx0XHRcdFx0aWYgKHRoaXMudmlkZW9UaW1lICE9PSAnJykge1xyXG5cdFx0XHRcdFx0bXNnID0gdGhpcy52aWRlb1RpbWUuc3BsaXQoJzonKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgdGltZU51bWJlciA9IE51bWJlcihtc2dbMF0pICogNjAgKyBOdW1iZXIobXNnWzFdKVxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFBvc2l0aW9ucyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblhcclxuXHRcdFx0XHR0aGlzLnBlcmNlbnQgPSB0aGlzLmN1cnJlbnRQb3NpdGlvbnMgLyB0aGlzLndpbmRvd1dpZHRoXHJcblx0XHRcdFx0dGhpcy5uZXdUaW1lID0gdGhpcy5wZXJjZW50ICogdGltZU51bWJlclxyXG5cdFx0XHRcdHRoaXMuY3VycmVudHRpbWVzID0gcGFyc2VJbnQodGhpcy5uZXdUaW1lKVxyXG5cdFx0XHRcdGxldCB0aGVUaW1lID0gdGhpcy5uZXdUaW1lXHJcblx0XHRcdFx0bGV0IG1pZGRsZSA9IDA7IC8vIOWIhlxyXG5cdFx0XHRcdGlmICh0aGVUaW1lID4gNjApIHtcclxuXHRcdFx0XHRcdG1pZGRsZSA9IHBhcnNlSW50KHRoZVRpbWUgLyA2MCk7XHJcblx0XHRcdFx0XHR0aGVUaW1lID0gcGFyc2VJbnQodGhlVGltZSAlIDYwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5jaGFuZ2VUaW1lID1cclxuXHRcdFx0XHRcdGAke01hdGgucm91bmQobWlkZGxlKT45P01hdGgucm91bmQobWlkZGxlKTonMCcrTWF0aC5yb3VuZChtaWRkbGUpfToke01hdGgucm91bmQodGhlVGltZSk+OT9NYXRoLnJvdW5kKHRoZVRpbWUpOicwJytNYXRoLnJvdW5kKHRoZVRpbWUpfWBcclxuXHRcdFx0fSxcclxuXHRcdFx0dGltZXVwZGF0ZShldmVudCwgaW5kZXgpIHsgLy/orqHnrpfmu5HlnZflvZPliY3kvY3nva7vvIzorqHnrpflvZPliY3nmb7liIblsI/mlbBcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpbmRleClcclxuXHRcdFx0XHRpZiAoaW5kZXggPT0gdGhpcy5rKSB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhldmVudClcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50dGltZSA9IGV2ZW50LmRldGFpbC5jdXJyZW50VGltZVxyXG5cdFx0XHRcdFx0dGhpcy50aW1lTnVtYmVyID0gTWF0aC5yb3VuZChldmVudC5kZXRhaWwuZHVyYXRpb24pXHJcblx0XHRcdFx0XHR0aGlzLmdldFRpbWUoKVxyXG5cdFx0XHRcdFx0dGhpcy5wZXJjZW50ID0gY3VycmVudHRpbWUgLyB0aGlzLnRpbWVOdW1iZXJcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudFBvc2l0aW9uID0gdGhpcy53aW5kb3dXaWR0aCAqIHRoaXMucGVyY2VudFxyXG5cdFx0XHRcdFx0bGV0IHRoZVRpbWUgPSBjdXJyZW50dGltZVxyXG5cdFx0XHRcdFx0bGV0IG1pZGRsZSA9IDA7IC8vIOWIhlxyXG5cdFx0XHRcdFx0aWYgKHRoZVRpbWUgPiA2MCkge1xyXG5cdFx0XHRcdFx0XHRtaWRkbGUgPSBwYXJzZUludCh0aGVUaW1lIC8gNjApO1xyXG5cdFx0XHRcdFx0XHR0aGVUaW1lID0gcGFyc2VJbnQodGhlVGltZSAlIDYwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuY2hhbmdlVGltZSA9XHJcblx0XHRcdFx0XHRcdGAke01hdGgucm91bmQobWlkZGxlKT45P01hdGgucm91bmQobWlkZGxlKTonMCcrTWF0aC5yb3VuZChtaWRkbGUpfToke01hdGgucm91bmQodGhlVGltZSk+OT9NYXRoLnJvdW5kKHRoZVRpbWUpOicwJytNYXRoLnJvdW5kKHRoZVRpbWUpfWBcclxuXHRcdFx0XHRcdC8v6Ieq5Yqo5YiH5o2i6KeG6aKRXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudHRpbWUgPT0gdGhpcy50aW1lTnVtYmVyIC0gMSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkb20gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZG9tJylcclxuXHRcdFx0XHRcdFx0bGV0IGRvbXMgPSAnaXRlbScgKyAodGhpcy5rICsgMSlcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGVsID0gdGhpcy4kcmVmc1tkb21zXVswXVxyXG5cdFx0XHRcdFx0XHRcdGRvbS5zY3JvbGxUb0VsZW1lbnQoZWwsIHtcclxuXHRcdFx0XHRcdFx0XHRcdG9mZnNldDogMCxcclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVkOiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSwgNTAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0VGltZSgpIHsgLy/lvpfliLDml7bpl7Tlh73mlbBcclxuXHRcdFx0XHR0aGlzLnZpZGVvVGltZSA9IHRoaXMuZm9ybWF0U2Vjb25kcyh0aGlzLnRpbWVOdW1iZXIpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQudmlkZW9UaW1lKVxyXG5cdFx0XHRcdHZhciBtc2cgPSBbXVxyXG5cdFx0XHRcdGlmICh0aGlzLnZpZGVvVGltZSAhPT0gJycpIHtcclxuXHRcdFx0XHRcdG1zZyA9IHRoaXMudmlkZW9UaW1lLnNwbGl0KCc6JylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52aWRlb1RpbWVzID0gYCR7bXNnWzBdPjk/bXNnWzBdOicwJyttc2dbMF19OiR7bXNnWzFdPjk/bXNnWzFdOicwJyttc2dbMV19YDtcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybWF0U2Vjb25kcyh2YWx1ZSkgeyAvL+iOt+WPluaXtumXtOWHveaVsFxyXG5cdFx0XHRcdGxldCB0aGVUaW1lID0gcGFyc2VJbnQodmFsdWUpOyAvLyDnp5JcclxuXHRcdFx0XHRsZXQgbWlkZGxlID0gMDsgLy8g5YiGXHJcblx0XHRcdFx0aWYgKHRoZVRpbWUgPiA2MCkge1xyXG5cdFx0XHRcdFx0bWlkZGxlID0gcGFyc2VJbnQodGhlVGltZSAvIDYwKTtcclxuXHRcdFx0XHRcdHRoZVRpbWUgPSBwYXJzZUludCh0aGVUaW1lICUgNjApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gYCR7bWlkZGxlPjk/bWlkZGxlOm1pZGRsZX06JHt0aGVUaW1lPjk/dGhlVGltZTp0aGVUaW1lfWA7XHJcblx0XHRcdH0sXHJcblx0XHRcdHBsYXlJbmdzKGluZGV4KSB7XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0fSxcclxuXHRcdFx0bW9yZVZpZGVvKGluZGV4KSB7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b1ZpZGVvKGluZGV4KSB7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcndlaW1hKCkge1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0dG96dW96aGUoKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50cyA9IDEgLy/ngrnlh7vlpLTlg4/ku6XlkI7lsLHkvJrliIfmjaJcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RvcCgpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnc3RvcCcpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNjcm9sbHMoZXZlbnQpIHtcclxuXHRcdFx0XHR0aGlzLmlzRHJhZ2dpbmcgPSBldmVudC5pc0RyYWdnaW5nXHJcblx0XHRcdFx0aWYgKCFldmVudC5pc0RyYWdnaW5nKSB7IC8vaXNEcmFnZ2luZ++8muWIpOaWreeUqOaIt+aYr+S4jeaYr+WcqOa7keWKqO+8jOa7keWKqO+8mnRydWXvvIzlgZzmraLmu5HliqjvvJpmYWxzZeOAguaIkeS7rOimgeeUqOaIt+WBnOatoua7keWKqOaXtuaJjee7mSBrIOi1i+WAvO+8jOi/meagt+WwseWPr+S7pemBv+WFjeW+iOWkmum6u+eDplxyXG5cdFx0XHRcdFx0dmFyIGkgPSBNYXRoLnJvdW5kKE1hdGguYWJzKGV2ZW50LmNvbnRlbnRPZmZzZXQueSkgLyAodGhpcy53SGVpZ2h0IC0gdGhpcy5kZWxldGVIZWlnaHQgK1xyXG5cdFx0XHRcdFx0XHQxKSkgLy/lhYjnlKjnu53lr7nlgLzlj5blh7rmu5HliqjnmoTot53nprvvvIznhLblkI7pmaTku6XlsY/luZXpq5jluqbvvIzlj5bkuIDkuKrmlbTvvIzlsLHnn6XpgZPkvaDnjrDlnKjmu5HliqjliLDlk6rkuIDkuKrop4bpopHkuoZcclxuXHRcdFx0XHRcdGlmIChpICE9PSB0aGlzLmspIHsgLy/ov5nph4zliqDliKTmlq3mmK/lm6DkuLrov5nkuKrmlrnms5XkvJrmiafooYzlvojlpJrmrKHvvIzkvJrpgKDmiJDph43lpI3or7fmsYLvvIzmiYDku6Xov5nph4zlhpnkuIDkuKrpmZDliLZcclxuXHRcdFx0XHRcdFx0dGhpcy5rID0gaSAvL+WIpOaWreS6hueUqOaIt+ayoeaciea7keWKqO+8jOehruiupOS6hueUqOaIt+eahOehruaYr+WcqOeci+i/meS4quinhumike+8jOeEtuWQjuWwsei1i+WAvOWVplxyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPSAncGxheSdcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+ato+WcqOaSreaUviAtLT4g56ysJyArICh0aGlzLmsgKyAxKSArICfkuKrop4bpopHvvZ4nKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0KCkge1xyXG5cdFx0XHRcdC8vIOi/meS4quaWueazleS4u+imgeWwseaYr+eUqOadpeesrOS4gOasoei/m+WFpeinhumikeaSreaUvuaXtueUqOadpeWkhOeQhueahFxyXG5cdFx0XHRcdHRoaXMuZGF0YUxpc3QgPSB1c2VyTGlzdDsgLy/ov5nkuKrlsLHmmK/otYvlgLzliqDovb3op4bpopHllaZcclxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0WzBdLnN0YXRlID0gXCJwbGF5XCI7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHQvL+i/memHjOeahOW7tui/n+aYr+S4uuS6humBv+WFjeaJp+ihjOaXtumXtOWkquW/q+iAjOebtOaOpei3s+i/h+aJp+ihjOeahCBidWdcclxuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFswXS5faWQsIHRoaXMpLnNlZWsoMClcclxuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFswXS5faWQsIHRoaXMpLnBsYXkoKVxyXG5cdFx0XHRcdH0sIDIwMClcclxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNwbGF5ID0gZmFsc2VcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5wbGF5SW5nID0gdHJ1ZVxyXG5cdFx0XHRcdH0sIDUwMClcclxuXHRcdFx0XHR2YXIgcCA9IDBcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdCsrcFxyXG5cdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3BdLl9pZCwgdGhpcykucGxheSgpXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3BdLl9pZCwgdGhpcykuc2VlaygwKVxyXG5cdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbcF0uX2lkLCB0aGlzKS5wYXVzZSgpXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfpooTliqDovb3nrKwnICsgKHAgKyAxKSArICfkuKrop4bpopHvvJonICsgdGhpcy5kYXRhTGlzdFtwXS5faWQpXHJcblx0XHRcdFx0XHR9LCAyMDAwKVxyXG5cdFx0XHRcdH0sIDUwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbnB1bGxpbmdkb3duKCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfmraPlnKjkuIvmi4nliLfmlrDvvIzmraTml7bmiYvov5jlnKjop6bmkbjmsqHmnInmnb7lvIAnKVxyXG5cdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0b25yZWZyZXNoKCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfkuIvmi4nliLfmlrDlrozmr5XvvIzmraTml7bmiYvmnb7lvIDkuoYnKVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoaW5nID0gZmFsc2VcclxuXHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+eCueWHu+aSreaUviYm5pqC5YGcXHJcblx0XHRcdHRhcFZpZGVvSG92ZXIoc3RhdGUsIGV2ZW50KSB7XHJcblx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLmlzU2hvd2ltYWdlID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLlByb2dyZXNzQmFyT3BhY2l0eSA9IDAuNVxyXG5cdFx0XHRcdHRoaXMuZG90V2lkdGggPSAwXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3N0YXRlLS0nLCBzdGF0ZSk7XHJcblx0XHRcdFx0aWYgKHN0YXRlID09ICdwbGF5JyB8fCBzdGF0ZSA9PSAnY29udGludWUnKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPSAncGF1c2UnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPSAnY29udGludWUnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5kYXRhTGlzdFt0aGlzLmtdLnN0YXRlID09ICdjb250aW51ZScpIHtcclxuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFt0aGlzLmtdLl9pZCwgdGhpcykucGxheSgpOyAvL+aaguWBnOS7peWQjue7p+e7reaSreaUvlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5kYXRhTGlzdFt0aGlzLmtdLnN0YXRlID09ICdwYXVzZScpIHtcclxuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFt0aGlzLmtdLl9pZCwgdGhpcykucGF1c2UoKTsgLy/mmoLlgZzku6XlkI7nu6fnu63mkq3mlL5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvQ29tbWVudCgpIHtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdHNoYXJlKCkge1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Y0xpa2Uoc3NzKSB7XHJcblx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLmxpa2UgPSAhdGhpcy5kYXRhTGlzdFt0aGlzLmtdLmxpa2VcclxuXHRcdFx0XHRjb25zdCB2aWRlbyA9IHRoaXMuZGF0YUxpc3RbdGhpcy5rXTtcclxuXHRcdFx0XHRzc3MgPyB2aWRlby5saWtlX24gLT0gMSA6IHZpZGVvLmxpa2VfbiArPSAxO1xyXG5cdFx0XHRcdC8qXHJcblx0XHRcdFx06L+Z6YeM5oiR5LuL57uN5LiA56eN5oiR5Zyo55yf5a6e5pWw5o2u55qE5bi455So5Yqe5rOV77yaXHJcblx0XHRcdFx0anPph4zpnaLmnInkuIDkuKrmlrnms5Xlj6vlgZogaW5kZXhPZigpIOi/meS4quaWueazleW+iOacieeUqO+8jOWFjeWOu+S6huWGmSBmb3Ig5b6q546vXHJcblx0XHRcdFx0XHTvvIjov5nph4zmj5LkuIDlj6XvvJpmb3Ig5b6q546v55qE5pWI546H6KaB5q+U5YW25LuW55qEIOS+i+Wmgu+8mmZvckVhY2jjgIFtYXAg5pWI546H6KaB6auY77yJXHJcblx0XHRcdFx055yf5a6e5pWw5o2u5LiA6Iis5piv6L+U5Zue5LiA5Liq6KeG6aKR55qE5aSn5pWw57uE77yM54S25ZCO6KeG6aKR6YeM55qE5Y+C5pWw5pyJ5LiA5Liq5Y+C5pWw5bCx5pivIGxpa2Ug5Y+C5pWw77yMXHJcblx0XHRcdFx05oqKIGxpa2Ug5Y+C5pWw6K6+572u5oiQ5pWw57uE77yM54S25ZCO54K56LWe5bCx5oqK5ZCN5a2X5re75Yqg6L+b5Y6744CC5Lmf5bCx5piv5Zyo5ZCO56uv5a2Y5YKo5LiL5p2l55qE5pWw5o2u77yMXHJcblx0XHRcdFx05a6e6ZmF5LiK5piv5LiA5Liq5pWw57uE44CC5b2T5riy5p+T5Yiw5YmN56uv6aG16Z2i5pe277yM5oiR5Lus5bCx5oqK5q+P5LiA5Liq6KeG6aKR5pWw5o2u5ou/6L+H5p2l77yM5YGa5LiA5Liq5Yik5patXHJcblx0XHRcdFx05aaC5p6c77yMbGlrZeaVsOe7hOmHjOacieiHquW3se+8jOmCo+S5iOWwseaKimxpa2XlgLzorr7nva7kuLogMSDvvIzooajnpLroh6rlt7Hlt7Lnu4/ngrnotZ7vvIzlpoLmnpzmsqHmnIlcclxuXHRcdFx0XHToh6rlt7HlsLHorr7nva7kuLogMCBcclxuXHRcdFx0XHQqL1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblxyXG5cdC5pdGVtIHtcclxuXHRcdC8qIHdpZHRoIDogNzUwcnB4OyAqL1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC52aWRlb0hvdmVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdC8qIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjREQ1MjREO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcHg7ICovXHJcblx0fVxyXG5cclxuXHQucGxheVN0YXRlIHtcclxuXHRcdHdpZHRoOiAxNjBycHg7XHJcblx0XHRoZWlnaHQ6IDE2MHJweDtcclxuXHRcdG9wYWNpdHk6IDAuMjtcclxuXHR9XHJcblxyXG5cdC51c2VySW5mbyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDExMHB4O1xyXG5cdFx0cmlnaHQ6IDEwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuXHR9XHJcblxyXG5cdC51c2VyQXZhdGFyIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwMCU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogMnB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LnVzZXJBdmF0YXIge1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdH1cclxuXHJcblx0Lmxpa2VJY28sXHJcblx0LnNoYXJlSWNvLFxyXG5cdC5jb21tZW50SWNvIHtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdH1cclxuXHJcblx0Lmxpa2VOdW0sXHJcblx0LmNvbW1lbnROdW0sXHJcblx0LnNoYXJlVGV4IHtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbjogNXB4O1xyXG5cdH1cclxuXHJcblx0Lmxpa2VOdW1BY3RpdmUge1xyXG5cdFx0Y29sb3I6IHJlZDtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50IHtcclxuXHRcdHdpZHRoOiA3MjBycHg7XHJcblx0XHR6LWluZGV4OiA5OTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMzBweDtcclxuXHRcdC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG5cdFx0cGFkZGluZzogMTVycHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQudXNlck5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0bWFyZ2luLXRvcDogODB1cHg7XHJcblx0fVxyXG5cclxuXHQud29yZHMge1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQucm9vdCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 11 */
/*!************************************************************************************************************************!*\
  !*** D:/code/githubcode/411shortvideo/pages/tabbar/tabbar-1/tabbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../compiler/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tabbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12);
/* harmony import */ var _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_compiler_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_compiler_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_1_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/githubcode/411shortvideo/pages/tabbar/tabbar-1/tabbar-1.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#000000"
  },
  "item": {
    "backgroundColor": "#000000",
    "position": "relative"
  },
  "videoHover": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "flex": 1,
    "backgroundColor": "rgba(0,0,0,0.1)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "playState": {
    "width": "160rpx",
    "height": "160rpx",
    "opacity": 0.2
  },
  "userInfo": {
    "position": "absolute",
    "bottom": "110",
    "right": "10",
    "flexDirection": "column"
  },
  "userAvatar": {
    "borderRadius": 500,
    "marginBottom": "15",
    "borderStyle": "solid",
    "borderWidth": "2",
    "borderColor": "#ffffff",
    "width": "100rpx",
    "height": "100rpx"
  },
  "likeIco": {
    "width": "60rpx",
    "height": "60rpx",
    "marginTop": "15"
  },
  "shareIco": {
    "width": "60rpx",
    "height": "60rpx",
    "marginTop": "15"
  },
  "commentIco": {
    "width": "60rpx",
    "height": "60rpx",
    "marginTop": "15"
  },
  "likeNum": {
    "color": "#ffffff",
    "fontSize": "30rpx",
    "textAlign": "center",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "commentNum": {
    "color": "#ffffff",
    "fontSize": "30rpx",
    "textAlign": "center",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "shareTex": {
    "color": "#ffffff",
    "fontSize": "30rpx",
    "textAlign": "center",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "likeNumActive": {
    "color": "#FF0000"
  },
  "content": {
    "width": "720rpx",
    "zIndex": 99,
    "position": "absolute",
    "bottom": "30",
    "paddingTop": "15rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "15rpx",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "color": "#ffffff"
  },
  "userName": {
    "fontSize": "30rpx",
    "color": "#ffffff",
    "marginTop": "80upx"
  },
  "words": {
    "marginTop": "10rpx",
    "fontSize": "30rpx",
    "color": "#ffffff"
  },
  "root": {
    "backgroundColor": "#000000"
  },
  "@VERSION": 2
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);