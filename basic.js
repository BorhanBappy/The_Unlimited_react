// var data = [
//   {
//     id: 1,
//     title: "The Lord of the Rings",
//     publicationDate: "1954-07-29",
//     author: "J. R. R. Tolkien",
//     genres: [
//       "fantasy",
//       "high-fantasy",
//       "adventure",
//       "fiction",
//       "novels",
//       "literature",
//     ],
//     hasMovieAdaptation: true,
//     pages: 1216,
//     translations: {},
//     spanish: "El señor de los anillos",
//     chinese: "",
//     french: "Le Seigneur des anneaux",

//     reviews: {
//       goodreads: {},
//       rating: 4.52,
//       ratingsCount: 630994,
//       reviewsCount: 13417,
//       librarything: {
//         rating: 4.53,
//         ratingsCount: 47166,
//         reviewsCount: 452,
//       },
//     },
//   },
//   {
//     id: 2,
//     title: "Harry Potter and the Philosopher's Stone",
//     publicationDate: "1997-06-26",
//     author: "J.K. Rowling",
//     genres: ["fantasy", "magic", "adventure", "fiction"],
//     hasMovieAdaptation: true,
//     pages: 320,
//     translations: {
//       spanish: "Harry Potter y la piedra filosofal",
//       french: "Harry Potter à l'école des sorciers",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.47,
//         ratingsCount: 655890,
//         reviewsCount: 19002,
//       },
//       librarything: {
//         rating: 4.39,
//         ratingsCount: 58788,
//         reviewsCount: 845,
//       },
//     },
//   },
//   {
//     id: 3,
//     title: "1984",
//     publicationDate: "1949-06-08",
//     author: "George Orwell",
//     genres: ["dystopian", "political fiction", "science fiction"],
//     hasMovieAdaptation: false,
//     pages: 328,
//     translations: {
//       spanish: "1984",
//       french: "1984",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.18,
//         ratingsCount: 3448912,
//         reviewsCount: 66563,
//       },
//       librarything: {
//         rating: 4.31,
//         ratingsCount: 262536,
//         reviewsCount: 4702,
//       },
//     },
//   },
//   {
//     id: 4,
//     title: "The Great Gatsby",
//     publicationDate: "1925-04-10",
//     author: "F. Scott Fitzgerald",
//     genres: ["fiction", "classics", "romance"],
//     hasMovieAdaptation: true,
//     pages: 180,
//     translations: {
//       spanish: "El gran Gatsby",
//       french: "Gatsby le magnifique",
//     },
//     reviews: {
//       goodreads: {
//         rating: 3.91,
//         ratingsCount: 4146923,
//         reviewsCount: 77855,
//       },
//       librarything: {
//         rating: 4.05,
//         ratingsCount: 441612,
//         reviewsCount: 8282,
//       },
//     },
//   },
//   {
//     id: 5,
//     title: "To Kill a Mockingbird",
//     publicationDate: "1960-07-11",
//     author: "Harper Lee",
//     genres: ["classics", "fiction", "mystery"],
//     hasMovieAdaptation: true,
//     pages: 324,
//     translations: {
//       spanish: "Matar a un ruiseñor",
//       french: "Ne tirez pas sur l'oiseau moqueur",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.28,
//         ratingsCount: 4521324,
//         reviewsCount: 95097,
//       },
//       librarything: {
//         rating: 4.32,
//         ratingsCount: 1365250,
//         reviewsCount: 20137,
//       },
//     },
//   },
//   {
//     id: 6,
//     title: "The Catcher in the Rye",
//     publicationDate: "1951-07-16",
//     author: "J.D. Salinger",
//     genres: ["fiction", "coming-of-age"],
//     hasMovieAdaptation: false,
//     pages: 224,
//     translations: {
//       spanish: "El guardián entre el centeno",
//       french: "L'Attrape-cœurs",
//     },
//     reviews: {
//       goodreads: {
//         rating: 3.81,
//         ratingsCount: 2868965,
//         reviewsCount: 62368,
//       },
//       librarything: {
//         rating: 3.89,
//         ratingsCount: 1639532,
//         reviewsCount: 22449,
//       },
//     },
//   },
//   // Add more objects as needed
// ];

