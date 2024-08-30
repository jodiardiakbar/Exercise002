// 1. number checker
let numberToCheck: number = 26;
if (numberToCheck % 2 === 0) {
  console.log(`even number`);
} else {
  console.log(`odd number`);
}

// 2. prime number

// 3. sum 1 to n
let n: number = 3;
let hasil: number = 0;
for (let i: number = 0; i <= n; i++) {
  hasil += i;
}
console.log(hasil);

// 4. factorial mumber
let factorialNumber: number = 4;
let result: number = 1;
for (let i: number = 1; i <= factorialNumber; i++) {
  result = result * i;
}
console.log(result);

// 5. fibonacci
