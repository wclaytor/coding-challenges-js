#!/usr/bin/env node

// https://leetcode.com/problems/product-of-array-except-self/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

// Given ...

function productExceptSelf(nums) {
  let answer = [];
  let product;
  for (let i = 0; i < nums.length; i++) {
      product = 1;
      for (z = 0; z < nums.length; z++){
          if (z != i) {
              product = product * nums[z];
          }
      }
      answer.push(product);
  }
  return answer;
}

let nums = [-1,1,0,-3,3];
let expected = [0,0,9,0,0];
let answer = productExceptSelf(nums);
console.log("answer: " + answer);