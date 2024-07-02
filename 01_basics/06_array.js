const arr = [1,2,3,4,5,6,6,7];

console.log(arr);

console.log(arr.length);
console.log(arr.toLocaleString());

console.log(arr.slice(1,3));
console.log(arr);

console.log(arr.splice(1,3));
console.log(arr);

arr.push(17);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(17);
console.log(arr);

arr.shift(17);
console.log(arr);

console.log(arr.includes(5));



//array make sallow copy means changes in original array also