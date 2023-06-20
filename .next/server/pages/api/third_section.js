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
exports.id = "pages/api/third_section";
exports.ids = ["pages/api/third_section"];
exports.modules = {

/***/ "(api)/./pages/api/third_section.ts":
/*!************************************!*\
  !*** ./pages/api/third_section.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var services_thirdSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/thirdSection */ \"(api)/./services/thirdSection.ts\");\n\nfunction handler(req, res) {\n  res.status(200).json({\n    data: (0,services_thirdSection__WEBPACK_IMPORTED_MODULE_0__.fetchThirdSectionData)()\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGhpcmRfc2VjdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVBO0FBUWUsU0FBU0MsT0FBVCxDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtFQUNBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtJQUNuQkMsSUFBSSxFQUFFTiw0RUFBcUI7RUFEUixDQUFyQjtBQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVya3BsdW1iZXIvLi9wYWdlcy9hcGkvdGhpcmRfc2VjdGlvbi50cz9iNTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCB7IGZldGNoVGhpcmRTZWN0aW9uRGF0YSB9IGZyb20gXCJzZXJ2aWNlcy90aGlyZFNlY3Rpb25cIjtcblxuaW1wb3J0IHsgVGhpcmRTZWN0aW9uIH0gZnJvbSBcInR5cGVzXCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgZGF0YTogVGhpcmRTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgZGF0YTogZmV0Y2hUaGlyZFNlY3Rpb25EYXRhKCksXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZldGNoVGhpcmRTZWN0aW9uRGF0YSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/third_section.ts\n");

/***/ }),

/***/ "(api)/./services/thirdSection.ts":
/*!**********************************!*\
  !*** ./services/thirdSection.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchThirdSectionData\": () => (/* binding */ fetchThirdSectionData)\n/* harmony export */ });\n/* harmony import */ var _data_thirdSection_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/thirdSection.json */ \"(api)/./data/thirdSection.json\");\n\nfunction fetchThirdSectionData() {\n  return _data_thirdSection_json__WEBPACK_IMPORTED_MODULE_0__;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy90aGlyZFNlY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUdPLFNBQVNDLHFCQUFULEdBQStDO0VBQ3BELE9BQU9ELG9EQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJrcGx1bWJlci8uL3NlcnZpY2VzL3RoaXJkU2VjdGlvbi50cz8yNmQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGlyZFByb3BzIGZyb20gXCIuLi9kYXRhL3RoaXJkU2VjdGlvbi5qc29uXCI7XG5pbXBvcnQgeyBUaGlyZFNlY3Rpb24gfSBmcm9tIFwidHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVGhpcmRTZWN0aW9uRGF0YSgpOiBUaGlyZFNlY3Rpb24ge1xuICByZXR1cm4gdGhpcmRQcm9wcyBhcyBUaGlyZFNlY3Rpb247XG59XG4iXSwibmFtZXMiOlsidGhpcmRQcm9wcyIsImZldGNoVGhpcmRTZWN0aW9uRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./services/thirdSection.ts\n");

/***/ }),

/***/ "(api)/./data/thirdSection.json":
/*!********************************!*\
  !*** ./data/thirdSection.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"thirdSectionTitle":"my skills","skills":[{"title":"react js","competences":"UI Design, Prototyping","icon":"/react-icon.png","iconAlt":"React skill","details":[{"title":"peaq website","stack":"redux, jotai & tailwind"},{"title":"LLF","stack":"react-transition-group & strapi"},{"title":"peaq website","stack":"redux, jotai & tailwind"}]},{"title":"node","competences":"UI Design, Prototyping","icon":"/node-icon.png","iconAlt":"Nodejs skill","details":[{"title":"peaq website","stack":"redux, jotai & tailwind"},{"title":"LLF","stack":"react-transition-group & strapi"},{"title":"peaq website","stack":"redux, jotai & tailwind"}]},{"title":"css","competences":"UI Design, Prototyping","icon":"/css3-icon.png","iconAlt":"CSS3 skill","details":[{"title":"peaq website","stack":"redux, jotai & tailwind"},{"title":"LLF","stack":"react-transition-group & strapi"},{"title":"peaq website","stack":"redux, jotai & tailwind"}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/third_section.ts"));
module.exports = __webpack_exports__;

})();