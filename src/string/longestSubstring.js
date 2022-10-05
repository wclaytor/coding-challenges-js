#!/usr/bin/env node

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

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
function lengthOfLongestSubstringOriginal(s) {
  let array = s.split("");
  let output = 0;
  
  let currentSubstring = "";
  let currentChar = "";
  let longestSubstring = "";
  let l = s.length;
  
  for (i=0;i<l;i++) {
      // starting char
      currentSubstring = array[i];
      for (j=i+1;j<l;j++) {
          currentChar = array[j];
          if ( currentSubstring.includes(currentChar) ) {
              break;
          } else {
            currentSubstring = currentSubstring + currentChar;
          }
      }
      
      // longest?
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
        
        // remove
        output = longestSubstring.length;
      }
  }

  output = longestSubstring.length
  return output;
}

function lengthOfLongestSubstring(s) {
  let array = s.split("");
  let l = array.length;
  let currentSubstring = "";
  let currentChar = "";
  let longestSubstring = "";

  for (i=0;i<l;i++) {
    currentSubstring = array[i];
    for (j=i+1;j<l;j++) {
      currentChar = array[j];
      if ( currentSubstring.includes(currentChar) ) {
          break;
      } else {
        currentSubstring = currentSubstring + currentChar;
      }
    }
      
    // longest?
    if (currentSubstring.length > longestSubstring.length) {
      longestSubstring = currentSubstring;
    }
  }

  return longestSubstring.length;
}

let s = "abcabcbb";
let answer = lengthOfLongestSubstring(s);
console.log("answer: " + answer);
