//array koi bhi data le leta hai

let heros =["sk","ka","vd","ak","av"];
let heroines = ["pc","kr","apn"];

heros.push(heroines);
console.log(heros);
console.log(heroines);


let newarray = heros.concat(heroines);
console.log("A"+ newarray);


const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));


