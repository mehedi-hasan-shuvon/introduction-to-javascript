// count the number of vowelts in a string

const mystring = "Quick brown fox jumps over the lazy dog"

function vowelCounter(mystring) {
    count = 0;
    const vowel = "aeiouAEIOU";
    for (let char of mystring) {
        if (vowel.indexOf(char) != -1) {
            count++;
        }
    }
    return count;
}

console.log(vowelCounter(mystring));