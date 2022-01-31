
// while loop 
var a = 0;
while (a < 10) {
    console.log(a);
    a++;

}

// for loop 

for (var i = 0; i <= 7; i++) {
    console.log(i);
}


var a = 7;
var b = 90;
var d = substraction(a, b);
d++;
console.log(d)




// function 
function substraction(a, b) {
    a = a + b;
    console.log(a);
    return a;
}


// objects 

var student1 = {
    id: 18101686,
    name: "Mehedi",
    cgpa: 3.88,
    phoneNumber: "01731876347",
};

var mobile = {
    color: "black",
    price: 1900,
    screenSize: 6,
    storage: '16gb',
};

console.log(student1.cgpa);

// get a object property 
cgpa = student1.cgpa
console.log(cgpa);

// set a property 
student1.name = "tehedi"

// another way 
studentName = "name";
student1[studentName] = 'popy';
console.log(student1);
// another way to set a value 
student1["name"] = 'jehedi'
console.log(student1);





// switch 

var color = 'red';

switch (color) {
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'green':
        console.log('color is green');
        break;
    default:
        console.log('color is black');

}


function getReminder(number1, number2) {
    number1 % number2;
}

const reminder = getReminder(12, 2);

console.log(reminder);
