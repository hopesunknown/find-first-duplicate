function findFirstDuplicate(arr) {
  // type your code here

  // find the first duplicate value that occurs by:
  // creating a new set which passes array inside\
  // if the value already exists, then return that value
  // if no duplicates, then return -1

  let elementSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (elementSet.has(arr[i])) return arr[i];
      elementSet.add(arr[i]);
    }
  return -1;
  
}

// Gehrig's solution:
// function findFirstDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] === arr[i + 1]){
//       return arr[i]
//     } else return -1
//   }
// }


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
