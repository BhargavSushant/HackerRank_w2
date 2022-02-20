function lonelyinteger(a) {
  // Write your code here
  const b = [...a];
  let counts = {};

  b.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1;
  });
console.log(counts);
  for (const [key, value] of Object.entries(counts)) {
    console.log(`${key}: ${value}`);
    if(value==1) return key;
  }
}

const ans =lonelyinteger([1, 1, 2]);
console.log(ans);
