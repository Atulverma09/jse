//Functions with objects and array in javascript |

//this is rest operator in function (...)
function calculateprice (...price){

     return price
}

console.log(calculateprice(200,300,400,222,1111))

const user ={
    name  : "adgjkl",
   price : 299
}

function jp (anyy) {
                                             
    console.log(`name is ${anyy.name} and price is ${anyy.price}`);
}
//jp(user)


//direct bhi pas kar sakte hai guys
jp({
    name : "asjjjjjjjjjjjjjjjj",
    price: 2341111
})


//now we are passing in array

const arr = [1,2,3,4,5,5,66,6,7]

function findse (se){
     return se[2]
}

console.log(findse(arr))
console.log(findse([1,2,3,4,5])) //this is direct we are passing 

