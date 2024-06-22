//object assign karna 

const obj1 = { 1:"a" , 'b':2,'c':3}
const obj2 = {'d':4, 'e':5, 'f':6}
const obj3 = {'g':5, 'h':8, 'i':9}

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

const obj5 = { ...obj1, ...obj2, ...obj3};
console.log(obj5);


const will ={

    name: "av",
    id : 12,
    mail: "add.com"
}
console.log(will);
console.log(Object.keys(will));
console.log(Object.values(will));
console.log(Object.entries(will))
console.log(will.hasOwnProperty('id'))