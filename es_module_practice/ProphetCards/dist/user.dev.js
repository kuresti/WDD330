"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printName = printName;
exports.printAge = printAge;
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Inserting export default to the User class is a cleaner way to export
//default export can only be applied to one 'thing' in a file. It is
//usually going to be the class
var User = function User(name, age) {
  _classCallCheck(this, User);

  this.name = name;
  this.age = age;
}; //A regular export can be add to the front of a function
//this will export just the function the keyword export is
//in front of.


exports["default"] = User;

function printName(user) {
  console.log("User's name is ".concat(user.name));
}

function printAge(user) {
  console.log("User is ".concat(user.age, " years old"));
}
/* ('Clunky way to export)
//default 'thing' for user.js
//Both together will export the User class and the named functions
export default User

//Normal export format. This will export named functions from the User class
export { printName, printAge }*/