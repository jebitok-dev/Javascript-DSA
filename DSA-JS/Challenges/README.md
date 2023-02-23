# Challenges

## Recursive Fibonacci Sequence

- Given a number, n find the n^th element of the Fibonacci sequence
- The Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
- The first two numbers in the sequence are 0 and 1 (0, 1, 1, 2, 3, 5, 8, …)

```jsx
// index
recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8
```

### Tips for recursive solutions

- figure out how to break down the problem into smaller versions of the same problem
- identify the base case for recursion

### Recursive Fib sequence contd

```jsx
Fn = Fn-1 + Fn-2

F0 = 0 & F1 = 1

F2 = F1 + F0 

recursiveFibonacci(0) // 0
recursiveFibonacci(1) // 1
recursiveFibonacci(2) // 1
recursiveFibonacci(3) // 2
recursiveFibonacci(4) // 3
recursiveFibonacci(5) // 5
recursiveFibonacci(6) // 8
recursiveFibonacci(7) // 13
recursiveFibonacci(8) // 21
recursiveFibonacci(9) // 34
```

O(2^n) - recursive solution (not optimal) as compared to iterative

## Recursive factorial of a number

- factorial of a non-negative number `n` is the product of all positive integers less than or equal to `n`
- Given an integer n find the factorial of the integer

```jsx
factorial(0) = 1
factorial(4) = 24
factorial(6) = 720
```

### Tips for recursive solutions

- figure out how to break down the problem into smaller versions of the same problem
- identify the base case for recursion

## Search Algorithms

### Linear Search Pseudocode

- Given an array of `n` elements and a target, element `t` finds the index of `t` in the array. Return `-1` if the target element is not found

```jsx
arr = [-5, 2, 10, 4, 6] t=10 //should return 2
arr = [-5, 2, 10, 4, 6] t=6 // 4
arr = [-5, 2, 10, 4, 6] t=20 // -1
```

- start at the first element in the array and move toward the last
- at each element to check if the element is equal to the target element.
    - If its equal return the index of that element
    - If you don’t find the element after looping through the entire array return -1

### Binary search (Recursive solution)

- Given a sorted array of `n` elements and a target, element `t` finds the index of `t` in the array. Return `-1` if the target element is not found
- Worked on sorted array else use linear search

```jsx
arr=[-5, 2, 4, 6, 10] // t = 10 // 4
arr=[-5, 2, 4, 6, 10] // t = 6 // 3
arr=[-5, 2, 4, 6, 10] // t = 20 // -1 

arr=[-5, 2, 4, 6, 10] // 4 is the middle element so search right or left using binary search
```

### Binary Search Pseudocode

- if the array is empty return -1 as the element cannot be found
- if the array has elements, find the middle element in the array. If the target is equal to the middle element, return the middle element index
- if the target is less than the middle element, binary search left half of the array
- if the target is greater than the middle element binary search the right half of the array

### Recursive Binary Search

- Given a sorted array of `n` elements and a target, element `t` finds the index of `t` in the array. Return `-1` if the target element is not found

```jsx
arr=[-5, 2, 4, 6, 10] // t = 10 // 4
arr=[-5, 2, 4, 6, 10] // t = 6 // 3
arr=[-5, 2, 4, 6, 10] // t = 20 // -1 

arr=[-5, 2, 4, 6, 10] // 4 is the middle element so search right or left using binary search
```

## Sorting

- important in web development
- numbers: ascending order
- Different types of sorting:
    - Bubble Sort
    - Insertion Sort
    - Quick Sort
    - Merge Sort

### Bubble Sort

- Given an array of integers sort the array
- poor sorting algorithm but good for an introduction

```jsx
const arr = [-6, 20, 8, -2, 4] // [-6, -2, 4, 8, 20]
// swapping greater elements with lesser ones 
```

### Insertion Sort

- Given an array of integers sort the array
- can be ascending or descending
- virtually split the array into already sorted and remaining elements are unsorted
- selected an unsorted element and compare it with all elements in the sorted part
- if the elements in the sorted part are smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part toward the right
- insert the selected element at the right index
- repeat till all unsorted elements are placed in the right order

### Quick Sort

- Given an array of integers sort the array
- can be ascending or descending

Identify the pivot element in the array: either:

- pick the first element as a pivot
- pick the last element as a pivot(our approach)
- pick a random element as a pivot
- pick the median as the pivot

- Put everything that’s smaller than the pivot into a left array and everything that’s greater than the pivot into a right array
- Repeat the process for the individual left and right arrays till you have an array of length 1 which is sorted by definition
- Repeatedly concatenate the left array, pivot, and right array till one sorted array remains

```jsx
arr = [-6, 20, 8, -2, 4]
-6 -2   4   8 20
```

### Merge Sort

- Given an array of integers sort the array
- Ascending or descending

```jsx
const arr = [-6, 20, 8, -2, 4]
// left & right are not empty 
// left is empty push right array 
```

- divide the array into subarrays each containing only one element i.e an array with one element is considered sorted.
- repeatedly merge the subarrays to produce new sorted subarrays until there’s only one subarray remaining. That will be the sorted array.