"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _user = _interopRequireWildcard(require("/es_module_practice/user.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//When importing from javascript use the 'import'
//keyword and the 'thing' to be imported. Also needs to have
//the from keyword and the file listed in either a relative path
//form or an absolute path form.
//If we want to import 'things' other than the default export,
//following the default a comma needs to be added, then the 'things'
// to be imported need to be listed inside curly brackets and just the
//same as they are named in the file they are exported from.
//If we want to change the name of the function imported the original 
//name needs to be followed by 'as' and then the new name.
//If you want to import a 'thing' that doesn't have a default it needs
//to be named inside curly brackets
var user = new _user["default"]('Bob', 11);
console.log(user);
(0, _user.printName)(user);
(0, _user.printAge)(user);