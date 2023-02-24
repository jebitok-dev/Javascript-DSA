# Custom Data Structures

## LinkedList

- every element doesn’t have an exact value but has hinted of the next value
- list full of elements linked to one another

```jsx
5(next) ->  'hi'(next) -> 8(next) -> 11(next)
```

they were invented because they’re flexible …resizing and memory management

- every element knows about the next element
- It allows for efficient resizing & insertion at the start and end of the list
- taking inbuilt data structures to enhance custom DSA to do things in a better way

### Why we need LinkedList

- historically in other programming languages, the main reason was memory management. You didn’t have to specify or occupy the size in advance  (not relevant in Javascript as we use dynamic objects like arrays)
- Nowadays, Javascript has dynamic arrays (dynamic re-sizing builtin) and memory isn’t really the primary issue in Javascript apps
- Useful when you do a lot of insertion at the beginning of lists- LinkedList are faster than arrays

### Time Complexity & Big O Notation

Time complexity is how we compare & measure algorithms and we use BIG O nation to express it easily.

the higher the number the longer it will take to compute…grow in linear way 

```jsx

function sumUp(n) {
 let result = 0;
for(let i = 1; i <= n; i++) {
	result += i;
}
return result;
}
```

bigger number leads to more loop iterations, hence time increases in a linear way 

- linear time
- constant time
- quadratic time
- cubic time

Growth/trend - express by Big O nation - compare data structures - LinkedList vs Arrays 

- element access
    - Arrays (quicker way with index)
    
    ```jsx
    O(1)
    ```
    
    - Linkedlist: (loops through all node elements)
    
    ```jsx
    O(n)
    ```
    
- insertion to the end
    - Linkedlist(append and it's fast)
    
    ```jsx
    with tail: O(1)
    without tail O(n)
    ```
    
    - Arrays (fast)
    
    ```jsx
    O(1)
    ```
    
- insertion to start (constant time)
    - LinkedList advantage
    
    ```jsx
    O(1)
    ```
    
    - Arrays(difficult as it moves index)
    
    ```jsx
    O(n)
    ```
    
- insertion to middle
    - linkedlist
    
    ```jsx
    Search time + O(1)
    ```
    
    - Arrays(move index of elements)
    
    ```jsx
    O(n)
    ```
    
- search time
    - linkedlist
        
        ```jsx
        O(n) //finding place to insert
        ```
        
    - arrays
    
    ```jsx
    O(n) //might not know element so might have to loop through
    ```
    

custom data structures are only for niche use-cases