const instaUser = new Object();//Singleton object

console.log(instaUser);//output:{} -->empty object

const fbUser = {};//Non singleton object
console.log(fbUser);//output:{} -->empty object

const xUser ={};

xUser.owner = "Elon Musk";
xUser.companyname = "Twitter";
xUser.motto = "Blaze your glory!";

console.log(xUser);
//output:
/*
{
  owner: 'Elon Musk',
  companyname: 'Twitter',
  motto: 'Blaze your glory!'
}
*/

console.log(Object.entries(xUser));
/*
[
  [ 'owner', 'Elon Musk' ],
  [ 'companyname', 'Twitter' ],
  [ 'motto', 'Blaze your glory!' ]
]
*/

console.log(xUser.hasOwnProperty('owner'));//output:true
console.log(xUser.hasOwnProperty('place'));//output:false

const tiktokUser = {
  email:"tiger@gmail.com",
  fullname:{
    userfullname:{
      firstname:"Tiger",
      lastname:"Shroff"
    }
  }
}

console.log(tiktokUser.fullname);//output: { userfullname: { firstname: 'Tiger', lastname: 'Shroff' } }

console.log(tiktokUser.fullname.userfullname);//output:{ firstname: 'Tiger', lastname: 'Shroff' }

console.log(tiktokUser.fullname.userfullname.firstname);//output:Tiger

console.log(Object.keys(tiktokUser))//output:[ 'email', 'fullname' ]
console.log(Object.values(tiktokUser))
/*
[
  'tiger@gmail.com',
  { userfullname: { firstname: 'Tiger', lastname: 'Shroff' } }
]
*/

console.log(Object.entries(tiktokUser))
/*
[
  [ 'email', 'tiger@gmail.com' ],
  [ 'fullname', { userfullname: [Object] } ]
]
*/


const firstObject = {1:"a", 2:"b"};
const secondObject = {3:"a", 4:"b"};

const thirdObject= {firstObject, secondObject};

console.log(thirdObject);
/*
output:
{
  firstObject: { '1': 'a', '2': 'b' },
  secondObject: { '3': 'a', '4': 'b' }
}
*/

const first_Object = {1:"P", 2:"Q"};
const second_Object = {3:"R", 4:"S"};

//const third_Object = Object.assign(first_Object, second_Object);//output:{ '1': 'P', '2': 'Q', '3': 'R', '4': 'S' }
//const third_Object = Object.assign({},first_Object, second_Object);//output:{ '1': 'P', '2': 'Q', '3': 'R', '4': 'S' }

const third_Object = {...first_Object, ...second_Object}
console.log(third_Object);