//Global and local scope in javascript
// if(true){
//     const a =10;
//     let b =10;         ye pura if block scope hai guyz
//     var c = 20;
// }

const g = 1;         //ye hai apna global scope can access

//console.log(a);
//console.log(b);
//console.log(c);     //this is the the reason why we do not use (var) 

console.log(addone(5));
function addone (num){    //this can print uper bhi 

    return num+1;
}
//console.log(addi(5))  this is wrong you can not use before defining variable
const addi = function(num){
    return num+1;
}
console.log(addi(5))


if(true){
    const gg =12;
    if(gg == 12){
        console.log("jofjiaefafif")
        const patt = "chapr"

    }
    console.log(patt); //it will not print bahar hai

}

console.log(gg); // it will not print bahar hai












