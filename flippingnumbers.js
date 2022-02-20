// https://www.hackerrank.com/challenges/three-month-preparation-kit-flipping-bits/

/**
 * problem explaination :
 * given : input : integer of base 10
 * expected :output : decimal rep of complement of 32 bit binary rep of input
 * example : input = 9 , binary rep = 1001, 32 bit binary rep = 00000000000000000000000000001001, complement of 32bit rep= 11111111111111111111111111110110
 * decimal rep of 11111111111111111111111111110110 is 4294967286, that is our output
 */
function flippingBits(n) {
  // Write your code here

  const a = n;
  const trailingBits = a.toString(2);
  const trailingBitsLength = trailingBits.length;
  const prefixBitsLength = 32 - trailingBitsLength;
  const binary32bit = "0".repeat(prefixBitsLength) + trailingBits;
  let op = "";

  [...binary32bit].forEach((x) => {
    op += flip(x);
  });

  function flip(x) {
    x = x === "1" ? 0 : 1;
    return x;
  }

  return parseInt(op, 2);
}

console.log(flippingBits(2));
// TEST CASES

// 2147483647
// 1
// 0

// Output
// 2147483648
// 4294967294
// 4294967295
