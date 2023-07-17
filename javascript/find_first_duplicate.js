function findFirstDuplicate(arr) {
  // go through each element in the array grab that and comppare ut ti every other element and see if it matches
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    // need to iterate through each other elemnt in array
    for (let y = i + 1; y < arr.length; y++) {
      if (arr[i] === arr[y]) {
        return arr[i]; // Return the first duplicate found
      }
    }
  }
  return - 1
}

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
