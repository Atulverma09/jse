//control flow also called logic control

//==,!=,<=,===


if(2 =="2"){
    console.log("executed")   // not strict checking
}

if(2 ==="2"){
    console.log("executed")   // not strict checking
}

//falsy values  false 0,-0,BigInt 0n,"",null,
//undefined,//NaN


//truthy values  "0",'false'," ",[],{},function(){}

//for array check
if(Array.length ==0){

}

//for object check
// if(Object(id).length){

// }

//null coalescing operator(??) : null undefined

let val1 = 5??10;   //jo pehle wo
let val111 = null??10;
let val12 = undefined??10;

console.log(val1);
console.log(val111);
console.log(val12);


//ternery operator
//condition ? true: false

const ice = 100;
ice>=80 ?console.log("uyes"):console.log("gm")