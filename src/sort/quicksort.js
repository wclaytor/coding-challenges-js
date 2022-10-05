#!/usr/bin/env node

// https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

// swap the specified array elements
function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

/* 
Compare array[j] with array[r] for each element in the range maintaining that:
  array[p..q-1] are values known to be <= to array[r]
  array[q..j-1] are values known to be > array[r]
  array[j..r-1] haven't been compared with array[r]
*/
function partition(array, leftIndex, rightIndex) {
  // q tracks the ultimate destination of the pivot
  // starting at leftIndex
  let q = leftIndex;
  for (let j = leftIndex; j < rightIndex; j++) {
    // If array[j] > array[r] just increment j (i.e. do nothing)
    // If array[j] <= array[r], swap array[j] with array[q],
    // then increment q and j
    if (array[j] <= array[rightIndex]) { 
      swap(array, j, q);
      q++;
    }
  }
    // Once all elements in array[p..r-1] have been compared with array[r],
    // swap array[r] with array[q] and return q
    swap(array, rightIndex, q);
    return q;
  }

/* sort the array by recursively partitioning
into sub-arrays with values less than and greater than a pivot
until called with a rightIndex <= the leftIndex,
indicating that the base case has been reached
*/
function quicksort(array, leftIndex, rightIndex) {
  // only proceed while the rightIndex is greater than the leftIndex
  if (leftIndex < rightIndex) {
    // partition the array into sub-arrays less than and greater than the pivot
    let pivot = partition(array, leftIndex, rightIndex);

    // sort the left and right arrays
    quicksort(array, leftIndex, pivot-1);
    quicksort(array, pivot+1, rightIndex);
  }
}

let array = [22, 11, 99, 88, 9, 7, 42];
let sorted = [7, 9, 11, 22, 42, 88, 99];

console.log("before: " + array);

quicksort(array, 0, array.length-1);

console.log("after: " + array);
