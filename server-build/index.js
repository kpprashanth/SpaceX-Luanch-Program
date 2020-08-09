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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_4___default()(); // ...\n\nconst BASE_URL = 'https://api.spaceXdata.com/v3/launches';\n\nconst getData = async (year = null, launch = null, land = null) => {\n  var missions = [];\n  var data = {\n    limit: 100\n  };\n  if (year) data['launch_year'] = year;\n  if (launch) data['launch_success'] = launch === 'True' || launch === 'true' ? 'true' : 'false';\n  if (land) data['land_success'] = land === 'True' || launch === 'true' ? 'true' : 'false';\n\n  try {\n    var response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(BASE_URL, {\n      params: data\n    });\n    response.data && response.data.forEach(mission => {\n      let launch = {};\n      launch['missionName'] = mission.mission_name ? mission.mission_name : '';\n      launch['flightNumber'] = mission.flight_number ? mission.flight_number : '';\n      launch['launchYear'] = mission.launch_year ? mission.launch_year : '';\n      launch['launchSuccess'] = mission.launch_success !== undefined ? mission.launch_success : '';\n      launch['missionId'] = mission.mission_id ? mission.mission_id : [];\n      launch['imageURL'] = mission.links ? mission.links.mission_patch_small : '';\n      mission.rocket && mission.rocket.first_stage && mission.rocket.first_stage.cores && mission.rocket.first_stage.cores.forEach(core => {\n        launch['landSuccess'] = core.land_success !== undefined ? core.land_success : '';\n      });\n      missions.push(launch);\n    });\n  } catch (e) {\n    console.log(e);\n  }\n\n  return missions;\n};\n\napp.get('/', async (req, res) => {\n  const {\n    year,\n    launch,\n    land\n  } = req.query;\n  const launches = await getData(year, launch, land);\n  const initialData = {\n    launches,\n    year,\n    launch,\n    land\n  };\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_5___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], {\n    location: req.url,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    initialData: initialData\n  })));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<script>window.__INITIAL_DATA__ = \n${serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default()(initialData)}</script><div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    initialData: props.initialData\n  })));\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/CustomCard/CustomCard.css":
/*!**************************************************!*\
  !*** ./src/components/CustomCard/CustomCard.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/CustomCard/CustomCard.css?");

/***/ }),

/***/ "./src/components/CustomCard/index.js":
/*!********************************************!*\
  !*** ./src/components/CustomCard/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CustomCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomCard.css */ \"./src/components/CustomCard/CustomCard.css\");\n/* harmony import */ var _CustomCard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CustomCard_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst CustomCard = props => {\n  const {\n    launchYear,\n    launchSuccess,\n    landSuccess,\n    missionName,\n    flightNumber,\n    imageURL,\n    missionId\n  } = props.data;\n  var launch = launchSuccess ? 'Success' : 'Failed';\n  var land = landSuccess ? 'Success' : 'Failed';\n\n  if (landSuccess === null) {\n    land = 'NA';\n  }\n\n  if (launchSuccess === null) {\n    launch = 'NA';\n  }\n\n  const getMissionIds = () => {\n    if (missionId.length) {\n      var result = missionId.map(mission_id => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"grey-text\"\n        }, mission_id);\n      });\n      return result;\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"grey-text\"\n      }, \"empty\");\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card\",\n    role: missionName\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"image-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: imageURL,\n    height: 150,\n    width: 150,\n    \"aria-hidden\": true,\n    alt: `Image of a Rocket or Satellite which is named as ${missionName}`\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", {\n    className: \"blue-text\"\n  }, `${missionName} : #${flightNumber}`, \" \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", {\n    style: {\n      display: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"col\"\n  }, \"Mission Property\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    scope: \"col\"\n  }, \"value\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Mission Ids\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, getMissionIds()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Launch Year:\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: \"blue-text\"\n  }, `${launchYear}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Successful Launch\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: \"blue-text\"\n  }, launch)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Successful Landing:\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: \"blue-text\"\n  }, land)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(CustomCard));\n\n//# sourceURL=webpack:///./src/components/CustomCard/index.js?");

/***/ }),

