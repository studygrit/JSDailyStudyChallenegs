//global and block scope
//let var scope
let x = 100;
const y = 200;  //---> global scope
var z = 300;

console.log(x);//output:100
console.log(y);//output:200
console.log(z);//output:300




let a = 3;

if(true){
    let a = 300;
    console.log("BLOCK:A", a);
}

console.log(a);//output:3

const b = 4; 

if(true){
    const b = 400;
    console.log("BLOCK:B", b);
}

console.log(b);//output: 4

var c= 5;

if(true){
  //--->block scope
var c = 500;
console.log("BLOCK:C", c);
}


console.log(c);//output:500