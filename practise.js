// count the number of vowelts in a string
/*
const mystring = "Quick brown fox jumps over the lazy dog"

function vowelCounter(mystring) {
    let count = 0;
    const vowel = "aeiouAEIOU";
    for (let char of mystring) {
        if (vowel.indexOf(char) != -1) {
            count++;
        }
    }
    return count;
}

console.log(vowelCounter(mystring));

*/

//problem 2

/*
let quantity = -3;

function price(quantity) {
    let price = 0;
    const first100kg = 5;
    const second100kg = 6;
    const restkg = 7;
    if (quantity < 0) {
        return "quantity cann't be negetive";

    }
    if (typeof quantity != "number") {
        return "please enter a valid number";
    }
    if (quantity <= 100) {
        price = quantity * first100kg;
    } else if (quantity <= 200) {
        price = 100 * first100kg + (quantity - 100) * second100kg;
    } else {
        price = 100 * first100kg + 100 * second100kg + (quantity - 200) * restkg;
    }
    return price;
}

console.log(price(150));


*/


// problem 3
/*
const marks = [78, 82, 69];

function checkGPA(marks) {
    golden = []
    for (let mark of marks) {
        if (mark >= 80) {
            return "yes!!"
        } else {
            continue;
        }
    }

    return "nobody sadly"

}

console.log(checkGPA(marks));
*/

// problem 4 
// Find the second largest

function secondLargestElement(array) {

    let largest = array[0];

    let secondLargest = array[0];

    for (let i = 1; i < array.length; i++) {

        if (largest < array[i]) {
            secondLargest = largest;
            largest = array[i];
        } else if (secondLargest < array[i] && array[i] < largest) {
            secondLargest = array[i];
        }
    }
    return [secondLargest,largest];
}

let array = [45, 66, 66, 35, 66, 64];

console.log(secondLargestElement(array));