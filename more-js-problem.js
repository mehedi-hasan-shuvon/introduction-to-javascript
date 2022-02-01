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

function add(num1,num2){
    const sum=num1+num2;
    return sum;
}

const firstTotal=add(63, 7);

console.log(firstTotal);
