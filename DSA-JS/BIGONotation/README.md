# Algorithms with Javascript cc CodeEvolution

- introduction to fundamentals of algorithms
- practical take on algorithms with javascript
- part one of a two-part (Algorithms +Data Structures) course

(Algorithms on trees and graphs - next course)

### Topics

- Algorithms
- measuring performance
- time & space complexity
- Big O notation
- Math algorithms
- sort
- Search
- Misc Algorithms and problem-solving

### Prerequisites

- Modern Javascript:
    - Javascript fundamentals crash course
    - Advanced Javascript crash course
    - ES2015 topics

- Put yourself out of your comfort zone: don’t stress yourself
- Pen and paper and trace execution of code with sample input
- code along with him & don’t rush through the videos

## Algorithm

- An algorithm is a set of well-defined instructions to solve a particular problem
    - following a recipe with ingredients to have a tasty dish
    - algorithms to add 2numbers

```jsx
 input (a & b) -> algorithm (add '+', return value) -> output (sum of a & b)
```

### Characteristic of Algorithms

- well-defined input & output
- each step should be clear and unambiguous
- language independent

### why algorithms

- As a developer, you come across problems that you need to solve
- learning algorithms translate to learning different techniques to efficiently solve those problems
- one problem can be solved using many ways using algorithms
- each algorithm comes with its own tradeoffs when it comes to performance

### Algorithm Analysis

- multiple ways to solve one problem e.g sorting a list of numbers e.g Arrays or LinkedList but how do we analyze which one is a more efficient algorithm by a measure of its performance?
- absolute running time(in milliseconds) of an algorithm can't be predicted since it depends on a number of factors
    - the programming language used to implement the algorithm
    - computer the program runs on
    - other programs running at the same time
    - quality of the Operating System(OS)
- measured in terms of input size
    - **Time Complexity**: the amount of time taken by an algorithm to run as a function of input size
    - **Space Complexity**: the amount of memory taken by the algorithm to run as a function of input size
- evaluating against input size, the analysis isn’t only machine independent but the comparison is more appropriate
- No solution works every single time. It’s always good to know multiple ways to solve the problem and use the best solution given your constraints
- if your app needs to be very quick and has plenty of memory to work with you don’t have to worry about space complexity
- if you have very little memory to work with you should pick a solution that is relatively slower but needs less space

### how to represent the complexity

Use [Asymptotic notations](https://www.programiz.com/dsa/asymptotic-notations) which are mathematical tools to represent time & space complexity  

- [ ]  Big-O Notation (O-Notation) - worst-case complexity
- [x]  Omega Notation - (**Ω-notation**) - best-case complexity
- [x]  Theta Notation (**Θ-notation**) - Average case complexity

## Big-O notation

- The worst-case complexity of an algorithm
- It describes the complexity of an algorithm using algebraic terms

### Characteristics of Big-O

- expressed in terms of input
- focuses on the bigger picture without getting caught up in the minute details

## Big O Time Complexity

```jsx
function summation(n) {
  let sum = 0; //execute (executes once)
  for(let i = 1; i <= n; i++) {
    sum += i; //execute (number of times depends on n)
  }
  return sum; ///execute (executes once)
}
summation(4) // 10
```

- focuses on the bigger picture without getting caught in the minute details

```jsx
n + 2 // n = 100 , 102
n // contributes more 
```

### Time Complexity

`O(n)` - linear (loop - no iteration)

```jsx
function summations(n) {
  return (n * (n + 1)) //executed once doesn't iterate (linear)
}
```

`O(n²)` - Quadratic time complexity `3n² + 5n + 1`

```jsx
for(i = 1; i <= n; i++) {
  for(j = 1; j <= i; j++) {
    
  }
}
```

### Space Complexity

```jsx
O(1) - constant // sort arrays 
O(n) - linear
O(long) - logarithmic
```

[Big O trends](https://ajakcyer97.medium.com/big-o-time-complexity-graph-simplified-798f3b67877a) 

![bigO.webp](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7c30850-164c-423b-b9c7-fdf491acf62c/bigO.webp)

- the highest(horrible) operation to the lowest (excellent)
    - O(n!)
    - O(2^n)
    - O(n^2)

Summary 

- Multiple algorithms exist for the same problem and there’s no one right solution. Different algorithms work well under different constraints
- The same algorithm with the same programming language can be implemented in different ways
- when writing programs at work don’t lose sight of the big picture. Rather than writing clever code, write code that is simple to read and maintain