// array_learning.js
// javascript-learning/arrays

const cities = ["Praha", "Brno", "Olomouc", "Plzeň"];
console.log(cities);
console.log("2. město: " + cities[1]);

// ? cyklení array pomocí for
for (let i = 0; i < cities.length; i++) {
  console.log(`cities[${i}] = ${cities[i]}`);
}
