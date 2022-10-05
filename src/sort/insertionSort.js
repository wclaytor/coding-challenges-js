#!/usr/bin/env node

// https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/pc/challenge-implement-insertion-sort

// Insertion sort loops over items in the array
// inserting each new item into the subarray before the new item.

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

function printArray(array) {
  var output = "";
  for (const element of array) { 
      output = output + element + " ";
  }
  console.log(output); 
}

 /*
The insert function takes three parameters as inputs: array, rightIndex, and value.

Before the insert function is called:
* the elements from array[0] to array[rightIndex] are sorted in ascending order.

After calling the insert function:
* value and the elements that were previously in array[0] to array[rightIndex], 
should be sorted in ascending order and stored in the elements from array[0] to array[rightIndex+1].

In order to do this, the insert function will need to make room for value by moving items that are greater than value to the right. 
It should start at rightIndex, and stop when it finds an item that is less than or equal to value, or when it reaches the beginning of the array. 
Once the function has made room for value, it can write value to the array.
 */
function insert(array, rightIndex, value) {
  console.log("insert: rightIndex = " + rightIndex + ", value = " + value);
  printArray(array);
  for(var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
    printArray(array);
  }   
  array[j + 1] = value;
  printArray(array);
};

function insertionSort(array) {
  for (let i=0; i<array.length-1; i++) {
    console.log("insertionSort i: " + i);
    insert(array, i, array[i+1]);
  }
};

let array = [22, 11, 99, 88, 9, 7, 42];
let sorted = [7, 9, 11, 22, 42, 88, 99];

console.log("before: " + array);
insertionSort(array);
console.log("after: " + array);
