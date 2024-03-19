//Inserting export default to the User class is a cleaner way to export
//default export can only be applied to one 'thing' in a file. It is
//usually going to be the class
export default class User {
    constructor(name, age) {
        this.name= name;
        this.age = age;
    }
}

//A regular export can be add to the front of a function
//this will export just the function the keyword export is
//in front of.
export function printName(user) {
    console.log(`User's name is ${user.name}`);
}

export function printAge(user) {
    console.log(`User is ${user.age} years old`);
}

/* ('Clunky way to export)
//default 'thing' for user.js
//Both together will export the User class and the named functions
export default User

//Normal export format. This will export named functions from the User class
export { printName, printAge }*/