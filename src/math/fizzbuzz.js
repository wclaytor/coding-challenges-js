#!/usr/bin/env node

// https://leetcode.com/problems/fizz-buzz/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "number", describe: "Number of iterations", type: "integer", demandOption: true })
 .argv;

// Given an integer n, return a string array answer (1-indexed) where:
//  answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//  answer[i] == "Fizz" if i is divisible by 3.
//  answer[i] == "Buzz" if i is divisible by 5.
//  answer[i] == i (as a string) if none of the above conditions are true.

function fizzBuzz(n) {

  for (let i=0; i<n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {console.log("FizzBuzz")}
    else if (i % 3 == 0) {console.log("Fizz")}
    else if (i % 5 == 0) {console.log("Buzz")}
    else {console.log(i)}
  }
  
}

fizzBuzz(options.number);