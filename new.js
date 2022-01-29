
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

var student1={
    id:18101686,
    name:"Mehedi", 
    cgpa:3.88, 
    phoneNumber:"01731876347",
};

var mobile={
    color:"black",
    price: 1900,
    screenSize: 6,
    storage: '16gb',
};

console.log(student1.cgpa);
