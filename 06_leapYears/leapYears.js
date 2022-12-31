const leapYears = function() {
  let year = arguments[0];
  let leap = false;
  // console.log(year);

  if (year % 4 === 0) {
    leap = true;
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        leap = true;
      } else {
        leap = false;
      }
    }
  }

  return leap;
};

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