// //
// function getBooks() {
//   return data;
// }
// function getBook(id) {
//   return data.find((d) => d.id === id);
// }
// // Destructuring
// const book = getBook(1);
// const { title, author, genres } = book;
// // title;
// // author;
// const books = getBooks();

// books;
// console.log(genres);
// console.log(genres[0]);

// const [primaryGenres, secondaryGenres, ...restGenres] = genres;
// console.log("Genres is" + primaryGenres, secondaryGenres, restGenres);

// const newGenres = [...genres, "epic_fantasy"]; // copy previous array in new array
// console.log(newGenres);

// const updateBook = {
//   ...book,
//   moviePublicationDate: "1999-04-20",
//   pages: 2000,
// };
// console.log(updateBook);

// console.log(books);

// const pageOfBooks = books.reduce((accu, book) => accu + book.pages, 0);
// console.log(pageOfBooks);

// const sortByPage = books.slice().sort((a, b) => a.pages - b.pages);
// console.log(sortByPage);
// const obj1 = {
//   name: "Bappy",
//   age: 24,
// };
// console.log(obj1);
// const obj2 = obj1;
// console.log(obj2);
// obj2.age = 28;
// console.log(obj2);
// obj1;
// function practice(obj1) {
//   obj1.name = "Borhan";
// }
// practice(obj1);
// obj2;

// const array = [];

// for (let i = 1; i <= 100; i++) {
//   array.push(i);
// }
// array;
// const sum = array.reduce((a, b) => a + b == b, 1);
// // console.log(sum);
// const Map = array.map((a) => a);
// console.log(Map);

// const array1 = Array.from({ length: 20 }, (_, i) => i + 1).map(
//   (num) => num * num
// );

// const listItem = [
//   {
//     description: "kkkkk",
//     quantity: 1,
//     packed: true,
//     id: 1709903452903,
//   },
//   {
//     description: "lllllllllllll",
//     quantity: 1,
//     packed: false,
//     id: 1709903483021,
//   },
//   {
//     description: "lllllllllllll",
//     quantity: 1,
//     packed: false,
//     id: 1709903483022,
//   },
//   {
//     description: "lllllllllllll",
//     quantity: 1,
//     packed: true,
//     id: 1709903483020,
//   },
// ];

// const packed = listItem.map((item) => item.packed);
// const truepacked = packed.filter((item) => item == true);
// console.log(truepacked);
// console.log(truepacked.length);
// console.log(1/2*100)

// const originalArray = [3, 1, 2, 4];
// const spliceArray = originalArray.splice(2, 0, 5);
// Sorting directly modifies the original array
// const sortedArrayDirect = originalArray.sort((a, b) => a - b);

// console.log("Original Array (sorted directly):", originalArray);
// console.log("Sorted Array (sorted directly):", sortedArrayDirect);

// Sorting a copy using slice() preserves the original array
// const sortedArrayCopy = originalArray.slice().sort((a, b) => a - b);

// console.log("Original Array (sorted copy):", originalArray);
// console.log("Sorted Array (sorted copy):", sortedArrayCopy);

// const pallindream = function (x) {
//   return x === +x.toString().split("").reverse().join("");
// };
// console.log(pallindream(45))

// function bappy() {
//   console.log("Hello bappy");

//   return sharukh();
// }
// function sharukh() {
//   console.log("Hello sharukh");
//   return shanto();
// }
// function shanto() {
//   console.log("Hello shanto");
//   return rony();
// }
// function rony() {
//   console.log("Hello rony");
//   return arif();
// }
// function arif() {
//   console.log("Hello arif");
//   return wasib();
// }
// function wasib() {
//   console.log("Hello wasib");
//   return true;
// }
// // console.log(bappy());

// function gotoIfter(person) {
//   if (person == 8) return true;
//   console.log(person);
//   return gotoIfter(person + 1);
// }
// console.log(gotoIfter(1));

