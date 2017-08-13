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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//convert number to corresponding word
//import * as card from './cardinal.js';
/*import Date from 'Date';
import Time from 'Time';
import Decimal from 'Decimal';
import Fraction from 'Fraction';
import Ordinal from 'Ordinal';
import PhoneNo from 'PhoneNo';
import SufixPrefix from 'SufixPrefix';*/
var NumToWord = function () {
	function NumToWord(str) {
		_classCallCheck(this, NumToWord);

		this.str = str;
		this.unit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		this.unit1 = ['', '', 'twentieth', 'thirtieth', 'fortieth', 'fiftieth', 'sixtieth', 'seventieth', 'eightieth', 'ninetieth'];
		this.tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
		this.exce = ['', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
		this.exc = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
		this.ord = ['', 'first', 'second', 'third'];
		this.card = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		this.th = ['', '', '', 'hundred', 'thousand', 'thousand', 'thousand', 'million', 'million', 'million', 'billion', 'billion', 'billion', 'trillion', 'trillion', 'trillion', 'quadrillion', 'quadrillion', 'quadrillion', 'quintillion', 'quintillion', 'quintillion', 'sextillion', 'sextillion', 'sextillion', 'septillion', 'septillion', 'septillion', 'octillion', 'octillion', 'octillion', 'nonillion', 'nonillion', 'nonillion', 'decillion', 'decillion', 'decillion', 'undecillion', 'undecillion', 'undecillion'];
		this.th1 = ['', '', '', 'hundreds', 'thousands', 'thousands', 'thousands', 'millions', 'millions', 'millions', 'billions', 'billions', 'billions', 'trillions', 'trillions', 'trillions', 'quadrillions', 'quadrillions', 'quadrillions', 'quintillions', 'quintillions', 'quintillions', 'sextillions', 'sextillions', 'sextillions', 'septillions', 'septillions', 'septillions', 'octillions', 'octillions', 'octillions', 'nonillions', 'nonillions', 'nonillions', 'decillions', 'decillions', 'decillions', 'undecillions', 'undecillions', 'undecillions'];
		this.formedArray = [];
		this.sentenceArray = [];
		this.extract = [];
		this.w = '';
	}

	_createClass(NumToWord, [{
		key: 'sumOfDigits',
		value: function sumOfDigits(n) {
			var sum = 0;
			while (n > 0) {
				sum += n % 10;
				n = Math.floor(n / 10);
			}
			return sum;
		}
	}, {
		key: 'convert',
		value: function convert() {
			var i,
			    j,
			    k,
			    num = this.str;
			this.w = '';
			for (i = 0; i < num.length; i++) {
				if (num.length - i > 2) {
					if (num.length - i == 5 || num.length - i == 8 || num.length - i == 11 || num.length - i == 14 || num.length - i == 17 || num.length - i == 20 || num.length - i == 23 || num.length - i == 26 || num.length - i == 29 || num.length - i == 32 || num.length - i == 35) {
						j = 4;
					} else if ((this.sumOfDigits(num.length - i) == 3 || this.sumOfDigits(num.length - i) == 6 || this.sumOfDigits(num.length - i) == 9) && num.length - i > 3) {
						j = 5;
					} else {
						j = 3;
					}
				} else {
					j = num.length - i;
				}
				if (num[i] != 0) {
					switch (j) {
						case 1:
							this.w += this.card[num[i]];
							break;
						case 2:
							if (num[i] == 1 && num[i + 1] != 0) {
								this.w += this.exc[num[i + 1]];
								i++;
							} else if (num[i + 1] == 0) {
								this.w += this.tens[num[i]];
							} else {
								this.w += this.tens[num[i]] + ' ';
							}
							break;
						case 3:
							this.w += this.card[num[i]] + ' ' + this.th[num.length - i] + ' ';
							break;
						case 4:
							this.w += this.tens[num[i]] + ' ' + this.card[num[i + 1]] + ' ' + this.th[num.length - i] + ' ';
							i++;
							break;
						case 5:
							if (num[i + 2] != 0) {
								this.w += this.card[num[i]] + ' ' + this.th[3] + ' ' + 'and' + ' ';
							} else {
								this.w += this.card[num[i]] + ' ' + this.th[3] + ' ';
							}
							if (num[i + 1] == 1 && num[i + 2] != 0) {
								this.w += this.exc[num[i + 2]] + ' ' + this.th[num.length - i] + ' ';
							} else {
								this.w += this.tens[num[i + 1]] + ' ' + this.card[num[i + 2]] + ' ' + this.th[num.length - i] + ' ';
							}
							i += 2;
							break;
					}
				}
			}
			//console.log(this.w);
			return this.w;
		}
	}, {
		key: 'convert1',
		value: function convert1() {
			var num = this.str;
			var card = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
			var i;
			this.w = '';
			for (i = 0; i < num.length; i++) {
				this.w += card[num[i]] + ' ';
			}
			return this.w;
		}
	}]);

	return NumToWord;
}();

exports.default = NumToWord;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// replace numbers
var ReplaceN = function () {
    function ReplaceN(ref, formedstr, str) {
        _classCallCheck(this, ReplaceN);

        this.ref = ref;
        this.str = str;
        this.formedstr = formedstr;
        this.count = 0;
    }

    _createClass(ReplaceN, [{
        key: 'compute',
        value: function compute() {
            this.ref.str = this.ref.str.replace(this.str, this.formedstr);
            this.count++;
            if (this.ref.store[this.ref.store.length - 1] == this.str) {
                document.getElementById('answer1').innerHTML = this.ref.str;
                //console.log(this.ref.str);
            }
        }
    }]);

    return ReplaceN;
}();

exports.default = ReplaceN;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //segregating hour, minutes and seconds from a given time


var _numToWord = __webpack_require__(0);

var _numToWord2 = _interopRequireDefault(_numToWord);

var _replace = __webpack_require__(1);

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Time = function () {
    function Time(ref, str) {
        _classCallCheck(this, Time);

        this.str = str;
        this.hr = '';
        this.min = '';
        this.sec = '';
        this.array = [];
        this.formedstr = '';
        this.ref = ref;
    }

    _createClass(Time, [{
        key: 'arrayForm',
        value: function arrayForm() {
            this.array = this.str.split(/[:]/);
        }
    }, {
        key: 'extract',
        value: function extract() {
            if (this.str.substring(this.str.length - 1).match(/[a-zA-Z]/)) {
                var i = 0;
                if (this.array.length == 3) {
                    this.hr = this.array[0];
                    this.min = this.array[1];
                    this.sec = this.array[2].substring(0, this.array[2].length - 2);
                } else if (this.array.length == 2) {
                    this.hr = this.array[0];
                    this.min = this.array[1].substring(0, this.array[1].length - 2);
                } else {
                    this.hr = this.array[0].substring(0, this.array[0].length - 2);
                }
            } else {
                if (this.array.length == 3) {
                    this.hr = this.array[0];
                    this.min = this.array[1];
                    this.sec = this.array[2];
                } else if (this.array.length == 2) {
                    this.hr = this.array[0];
                    this.min = this.array[1];
                } else {
                    this.hr = this.array[0];
                }
            }
            var obj1 = new _numToWord2.default(this.hr);
            if (this.min != '') {
                this.formedstr += obj1.convert() + ':';
                var obj2 = new _numToWord2.default(this.min);
                if (this.sec != '') {
                    this.formedstr += obj2.convert() + ':';
                    var obj3 = new _numToWord2.default(this.sec);
                    this.formedstr += obj3.convert();
                } else {
                    this.formedstr += obj2.convert();
                }
            } else {
                this.formedstr += obj1.convert();
            }
            var obj = new _replace2.default(this.ref, this.formedstr, this.str);
            obj.compute();
        }
    }, {
        key: 'output',
        value: function output() {
            var obj1 = new _numToWord2.default(this.hr);
            this.formedstr += obj1.convert() + ':';
            var obj2 = new _numToWord2.default(this.min);
            this.formedstr += obj2.convert() + ':';
            var obj3 = new _numToWord2.default(this.sec);
            this.formedstr += obj3.convert();
            return this.formedstr;
        }
    }]);

    return Time;
}();

exports.default = Time;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //segregating whole number and fractional part of a decimal number


var _numToWord = __webpack_require__(0);

var _numToWord2 = _interopRequireDefault(_numToWord);

var _replace = __webpack_require__(1);

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Decimal = function () {
    function Decimal(ref, str) {
        _classCallCheck(this, Decimal);

        this.str = str;
        this.storeWholeNum = '';
        this.storeFracNum = '';
        this.formedstr = '';
        this.ref = ref;
    }

    _createClass(Decimal, [{
        key: 'extract',
        value: function extract() {
            var i = 0;
            while (this.str.charAt(i) != '.') {
                i++;
            }
            this.storeWholeNum = this.str.substring(0, i);
            this.storeFracNum = this.str.substring(i + 1);
            if (!this.storeFracNum.charAt(this.storeFracNum.length - 1).match(/\d/)) {
                i = 0;
                while (this.storeFracNum.charAt(i).match(/\d/)) {
                    i++;
                }
            }
            var obj1 = new _numToWord2.default(this.storeWholeNum);
            this.formedstr += obj1.convert() + '.';
            var obj2 = new _numToWord2.default(this.storeFracNum.substring(0, i));
            this.formedstr += obj2.convert() + this.storeFracNum.substring(i);
            var obj3 = new _replace2.default(this.ref, this.formedstr, this.str);
            obj3.compute();
        }
    }, {
        key: 'output',
        value: function output() {
            var obj1 = new _numToWord2.default(this.storeWholeNum);
            this.formedstr += obj1.convert() + '.';
            var obj2 = new _numToWord2.default(this.storeFracNum);
            this.formedstr += obj2.convert();
            return this.formedstr;
        }
    }]);

    return Decimal;
}();

exports.default = Decimal;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _identifier = __webpack_require__(5);

var _identifier2 = _interopRequireDefault(_identifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputNum = function inputNum() {
    var i = document.getElementById('input1').value;
    var obj = new _identifier2.default(i);
    obj.identify();
}; //getting user input

var e = document.getElementById('b1');
if (e) {
    addEventListener('click', inputNum);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //Identifying numbers in a string


var _decider = __webpack_require__(6);

var _decider2 = _interopRequireDefault(_decider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Identifier = function () {
    function Identifier(str) {
        _classCallCheck(this, Identifier);

        this.str = str;
        this.array = str.split(' ');
        this.store = [];
    }

    _createClass(Identifier, [{
        key: 'identify',
        value: function identify() {
            var _this = this;

            var i, j, ref;
            for (i = 0; i < this.array.length; i++) {
                for (j = 0; j < this.array[i].length; j++) {
                    if (this.array[i].charAt(j).match(/\d/)) {
                        this.store.push(this.array[i]);
                        break;
                    }
                }
            }

            var _loop = function _loop(k) {
                ref = _this;

                setTimeout(function () {
                    var obj = new _decider2.default(ref, ref.store[k]);
                    obj.extract();
                }, 0);
            };

            for (var k = 0; k < this.store.length; k++) {
                var ref;

                _loop(k);
            }
        }
    }]);

    return Identifier;
}();

exports.default = Identifier;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //segregating identified string to specialCharNum, prePostfix and cardinal


var _cardinal = __webpack_require__(7);

var _cardinal2 = _interopRequireDefault(_cardinal);

var _specialCharNum = __webpack_require__(8);

var _specialCharNum2 = _interopRequireDefault(_specialCharNum);

var _prePostfix = __webpack_require__(13);

var _prePostfix2 = _interopRequireDefault(_prePostfix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Decider = function () {
    function Decider(ref, str1) {
        _classCallCheck(this, Decider);

        this.str = str1;
        this.specNum = '';
        this.prepost = '';
        this.card = '';
        this.ref = ref;
    }

    _createClass(Decider, [{
        key: 'extract',
        value: function extract() {
            if (this.str.match(/\d+[.]\d+|\d+[\/]\d+|[+]\d{12}|[0]\d{12}|\d{1,2}[:][0-5][0-9]|\d{1,4}[-]\d{1,2}[-]\d{1,4}|\d{1,4}[\/]\d{1,2}[\/]\d{1,4}/)) {
                this.specNum = this.str;
                var obj2 = new _specialCharNum2.default(this.ref, this.specNum);
                obj2.check();
            } else if (this.str.match(/^\d+$/)) {
                this.card = this.str;
                var obj1 = new _cardinal2.default(this.ref, this.card);
                obj1.send();
            } else {
                this.prepost = this.str;
                var obj3 = new _prePostfix2.default(this.ref, this.prepost);
                obj3.extract();
            }
        }
    }]);

    return Decider;
}();

exports.default = Decider;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //send cardinal numbers to numToWord

var _numToWord = __webpack_require__(0);

var _numToWord2 = _interopRequireDefault(_numToWord);

var _replace = __webpack_require__(1);

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cardinal = function () {
    function Cardinal(ref, str) {
        _classCallCheck(this, Cardinal);

        this.str = str;
        this.answer = '';
        this.ref = ref;
    }

    _createClass(Cardinal, [{
        key: 'send',
        value: function send() {
            var obj = new _numToWord2.default(this.str);
            this.answer = obj.convert();
            var obj1 = new _replace2.default(this.ref, this.answer, this.str);
            obj1.compute();
        }
    }, {
        key: 'output',
        value: function output() {
            var obj = new _numToWord2.default(this.str);
            this.answer = obj.convert();
            return this.answer;
        }
    }]);

    return Cardinal;
}();

exports.default = Cardinal;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //segregating phone no, time and date from a string with special characters


var _date = __webpack_require__(9);

var _date2 = _interopRequireDefault(_date);

var _time = __webpack_require__(2);

var _time2 = _interopRequireDefault(_time);

var _phoneNo = __webpack_require__(10);

var _phoneNo2 = _interopRequireDefault(_phoneNo);

var _deciFrac = __webpack_require__(11);

var _deciFrac2 = _interopRequireDefault(_deciFrac);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecialCharNum = function () {
    function SpecialCharNum(ref, str) {
        _classCallCheck(this, SpecialCharNum);

        this.str = str;
        this.store = '';
        this.storeDate = '';
        this.storeTime = '';
        this.storePhoneNo = '';
        this.decfra = '';
        this.ref = ref;
    }

    _createClass(SpecialCharNum, [{
        key: 'check',
        value: function check() {
            var i;
            if (this.str.charAt(0) == '+') {
                this.storePhoneNo = this.str;
                var obj3 = new _phoneNo2.default(this.ref, this.storePhoneNo);
                obj3.extract();
            }
            for (i = 0; i < this.str.length; i++) {
                if (this.str.charAt(i) == ':') {
                    this.storeTime = this.str;
                    var obj2 = new _time2.default(this.ref, this.storeTime);
                    obj2.arrayForm();
                    obj2.extract();
                    break;
                }
            }
            if (this.str.match(/\d{1,4}[-]\d{1,2}[-]\d{1,4}|\d{1,4}[\/]\d{1,2}[\/]\d{1,4}/)) {
                this.storeDate = this.str;
                var obj1 = new _date2.default(this.ref, this.storeDate);
                obj1.arrayForm();
                obj1.extract();
            }
            if (this.str.match(/\d+[.]\d+|\d+[\/]\d+/)) {
                this.decfra = this.str;
                var obj4 = new _deciFrac2.default(this.ref, this.decfra);
                obj4.extract();
            }
        }
    }]);

    return SpecialCharNum;
}();

exports.default = SpecialCharNum;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //segregating day month year from a date string


var _numToWord = __webpack_require__(0);

var _numToWord2 = _interopRequireDefault(_numToWord);

var _replace = __webpack_require__(1);

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Date = function () {
    function Date(ref, str) {
        _classCallCheck(this, Date);

        this.str = str;
        this.array = [];
        this.year = '';
        this.month = '';
        this.day = '';
        this.formedstr = '';
        this.ref = ref;
    }

    _createClass(Date, [{
        key: 'arrayForm',
        value: function arrayForm() {
            this.array = this.str.split(/[-/.]/);
        }
    }, {
        key: 'extract',
        value: function extract() {
            if (this.array[0].length == 4) {
                this.year = this.array[0];
                this.month = this.array[1];
                this.day = this.array[2];
            } else if (this.array[2].length == 4) {
                this.year = this.array[2];
                this.month = this.array[1];
                this.day = this.array[0];
            }
            var obj = new _numToWord2.default(this.year);
            this.formedstr += obj.convert() + '-';
            var obj1 = new _numToWord2.default(this.month);
            this.formedstr += obj1.convert() + '-';
            var obj2 = new _numToWord2.default(this.day);
            this.formedstr += obj2.convert();
            var obj3 = new _replace2.default(this.ref, this.formedstr, this.str);
            obj3.compute();
        }
    }, {
        key: 'output',
        value: function output() {
            var obj = new _numToWord2.default(this.year);
            this.formedstr += obj.convert() + '-';
            var obj1 = new _numToWord2.default(this.month);
            this.formedstr += obj1.convert() + '-';
            var obj2 = new _numToWord2.default(this.day);
            this.formedstr += obj2.convert();
            return this.formedstr;
        }
    }]);

    return Date;
}();

exports.default = Date;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //extracting the number part from a phone no


var _numToWord = __webpack_require__(0);

var _numToWord2 = _interopRequireDefault(_numToWord);

var _replace = __webpack_require__(1);

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhoneNo = function () {
    function PhoneNo(ref, str) {
        _classCallCheck(this, PhoneNo);

        this.str = str;
        this.storeCode = '';
        this.storeNo = '';
        this.formedstr = '';
        this.ref = ref;
    }

    _createClass(PhoneNo, [{
        key: 'extract',
        value: function extract() {
            var i = 1;
            while (this.str.charAt(i) != '-') {
                i++;
            }
            this.storeCode = this.str.substring(1, i);
            this.storeNo = this.str.substring(i + 1);
            var obj1 = new _numToWord2.default(this.storeCode);
            this.formedstr = '+' + obj1.convert1() + '-';
            var obj2 = new _numToWord2.default(this.storeNo);
            this.formedstr += obj2.convert1();
            var obj = new _replace2.default(this.ref, this.formedstr, this.str);
            obj.compute();
        }
    }, {
        key: 'output',
        value: function output() {
            var obj1 = new _numToWord2.default(this.storeCode);
            this.formedstr = '+' + obj1.convert1() + '-';
            var obj2 = new _numToWord2.default(this.storeNo);
            this.formedstr += obj2.convert1();
            return this.formedstr;
        }
    }]);

    return PhoneNo;
}();

exports.default = PhoneNo;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //calling fraction and decimal classes after segregation


var _decimal = __webpack_require__(3);

var _decimal2 = _interopRequireDefault(_decimal);

var _fraction = __webpack_require__(12);

var _fraction2 = _interopRequireDefault(_fraction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeciFrac = function () {
    function DeciFrac(ref, str) {
        _classCallCheck(this, DeciFrac);

        this.str = str;
        this.storeDeci = '';
        this.storeFrac = '';
        this.ref = ref;
    }

    _createClass(DeciFrac, [{
        key: 'extract',
        value: function extract() {
            var i;
            for (i = 0; i < this.str.length; i++) {
                if (this.str.charAt(i) == '/') {
                    this.storeFrac = this.str;
                    var obj2 = new _fraction2.default(this.ref, this.storeFrac);
                    obj2.extract();
                    break;
                }
            }
            if (i == this.str.length) {
                this.storeDeci = this.str;
                var obj1 = new _decimal2.default(this.ref, this.storeDeci);
                obj1.extract();
            }
        }
    }]);

    return DeciFrac;
}();

exports.default = DeciFrac;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //segregating numerator and denominator from a fractional number


var _numToWord = __webpack_require__(0);

var _numToWord2 = _interopRequireDefault(_numToWord);

var _replace = __webpack_require__(1);

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fraction = function () {
    function Fraction(ref, str) {
        _classCallCheck(this, Fraction);

        this.str = str;
        this.storeNum = '';
        this.storeDen = '';
        this.formedstr = '';
        this.ref = ref;
    }

    _createClass(Fraction, [{
        key: 'extract',
        value: function extract() {
            var i = 0;
            while (this.str.charAt(i) != '/') {
                i++;
            }
            this.storeNum = this.str.substring(0, i);
            this.storeDen = this.str.substring(i + 1);
            var obj1 = new _numToWord2.default(this.storeNum);
            this.formedstr += obj1.convert() + '/';
            var obj2 = new _numToWord2.default(this.storeDen);
            this.formedstr += obj2.convert();
            var obj3 = new _replace2.default(this.ref, this.formedstr, this.str);
            obj3.compute();
        }
    }, {
        key: 'output',
        value: function output() {
            var obj1 = new _numToWord2.default(this.storeNum);
            this.formedstr += obj1.convert() + '/';
            var obj2 = new _numToWord2.default(this.storeDen);
            this.formedstr += obj2.convert();
            return this.formedstr;
        }
    }]);

    return Fraction;
}();

exports.default = Fraction;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //extracting time, decimal, ordinal and prefixsufix number from a given string with a sufix prefix


var _time = __webpack_require__(2);

var _time2 = _interopRequireDefault(_time);

var _ordinal = __webpack_require__(14);

var _ordinal2 = _interopRequireDefault(_ordinal);

var _decimal = __webpack_require__(3);

var _decimal2 = _interopRequireDefault(_decimal);

var _sufixPrefix = __webpack_require__(15);

var _sufixPrefix2 = _interopRequireDefault(_sufixPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrePostfix = function () {
    function PrePostfix(ref, str) {
        _classCallCheck(this, PrePostfix);

        this.str = str;
        this.storeSufPre = '';
        this.storeOrdinal = '';
        this.storeTime = '';
        this.storeDecimal = '';
        this.ref = ref;
    }

    _createClass(PrePostfix, [{
        key: 'extract',
        value: function extract() {
            var s1 = this.str.substring(this.str.length - 2),
                i;
            if (s1 == 'st' || s1 == 'nd' || s1 == 'rd' || s1 == 'th') {
                this.storeOrdinal = this.str;
                var obj1 = new _ordinal2.default(this.ref, this.storeOrdinal);
                obj1.extract();
            } else if (s1 == 'am' || s1 == 'pm') {
                this.storeTime = this.str;
                var obj2 = new _time2.default(this.ref, this.storeTime);
                obj2.arrayForm();
                obj2.extract();
            } else {
                if (this.str.match(/\d+[.]\d+|\d+[\/]\d+/)) {
                    this.storeDecimal = this.str;
                    var obj3 = new _decimal2.default(this.storeDecimal);
                    obj3.extract();
                } else {
                    this.storeSufPre = this.str;
                    var obj4 = new _sufixPrefix2.default(this.ref, this.storeSufPre);
                    obj4.extract();
                }
            }
        }
    }]);

    return PrePostfix;
}();

exports.default = PrePostfix;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //segregating number and it's ordinal sufix from an ordinal numbers


var _numToWord = __webpack_require__(0);

var _numToWord2 = _interopRequireDefault(_numToWord);

var _replace = __webpack_require__(1);

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ordinal = function () {
    function Ordinal(ref, str) {
        _classCallCheck(this, Ordinal);

        this.str = str;
        this.storeUnit = '';
        this.storeOrd = '';
        this.formedstr = '';
        this.ref = ref;
    }

    _createClass(Ordinal, [{
        key: 'extract',
        value: function extract() {
            var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
            var tensord = ['twentieth', 'thirtieth', 'fortieth', 'fiftieth', 'sixtieth', 'seventieth', 'eightieth', 'ninetieth'];
            this.storeUnit = this.str.substring(0, this.str.length - 2);
            this.storeOrd = this.str.substring(this.str.length - 2);
            var obj = new _numToWord2.default(this.storeUnit);
            this.formedstr += obj.convert();
            var arr = this.formedstr.split(' ');
            if (arr[arr.length - 1] == 'three') {
                arr[arr.length] = 'third';
            } else if (arr[arr.length - 1] == 'one') {
                arr[arr.length - 1] = 'first';
                this.formedstr = arr.join(' ');
            } else if (arr[arr.length - 1] == 'two') {
                arr[arr.length - 1] = 'second';
                this.formedstr = arr.join(' ');
            } else if (arr[arr.length - 1] == 'eight') {
                arr[arr.length - 1] = 'eighth';
                this.formedstr = arr.join(' ');
            } else if (arr[arr.length - 1] == 'five') {
                arr[arr.length - 1] = 'fifth';
                this.formedstr = arr.join(' ');
            } else if (arr[arr.length - 1] == 'nine') {
                arr[arr.length - 1] = 'ninth';
                this.formedstr = arr.join(' ');
            } else if (tens.includes(arr[arr.length - 1])) {
                var i = 0;
                while (tens[i] != arr[arr.length - 1]) {
                    i++;
                }
                arr[arr.length - 1] = tensord[i];
            } else {
                this.formedstr += this.storeOrd;
            }
            var obj3 = new _replace2.default(this.ref, this.formedstr, this.str);
            obj3.compute();
        }
    }, {
        key: 'output',
        value: function output() {
            var obj1 = new _numToWord2.default(this.storeUnit);
            this.formedstr += obj1.convert() + this.storeOrd;
            return this.formedstr;
        }
    }]);

    return Ordinal;
}();

exports.default = Ordinal;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //segreegating number, prefix and sufix from a string with prefix and sufix


var _numToWord = __webpack_require__(0);

var _numToWord2 = _interopRequireDefault(_numToWord);

var _replace = __webpack_require__(1);

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SufixPrefix = function () {
    function SufixPrefix(ref, str) {
        _classCallCheck(this, SufixPrefix);

        this.str = str;
        this.sufix = '';
        this.prefix = '';
        this.num = '';
        this.formedstr = '';
        this.ref = ref;
    }

    _createClass(SufixPrefix, [{
        key: 'extract',
        value: function extract() {
            var i = 0,
                j;
            while (!this.str.charAt(i).match(/\d/)) {
                i++;
            }
            this.prefix = this.str.substring(0, i);
            j = i;
            while (this.str.charAt(i).match(/\d/)) {
                i++;
            }
            this.num = this.str.substring(j, i);
            this.sufix = this.str.substring(i);
            var obj = new _numToWord2.default(this.num);
            this.formedstr = this.prefix + obj.convert() + this.sufix;
            var obj3 = new _replace2.default(this.ref, this.formedstr, this.str);
            obj3.compute();
        }
    }]);

    return SufixPrefix;
}();

exports.default = SufixPrefix;

/***/ })
/******/ ]);