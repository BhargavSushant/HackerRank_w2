function birthdayCakeCandles(candles) {
  // Write your code here
  // making a hashmap
  let counts = {};
  const maxnum = Math.max(...candles);
  candles.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  console.log(counts);
  
  return counts[maxnum];
}

let val = birthdayCakeCandles([4, 4, 5, 5, 5, 1, 2, 3, 3]);
console.log(val);