// function multiply(array){
//   let product=1;
//   for(let i=0;i<array.length;i++){
//     product*=array[i];
//   }
//   return product;
// }

// function multiply(array) {
//   console.log(array)
//   if (array.length <= 0) {
//     return 1;
//   } else
//     return array[array.length - 1] * multiply(array.slice(0, array.length - 1));
// }
// console.log(multiply([1, 2, 3, 4]));

// function factorial(num) {
//   if (num == 0 || num === 1) {
//     return 1;
//   } else return num * factorial(num - 1);
// }

// console.log(factorial(4));

// function helloBappy() {
//   return console.log("Hello Bappy");
// }
// function hello(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     helloBappy();
//     return hello(n - 1);
//   }
// }
// // hello(5);

// function add(a, b) {
//   return a + b;
// }

// function numbers(a, b, fn) {
//   return fn(a, b);
// }
// console.log(numbers(3, 4, add));

// let array = [10, 0, 20, 30];

// const filterArray = array.filter((number) => number > 10);
// console.log(filterArray);

// var map = function (arr, fn) {
//   var result = []; // Initialize an empty array to store the result
//   for (var i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) result.push(arr[i]); // Apply the function fn to each element and push the result to the result array
//   }
//   return result; // Return the new array with modified elements
// };

// // Given input
// var arr = [-2, -1, 0, 1, 2];
// // function(n, i) { return n + i; };
// var fn = function plusOne(n) {
//   return n + 1;
// };

// // Example usage
// const newArray = map(arr, fn);
// [-2, 0, 1, 2];
// // console.log(newArray);

// function add(a, b) {
//   return a + b;
// }
// function mulTwo(a) {
//   return a * 2;
// }
// function multiplyAdd(fn1, fn2) {
//   return function (a, b) {
//     return fn2(fn1(a, b));
//   };
// }

// let result = multiplyAdd(add, mulTwo);
// console.log(result(4, 5));

// function fun() {
//   function sum(a, b) {
//     return a + b;
//   }
//   return sum;
// }

// let countsum = fun();
// console.log(countsum(8, 6));

// var createHelloWorld = function () {
//   return function (...args) {
//     return args.reduce((acc, curr) => acc + curr, 0);
//   };
// };

// const f = createHelloWorld();
// console.log(f(1, 5, 6, 7));

// const codding = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
// ];

// const values = codding.map((item) => item.name);
// console.log(values);
// codding.forEach((element) => {
//   console.log(element.name);
// });

// let arr = [5, 6, 8, 9, 15, 18];
// console.log(arr.reduce((accu, curr) => accu + curr, 0));
// newarray = arr.filter((item) => item < 15);
// console.log(newarray);

// console.log("One");
// console.log("Twp");
// console.log("Three");

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fib(n - 2) + fib(n - 1);
// }

// console.log(fib(10));

// const names = ["Bappy", "Sharukh", "Shorif", "Saim"];

// console.log(["bb", ...names]);

// function getData(dataid, getNextData) {
//   setTimeout(() => {
//     console.log(`data  ${dataid}`);

//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => getData(2));

// // callback

// function callBack(a, b) {
//   return a + b;
// }

// function sum(a, b, fn) {
//   return fn(a, b);
// }

// console.log(sum(2, 3, callBack));
// var canWinNim = function (n) {
//   return n % 4 !== 0;
// };

// console.log(canWinNim(4));

// let promise = new Promise((resolve, reject) => {});
// let greeting = "Hello";
// function sayGreeting(name) {
//   console.log(`${greeting} ${name}`);
// }

// sayGreeting("Bappy");
// greeting = "As salamolaikum";
// sayGreeting("Bappy");

// (function () {
//   console.log("I am an Anonymous function");
// })();

// const l1 = [9, 9, 9, 9, 9, 9, 9];
// const l2 = [9, 9, 9, 9];

// function sum(l1, l2) {
//   const n1 = Number(l1.join(""));
//   const n2 = Number(l2.join(""));
//   const sum = n1 + n2;
//   return sum;
// }
// const ret = sum(l1, l2);

