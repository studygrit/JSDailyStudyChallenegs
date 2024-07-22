const userManager = {
    name:"Tiger", //-->key:value (key value pairs)
    "full name":"Tiger Shroff",
    symbolInfo:"Batman",
    age:30,
    location:"Mumbai",
    email:"tiger@yahoo.com",
    isLoggedIn: true,
    lastLoginDays:["Wednesday", "Friday"]

}

userManager.invitation = function(){
    console.log("Hi! Tiger");
}
userManager.second_invitation = function(){
    console.log(`Hi! ${this.name}`);//string interpolation
}

console.log(userManager.invitation);//output: [Function (anonymous)]
console.log(userManager.invitation());//output: Hi! Tiger
console.log(userManager.second_invitation());//output: Hi! Tiger