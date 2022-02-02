// problem 1
// remove duplicate value 
/*
const names = ['abul', 'tabul', 'babul', 'abul', 'tabul', 'kabul', 'abul', 'sabul', 'babul']

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];

    // }
    // another way to expressing for 
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }

    return unique

}

console.log(removeDuplicate(names));
*/



// problem 2
// reserve a string 

/*
const greetings = "Hello, how are you?";

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        
        reverse = letter + reverse;
    }
    return reverse
}
console.log(reverseString(greetings));

*/


// problem 3
// hadelling unexpected function input parameter error 

/*
charWood =3cft;
table=10cft;
bed=50cft; 
*/

/*
function woodCalculater(chairQuantity, tableQuantitiy, bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedwood=50;

    let totalWood=perChairWood*chairQuantity+perTableWood*tableQuantitiy+perBedwood*bedQuantity;
    return totalWood;
}


console.log(woodCalculater(1,1,1));

*/

// task06
// divisible 3 or 5
// foo bar foobar

/*
let n = 50;
function foobar(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("foobar");
        }
        else if (i % 3 == 0) {
            console.log("foo");
        } else if (i % 5 == 0) {
            console.log("bar");
        }
        else {
            console.log(i);
        }

    }
}

foobar(n);

*/


// problem 07
// find the cheapest phone form an array of phone objects 
/*
const phones = [
    { name: "samsung s5", price: 45000, camera: 10, storage: 32 },
    { name: "walton m32", price: 15000, camera: 8, storage: 8 },
    { name: "xaomi m2", price: 12000, camera: 8, storage: 8 },
    { name: "oppo a2", price: 17000, camera: 8, storage: 32 },
    { name: "nokia n55", price: 25000, camera: 8, storage: 64 }
];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone
    }
}
console.log(cheapest);
*/

// problem 08
// calculate the total cost of the products in a shopping cart 
