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
import User,  { printName as printUserName, printAge } from '/es_module_practice/user.js';

const user = new User('Bob', 11);
console.log(user);
printUserName(user);
printAge(user);