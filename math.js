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


// let first = 5;
// let second = 6;
// console.log(first, second);

// // first apporach with temp
// // let temp = first;
// // first = second;
// // second = temp;
// console.log(first, second);

// // destructuring
// [first, second] = [second, first];
// console.log(first, second);

// const business = 450;
// const minister = 350;
// const army = 600;

/*
if (business > minister && business > army) {
    console.log("business wins");
} else if (minister > business && minister > army) {
    console.log('minister is bigger');
} else {
    console.log("army wins");
}
*/

// var max=Math.max(business,minister,army);
// console.log(max);

const numbers = [-44, -23, -465, -2, -5, -7]


// function arraySum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//     }
//     return sum;
// }

// console.log(arraySum(numbers));

// function largestElement(numbers) {
//     let largest = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (largest < numbers[i]) {
//             largest = numbers[i];
//         }
//     }
//     return largest;
// }

// console.log(largestElement(numbers)); 

n = 10
function fib(n) {
    let array = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            sum = 0;

        }
        else if (i == 1) {

            sum = 1;
        }
        else {
            sum = array[i - 2] + array[i - 1];


        }
        array.push(sum);
    }
    return array;
}

console.log(fib(n))