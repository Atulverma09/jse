//array koi bhi data le leta hai

let heros =["sk","ka","vd","ak","av"];
let heroines = ["pc","kr","apn"];

heros.push(heroines);
console.log(heros);
console.log(heroines);

let her =["sk","ka",["vd","ak","av"]];
const hiir = her.flat(Infinity);
console.log(hiir);

let newarray = heros.concat(heroines);
console.log("A"+ newarray);


const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));


// string ko array me banana ho to bat karo

const av = "atulverma";
console.log(Array.isArray(av));
console.log(Array.from(av));
console.log(Array.from({name : "atul"}));  //interesting 
//isko batana padta hai ki apan ki key ka array banana hai ya 
//




