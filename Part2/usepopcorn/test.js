// const items = [
//   { name: "Apple", price: 1 },
//   { name: "Orange", price: 2 },
//   { name: "Mango", price: 3 },
// ];

// let totalPrice = 0;

// items.forEach((item) => {
//   totalPrice += item.price;
// });

// console.log(totalPrice);

// const TotalPrice = items.reduce((acc, item) => acc + item.price, 0);

// console.log(TotalPrice);

// for (let i = 0; i < items.length; i++) {
//   totalPrice += items[i].price; // Access price of each item in items array
// }

// console.log(totalPrice);

// const numbers = [1, 2, 3];
// const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
// console.log(sum); // Outputs: 6

// // ANother Function

// function performActionOnArray(array, actionCallback) {
//   for (let i = 0; i < array.length; i++) {
//     actionCallback(array[i], i, array);
//   }
// }

// performActionOnArray([1, 2, 3], (number, index, arr) => {
//   console.log(`Element ${number} at index ${index} out of [${arr}]`);
// });

function sample(a, b) {
  var c = a + b;
  var d = a - b;
  var result = sum1(c, d);
  return result;
}

function sum1(a, b) {
  return a + b;
}

console.log(sample(5, 6));

function sample2(a, b, cb) {
  var c = a + b;
  var d = a - b;
  var result = cb(c, d);
  return result;
}

function abs(a, b) {
  let c = a - b;
  return c;
}

let result = sample2(5, 6, abs);
console.log(result);

function customReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

function acc(accumulator, number) {
  return accumulator + number;
}
// Usage example
const numbers = [1, 2, 3];
const sum = customReduce(numbers, acc, 0);

console.log(sum); // Outputs: 6
