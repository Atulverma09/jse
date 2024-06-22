//object literals
const obUser = {
    name : "Atul",
    age : 21,
    salary : 100000,
    email: "av@gmailcom",
    islogin : false,
    lastlogin : ["monday","tuesday","wednesday"]
}

console.log(obUser.age);
console.log(typeof obUser.email);

console.log(obUser["email"])
console.log(typeof obUser["age"]);

console.log(obUser.lastlogin);
console.log(typeof obUser.lastlogin);

console.log(obUser["lastlogin"])
console.log(typeof obUser["lastlogin"]);
