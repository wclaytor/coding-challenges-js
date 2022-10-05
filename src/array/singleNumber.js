#!/usr/bin/env node

// 

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

// Given ...

function singleNumber(nums) {
  let once = []
  let output
  for (let i = 0; i < nums.length; i++){
      if ( once.includes(nums[i]) ) {
          once.splice(once.indexOf(nums[i]), 1)
      }
      else{
          once.push(nums[i])
      }  
  }
  
  return once[0]
}

let nums = [4,1,2,1,2];
let answer = singleNumber(nums);
console.log("answer: " + answer);