
let string= "Atul verma";
let rcount = 40;

console.log(string + rcount);

console.log(`hello my name is ${string} and rcount is ${rcount}`);

const gameover = new String('thisisbusiness');
console.log(gameover[0]);
console.log(gameover.__proto___);
console.log(gameover.toUpperCase());
console.log(gameover.charAt(2));

const news = gameover.substring(0,4);
console.log(news);
const another = gameover.slice(-14,9);
//in slice we can strart with negative also 
console.log(another);


// trim left right ki places ko hata dega


let trimkaro = ("  thisis business   ");
console.log(trimkaro.trim());
console.log(trimkaro);
console.log(trimkaro.replace("thisis " ,"sunder"));
console.log(trimkaro.includes("sunder"));
console.log(trimkaro.split("  "));









