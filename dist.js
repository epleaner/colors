/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const colors_json = __webpack_require__(1);

const SQUARE_SIZE = 20;

const randomColorInPalette = palette => {
  const { _rgb } = palette[Math.floor(Math.random() * palette.length)];
  const r = _rgb[0];
  const g = _rgb[1];
  const b = _rgb[2];

  return { r, b, g };
};

const addSquare = (container, { r, b, g }) => {
  let colorBox = document.createElement('div');
  colorBox.className = 'color-box';
  colorBox.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
  container.appendChild(colorBox);
};

const fillRow = (container, colors) => {
  let numSquares = 0;
  const squareLimit = Math.floor(window.innerWidth / SQUARE_SIZE);

  while (numSquares < squareLimit) {
    let { r, b, g } = randomColorInPalette(colors);
    addSquare(container, { r, g, b });
    numSquares++;
  }

  return container;
};

/* harmony default export */ __webpack_exports__["a"] = () => {
  let colorsContainer = document.createElement('div');
  colorsContainer.className = 'colors-container';

  let numRows = 0;
  const rowLimit = Math.ceil(window.innerHeight / SQUARE_SIZE);

  while (numRows < rowLimit) {
    for (const { file, colors } of colors_json.colors) {
      if (numRows < rowLimit) {
        let photoColors = document.createElement('div');
        photoColors.className = 'photo-colors';

        fillRow(photoColors, colors);
        numRows++;
        colorsContainer.appendChild(photoColors);
      }
    }
  }

  document.body.appendChild(colorsContainer);
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"colors": [
		{
			"file": "1.jpg",
			"colors": [
				{
					"_rgb": [
						75,
						70,
						65,
						1
					]
				},
				{
					"_rgb": [
						230,
						221,
						217,
						1
					]
				},
				{
					"_rgb": [
						159,
						108,
						106,
						1
					]
				},
				{
					"_rgb": [
						142,
						145,
						180,
						1
					]
				},
				{
					"_rgb": [
						164,
						178,
						194,
						1
					]
				}
			]
		},
		{
			"file": "10.jpg",
			"colors": [
				{
					"_rgb": [
						197,
						176,
						180,
						1
					]
				},
				{
					"_rgb": [
						33,
						30,
						25,
						1
					]
				},
				{
					"_rgb": [
						83,
						57,
						43,
						1
					]
				},
				{
					"_rgb": [
						103,
						89,
						62,
						1
					]
				},
				{
					"_rgb": [
						106,
						101,
						106,
						1
					]
				}
			]
		},
		{
			"file": "12.jpg",
			"colors": [
				{
					"_rgb": [
						130,
						118,
						89,
						1
					]
				},
				{
					"_rgb": [
						223,
						217,
						207,
						1
					]
				},
				{
					"_rgb": [
						32,
						28,
						22,
						1
					]
				},
				{
					"_rgb": [
						188,
						171,
						192,
						1
					]
				},
				{
					"_rgb": [
						202,
						168,
						146,
						1
					]
				}
			]
		},
		{
			"file": "13.jpg",
			"colors": [
				{
					"_rgb": [
						57,
						62,
						46,
						1
					]
				},
				{
					"_rgb": [
						213,
						206,
						191,
						1
					]
				},
				{
					"_rgb": [
						143,
						125,
						104,
						1
					]
				},
				{
					"_rgb": [
						147,
						141,
						173,
						1
					]
				},
				{
					"_rgb": [
						163,
						182,
						155,
						1
					]
				}
			]
		},
		{
			"file": "14.jpg",
			"colors": [
				{
					"_rgb": [
						171,
						158,
						131,
						1
					]
				},
				{
					"_rgb": [
						46,
						40,
						36,
						1
					]
				},
				{
					"_rgb": [
						231,
						239,
						228,
						1
					]
				},
				{
					"_rgb": [
						97,
						66,
						60,
						1
					]
				},
				{
					"_rgb": [
						108,
						100,
						51,
						1
					]
				}
			]
		},
		{
			"file": "11.jpg",
			"colors": [
				{
					"_rgb": [
						118,
						101,
						62,
						1
					]
				},
				{
					"_rgb": [
						219,
						223,
						179,
						1
					]
				},
				{
					"_rgb": [
						39,
						41,
						22,
						1
					]
				},
				{
					"_rgb": [
						198,
						168,
						115,
						1
					]
				},
				{
					"_rgb": [
						200,
						172,
						183,
						1
					]
				}
			]
		},
		{
			"file": "15.jpg",
			"colors": [
				{
					"_rgb": [
						167,
						150,
						149,
						1
					]
				},
				{
					"_rgb": [
						42,
						38,
						29,
						1
					]
				},
				{
					"_rgb": [
						132,
						99,
						55,
						1
					]
				},
				{
					"_rgb": [
						218,
						223,
						221,
						1
					]
				},
				{
					"_rgb": [
						127,
						55,
						44,
						1
					]
				}
			]
		},
		{
			"file": "17.jpg",
			"colors": [
				{
					"_rgb": [
						219,
						210,
						205,
						1
					]
				},
				{
					"_rgb": [
						50,
						38,
						31,
						1
					]
				},
				{
					"_rgb": [
						124,
						77,
						67,
						1
					]
				},
				{
					"_rgb": [
						169,
						130,
						129,
						1
					]
				},
				{
					"_rgb": [
						144,
						111,
						82,
						1
					]
				}
			]
		},
		{
			"file": "2.jpg",
			"colors": [
				{
					"_rgb": [
						218,
						243,
						247,
						1
					]
				},
				{
					"_rgb": [
						51,
						46,
						38,
						1
					]
				},
				{
					"_rgb": [
						118,
						58,
						53,
						1
					]
				},
				{
					"_rgb": [
						132,
						177,
						193,
						1
					]
				},
				{
					"_rgb": [
						100,
						132,
						162,
						1
					]
				}
			]
		},
		{
			"file": "18.jpg",
			"colors": [
				{
					"_rgb": [
						181,
						188,
						199,
						1
					]
				},
				{
					"_rgb": [
						35,
						34,
						28,
						1
					]
				},
				{
					"_rgb": [
						139,
						103,
						76,
						1
					]
				},
				{
					"_rgb": [
						109,
						59,
						48,
						1
					]
				},
				{
					"_rgb": [
						101,
						123,
						156,
						1
					]
				}
			]
		},
		{
			"file": "16.jpg",
			"colors": [
				{
					"_rgb": [
						185,
						198,
						225,
						1
					]
				},
				{
					"_rgb": [
						35,
						30,
						24,
						1
					]
				},
				{
					"_rgb": [
						105,
						76,
						60,
						1
					]
				},
				{
					"_rgb": [
						143,
						114,
						90,
						1
					]
				},
				{
					"_rgb": [
						114,
						124,
						151,
						1
					]
				}
			]
		},
		{
			"file": "19.jpg",
			"colors": [
				{
					"_rgb": [
						58,
						55,
						60,
						1
					]
				},
				{
					"_rgb": [
						222,
						232,
						238,
						1
					]
				},
				{
					"_rgb": [
						124,
						159,
						220,
						1
					]
				},
				{
					"_rgb": [
						166,
						204,
						237,
						1
					]
				},
				{
					"_rgb": [
						151,
						120,
						145,
						1
					]
				}
			]
		},
		{
			"file": "20.jpg",
			"colors": [
				{
					"_rgb": [
						155,
						156,
						169,
						1
					]
				},
				{
					"_rgb": [
						231,
						229,
						228,
						1
					]
				},
				{
					"_rgb": [
						49,
						47,
						51,
						1
					]
				},
				{
					"_rgb": [
						111,
						98,
						76,
						1
					]
				},
				{
					"_rgb": [
						94,
						70,
						77,
						1
					]
				}
			]
		},
		{
			"file": "3.jpg",
			"colors": [
				{
					"_rgb": [
						112,
						102,
						78,
						1
					]
				},
				{
					"_rgb": [
						216,
						210,
						214,
						1
					]
				},
				{
					"_rgb": [
						165,
						187,
						153,
						1
					]
				},
				{
					"_rgb": [
						25,
						31,
						9,
						1
					]
				},
				{
					"_rgb": [
						171,
						152,
						171,
						1
					]
				}
			]
		},
		{
			"file": "4.jpg",
			"colors": [
				{
					"_rgb": [
						34,
						34,
						35,
						1
					]
				},
				{
					"_rgb": [
						216,
						202,
						205,
						1
					]
				},
				{
					"_rgb": [
						112,
						125,
						164,
						1
					]
				},
				{
					"_rgb": [
						141,
						152,
						181,
						1
					]
				},
				{
					"_rgb": [
						168,
						93,
						63,
						1
					]
				}
			]
		},
		{
			"file": "25.jpg",
			"colors": [
				{
					"_rgb": [
						237,
						235,
						239,
						1
					]
				},
				{
					"_rgb": [
						50,
						41,
						31,
						1
					]
				},
				{
					"_rgb": [
						144,
						102,
						90,
						1
					]
				},
				{
					"_rgb": [
						141,
						131,
						166,
						1
					]
				},
				{
					"_rgb": [
						166,
						165,
						191,
						1
					]
				}
			]
		},
		{
			"file": "23.jpg",
			"colors": [
				{
					"_rgb": [
						177,
						170,
						196,
						1
					]
				},
				{
					"_rgb": [
						36,
						30,
						45,
						1
					]
				},
				{
					"_rgb": [
						84,
						54,
						64,
						1
					]
				},
				{
					"_rgb": [
						109,
						90,
						76,
						1
					]
				},
				{
					"_rgb": [
						97,
						99,
						135,
						1
					]
				}
			]
		},
		{
			"file": "5.jpg",
			"colors": [
				{
					"_rgb": [
						205,
						177,
						173,
						1
					]
				},
				{
					"_rgb": [
						23,
						23,
						17,
						1
					]
				},
				{
					"_rgb": [
						139,
						91,
						51,
						1
					]
				},
				{
					"_rgb": [
						86,
						49,
						23,
						1
					]
				},
				{
					"_rgb": [
						101,
						101,
						105,
						1
					]
				}
			]
		},
		{
			"file": "24.jpg",
			"colors": [
				{
					"_rgb": [
						210,
						196,
						209,
						1
					]
				},
				{
					"_rgb": [
						45,
						34,
						32,
						1
					]
				},
				{
					"_rgb": [
						122,
						62,
						67,
						1
					]
				},
				{
					"_rgb": [
						122,
						102,
						78,
						1
					]
				},
				{
					"_rgb": [
						150,
						113,
						129,
						1
					]
				}
			]
		},
		{
			"file": "21.jpg",
			"colors": [
				{
					"_rgb": [
						146,
						127,
						97,
						1
					]
				},
				{
					"_rgb": [
						43,
						43,
						24,
						1
					]
				},
				{
					"_rgb": [
						224,
						212,
						214,
						1
					]
				},
				{
					"_rgb": [
						91,
						51,
						26,
						1
					]
				},
				{
					"_rgb": [
						203,
						199,
						162,
						1
					]
				}
			]
		},
		{
			"file": "6.jpg",
			"colors": [
				{
					"_rgb": [
						192,
						180,
						182,
						1
					]
				},
				{
					"_rgb": [
						26,
						26,
						24,
						1
					]
				},
				{
					"_rgb": [
						109,
						97,
						57,
						1
					]
				},
				{
					"_rgb": [
						79,
						60,
						40,
						1
					]
				},
				{
					"_rgb": [
						97,
						98,
						116,
						1
					]
				}
			]
		},
		{
			"file": "7.jpg",
			"colors": [
				{
					"_rgb": [
						182,
						194,
						225,
						1
					]
				},
				{
					"_rgb": [
						38,
						38,
						38,
						1
					]
				},
				{
					"_rgb": [
						88,
						72,
						74,
						1
					]
				},
				{
					"_rgb": [
						112,
						103,
						89,
						1
					]
				},
				{
					"_rgb": [
						104,
						109,
						143,
						1
					]
				}
			]
		},
		{
			"file": "8.jpg",
			"colors": [
				{
					"_rgb": [
						104,
						111,
						145,
						1
					]
				},
				{
					"_rgb": [
						217,
						213,
						223,
						1
					]
				},
				{
					"_rgb": [
						41,
						47,
						40,
						1
					]
				},
				{
					"_rgb": [
						171,
						182,
						194,
						1
					]
				},
				{
					"_rgb": [
						166,
						164,
						205,
						1
					]
				}
			]
		},
		{
			"file": "9.jpg",
			"colors": [
				{
					"_rgb": [
						56,
						48,
						40,
						1
					]
				},
				{
					"_rgb": [
						204,
						176,
						169,
						1
					]
				},
				{
					"_rgb": [
						127,
						86,
						62,
						1
					]
				},
				{
					"_rgb": [
						139,
						174,
						182,
						1
					]
				},
				{
					"_rgb": [
						130,
						120,
						179,
						1
					]
				}
			]
		}
	]
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])();

/***/ })
/******/ ]);