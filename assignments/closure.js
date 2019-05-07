// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count2 = 0;
  return () => {
    return ++count2;
  };
};

// let newCounter2 = counter();
// console.log(newCounter2());
// console.log(newCounter2());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let ob = {};
  let count3 = 0;
  ob.increment = () => ++count3;
  ob.decrement = () => --count3;
  return ob;
};

let newCounter3 = counterFactory();
console.log(newCounter3.increment());
console.log(newCounter3.increment());
console.log(newCounter3.increment());
console.log(newCounter3.decrement());