/***/ "./src/components/Divider/Divider.css":
/*!********************************************!*\
  !*** ./src/components/Divider/Divider.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Divider/Divider.css?");

/***/ }),

/***/ "./src/components/Divider/index.js":
/*!*****************************************!*\
  !*** ./src/components/Divider/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Divider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Divider.css */ \"./src/components/Divider/Divider.css\");\n/* harmony import */ var _Divider_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Divider_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Divider = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \" divider col-s-12 col-m-12 col-l-12\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Divider);\n\n//# sourceURL=webpack:///./src/components/Divider/index.js?");

/***/ }),

/***/ "./src/components/Fallback/index.js":
/*!******************************************!*\
  !*** ./src/components/Fallback/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst FallBack = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \" Nothing to Dispay\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FallBack);\n\n//# sourceURL=webpack:///./src/components/Fallback/index.js?");

/***/ }),

/***/ "./src/components/Filter/Filter.css":
/*!******************************************!*\
  !*** ./src/components/Filter/Filter.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Filter/Filter.css?");

/***/ }),

/***/ "./src/components/Filter/index.js":
/*!****************************************!*\
  !*** ./src/components/Filter/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Divider */ \"./src/components/Divider/index.js\");\n/* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ToggleButton */ \"./src/components/ToggleButton/index.js\");\n/* harmony import */ var _Filter_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter.css */ \"./src/components/Filter/Filter.css\");\n/* harmony import */ var _Filter_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Filter_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst activeButtonStyle = {\n  backgroundColor: '#7aba01',\n  color: '#000'\n};\nconst inActiveButtonStyle = {\n  backgroundColor: '#c3e09b',\n  color: '#000'\n};\nconst defaultStyle = {\n  padding: '1px',\n  margin: '1px'\n};\nconst defaultHeaderStyle = {\n  padding: '1px',\n  margin: '1px'\n};\n\nconst getRows = (list, selectedYear, updateFilter) => {\n  let rows = [];\n  var index = 0;\n\n  while (index < list.length) {\n    index += 2;\n\n    if (index > list.length) {\n      rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"button-row\",\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        role: \"launch year\",\n        title: list[list.length - 1],\n        activeStyle: activeButtonStyle,\n        inActiveStyle: inActiveButtonStyle,\n        isActive: selectedYear === list[list.length - 1],\n        onClick: updateFilter.bind(null, 'LaunchYear'),\n        type: \"year\"\n      })));\n    } else {\n      rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"button-row\",\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        role: \"launch year\",\n        title: list[index - 2],\n        activeStyle: activeButtonStyle,\n        inActiveStyle: inActiveButtonStyle,\n        isActive: selectedYear === list[index - 2],\n        onClick: updateFilter.bind(null, 'LaunchYear'),\n        type: \"year\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        role: \"launch year\",\n        title: list[index - 1],\n        activeStyle: activeButtonStyle,\n        inActiveStyle: inActiveButtonStyle,\n        isActive: selectedYear === list[index - 1],\n        onClick: updateFilter.bind(null, 'LaunchYear'),\n        type: \"year\"\n      })));\n    }\n  }\n\n  return rows;\n};\n\nconst FilterSection = props => {\n  const {\n    launchYear,\n    successfulLaunch,\n    successfulLand,\n    updateFilter,\n    reset,\n    years\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"aside\", {\n    style: defaultStyle,\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"H3-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    style: defaultHeaderStyle\n  }, \"Launch Year\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Divider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), getRows(years, launchYear, updateFilter)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"H3-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    style: defaultHeaderStyle\n  }, \"Successful Launch\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Divider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"button-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    role: \"launch status\",\n    title: 'True',\n    activeStyle: activeButtonStyle,\n    inActiveStyle: inActiveButtonStyle,\n    isActive: successfulLaunch === 'True',\n    onClick: updateFilter.bind(null, 'SuccessfulLaunch'),\n    type: \"launch\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    role: \"launch status\",\n    title: 'False',\n    activeStyle: activeButtonStyle,\n    inActiveStyle: inActiveButtonStyle,\n    isActive: successfulLaunch === 'False',\n    onClick: updateFilter.bind(null, 'SuccessfulLaunch'),\n    type: \"launch\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"H3-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    style: defaultHeaderStyle\n  }, \"Successful Landing\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Divider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"button-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    role: \"land status\",\n    title: 'True',\n    activeStyle: activeButtonStyle,\n    inActiveStyle: inActiveButtonStyle,\n    isActive: successfulLand === 'True',\n    onClick: updateFilter.bind(null, 'SuccessfulLand'),\n    type: \"land\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    role: \"land status\",\n    title: 'False',\n    activeStyle: activeButtonStyle,\n    inActiveStyle: inActiveButtonStyle,\n    isActive: successfulLand === 'False',\n    onClick: updateFilter.bind(null, 'SuccessfulLand'),\n    type: \"land\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Divider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"link-button\",\n    onClick: reset\n  }, \"Reset All\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(FilterSection));\n\n//# sourceURL=webpack:///./src/components/Filter/index.js?");

