// count the number of vowelts in a string

const mystring = "kamon achen apni?"

function vowelCounter(mystring) {
    count = 0;
    const vowel = "aeiou";
    for (let char of mystring) {
        if (vowel.indexOf(char) != -1) {
            count++;
        }
    }
    return count;
}

console.log(vowelCounter(mystring));