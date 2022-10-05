#!/usr/bin/env node

// https://leetcode.com/problems/ransom-note/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

function canConstruct(ransomNote, magazine) {
  let match = true;
  let ransomNoteArr = ransomNote.split("")
  let magazineArr = magazine.split("")
  
  for (var i = 0; i < ransomNoteArr.length; i++){
      magazineArrIndex = magazineArr.indexOf(ransomNoteArr[i])
      if ( magazineArrIndex >= 0) {
          delete magazineArr[magazineArrIndex]
      } 
      else {
          match = false;
          break;
      }
  }
  
  return match;

}

let ransomNote = "aa";
let magazine = "ab";
let expected = false;

let answer = canConstruct(ransomNote, magazine);
console.log("answer: " + answer);