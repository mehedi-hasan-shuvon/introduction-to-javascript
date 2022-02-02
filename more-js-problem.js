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


