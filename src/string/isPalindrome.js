#!/usr/bin/env node

/*
https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

function isPalindrome(s) {
  s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let result = true;
  let arr = s.split("");
  let len = arr.length;
  let mid = Math.floor(len/2);
  
  for (let i=0;i<=mid;i++) {
      if ( !(arr[i] === arr[len-1-i]) ) {
          result = false;
          break;
      }
  }
  
  return result;
  
}
let s = "race a car";

let answer = isPalindrome(s);
console.log("answer: " + answer);