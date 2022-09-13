/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./api/admin.ts":
/*!**********************!*\
  !*** ./api/admin.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_adminUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/adminUser */ \"./models/adminUser.ts\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/admin\", function (req, res) {\n    _models_adminUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find()\n        .then(function (buffer) { return res.json(buffer); })\n        .catch(function (err) {\n        if (err)\n            throw err;\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://server/./api/admin.ts?");

/***/ }),

/***/ "./api/images.ts":
/*!***********************!*\
  !*** ./api/images.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware_uploadImagesMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/uploadImagesMiddleware */ \"./middleware/uploadImagesMiddleware.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/index */ \"./database/index.ts\");\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nvar gridFSBucket;\n_database_index__WEBPACK_IMPORTED_MODULE_3__.connection.on(\"open\", function () {\n    gridFSBucket = new (mongoose__WEBPACK_IMPORTED_MODULE_2___default().mongo.GridFSBucket)(_database_index__WEBPACK_IMPORTED_MODULE_3__.connection.db, {\n        bucketName: \"images\",\n    });\n});\nrouter\n    .route(\"/images\")\n    .get(function (req, res) {\n    req;\n    gridFSBucket.find().toArray(function (err, files) {\n        if (err)\n            throw err;\n        console.log(files._id);\n        res.send(files.map(function (buf) { return buf; }));\n    });\n})\n    .post(_middleware_uploadImagesMiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"], function (req, res) {\n    console.log(req.file);\n});\nrouter.get(\"/uploadImages/:id\", function (req, res) {\n    var fileID = gridFSBucket.find().toArray(function (err, files) {\n        if (err)\n            throw err;\n        files.map(function (file) { return file.id; });\n    });\n    console.log(fileID);\n    var id = new (mongoose__WEBPACK_IMPORTED_MODULE_2___default().Types.ObjectId)(req.params.id);\n    var readStream = gridFSBucket.openDownloadStream(id);\n    readStream.pipe(res);\n    console.log(readStream);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://server/./api/images.ts?");

/***/ }),

/***/ "./api/login.ts":
/*!**********************!*\
  !*** ./api/login.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_adminUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/adminUser */ \"./models/adminUser.ts\");\n/* harmony import */ var _utils_sendToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sendToken */ \"./utils/sendToken.ts\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n//import ErrorResponse from \"../utils/errorResponse\";\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_2___default().Router();\nrouter.post(\"/login\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, email, password, user, isMatch, error_1;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = req.body, email = _a.email, password = _a.password;\n                if (!email || !password) {\n                    res.send(\"Please provide an Email and Password\", 400);\n                }\n                _b.label = 1;\n            case 1:\n                _b.trys.push([1, 4, , 5]);\n                return [4 /*yield*/, _models_adminUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({ email: email }).select(\"+password\")];\n            case 2:\n                user = _b.sent();\n                if (!user) {\n                    res.send(\"Invalid credentials\", 401);\n                }\n                return [4 /*yield*/, user.matchPasswords(password)];\n            case 3:\n                isMatch = _b.sent();\n                if (!isMatch) {\n                    res.send(\"Invalid credentials\", 401);\n                }\n                (0,_utils_sendToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(user, 201, res);\n                Promise.resolve();\n                return [3 /*break*/, 5];\n            case 4:\n                error_1 = _b.sent();\n                res.send(\"Invalid credentials\", 500);\n                return [3 /*break*/, 5];\n            case 5: return [2 /*return*/];\n        }\n    });\n}); });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://server/./api/login.ts?");

/***/ }),

/***/ "./api/music.ts":
/*!**********************!*\
  !*** ./api/music.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/index */ \"./database/index.ts\");\n/* harmony import */ var _middleware_uploadMusicMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/uploadMusicMiddleware */ \"./middleware/uploadMusicMiddleware.ts\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dbConnect */ \"./utils/dbConnect.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n//import music from \"../../middleware/uploadMusicMiddleware\";\n\n\n//import MusicStorage from \"../utils/musicStorage\";\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var gfs;\n    return __generator(this, function (_a) {\n        (0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        _database_index__WEBPACK_IMPORTED_MODULE_1__.connection.on(\"open\", function () {\n            //gfs = Grid(connection.db, mongoose.mongo);\n            //gfs.collection(\"music\");\n            gfs = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().mongo.GridFSBucket)(_database_index__WEBPACK_IMPORTED_MODULE_1__.connection.db, {\n                bucketName: \"music\",\n            });\n        });\n        if (req.method === \"GET\") {\n            gfs.find().toArray(function (err, files) {\n                if (err)\n                    res.send(err);\n                else\n                    return res.send(files.map(function (buf) { return buf; }));\n            });\n        }\n        if (req.method === \"GET\") {\n            (0,_middleware_uploadMusicMiddleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res, next);\n        }\n        return [2 /*return*/];\n    });\n}); });\n\n\n//# sourceURL=webpack://server/./api/music.ts?");

