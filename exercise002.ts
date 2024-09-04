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
let fibonacciTerm: number = 15;
let firstTerm: number = 0;
let secondTerm: number = 1;
let thirdTerm: number;
for (let _i: number = 0; _i < fibonacciTerm + 1; _i++) {
  console.log(firstTerm);
  thirdTerm = firstTerm + secondTerm;
  firstTerm = secondTerm;
  secondTerm = thirdTerm;
}

// another method
// soal no 5
const _number5: number = 13;
let _fib: number = 0;
let _n1: number = 0;
let _n2: number = 1;
let _hasilFib = `${_number5} -> `;
console.log(_n1, _n2);

for (let i = 1; i <= _number5; i++) {
  _fib = _n1 + _n2;
  console.log(_fib);
  _n1 = _n2;
  console.log(_n1);
  _n2 = _fib;
  console.log(_n2);
  _hasilFib += i === _number5 ? `${_n1}` : `${_n1}, `;
}
console.log(_hasilFib);
