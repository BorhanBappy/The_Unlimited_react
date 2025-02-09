// "use strict"

// function findRookMoves(testCases) {
//     const moves = [];
//     const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//     for (let i = 0; i < testCases.length; i++) {
//         const [column, row] = testCases[i].split('');
//         const possibleMoves = [];

//         // Horizontal moves
//         for (let c of columns) {
//             if (c !== column) {
//                 possibleMoves.push(c + row);
//             }
//         }

//         // Vertical moves
//         for (let r = 1; r <= 8; r++) {
//             if (r != row) {
//                 possibleMoves.push(column + r);
//             }
//         }

//         moves.push(possibleMoves);
//     }

//     return moves;
//

// const createHelloWorld = function () {
//   return function (...args) {
//     return "Hello World";
//   };
// };

// // const f = createHelloWorld();
// console.log(createHelloWorld({}, null, 42));

// var expect = function (val) {
//   return {
//     toBe(val1) {
//       if (val === val1) return true;
//       else throw new Error("Not Equal");
//     },
//     notToBe(val1) {
//       if (val !== val1) return true;
//       else throw new Error("Equal");
//       // Return false instead of throwing an error
//     },
//   };
// };
// console.log(expect(5).toBe(5)); // This will return true
// console.log(expect(5).notToBe(5)); // This will return false

// var createCounter = function (init) {
//   let counter = init;
//   return {
//     increment() {
//       return init++;
//     },
//     decrement() {
//       return init++;
//     },
//     reset() {
//       counter = init;
//     },
//   };
// };

// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// const student = {
//   name: "Bappy ",
//   mark: 26,
//   printMarks: function () {
//     console.log("Marks", this.mark);
//   },
// };

// const employee = {
//   calTax() {
//     console.log("10 % tax  of salary ");
//   },
// };

// const karanArjun = {
//   salary: 5000,
// };

// karanArjun.__proto__ = employee;

console.log("object");
