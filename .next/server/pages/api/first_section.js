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
exports.id = "pages/api/first_section";
exports.ids = ["pages/api/first_section"];
exports.modules = {

/***/ "(api)/./pages/api/first_section.ts":
/*!************************************!*\
  !*** ./pages/api/first_section.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var services_firstSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/firstSection */ \"(api)/./services/firstSection.ts\");\n\nfunction handler(req, res) {\n  res.status(200).json({\n    data: (0,services_firstSection__WEBPACK_IMPORTED_MODULE_0__.fetchFirstSectionData)()\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmlyc3Rfc2VjdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVBO0FBUWUsU0FBU0MsT0FBVCxDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtFQUNBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtJQUNuQkMsSUFBSSxFQUFFTiw0RUFBcUI7RUFEUixDQUFyQjtBQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVya3BsdW1iZXIvLi9wYWdlcy9hcGkvZmlyc3Rfc2VjdGlvbi50cz80ODg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCB7IGZldGNoRmlyc3RTZWN0aW9uRGF0YSB9IGZyb20gXCJzZXJ2aWNlcy9maXJzdFNlY3Rpb25cIjtcblxuaW1wb3J0IHsgRmlyc3RTZWN0aW9uIH0gZnJvbSBcInR5cGVzXCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgZGF0YTogRmlyc3RTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgZGF0YTogZmV0Y2hGaXJzdFNlY3Rpb25EYXRhKCksXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZldGNoRmlyc3RTZWN0aW9uRGF0YSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/first_section.ts\n");

/***/ }),

/***/ "(api)/./services/firstSection.ts":
/*!**********************************!*\
  !*** ./services/firstSection.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchFirstSectionData\": () => (/* binding */ fetchFirstSectionData)\n/* harmony export */ });\n/* harmony import */ var _data_firstSection_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/firstSection.json */ \"(api)/./data/firstSection.json\");\n\nfunction fetchFirstSectionData() {\n  return _data_firstSection_json__WEBPACK_IMPORTED_MODULE_0__;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9maXJzdFNlY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUdPLFNBQVNDLHFCQUFULEdBQStDO0VBQ3BELE9BQU9ELG9EQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJrcGx1bWJlci8uL3NlcnZpY2VzL2ZpcnN0U2VjdGlvbi50cz9iZmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJzdFByb3BzIGZyb20gXCIuLi9kYXRhL2ZpcnN0U2VjdGlvbi5qc29uXCI7XG5pbXBvcnQgeyBGaXJzdFNlY3Rpb24gfSBmcm9tIFwidHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRmlyc3RTZWN0aW9uRGF0YSgpOiBGaXJzdFNlY3Rpb24ge1xuICByZXR1cm4gZmlyc3RQcm9wcyBhcyBGaXJzdFNlY3Rpb247XG59XG4iXSwibmFtZXMiOlsiZmlyc3RQcm9wcyIsImZldGNoRmlyc3RTZWN0aW9uRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./services/firstSection.ts\n");

/***/ }),

/***/ "(api)/./data/firstSection.json":
/*!********************************!*\
  !*** ./data/firstSection.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"start":"my name is","name":"terungwa kombol","occupation":"i\'m a software developer","summary":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/first_section.ts"));
module.exports = __webpack_exports__;

})();