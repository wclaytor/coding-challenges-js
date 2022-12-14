#!/usr/bin/env node

// https://www.khanacademy.org/computing/computer-science/algorithms#merge-sort

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "arg", describe: "Example argument", type: "string", demandOption: false })
 .argv;

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
function merge(array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;
  for (i = 0; k <= q; i++, k++) {
      lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
      highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;
  
  // Repeatedly compare the lowest untaken element in
  //  lowHalf with the lowest untaken element in highHalf
  //  and copy the lower of the two back into array
  while (i < lowHalf.length && j < highHalf.length) {
   if (lowHalf[i] <= highHalf[j]) {
       array[k] = lowHalf[i];
       i++;
       k++;
   } else {
       array[k] = highHalf[j];
       j++;
       k++;
   }
  }
  
  // Once one of lowHalf and highHalf has been fully copied
  //  back into array, copy the remaining elements from the
  //  other temporary array back into the array
  while (i < lowHalf.length) {
   array[k] = lowHalf[i];
   i++;
   k++;
  }
  
  while (j < highHalf.length) {
   array[k] = highHalf[j];
   j++;
   k++;
  }
  
}

// Takes in an array and recursively merge sorts it
function mergeSort(array, p, r) {
  if (r>p) {
      var mid = Math.floor((p+r)/2);
      mergeSort(array, p, mid);
      mergeSort(array, mid+1, r);
      merge(array, p, mid, r);
  }
}
var array = [14, 7, 3, 12, 9, 11, 6, 2];
console.log("before: " + array);
mergeSort(array, 0, array.length-1);
console.log("after: " + array);