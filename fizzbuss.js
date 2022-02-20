function fizzBuzz(n) {
  // Write your code here
  let i =1;
 while (i<n){
    op =
    (i % 15 == 0)
      ? "FizzBuzz"
      : (i % 3 == 0 && i % 5 != 0)
      ? "Fizz"
      : (i % 3 != 0 && i % 5 == 0)
      ? "Buzz"
      : i;
      i++;
  console.log(op);
 }
}

fizzBuzz(11);