/***/ }),

/***/ "./src/components/ToggleButton/ToggleButton.css":
/*!******************************************************!*\
  !*** ./src/components/ToggleButton/ToggleButton.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/ToggleButton/ToggleButton.css?");

/***/ }),

/***/ "./src/components/ToggleButton/index.js":
/*!**********************************************!*\
  !*** ./src/components/ToggleButton/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ToggleButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleButton.css */ \"./src/components/ToggleButton/ToggleButton.css\");\n/* harmony import */ var _ToggleButton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ToggleButton_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst defaultInactiveStyle = {\n  backgroundColor: '#eee',\n  color: '#000'\n};\nconst defaultActiveStyle = {\n  backgroundColor: '#0091ea',\n  color: '#fff'\n};\n\nconst SelectableButton = props => {\n  const {\n    isActive,\n    onClick,\n    type\n  } = props;\n  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"useHistory\"])();\n  const title = props.title || 'Button';\n\n  const handleClick = () => {\n    const value = isActive ? null : title;\n    let newLocation = isActive ? removeQuery(type) : addQuery(type, value);\n    history.push(newLocation);\n    onClick(value);\n  };\n\n  const addQuery = (name, value) => {\n    let searchStrig = `${name}=${value}`;\n    let location = Object.assign({}, history.location);\n    location = removeQuery(name);\n    location.search = location.search.indexOf('=') !== -1 ? location.search + '&' + searchStrig : location.search + searchStrig;\n    return location;\n  };\n\n  const removeQuery = queryName => {\n    let location = Object.assign({}, history.location);\n\n    if (location.search.indexOf('=') !== -1) {\n      let searchQuery = location.search.split('?')[1];\n      let searchQueryArray = searchQuery.split('&');\n      let updatedSearchQueryArray = searchQueryArray.filter(query => {\n        return !(query.indexOf(queryName) !== -1);\n      });\n      location.search = '?' + updatedSearchQueryArray.join('&');\n    }\n\n    return location;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"selectable-button \",\n    \"aria-label\": `Year ${title}`,\n    style: isActive ? { ...defaultActiveStyle,\n      ...props.activeStyle\n    } : { ...defaultInactiveStyle,\n      ...props.inActiveStyle\n    },\n    \"aria-pressed\": isActive,\n    onClick: handleClick\n  }, title);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(SelectableButton));\n\n//# sourceURL=webpack:///./src/components/ToggleButton/index.js?");

/***/ }),

