//this and arrow function in java

const obj = {
      usernm : "atulvvv",
      price: 355,
      welcomeMessage: function(){
        console.log(`${this.usernm} , welcome to the website`)
        console.log(this)
      }

}

obj.welcomeMessage()
console.log(this)

//browser ke ander jo global object hai wo hai window object


//arrow function
//ways to represent   .............................
const abb = (num1 , num2) => {
    return num1+num2
}

console.log(abb(3,7))

const abba = (num1 , num2) =>(num1+num2)
console.log(abba(2,4))


const abbatt = (num1 , num2) =>num1+num2
console.log(abbatt(2,41))