//Merging arrays
const fruits = ["Apple", "Banana"];
const veggies = ["Carrot", "Tomato"];
const food =[...fruits, ...veggies];
console.log(food);

//Merging objects 
const user = { name: "Favour", age: 20 };
const criteria = { country: "Nigeria", age: 21 };

const mergedUser = { ...user, ... criteria };
console.log(mergedUser);