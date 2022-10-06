#!/usr/bin/env node

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

/*
Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. 
It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.
*/

function removeDuplicates(nums) {
  for (let i=0; i<nums.length; i++) {
    for (let j=i+1; j<nums.length; j++) {
        if (nums[j] === nums[i]) {
            nums.splice(j, 1);
            j--;
        }
    }
  }

  return nums.length;

}

let nums = [1,1,2,3,1,4,2,2,1];
console.log("nums before: " + nums);

let result = removeDuplicates(nums);
console.log("result: " + result);
console.log("nums after: " + nums);