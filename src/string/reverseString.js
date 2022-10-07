#!/usr/bin/env node

/*
https://leetcode.com/problems/reverse-string/

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

*/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function reverseString(s) {
    let len = s.length;
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      swap(s,left,right);
      left++;
      right--;
    }
  
}
let s = ["h","e","l","l","o"];
let answer = reverseString(s);
console.log("answer: " + s);