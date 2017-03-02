!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.MyModule=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.main = undefined;

var _moduleA = _dereq_('./moduleA');

var moduleA = _interopRequireWildcard(_moduleA);

var _moduleB = _dereq_('./moduleB');

var moduleB = _interopRequireWildcard(_moduleB);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function main() {
    moduleA.testA();
    moduleB.testB();

    console.log('PI = ' + moduleA.PI);
}

//global export
exports.main = main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZDEyZjZiZjEuanMiXSwibmFtZXMiOlsibW9kdWxlQSIsIm1vZHVsZUIiLCJtYWluIiwidGVzdEEiLCJ0ZXN0QiIsImNvbnNvbGUiLCJsb2ciLCJQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztJQUFZQSxPOztBQUNaOztJQUFZQyxPOzs7O0FBRVosU0FBU0MsSUFBVCxHQUFlO0FBQ1hGLFlBQVFHLEtBQVI7QUFDQUYsWUFBUUcsS0FBUjs7QUFFQUMsWUFBUUMsR0FBUixXQUFvQk4sUUFBUU8sRUFBNUI7QUFDSDs7QUFFRDtRQUNRTCxJLEdBQUFBLEkiLCJmaWxlIjoiZmFrZV9kMTJmNmJmMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vZHVsZUEgZnJvbSAnLi9tb2R1bGVBJztcclxuaW1wb3J0ICogYXMgbW9kdWxlQiBmcm9tICcuL21vZHVsZUInO1xyXG5cclxuZnVuY3Rpb24gbWFpbigpe1xyXG4gICAgbW9kdWxlQS50ZXN0QSgpO1xyXG4gICAgbW9kdWxlQi50ZXN0QigpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhgUEkgPSAke21vZHVsZUEuUEl9YCk7XHJcbn1cclxuXHJcbi8vZ2xvYmFsIGV4cG9ydFxyXG5leHBvcnQge21haW59OyJdfQ==
},{"./moduleA":2,"./moduleB":3}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testA = testA;
function testA() {
    console.log("Module A");
}

var PI = exports.PI = 3.14;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZUEuanMiXSwibmFtZXMiOlsidGVzdEEiLCJjb25zb2xlIiwibG9nIiwiUEkiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQWdCQSxLLEdBQUFBLEs7QUFBVCxTQUFTQSxLQUFULEdBQWdCO0FBQ25CQyxZQUFRQyxHQUFSLENBQVksVUFBWjtBQUNIOztBQUVNLElBQU1DLGtCQUFLLElBQVgiLCJmaWxlIjoibW9kdWxlQS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0ZXN0QSgpe1xyXG4gICAgY29uc29sZS5sb2coXCJNb2R1bGUgQVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBJID0gMy4xNDsiXX0=
},{}],3:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testB = testB;
function testB() {
    console.log("Module B");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZUIuanMiXSwibmFtZXMiOlsidGVzdEIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsSyxHQUFBQSxLO0FBQVQsU0FBU0EsS0FBVCxHQUFnQjtBQUNuQkMsWUFBUUMsR0FBUixDQUFZLFVBQVo7QUFDSCIsImZpbGUiOiJtb2R1bGVCLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRlc3RCKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1vZHVsZSBCXCIpO1xyXG59Il19
},{}]},{},[1])
(1)
});