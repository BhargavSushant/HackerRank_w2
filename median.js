function findMedian(arr) {
  // Write your code here
  let brr = arr;
  arr.sort();
  console.log(arr);
  return (arr[(arr.length + 1) / 2]);
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
