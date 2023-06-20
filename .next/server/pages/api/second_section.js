"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/second_section";
exports.ids = ["pages/api/second_section"];
exports.modules = {

/***/ "(api)/./pages/api/second_section.ts":
/*!*************************************!*\
  !*** ./pages/api/second_section.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var services_secondSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/secondSection */ \"(api)/./services/secondSection.ts\");\n\nfunction handler(req, res) {\n  res.status(200).json({\n    data: (0,services_secondSection__WEBPACK_IMPORTED_MODULE_0__.fetchSecondSectionData)()\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2Vjb25kX3NlY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQVNlLFNBQVNDLE9BQVQsQ0FDYkMsR0FEYSxFQUViQyxHQUZhLEVBR2I7RUFDQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7SUFDbkJDLElBQUksRUFBRU4sOEVBQXNCO0VBRFQsQ0FBckI7QUFHRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcmtwbHVtYmVyLy4vcGFnZXMvYXBpL3NlY29uZF9zZWN0aW9uLnRzPzBjNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IHsgZmV0Y2hTZWNvbmRTZWN0aW9uRGF0YSB9IGZyb20gXCJzZXJ2aWNlcy9zZWNvbmRTZWN0aW9uXCI7XG5cbmltcG9ydCB7IFNlY29uZFNlY3Rpb24gfSBmcm9tIFwidHlwZXNcIjtcblxuXG50eXBlIERhdGEgPSB7XG4gIGRhdGE6IFNlY29uZFNlY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBkYXRhOiBmZXRjaFNlY29uZFNlY3Rpb25EYXRhKCksXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZldGNoU2Vjb25kU2VjdGlvbkRhdGEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/second_section.ts\n");

/***/ }),

/***/ "(api)/./services/secondSection.ts":
/*!***********************************!*\
  !*** ./services/secondSection.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchSecondSectionData\": () => (/* binding */ fetchSecondSectionData)\n/* harmony export */ });\n/* harmony import */ var _data_secondSection_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/secondSection.json */ \"(api)/./data/secondSection.json\");\n\nfunction fetchSecondSectionData() {\n  return _data_secondSection_json__WEBPACK_IMPORTED_MODULE_0__;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9zZWNvbmRTZWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFHTyxTQUFTQyxzQkFBVCxHQUFpRDtFQUN0RCxPQUFPRCxxREFBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVya3BsdW1iZXIvLi9zZXJ2aWNlcy9zZWNvbmRTZWN0aW9uLnRzPzkwN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlY29uZFByb3BzIGZyb20gXCIuLi9kYXRhL3NlY29uZFNlY3Rpb24uanNvblwiO1xuaW1wb3J0IHsgU2Vjb25kU2VjdGlvbiB9IGZyb20gXCJ0eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hTZWNvbmRTZWN0aW9uRGF0YSgpOiBTZWNvbmRTZWN0aW9uIHtcbiAgcmV0dXJuIHNlY29uZFByb3BzIGFzIFNlY29uZFNlY3Rpb247XG59XG4iXSwibmFtZXMiOlsic2Vjb25kUHJvcHMiLCJmZXRjaFNlY29uZFNlY3Rpb25EYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./services/secondSection.ts\n");

/***/ }),

/***/ "(api)/./data/secondSection.json":
/*!*********************************!*\
  !*** ./data/secondSection.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"secondSectionTitle":"about me","details":["Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.","Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/second_section.ts"));
module.exports = __webpack_exports__;

})();