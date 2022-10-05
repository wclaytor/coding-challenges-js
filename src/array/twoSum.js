#!/usr/bin/env node

// https://leetcode.com/problems/two-sum/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

// Given ...

function twoSum(nums, target) {
  let output = []
  let found = false
  for (let i = 0; i < nums.length; i++){
      
      for (let z = i + 1; z < nums.length; z++ ) {
          if (nums[i] + nums[z] == target) {
              output.push(i)
              output.push(z)
              found = true
              break
          }
          
          if (found) {break}
      }
  }
  return output
}

let nums = [2,7,11,15];
let target = 9;
let answer = twoSum(nums, target);
console.log("answer: " + answer);