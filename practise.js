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

let quantity = -3;

function price(quantity) {
    let price = 0;
    const first2kg = 30;
    const restkg = 25;
    if (quantity < 0) {
        return "quantity cann't be negetive";
        
    }
    if (typeof quantity != "number") {
        return "please enter a valid number";
    }
    if (quantity <= 2) {
        price = quantity * first2kg;
    } else {
        price = 2 * first2kg + (quantity - 2) * restkg;
    }
    return price;
}

console.log(price(-5));