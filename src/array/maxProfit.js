#!/usr/bin/env node

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

// Given ...

function maxProfit(prices) {
  let maxProfit = 0
  let min = prices[0]
  for (let i = 1; i < prices.length; i++){
      min = Math.min(prices[i], min)
      maxProfit = Math.max(prices[i] - min, maxProfit)
  }
  
  return maxProfit
  
}
let prices = [7,1,5,3,6,4];
let answer = maxProfit(prices);
console.log("answer: " + answer);