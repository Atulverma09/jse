//object de-structure and json
const billu = {
    name:"atul",
    age: 19,
    classowner:"ajoo"
}
// isme apne ko direct value nikal sakte hai
// aur apan ne classowner ko myclass banke value destructure kar di
const {classowner : myclass} = billu;
console.log(myclass);


let {age : umar} = billu;
console.log(umar);

//json 
// json formatter

{
    "name":"av",
    "age": "19"
}

[
    {},
    {},
    {},
    {}
]



