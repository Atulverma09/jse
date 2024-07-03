//Immediately Invoked Function Expressions IIFE

//global scope pollution ko hatane ke liye humne iige ka use kiya hai

(function adf () {       //named iife
    console.log(`db connected`)
})();

( ()=> {                // unnamed iife
    console.log(`db connected tututt`)
})();

( (name)=> {                //parameter
    console.log(`db connected tututt , ${name}`)
})('atesh')

