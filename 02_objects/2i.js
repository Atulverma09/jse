//interview question 
let sym = Symbol("atulvellnsf");

const we = {
    name: "atul",
    class: 100,
    [sym]: "mynear",
    myemail: "atulvera.com"

}
// console.log(we[sym]);
// we.myemail= "atulmits.com";
// console.log(we.myemail);
// Object.freeze(we);
// we.myemail= "atulnpfhsschool.com";

// console.log(we.myemail);

we.fun = function(){
    console.log("hello i user");
}
console.log(we.fun());

we.fun1 = function(){
    console.log(`hello i user , ${this.name}`);
}
console.log(we.fun1());