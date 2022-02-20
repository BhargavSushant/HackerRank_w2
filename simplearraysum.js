// let size = 6;

// for (let i = 0; i < size; i++) {
//   let row = "";
//   for (let j = 0; j < size; j++) {
//     row += " " + Number(i + j) + "  ";
//   }
//   console.log(row);
// }

// function diagonalDifference(arr) {
//   // Write your code here
//   let sum = 0;
//   for (let i = 0; i < arr[0].length; i++) {
//     for (let j = 0; j < arr[0].length; j++) {
//       if (i - j == 0 || i + j + 1 == arr[0].length) {
//         sum += arr[i][j];
//       }
//     }
//   }
//   console.log(sum);
// }

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9],
// ];
// console.log(arr.length);
// // diagonalDifference(arr);

// for (let i in arr[0]) {
//     console.log(arr[i][arr.length - i - 1]);
// }

// function plusMinus(arr) {
//   // Write your code here
//   let x = arr.length;
//   let  pos=0, neg=0, net=0;
//   arr.forEach((a) => {
//     a > 0 ? pos++ : a < 0 ? neg++ : net++;
//   });
//   console.log(pos,neg,net);
// }

// let arr = [1, 3, 4, 0, -2, -1];
// plusMinus(arr);
let n=5;
for(let i=n;i>0;i--){
    console.log(' '.repeat(i-1)+"#".repeat(n-i+1));
}


function miniMaxSum(arr) {
    // Write your code here
    let sum=arr.reduce(
        (x,y)=>x+y,0
        );
    arr.sort();
console.log(sum-arr[arr.length-1],sum-arr[0]);

}