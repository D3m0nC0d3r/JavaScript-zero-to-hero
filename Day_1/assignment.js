console.log("Assignment Day-1: JavaScript");

var num_1 = 47;
var num_2 = 69;

// Binary Operators
// Arithmatic op 
var add = num_1 + num_2;
console.log("Sum of num_1 and num_2: "+add);
var sub = num_2 - num_1;
console.log("Substraction of num_2 and num_1: "+sub);
var mul = num_1 * num_2;
console.log("Multiplication of num_1 and num_2: "+mul);
var div = num_2 / num_1;
console.log("Division of num_2 and num_1: "+ div);
var modu = num_2 % num_1;
console.log("Modulus of num_2 and num_1: "+ modu);

// Assignment op
// = += -= *= /= %=
var nwo = 13;
console.log("Assignment operator example is :" + nwo);

num_1 += num_2;
console.log("Plus is equal to example: " + num_1);

var num_1 = 47;
var num_2 = 69;
num_2 -= num_1;
console.log("Subtract is equal to example: " + num_2);

var num_1 = 6;
var num_2 = 7;
num_1 *= num_2;
console.log("Multiply is equal to example: " + num_1);

var num_1 = 3344;
var num_2 = 11;
num_1 /= num_2;
console.log("Divide is equal to example: " + num_1);

var num_1 = 79;
var num_2 = 12;
num_1 %= num_2;
console.log("Modulus is equal to example: " + num_1);


// Relational/Comparison Op 
// > >= < <= == !=
var num_1 = 79;
var num_2 = 12;
if (num_1 > num_2) {
    console.log("num_1 is greater than num_2");
}

var num_1 = 55;
var num_2 = 79;
if (num_1 < num_2) {
    console.log("num_1 is less than num_2");
}

var num_1 = 84;
if (num_1 >= 84) {
    console.log("num_1 is greater than equal to 84");
}

var num_1 = 47;
if (num_1 <= 55) {
    console.log("num_1 is less than equal to 84");
}

var num_1 = 88;
if (num_1 == 88){
    console.log("num_1 is equal to 88");
}

if (num_1 != 44){
    console.log("num_1 is not equal to 44");
}

// identity op  (they also check for types/datatype)
// === !==

var num_1 = 44;
var num_2 = "Two";
console.log(num_1 === num_2);

console.log(num_1 !== num_2);

// Logical Op
// && || ! 

var num_1 = 58;
var num_2 = 84;

if (num_1 < 60 && num_1 > 55) {
    console.log("num_1 is between 55 and 60");
}

if (num_2 > 80 || num_2 < 70){
    console.log("One of the condition is true for num_2");
}
