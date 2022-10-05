#!/usr/bin/env node

// https://leetcode.com/problems/valid-anagram/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

// Given ...

function isAnagram(s, t) {
  // error
  if (s.length != t.length) { return false; }

  let arr1=s.split("").sort();
  let arr2=t.split("").sort();
  let answer = true;

  for (let i=0; i<arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      answer = false;
      break;
    }
  }
  return answer;
};

let s = "anagram";
let t = "nagaram";

s = "rat";
t = "car";

let answer = isAnagram(s, t);
console.log("answer: " + answer);
