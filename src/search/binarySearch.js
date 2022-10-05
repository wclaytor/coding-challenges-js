#!/usr/bin/env node

// https://leetcode.com/problems/binary-search/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "number", describe: "Number of iterations", type: "integer", demandOption: false })
 .argv;

// Given ...

function binarySearch(nums, target) {
  var min = 0;
	var max = nums.length - 1;
  var guess;

  while (max >= min) {
    guess = Math.floor( (min + max) / 2 );
    if (nums[guess] === target) {
      return guess;
    }
    else if (nums[guess] < target) {
      min = guess + 1;
    }
    else {
      max = guess - 1;
    }
  }
  
  return -1;
}
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let result = binarySearch(primes, 73);
console.log(result);