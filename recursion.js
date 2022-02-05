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
/*
function sum(i) {
    if (i == 0) {
        return 0;
    }
    return i + sum(i - 1);
}

console.log(sum(5));
*/

/*
function factorial(i) {
    if (i == 0 || i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
}

console.log(factorial(5));
*/

const products = [
    { name: 'iphone', price: 70000 },
    { name: 'samsung', price: 60000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'lenovo yoga laptop', price: 55000 },
    { name: 'asus tuf 14 laptop', price: 35000 },
    { name: 'smart watch samsung', price: 7000 },
    { name: 'apple watch', price: 20000 },
    { name: 'one plus 4', price: 27000 }
]

/*
function searchProucts(products, searchText) {
    const result = [];
    for (let product of products) {
        if (product.name.includes(searchText)) {
            result.push(product);
        }

    }
    return result;
}

console.log(searchProucts(products, "laptop")); 
*/

