// difference of sum of diagonals
//[]
/**
 * 
[
    [A11,A12,A13],
    [A21,A22,A23],
    [A31,A32,A33],
]
PRIMARY DIAGONAL = A11,A22,A33
SECONDARY DIAGONAL=A13,A22,A31
COMPLEXITY O(n)
 */
function diagonalDifference_O_n(arr) {
  let sum = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    sum += arr[i][i] - arr[i][n - i - 1];
  }

  //   console.log(sum);
  return Math.abs(sum);
}
function diagonalDifference_O_n_2(arr) {
  let sum = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) sum += arr[i][j];
      if (j == n - i - 1) sum -= arr[i][j];
    }
  }
  //   console.log(sum);
  return Math.abs(sum);
}

// Driver code

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference_O_n(arr));
console.log(diagonalDifference_O_n_2(arr));
