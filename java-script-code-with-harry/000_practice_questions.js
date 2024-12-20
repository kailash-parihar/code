// Chaptor 01
// Q1. Create a variable of type of String and try to add a Number to It.

let string = "Kailash";
let number = 2595;
console.log(string + number);

//Q2. Use typeof Operator to find the datatype of the string in last question.

console.log(typeof (string + number));

// Q3. Create a const Object in JavaScript can you change it to hold a number later ?

const harry = {
  name: "Kailash",
  subname: "Parihar",
  address: "Sojat City",
  mobile: 9649352595,
  devloper: false,
  age: 25,
};
/* 
TypeError: Assignment to constant variable.
harry = 3497;
harry = {}; 
*/
console.log(harry);

// Q4. Try to add new Key to the const object in problem 3 were you able to do it ?

harry["education"] = "Bca Graduate";
harry["Friend"] = "Your Self";
console.log(harry);

// Q5. Write a Js Program to Create a Word Meaning Dictonary of 5 Words.

const dictonary = {
  appreciate:
    "to enjoy something or to understand the value of somebodysomething",
  bureaucracy:
    "a system of government by a large number of officials who are not elected; a country with this system",
  secular: "not concerned with religion",
};
console.log(dictonary);
console.log(dictonary.secular);
console.log(dictonary["bureaucracy"]);
