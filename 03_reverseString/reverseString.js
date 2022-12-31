const reverseString = function(str) {
  return str.split("").reverse().join("");
};

console.log(reverseString('hello'));
console.log(reverseString(''));

// Do not edit below this line
module.exports = reverseString;