/***/ }),

/***/ "./api/register.ts":
/*!*************************!*\
  !*** ./api/register.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_adminUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/adminUser */ \"./models/adminUser.ts\");\n/* harmony import */ var _utils_sendToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sendToken */ \"./utils/sendToken.ts\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_2___default().Router();\nrouter.post(\"/register\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, username, email, password, user;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = req.body, username = _a.username, email = _a.email, password = _a.password;\n                user = new _models_adminUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                    username: username,\n                    email: email,\n                    password: password,\n                });\n                return [4 /*yield*/, _models_adminUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({ email: email })\n                        .then(function (existedUser) { return __awaiter(void 0, void 0, void 0, function () {\n                        return __generator(this, function (_a) {\n                            switch (_a.label) {\n                                case 0:\n                                    if (existedUser)\n                                        return [2 /*return*/, res.send(\"User Already Exist\")];\n                                    if (!!existedUser) return [3 /*break*/, 2];\n                                    return [4 /*yield*/, user.save()];\n                                case 1:\n                                    _a.sent();\n                                    (0,_utils_sendToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(user, 201, res);\n                                    _a.label = 2;\n                                case 2:\n                                    Promise.resolve();\n                                    return [2 /*return*/];\n                            }\n                        });\n                    }); })\n                        .catch(function (error) {\n                        return res.send(error);\n                    })];\n            case 1:\n                _b.sent();\n                return [2 /*return*/];\n        }\n    });\n}); });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://server/./api/register.ts?");

/***/ }),

/***/ "./api/videos.ts":
/*!***********************!*\
  !*** ./api/videos.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database/index */ \"./database/index.ts\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_videosStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/videosStorage */ \"./utils/videosStorage.ts\");\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_1___default().Router();\nvar gridFSBucket;\nvar upload = multer__WEBPACK_IMPORTED_MODULE_3___default()({ storage: _utils_videosStorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"] });\n_database_index__WEBPACK_IMPORTED_MODULE_2__.connection.on(\"open\", function () {\n    gridFSBucket = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().mongo.GridFSBucket)(_database_index__WEBPACK_IMPORTED_MODULE_2__.connection.db, {\n        bucketName: \"videos\",\n    });\n    router\n        .route(\"/videos\")\n        .get(function (req, res) {\n        gridFSBucket.find().toArray(function (err, files) {\n            if (err)\n                throw err;\n            console.log(files._id);\n            res.send(files.map(function (buf) { return buf; }));\n        });\n    })\n        .post(upload.single(\"videos\"), function (req, res) {\n        console.log(req.file);\n    });\n});\nrouter.get(\"/uploadVideos/:id\", function (req, res) {\n    var fileID = gridFSBucket.find().toArray(function (err, files) {\n        if (err)\n            throw err;\n        files.map(function (file) { return file.id; });\n    });\n    console.log(fileID);\n    var id = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId)(req.params.id);\n    var readStream = gridFSBucket.openDownloadStream(id);\n    readStream.pipe(res);\n    console.log(readStream);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://server/./api/videos.ts?");

/***/ }),

