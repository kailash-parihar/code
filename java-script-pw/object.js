let person = {
  fullName: {
    firstName: "Kailash",
    lastName: "Parihar",
  },
  Age: "25",
  Occuption: "Devloper",
  Address: {
    street: "Bera Dhurmaliya",
    City: "Sojat City",
    State: "rajasthan",
    Pincode: "306104",
  },
};
// console.log(person);
// console.log(person.Address);
for (let x in person){
    console.log(x);
}