#!/usr/bin/env node

// https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/pc/challenge-implement-selection-sort

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "number", describe: "Number of iterations", type: "integer", demandOption: false })
 .argv;

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

function indexOfMinimum(array, startIndex) {

  var minValue = array[startIndex];
  var minIndex = startIndex;

  for(var i = minIndex + 1; i < array.length; i++) {
      if(array[i] < minValue) {
          minIndex = i;
          minValue = array[i];
      }
  } 
  return minIndex;
}; 

function selectionSort(array) {
  var minIndex;
  for (var i = 0; i < array.length; i++) {
      minIndex = indexOfMinimum(array, i);
      swap(array, i, minIndex);
  }
};

let array = [22, 11, 99, 88, 9, 7, 42];
let sorted = [7, 9, 11, 22, 42, 88, 99];

console.log("before: " + array);
selectionSort(array);
console.log("after: " + array);