/***/ "./database/index.ts":
/*!***************************!*\
  !*** ./database/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connection\": () => (/* binding */ connection),\n/* harmony export */   \"default\": () => (/* binding */ database),\n/* harmony export */   \"mongoDBLogMessage\": () => (/* binding */ mongoDBLogMessage),\n/* harmony export */   \"mongoDBOptionals\": () => (/* binding */ mongoDBOptionals),\n/* harmony export */   \"mongoURI\": () => (/* binding */ mongoURI)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mongoURI = \"mongodb://localhost:27017/naijaHits\";\nvar connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\nvar mongoDBLogMessage = {\n    successMsg: \"Connected to the mongoDB database\",\n    errorMsg: \"connection error:\",\n};\nvar mongoDBOptionals = {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n};\nfunction database() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(mongoURI);\n        console.log(mongoDBLogMessage.successMsg);\n    }\n    catch (error) {\n        if (error)\n            throw new Error(\"\".concat(mongoDBLogMessage.errorMsg, \"=> \").concat(error));\n    }\n}\n\n\n//# sourceURL=webpack://server/./database/index.ts?");

/***/ }),

/***/ "./middleware/error.ts":
/*!*****************************!*\
  !*** ./middleware/error.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_errorResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/errorResponse */ \"./utils/errorResponse.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar errorHandler = function (err, req, res) {\n    req;\n    var error = __assign({}, err);\n    error.message = err.message;\n    if (err.code === 11000) {\n        var message = \"Duplicate Field Value Entered\";\n        error = new _utils_errorResponse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](message, 400);\n    }\n    if (err.name === \"ValidationError\") {\n        var message = Object.values(err.errors).map(function (value) { return value.message; });\n        error = new _utils_errorResponse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](message, 400);\n    }\n    res.status(error.statusCode || 500).json({\n        success: false,\n        error: error.message || \"Server Error\",\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorHandler);\n\n\n//# sourceURL=webpack://server/./middleware/error.ts?");

/***/ }),

/***/ "./middleware/uploadImagesMiddleware.ts":
/*!**********************************************!*\
  !*** ./middleware/uploadImagesMiddleware.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_imagesStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/imagesStorage */ \"./utils/imagesStorage.ts\");\n/* harmony import */ var _utils_checkFileTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/checkFileTypes */ \"./utils/checkFileTypes.ts\");\n/* harmony import */ var _utils_fileTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fileTypes */ \"./utils/fileTypes.ts\");\n\n\n\n\nvar uploadImages = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n    storage: _utils_imagesStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    fileFilter: function (req, file, done) {\n        req;\n        var fileType = _utils_fileTypes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].images;\n        console.log(fileType);\n        (0,_utils_checkFileTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(file, fileType, done);\n    },\n});\nvar uploadImagesMiddleware = function (req, res, next) {\n    var upload = uploadImages.single(\"images\");\n    upload(req, res, function (err) {\n        if (err instanceof (multer__WEBPACK_IMPORTED_MODULE_0___default().MulterError)) {\n            return res.status(400).send(\"File is too large\");\n        }\n        else if (err) {\n            if (err === \"filetype\") {\n                return res.status(400).send(\"Image files only !!!\");\n            }\n            else\n                return res.status(500).send(\"Invalid file format\");\n        }\n        next();\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadImagesMiddleware);\n\n\n//# sourceURL=webpack://server/./middleware/uploadImagesMiddleware.ts?");

/***/ }),

/***/ "./middleware/uploadMusicMiddleware.ts":
/*!*********************************************!*\
  !*** ./middleware/uploadMusicMiddleware.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_musicStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/musicStorage */ \"./utils/musicStorage.ts\");\n/* harmony import */ var _utils_checkFileTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/checkFileTypes */ \"./utils/checkFileTypes.ts\");\n/* harmony import */ var _utils_fileTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fileTypes */ \"./utils/fileTypes.ts\");\n\n\n\n\nvar music = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n    storage: _utils_musicStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    fileFilter: function (req, file, done) {\n        var fileType = _utils_fileTypes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].music;\n        (0,_utils_checkFileTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(file, fileType, done);\n    },\n});\nvar uploadMusicMiddleware = function (req, res, next) {\n    var upload = music.single(\"music\");\n    upload(req, res, function (err) {\n        if (err instanceof (multer__WEBPACK_IMPORTED_MODULE_0___default().MulterError)) {\n            return res.status(400).send(\"File is too large\");\n        }\n        else if (err) {\n            if (err === \"filetype\") {\n                return res.status(400).send(\"music files only !!!\");\n            }\n            else\n                return res.status(500).send(\"Invalid file format\");\n        }\n        next();\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadMusicMiddleware);\n\n\n//# sourceURL=webpack://server/./middleware/uploadMusicMiddleware.ts?");

