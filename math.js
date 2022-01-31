// const muNumber = -5;
// const output = Math.abs(muNumber);

// const myNumber = 2.22398;
// const output = Math.round(myNumber);
// const output = Math.ceil(myNumber);
// const output = Math.floor(myNumber);
// console.log(output);


// 0 to 1 random number
// const output = Math.random(); 

// 0 to any random number;
// const output=Math.random()*10;
// const rounded=Math.round(output);
// console.log(rounded);


let first = 5;
let second = 6;
console.log(first, second);

// first apporach with temp
// let temp = first;
// first = second;
// second = temp;
console.log(first, second);

// destructuring
[first, second] = [second, first];
console.log(first, second);
