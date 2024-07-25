//functions
function myName (){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("Y");
}

myName();
/*
M
R
I
N
A
L
*/

function addition(num1, num2){ //Here num1 and num2 are parameters.
console.log(num1 + num2);
}

//addition();//output: NaN
//addition(5,5);//output: 10
//addition(5,"5");//output: 55
//addition(5,"a");//output: 5a
addition(5, null);//output: 5 //Here 5 & null are arguements.


function multiplication(num1, num2){
    console.log(num1*num2);
}

const value = multiplication(5, 5); //output:25

console.log("Value: ", value);//output: undefined

function substraction(num1, num2){
    let finalValue = num1 - num2;
    return finalValue
}

//const finalValue = substraction(5, 5); 
const finalValue = substraction(5, 6); 

//console.log("Value: ", finalValue);//output:0
console.log("Value: ", finalValue);//output:-1

function signinMessage(name){
    return `${name} logged in today.`
}

//console.log(signinMessage("Sanjay"));//output:Sanjay logged in today.
//console.log(signinMessage(""));//output: logged in today.
console.log(signinMessage());//output: undefined logged in today.