/***/ }),

/***/ "./models/adminUser.ts":
/*!*****************************!*\
  !*** ./models/adminUser.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"../../node_modules/dotenv/lib/main.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\n\n\n\n\nvar userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_1___default().Schema)({\n    username: {\n        type: String,\n        required: [true, \"please provide a username\"],\n    },\n    email: {\n        type: String,\n        required: [true, \"please provide an email\"],\n    },\n    password: {\n        type: String,\n        required: [true, \"please add password\"],\n        minLength: 6,\n        select: false,\n    },\n    resetPasswordToken: String,\n    resetPasswordExpire: Date,\n});\nvar jwtSecrete = process.env.JWT_SECRETE;\nconsole.log(process.env.SERVER_PORT);\nconsole.log(\"jwt_secrete ---> \".concat(jwtSecrete));\nuserSchema.pre(\"save\", function (next) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    if (!this.isModified(\"password\")) {\n                        next();\n                    }\n                    _a = this;\n                    return [4 /*yield*/, bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(this.password, 10)];\n                case 1:\n                    _a.password = _b.sent();\n                    return [2 /*return*/, next()];\n            }\n        });\n    });\n});\nuserSchema.methods.matchPasswords = function (password) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, this.password)];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n};\nuserSchema.methods.getSignedToken = function () {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({ id: this._id }, jwtSecrete, {\n        expiresIn: process.env.JWT_EXPIRE,\n    });\n};\nuserSchema.methods.getResetPasswordToken = function () {\n    var resetToken = crypto__WEBPACK_IMPORTED_MODULE_4___default().randomBytes(20).toString(\"hex\");\n    this.resetPasswordToken = crypto__WEBPACK_IMPORTED_MODULE_4___default().createHash(\"sha256\")\n        .update(resetToken)\n        .digest(\"hex\");\n    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);\n    return resetToken;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_1___default().models.AdminUser) ||\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().model(\"AdminUser\", userSchema));\n\n\n//# sourceURL=webpack://server/./models/adminUser.ts?");

/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"../../node_modules/dotenv/lib/main.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database/index */ \"./database/index.ts\");\n/* harmony import */ var _api_music__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/music */ \"./api/music.ts\");\n/* harmony import */ var _api_videos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/videos */ \"./api/videos.ts\");\n/* harmony import */ var _api_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/images */ \"./api/images.ts\");\n/* harmony import */ var _api_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/admin */ \"./api/admin.ts\");\n/* harmony import */ var _api_register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/register */ \"./api/register.ts\");\n/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/login */ \"./api/login.ts\");\n/* harmony import */ var _middleware_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middleware/error */ \"./middleware/error.ts\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_12__);\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\n\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n(0,_database_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n//`````````````````````````middlewres starts`````````````````````````````````````\napp.use(cors__WEBPACK_IMPORTED_MODULE_11___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_12___default().json({ limit: \"1000mb\" }));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({ extended: false }));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()(\"tiny\"));\n//`````````````````````````middlewres ends`````````````````````````````````````\n//app.use(\"/\", (req, res) => {\n//res.send(\"welcome to my server\");\n//});\napp.get(\"/\", function (req, res) {\n    res.send(\"welcome casmir server\");\n});\napp.use(\"/api\", [_api_admin__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _api_register__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _api_login__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _api_music__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _api_videos__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _api_images__WEBPACK_IMPORTED_MODULE_6__[\"default\"]]);\napp.use(_middleware_error__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n//app.use(\"/api/music\", music);\nvar ServerPortNumber = process.env.SERVER_PORT || 4000;\nvar ServerLogMessage = \"App is running on port \".concat(ServerPortNumber);\nvar callback = function () { return console.log(ServerLogMessage); };\napp.listen(ServerPortNumber, callback);\n\n\n//# sourceURL=webpack://server/./server.ts?");

/***/ }),

/***/ "./utils/checkFileTypes.ts":
/*!*********************************!*\
  !*** ./utils/checkFileTypes.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction checkFileType(file, fileTypes, done) {\n    var extname = fileTypes.test(path__WEBPACK_IMPORTED_MODULE_0___default().extname(file.originalname));\n    var mimetype = fileTypes.test(file.mimetype);\n    if (mimetype || extname) {\n        return done(null, true);\n    }\n    else {\n        done(\"Error: Invalid file format\");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkFileType);\n\n\n//# sourceURL=webpack://server/./utils/checkFileTypes.ts?");

/***/ }),