// console.log(ret.toString().split("").map(Number));
// console.log(Math.max());
// const n1 = { data: 100 };
// const n2 = { data: 200 };
// n1.next = n2;
// console.log(n1);

// function jerry() {
//   console.log(name);
// }
// var name = "carton";

// function tom() {
//   var name = "tom";
//   console.log(name);
//   jerry();
// }
// tom();
// var name = "Borhan";
// function hello() {
//   var name = "Bappy";
// }

// console.log(name);

// hello();

// var count = 10;

// function outer() {
//   var count = 20;

//   function inner() {
//     var count = 30;
//     console.log(count);
//   }

//   inner();
//   console.log(count);
// }

// outer();
// console.log(count);

// Call Back

// function sum(a, b) {
//   return a + b;
// }

// function calculator(a, b) {
//   return sum(a, b);
// }

// console.log(calculator(1, 3));

// Callback Hell

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     if (getNextData) {
//       getNextData();
//     }
//     console.log(`Data ${dataId}`);
//   }, 2000);
// }

// getData(5, () => getData(7, () => getData(8)));

// function outer() {
//   console.log("Outer");
//   return function () {
//     console.log("Inner");
//   };
// }

// x = outer();
// console.log(x);
// console.log(name.grating);

// let name = {
//   grating: "hello",
//   fullname: "Borhan Uddin Bappy",
// };

// function showGreeting() {
//   var greeting = "Hello ! How are ypu ?";
// }
// console.log(greeting);
// function call(a) {
//   return a * a;
// }
// const numbers = [1, 2, 3, 4, 5];

// for (let index = 0; index < numbers.length; index++) {
//   console.log(call(numbers[index]));
// }

// async function longRunningTask() {
//   let count = 0;
//   for (let index = 0; index < 1e9; index++) {
//     count++;
//   }
//   console.log("Long task Done");
// }

// asyncTask((result) => console.log(result));

// function ImportantTask() {
//   console.log("Important Task");
// }
// asyncTask("Hello");
// ImportantTask();

// console.log("Hello BAppy");

// setTimeout(() => {
//   for (var index = 0; index < 10000; index++) {}
//   console.log(index);
// }, 2000);
// console.log("Hello Next");

// let inputs = {
//   num1: 1234, // First input field
//   num2: 1234, // Second input field
// };
// console.log({ ...inputs, num2: 123 });

// const user = {
//   name: "John",
//   greet() {
//     console.log(`Hello, ${this.name} !`);
//   },
// };

// const greetFn = user.greet;
// greetFn();

// const score = { RealMadrid: 6, Bercolona: 5 };
// console.log(score["Bercolona"]);
// const updateScore = { ...score, RealMadrid: score["RealMadrid"] + 5 };
// console.log(updateScore);

// let arry = [10, 5, 3, 4, 5, 8];
// console.log(arry);
// let upar = [...arry];
// console.log(upar);
// console.log((arry[2] = 9));
// console.log(upar);
// console.log(arry);
// const tempRating = 3;
// const rating = 2;

// const result = Array.from({ length: 5 }, (_, i) => {
//   let full = tempRating ? tempRating >= i + 1 : rating >= i + 1;
//   return full; // Ensure we return the value
// });

// let mark = result.map((element) =>
//   element == true ? "you are true" : "You are false"
// );
// console.log(mark);
// function outer() {
//   console.log("Outer");
//   return function inner() {
//     console.log("Inner");
//   };
// }
// let h = outer();
// console.log(h);

// let obj1 = {
//   name: "Bappy",
//   Age: 28,
// };

// let obj2 = ({} = obj1);
// console.log(obj2);
// obj2 = { ...obj1 };
// obj2.Age = 30;

// console.log(obj2);
// console.log(obj1);

// function a(v) {
//   console.log(v + " Hello");
//   return function () {
//     console.log("Hi");
//   };
// }

// let b = a("BAppy");
// console.log(b);

const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);

form.addEventListener("click", listener);

button.addEventListener("click", listener);

function listener(event) {
  console.log(event.currentTarget);
}
