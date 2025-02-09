// Array.from({ length: 10 }, (_, i) => console.log(i));
const oneWord = (str) => str.replace(/ /g, "").toLowerCase();

const transformer = function (str, fn) {
  let b = "age";
  return function () {
    console.log(`Transformed String :${fn(str)} ${b}`);
  };
};

let array = [
  "Bappy",
  "Sharukh",
  "Shorif",
  "Saim",
  "Shanto",
  "Arif",
  "Rakib",
  "Tanvir",
  "Riyad",
];
array.forEach((element, index) => {
  setTimeout(() => {
    const hello = transformer(element, oneWord);
    hello();
  }, index * 2000);
});

// transformer("Javascript is the future !", oneWord);

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((result, item) => result + item, 0);
// const filter = numbers.filter((item) => item <= 3);
// console.log(sum, filter)

// function x() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 2000); // Multiply `i` by 2000ms to delay each number by 2 seconds
//   }
// }
// x();

// function outer() {
//   let count = 0; // Local variable in outer function

//   return function inner() {
//     count++; // Accesses and modifies the `count` variable from the outer function
//     console.log(count); // Prints the updated count
//   };
// }

// const counter = outer(); // `outer()` returns the `inner` function, which forms a closure
// counter(); // Outputs: 1
// counter(); // Outputs: 2
// counter(); // Outputs: 3

// for (var index = 0; index < 10; index++) {
//   index;
// }

// console.log(index);

// const temnumer = "";

// temnumer ? console.log("Hello Bappy") : console.log("Not True ");

// () => console.log("Hello");