/***/ "./utils/dbConnect.ts":
/*!****************************!*\
  !*** ./utils/dbConnect.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connection\": () => (/* binding */ connection),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\nvar mongoConnection = {};\nfunction dbConnect() {\n    if (mongoConnection.db) {\n        return;\n    }\n    var db = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n    mongoConnection.isConnected = db.isConnected[0].readyState;\n    console.log(mongoConnection.isConnected);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n\n\n//# sourceURL=webpack://server/./utils/dbConnect.ts?");

/***/ }),

/***/ "./utils/errorResponse.ts":
/*!********************************!*\
  !*** ./utils/errorResponse.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar ErrorResponse = /** @class */ (function (_super) {\n    __extends(ErrorResponse, _super);\n    function ErrorResponse(message, statusCode) {\n        var _this = _super.call(this, message) || this;\n        _this.statusCode = statusCode;\n        return _this;\n    }\n    return ErrorResponse;\n}(Error));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorResponse);\n\n\n//# sourceURL=webpack://server/./utils/errorResponse.ts?");

/***/ }),

/***/ "./utils/fileTypes.ts":
/*!****************************!*\
  !*** ./utils/fileTypes.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar fileTypes = {\n    music: /mp3|wav/i,\n    videos: /mp4|mov|wmv|flv|avi|mkv/i,\n    images: /jpeg|jpg|png|gif/i,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fileTypes);\n\n\n//# sourceURL=webpack://server/./utils/fileTypes.ts?");

/***/ }),

/***/ "./utils/imagesStorage.ts":
/*!********************************!*\
  !*** ./utils/imagesStorage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer-gridfs-storage */ \"multer-gridfs-storage\");\n/* harmony import */ var multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0__);\n//import dotenv from \"dotenv\";\n//dotenv.config();\n\nvar mongoURI = process.env.MONGODB_URI;\nvar mongoOptions = process.env.MONGODB_OPTIONS;\nvar ImagesStorage = new multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0__.GridFsStorage({\n    url: mongoURI,\n    options: mongoOptions,\n    file: function (req, file) {\n        console.log(req);\n        return new Promise(function (resolve) {\n            var filename = file.originalname;\n            var fileInfo = {\n                filename: filename,\n                bucketName: \"images\",\n            };\n            resolve(fileInfo);\n        });\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagesStorage);\n\n\n//# sourceURL=webpack://server/./utils/imagesStorage.ts?");

/***/ }),

/***/ "./utils/musicStorage.ts":
/*!*******************************!*\
  !*** ./utils/musicStorage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer-gridfs-storage */ \"multer-gridfs-storage\");\n/* harmony import */ var multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar MusicStorage = new multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0__.GridFsStorage({\n    url: process.env.MONGO_URI,\n    options: process.env.MONGO_OPTIONS,\n    file: function (req, file) {\n        return new Promise(function (resolve, reject) {\n            crypto__WEBPACK_IMPORTED_MODULE_1___default().randomBytes(16, function (err) {\n                if (err) {\n                    return reject(err);\n                }\n                var filename = file.originalname;\n                var fileInfo = {\n                    filename: filename,\n                    bucketName: \"music\",\n                };\n                resolve(fileInfo);\n            });\n        });\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MusicStorage);\n\n\n//# sourceURL=webpack://server/./utils/musicStorage.ts?");

/***/ }),

/***/ "./utils/sendToken.ts":
/*!****************************!*\
  !*** ./utils/sendToken.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendToken = function (user, statusCode, res) {\n    var token = user.getSignedToken();\n    res.status(statusCode).json({ success: true, token: token });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendToken);\n\n\n//# sourceURL=webpack://server/./utils/sendToken.ts?");

/***/ }),

