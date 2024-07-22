//Objects are declared in two ways. 
//-->Object constructors
//-->Object literals
//When objects are declared as literals then singleton is not formed but when it is declared as constructors then singleton is formed.
//Object.create --> It is used in constructor method where singleton is formed.

//Here we will learn about object literals.

const symbolInfo = Symbol("Batman")

const userManager = {
    name:"Tiger", //-->key:value (key value pairs)
    "full name":"Tiger Shroff",
    symbolInfo:"Batman",
    [symbolInfo]:"superman",
    [symbolInfo]:"flash",
    age:30,
    location:"Mumbai",
    email:"tiger@yahoo.com",
    isLoggedIn: true,
    lastLoginDays:["Wednesday", "Friday"]

}

console.log(userManager.email);//output: tiger@yahoo.com
console.log(userManager["email"]);//output: tiger@yahoo.com
//console.log(userManager[email]);//output: error

//console.log(userManager.full name);//output: error
console.log(userManager["full name"]);//output: Tiger Shroff
console.log(userManager.symbolInfo);//output:Batman
console.log(typeof userManager.symbolInfo);//output:string
console.log(userManager [symbolInfo]);//output:flash
console.log(typeof userManager [symbolInfo]);//output:superman

userManager.email ="tiger@xyz.com"
console.log(userManager);

/*
{
  name: 'Tiger',
  'full name': 'Tiger Shroff',
  symbolInfo: 'Batman',
  age: 30,
  location: 'Mumbai',
  email: 'tiger@xyz.com',
  isLoggedIn: true,
  lastLoginDays: [ 'Wednesday', 'Friday' ],
  [Symbol(Batman)]: 'flash'
}
*/

Object.freeze(userManager)//Object.freeze() is a method in JavaScript that is used to freeze an object. Freezing an object means that once it is frozen, you cannot add new properties to the object, modify existing properties, or delete existing properties.

userManager.email="tiger@gmail.com"
console.log(userManager);

/*
{
  name: 'Tiger',
  'full name': 'Tiger Shroff',
  symbolInfo: 'Batman',
  age: 30,
  location: 'Mumbai',
  email: 'tiger@xyz.com',
  isLoggedIn: true,
  lastLoginDays: [ 'Wednesday', 'Friday' ],
  [Symbol(Batman)]: 'flash'
}
*/
