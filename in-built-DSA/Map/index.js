const resultData = new Map();

resultData.set('average', 1470);
resultData.set('lastResult', undefined);
 console.log(resultData) //Map(2) {'average} => 1470, 'lastResult' => undefined}

const country = {name: 'USA', states: 120};
console.log(country) // { name: 'USA', states: 120}


for(const el of resultData) {
  console.log(el) // ['average', 1470]
}

resultData.set('lastResult', 440) 
console.log(resultData) 
resultData.get('lastResult') // ['average', 1470]
console.log(resultData) // Map(2) { 'average' => 1470, 'lastResult' => 440 }
console.log(resultData.delete(country)) // false
