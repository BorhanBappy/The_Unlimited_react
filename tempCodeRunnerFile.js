var expect = function (val) {
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