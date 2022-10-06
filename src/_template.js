#!/usr/bin/env node

/*

*/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

// Given ...

function solution(n) {
  let result = []
  for (let i=0; i<n; i++) {
    console.log(i)
  }
  
}

let answer = solution(options.number);
console.log("answer: " + answer);