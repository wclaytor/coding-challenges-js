#!/usr/bin/env node

// https://leetcode.com/problems/climbing-stairs/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "number", describe: "Number of stairs", type: "integer", demandOption: true })
 .argv;

// Given ...

function climbStairs(n) {
    
  const cache = {
    "0": 0,
    "1": 1,
    "2": 2,
  };
  
  if (n <= 2) return n;
  
  for (let i = 3; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
  
}

let answer = climbStairs(options.number);
console.log("answer: " + answer);