/***/ "./utils/videosStorage.ts":
/*!********************************!*\
  !*** ./utils/videosStorage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer-gridfs-storage */ \"multer-gridfs-storage\");\n/* harmony import */ var multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mongoURI = process.env.MONGODB_URI;\nvar mongoOptions = process.env.MONGODB_OPTIONS;\nvar VideosStorage = new multer_gridfs_storage__WEBPACK_IMPORTED_MODULE_0__.GridFsStorage({\n    url: mongoURI,\n    options: mongoOptions,\n    file: function (req, file) {\n        console.log(req);\n        return new Promise(function (resolve) {\n            var filename = file.originalname;\n            var fileInfo = {\n                filename: filename,\n                bucketName: \"videos\",\n            };\n            resolve(fileInfo);\n        });\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideosStorage);\n\n\n//# sourceURL=webpack://server/./utils/videosStorage.ts?");

/***/ }),

/***/ "../../node_modules/dotenv/lib/main.js":
/*!*********************************************!*\
  !*** ../../node_modules/dotenv/lib/main.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* @flow */\n/*::\n\ntype DotenvParseOptions = {\n  debug?: boolean\n}\n\n// keys and values from src\ntype DotenvParseOutput = { [string]: string }\n\ntype DotenvConfigOptions = {\n  path?: string, // path to .env file\n  encoding?: string, // encoding of .env file\n  debug?: string // turn on logging for debugging purposes\n}\n\ntype DotenvConfigOutput = {\n  parsed?: DotenvParseOutput,\n  error?: Error\n}\n\n*/\n\nconst fs = __webpack_require__(/*! fs */ \"fs\")\nconst path = __webpack_require__(/*! path */ \"path\")\nconst os = __webpack_require__(/*! os */ \"os\")\n\nfunction log (message /*: string */) {\n  console.log(`[dotenv][DEBUG] ${message}`)\n}\n\nconst NEWLINE = '\\n'\nconst RE_INI_KEY_VAL = /^\\s*([\\w.-]+)\\s*=\\s*(.*)?\\s*$/\nconst RE_NEWLINES = /\\\\n/g\nconst NEWLINES_MATCH = /\\r\\n|\\n|\\r/\n\n// Parses src into an Object\nfunction parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {\n  const debug = Boolean(options && options.debug)\n  const obj = {}\n\n  // convert Buffers before splitting into lines and processing\n  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {\n    // matching \"KEY' and 'VAL' in 'KEY=VAL'\n    const keyValueArr = line.match(RE_INI_KEY_VAL)\n    // matched?\n    if (keyValueArr != null) {\n      const key = keyValueArr[1]\n      // default undefined or missing values to empty string\n      let val = (keyValueArr[2] || '')\n      const end = val.length - 1\n      const isDoubleQuoted = val[0] === '\"' && val[end] === '\"'\n      const isSingleQuoted = val[0] === \"'\" && val[end] === \"'\"\n\n      // if single or double quoted, remove quotes\n      if (isSingleQuoted || isDoubleQuoted) {\n        val = val.substring(1, end)\n\n        // if double quoted, expand newlines\n        if (isDoubleQuoted) {\n          val = val.replace(RE_NEWLINES, NEWLINE)\n        }\n      } else {\n        // remove surrounding whitespace\n        val = val.trim()\n      }\n\n      obj[key] = val\n    } else if (debug) {\n      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)\n    }\n  })\n\n  return obj\n}\n\nfunction resolveHome (envPath) {\n  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath\n}\n\n// Populates process.env from .env file\nfunction config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding /*: string */ = 'utf8'\n  let debug = false\n\n  if (options) {\n    if (options.path != null) {\n      dotenvPath = resolveHome(options.path)\n    }\n    if (options.encoding != null) {\n      encoding = options.encoding\n    }\n    if (options.debug != null) {\n      debug = true\n    }\n  }\n\n  try {\n    // specifying an encoding returns a string instead of a buffer\n    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {\n        process.env[key] = parsed[key]\n      } else if (debug) {\n        log(`\"${key}\" is already defined in \\`process.env\\` and will not be overwritten`)\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    return { error: e }\n  }\n}\n\nmodule.exports.config = config\nmodule.exports.parse = parse\n\n\n//# sourceURL=webpack://server/../../node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("multer");

/***/ }),

/***/ "multer-gridfs-storage":
/*!****************************************!*\
  !*** external "multer-gridfs-storage" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("multer-gridfs-storage");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server.ts");
/******/ 	
/******/ })()
;