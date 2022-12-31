const sumAll = function() {
  let args = [...arguments];
  let errPresent;

  args.forEach(x => {
    if (typeof(x) !== 'number' || x < 0) {
      errPresent = "ERROR!";
    }
  })

  if (errPresent === "ERROR!") {
    return errPresent;
  }

  args.sort((x, y) => {
    return x - y;
  })

  let sum = 0;
  for (let i = args[0]; i <= args[args.length - 1]; i++) {
    // console.log("typeof", typeof(args[i]));
    
    sum += i;
  }

  return sum;
};

console.log(sumAll(1, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
