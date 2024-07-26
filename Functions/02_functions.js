//Functions with objects and array

//Rest operator

function  itemsPrice(...item1){
    return item1
}

console.log(itemsPrice(200,300,400,500));//output: [ 200, 300, 400, 500 ]

function  itemPrice(items1, items2,...items3){
    return items3
}

console.log(itemPrice(200,300,400,500));//output: [ 400, 500 ]

const credential = {
    username:"Sanjay",
    password:"password",
    serialNumber:123456
}

function credentialObject(credentialObject){
    console.log(`Username is ${credentialObject.username} and serial number is ${credentialObject.serialNumber}`);
}

//credentialObject(credential)//output:Username is Sanjay and serial number is 123456

credentialObject({
    username:"Sam",
    serialNumber:7777
})

//output:Username is Sam and serial number is 7777

const arrayValue = [200, 300,400,500];

function returnarrayValue(array){
    return array[2]
}

//console.log(returnarrayValue(arrayValue));//0utput: 400
console.log(returnarrayValue([200, 300,400,500]));//0utput: 400