
function createPow(arr, pow) {

  let arr2 = arr.map(item => item ** pow);
  console.log(arr2);

};

createPow([1, 3, 5], 4); // [1, 81, 625]
createPow([1, 2, 4, 9], 3); // [1, 8, 64, 729] 
