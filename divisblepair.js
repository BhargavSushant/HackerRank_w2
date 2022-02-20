// // Write your code here
// let ar = [1, 3, 2, 6, 1, 2],
//   n = 6,
//   k = 3;
// let count = 0;
// for (let i = 0; i < ar.length; i++) {
//   for (let j = i + 1; j < ar.length ; j++) {
//     (ar[i] + ar[j]) % k == 0 ? count++ : "";
//     console.log(i, j, ar[i] + ar[j]);
//   }
// }
// console.log(count);


// const arr = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"]
// const counts = {};
// let i=0;
// arr.forEach((x) => {
//   counts[x] = (counts[x] || 0) + 1;
//   i++;
// });
// console.log(counts,i,arr.length)
// console.log(counts.hasOwnProperty("a"));

function matchingStrings(strings, queries) {
    // Write your code here
   let counts={},output=[];
   // make a kv pair set for each element
   strings.forEach((x)=>{
       counts[x]=(counts[x]||0)+1;
   }
         );
   
queries.forEach(x=>{
    if(counts.hasOwnProperty(x)){
        output.push(counts[x]);
    }else{
        output.push(0);
    }
});
console.log(output);
}

matchingStrings(["a","b","b","a","c"],["a","c","x"])
