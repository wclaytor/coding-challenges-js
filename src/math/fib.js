#!/usr/bin/env node

// https://leetcode.com/problems/fibonacci-number/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

function fib(n) {
  if (n===0 || n===1) { return n };
  return fib( n - 1 ) + fib( n - 2 );
}

let answer;
for (let i=0; i<=10; i++) {
  answer = fib(i);
  console.log("i: " + i + " = " + answer);
}