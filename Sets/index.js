// new Set();
// set.add('Pizza')
// set.add('burger')
// set.add('pizza') 

const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

for(const el of ids) {
  console.log(el)
}

console.log(ids.has(1))