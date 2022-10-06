#!/usr/bin/env node

// https://leetcode.com/problems/to-lower-case/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

function toLowerCase(s) {
  console.log("s: " + s);
  let arr = s.split("");
  let char = "";
  let result = "";
  for (let i=0; i<arr.length; i++) {
    char = arr[i];
    result = result + char.toLowerCase();
  }
  console.log("result: " + result);
  return result;
  
}

let s = "Hello";
let answer = toLowerCase(s);
console.log("answer: " + answer);