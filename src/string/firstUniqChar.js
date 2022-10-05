#!/usr/bin/env node

// https://leetcode.com/problems/first-unique-character-in-a-string/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

// Given ...

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  let arr = s.split("");
  let l = arr.length;
  let firstUniq = -1;
  let nonUniq = [];
  let currentChar = "";
  let compChar = "";
  let isUniq;

  let i;
  let j;

  for (i=0; i<l; i++) {
    // set the current char
    currentChar = arr[i];
    isUniq = true;

    // if the current char is already known as non-unique
    // there is no need to compare
    if ( nonUniq.includes(currentChar) ) {
      isUniq = false;
      continue;
    }

    // compare the current char against each subsequent char
    // to see if it is the first unique
    for (j=i+1; j<l; j++) {
      // set the compare char
      compChar = arr[j];

      // if this char is not unique
      if (currentChar === compChar) {
        // add it to the list of known non-uniques
        nonUniq.push(currentChar);
        isUniq = false;
        break;
      }

    }

    // if we reached the end is this ... the first unique???
    if (isUniq === true && j===l) {
      firstUniq = i;
      break;
    }
  }

  return firstUniq;
  
};
let question = "loveleetcode";
question = "aabb";

let expected = 2;
let answer = firstUniqChar(question);
console.log("answer: " + answer);