// s="durga"
// console.log(s.length)

function test_same_elements_both_arrays() {
    // Read input arrays from the console
    var input1 = prompt("Enter elements of the first array, separated by commas: ");
    var input2 = prompt("Enter elements of the second array, separated by commas: ");
  
    // Convert input strings to arrays
    var arra1 = input1.split(',').map(function(item) {
      return item.trim();
    });
  
    var arra2 = input2.split(',').map(function(item) {
      return item.trim();
    });
  
    var result = 0; // Counter to store the count of same elements
  
    // Loop through the first array
    for (var i = 0; i < arra1.length; i++) {
      // Loop through the second array
      for (var j = 0; j < arra2.length; j++) {
        if (arra1[i] === arra2[j]) {
          result++; // Increment the counter if the elements match
        }
      }
    }
  
    console.log("Count of same elements: " + result); // Output the count of same elements
  }
  
  // Call the function to test same elements between two arrays
  test_same_elements_both_arrays();
  