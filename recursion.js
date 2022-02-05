// for (let i = 1; i < 6; i++) {
//     console.log(i);
// }

/*
function consoleNumber(i) {
    if (i >5) {
        return;
    }
    console.log(i);
    consoleNumber(i + 1);
}

consoleNumber(1);

*/

function sum(i) {
    if (i == 0) {
        return 0;
    }
    return i + sum(i - 1);
}

console.log(sum(5));