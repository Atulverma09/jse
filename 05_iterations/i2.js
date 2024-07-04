//for each loop

const lan = ["cpp","cp","java","python","ruby"]

lan.forEach(function(val){
    console.log(val);
})

lan.forEach((val ,index,arr) =>{
    console.log(val ,index,arr);
})


//by reference

function printme(nex){
    console.log(nex+"hhh");
    
}

lan.forEach(printme );




//direct access

const mycod = [
    {
        arr: "arr.length",
        str : "str.length"
    }
]
mycod.forEach((ilu)=>{
    console.log(ilu.arr);
})