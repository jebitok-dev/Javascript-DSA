- Problem statement
- try solving the problem
- code along
- determining the Big O of the solution

### Fibonacci Sequence

The Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones 

- The first two numbers in the sequence are 0 and 1

```jsx
fibonacci(1); // [0, 1]
fibonacci(2); // [0, 1]
fibonacci(3); // [0, 1, 1]
fibonacci(4); // [0, 1, 1, 2]
fibonacci(5); // [0, 1, 1, 2, 3]
fibonacci(6); // [0, 1, 1, 2, 3, 5]
fibonacci(7); // [0, 1, 1, 2, 3, 5, 8]
fibonacci(8); // [0, 1, 1, 2, 3, 5, 8, 13]
fibonacci(9); // [0, 1, 1, 2, 3, 5, 8 13, 21]
fibonacci(10); //[0, 1, 1, 2, 3, 5, 13, 21, 34]
```

- Given a number, `n` find the first `n` elements of the Fibonacci sequence
    - I think we’ll iterate through the array
    - mentioned array. items
    - assume the value of n so that we get some Fibonacci sequence value

### Factorial of Number

- given an integer n find the factorial of the integer
- The Factorial of a non-negative integer n denoted n is the product of all positive integers less than or equal to n

```jsx
factorial(0) // 1
factorial(4) // 4 * 3 * 2 * 1 = 24
factorial(5) // 5 * 4 * 2 * 1 = 120
```

### Prime Number

- given a natural number n determine if the number is prime or not
- A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

```jsx
use Boolean 
isPrime(5) //true (1*5 - positive & not a multiple of two )
isPrime(4) //false (multiple of two)
```

### *Optimized Primality Test*

- integers larger than the square root do not need to be checked because whenever `n = a*b`, one of the two factors `a & b` is than or equal to the square root of `n`

```jsx
n = 24, a=4, b=6 
// the square root of 24 = 4.89
a < 4.89
n = 35, a = 5, b = 7
// squarerroot is 5.97
a > 5.97

```

### Power of Two

- Given a positive integer n determine if the number is a power of 2 or not
- An integer is a power of two if there exists an integer `x` such that `n === 2^n`

```jsx
isPowerOfTwo(1) = true(2^0)
isPowerOfTwo(2) = true(2^1)

n = 8
8/2 = 4 (remainder 0)
4/2 = 2 (remainder 0)
2/2 = 1 (remainder 0)
if remainder is not 0 in any step n is not a power of 2

```

### *Bitwise Power of Two*

```jsx
1 -> 1
2 -> 10
3 -> 100
4 -> 1000

1 - 0001
0 - 0000

2 - 0010
1 - 0001
0 - 0000

3 - 0100
2 - 0010
0 - 0000

4 - 1000
3 - 0100
0 - 0000
```