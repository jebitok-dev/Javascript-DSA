# In-Built Data Structures

# Arrays, Sets, Objects, Maps & weak sets and maps

Data structures: allows you to manage data e.g arrays e.g `[1,2,3]`, maps e.g `new Map() map.set(’a’, ‘b’)`, sets e.g `new Set() set.add(1)`, and objects e.g `{name: ‘Max, age: 31}` 

- different tasks require different data structures: data need to be managed
    - an ordered list of data (duplicate data allowed) - `Arrays [1, 2, 5, 4]` - unsorted
    - an unordered list of data (no duplicate data wanted) - Set - `new Set() set.add(’pizza’)`
    - key-value pairs of unordered data - object - `{school: ‘Junior Academy’, address: 27}` - assign keys
    - key-value pairs of ordered (iterable data) - map to identifier - map - `new Map() map.set(’loc’, ‘Germany’)`
- data structures categories
    - custom data structures (what you build alone as a developer)
    - inbuilt data structures
- **Array**:
    - comma separated & block brackets
    - insertion order kept by javascript with order
    - iterable (loop through arrays)
    - size is dynamic (based on length) - memory management
    - duplicates values r allowed: types of values can be mixed even for a nested array
    - deletion & finding elements can require (extra work)
- **Set**
    
    ```jsx
    new Set();
    set.add('Pizza')
    set.add('burger')
    set.add('pizza')
    ```
    
    - insertion order is not stored/memorized
    - element access and extraction via the method
    - iterable (= you can use the for-of loop)

### Arrays vs Sets

- You can always use **arrays** for any kind of data and must use them if order matters or duplicates are wanted whereas **sets** are only usable if the order doesn’t matter and you only need unique values. **Sets** can simplify data access e.g finding, and deletion compared to arrays

## Objects a closer looker

```jsx
name: 'Sharon', age: 27, greet()
{console.log('Hi, I am ' + this.name)}}
```

objects:

- can have string, number,, and method attached to it.
- They’re unordered key-value pairs of data.
- access elements via key(property name)
- not iterable (there’s a for-in loop)
- keys are unique & values are not (keys have to be unique not duplicated)
- keys have  to be strings, numbers, or symbols (can’t be objects themselves)
- data structures or constructs that can store data & have functionality i.e methods

## Maps - A closer Look

```jsx
new Map()
map.set('name', 'Max')
map.set(true, true) // Boolean key
```

- using set
- ordered key-value pairs of data
- element access via key
- iterable(you can use the for-of loop)
- keys are unique whereas values aren’t
- keys can be anything i.e reference values like arrays
- they act as pure data storage for the optimized data access (can’t add functionality)

### Objects vs Maps

- objects are common data structures in javascript as its versatile & data storage. Must-use if you want to add extra functionality whereas maps are focused on data storage & access and it simplifies and improves data access compared to objects

### WeakSet & WeakMap

- variation of set and map: values are weakly referenced
- Javascript garbage collection can delete values and keys if not used anywhere else in the app(memory advantage)