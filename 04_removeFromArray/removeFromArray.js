const removeFromArray = function () {
  const args = [...arguments].splice(1);
  // console.log(args);
  let arr = arguments[0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }

  let newArr = arr.filter(x => {
    return x !== undefined;
  })
  // console.log(newArr);

  return newArr;
};

console.log(removeFromArray([1, 2, 3, 4], 7, 2));
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
