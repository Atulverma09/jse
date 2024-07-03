// ye ek singleton object hai 
//const  tinder = new Object()


const tinder ={}
//ye ek non-singleton object hai

tinder.id ="at8u";
tinder.mail = "aaaa@gmail";
tinder.islogin = false;
console.log(tinder)


const rUser = {
    name: "jilo",
    kaam :{
        afcat : "Audi",
        gafcat: "jpo",
        bag :{
            av: "as"
        }
    }
}
console.log(rUser.kaam.bag)


//object assign karna 

const obj1 = { 1:"a" , 'b':2,'c':3}
const obj2 = {'d':4, 'e':5, 'f':6}
const obj3 = {'g':4, 'h':8, 'i':9}

const obj4 = Object.assign({}, obj1, obj2, obj3);
//this is good to apply{} in it give perfect value
console.log(obj4);

const obj5 = { ...obj1, ...obj2, ...obj3};
//it spreads value spread 
console.log(obj5);


const will ={

    name: "av",
    id : 12,
    mail: "add.com"
}
console.log(will);
console.log(Object.keys(will));  //provide key  using array
console.log(Object.values(will));// provide values using array
console.log(Object.entries(will));//provides entries both in array
console.log(will.hasOwnProperty('id'))