// new Set();
// set.add('Pizza')
// set.add('burger')
// set.add('pizza') 

const ids = new Set();
// add values to set
ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);
// iterate through sets 
for(const el of ids) {
  console.log(el)
}

// has property in sets

console.log(ids.has(1))
// delete values from sets
ids.delete('abc')
console.log(ids.has('abc'))