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