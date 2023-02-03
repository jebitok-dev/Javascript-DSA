# Object & Arrays - Big O

### Objects

- collection of key-value pairs
- time complexity is constant for:
    
    ```jsx
    insert - O(1)
    Remove - O(1)
    Access - O(1)
    ```
    
- time complexity is linear for:

```jsx
Search - 0(n)
Object.keys() - O(n) // array of keys
Object.values() - O(n) // array of values
Object.entries() - O(n)
```

### Arrays

- an array is an ordered collection of values
- time complexity is constant when you:
    - insert or remote element at the end
    - Access an element
    - push/pop
    
    ```jsx
    O(1) //insert or remote element at the end
    ```
    
- time complexity is linear when you:
    - insert/remove at the beginning (making LinkedList better than an array)
    - searching an element
    - Shift/unshift/concat/slice/splice
    - forEach, map, filter, reduce