/***/ "./src/containers/Home/Home.css":
/*!**************************************!*\
  !*** ./src/containers/Home/Home.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/containers/Home/Home.css?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.css */ \"./src/containers/Home/Home.css\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Filter */ \"./src/components/Filter/index.js\");\n/* harmony import */ var _components_CustomCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CustomCard */ \"./src/components/CustomCard/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader */ \"react-loader\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Fallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Fallback */ \"./src/components/Fallback/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst BASE_URL = 'https://api.spaceXdata.com/v3/launches';\n\nconst getAllYears = (start, end) => {\n  let listYears = [];\n\n  for (let i = start; i <= end; i++) {\n    listYears.push(String(i));\n  }\n\n  return listYears;\n};\n\nconst years = getAllYears(2009, 2020);\n\nconst fetchData = async (launchYear, successfulLaunch, successfulLand) => {\n  var missions = [];\n  var data = {\n    limit: 100\n  };\n  if (launchYear) data['launch_year'] = launchYear;\n  if (successfulLaunch) data['launch_success'] = successfulLaunch === 'True' ? 'true' : 'false';\n  if (successfulLand) data['land_success'] = successfulLand === 'True' ? 'true' : 'false';\n\n  try {\n    var response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(BASE_URL, {\n      params: data\n    });\n    response.data && response.data.forEach(mission => {\n      let launch = {};\n      launch['missionName'] = mission.mission_name ? mission.mission_name : '';\n      launch['flightNumber'] = mission.flight_number ? mission.flight_number : '';\n      launch['launchYear'] = mission.launch_year ? mission.launch_year : '';\n      launch['launchSuccess'] = mission.launch_success !== undefined ? mission.launch_success : '';\n      launch['missionId'] = mission.mission_id ? mission.mission_id : [];\n      launch['imageURL'] = mission.links ? mission.links.mission_patch_small : '';\n      mission.rocket && mission.rocket.first_stage && mission.rocket.first_stage.cores && mission.rocket.first_stage.cores.forEach(core => {\n        launch['landSuccess'] = core.land_success !== undefined ? core.land_success : '';\n      });\n      missions.push(launch);\n    });\n  } catch (e) {\n    console.log(e);\n  }\n\n  return missions;\n};\n\nconst Home = props => {\n  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"useHistory\"])();\n  const firstUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(true);\n  const [launches, setLaunches] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [launchYear, setLaunchYear] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const [successfulLaunch, setSuccessfulLaunch] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const [successfulLand, setSuccessfulLand] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const [dataLoaded, setDataLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  console.log(launches);\n\n  const updateFilter = (key, value) => {\n    firstUpdate.current = false;\n\n    switch (key) {\n      case 'LaunchYear':\n        {\n          setLaunchYear(value);\n          break;\n        }\n\n      case 'SuccessfulLaunch':\n        {\n          setSuccessfulLaunch(value);\n          break;\n        }\n\n      case 'SuccessfulLand':\n        {\n          setSuccessfulLand(value);\n          break;\n        }\n\n      default:\n        return null;\n    }\n  };\n\n  const reset = () => {\n    let location = Object.assign({}, history.location);\n    location.search = '';\n    history.replace(location);\n    setLaunchYear(null);\n    setSuccessfulLaunch(null);\n    setSuccessfulLand(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const {\n      launches,\n      year,\n      launch,\n      land\n    } = window.__INITIAL_DATA__;\n    setLaunches(launches);\n    setLaunchYear(year);\n    setSuccessfulLaunch(launch);\n    setSuccessfulLand(land);\n    setDataLoaded(true);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (firstUpdate.current) {\n      return;\n    }\n\n    async function update() {\n      setDataLoaded(false);\n      var missionsList = await fetchData(launchYear, successfulLaunch, successfulLand);\n      setLaunches(missionsList);\n      setDataLoaded(true);\n    }\n\n    update();\n  }, [launchYear, successfulLand, successfulLaunch]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"App-header col-s-12 col-m-12 col-l-12 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" SpaceX Launch Program\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-s-12 col-m-12 col-l-12  main-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-section col-s-3 col-m-2 col-l-2 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    updateFilter: updateFilter,\n    launchYear: launchYear,\n    successfulLaunch: successfulLaunch,\n    successfulLand: successfulLand,\n    years: years,\n    reset: reset\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-section-container col-s-8 col-m-10 col-l-12 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    loaded: dataLoaded\n  }, launches.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-section\"\n  }, launches.map(launch => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: launch\n    });\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Fallback__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(Home));\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-loader":
/*!*******************************!*\
  !*** external "react-loader" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loader\");\n\n//# sourceURL=webpack:///external_%22react-loader%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });