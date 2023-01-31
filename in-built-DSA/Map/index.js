const resultData = new Map();

resultData.set('average', 1470);
resultData.set('lastResult', undefined);
 console.log(resultData)

const country = {name: 'USA', states: 120};
console.log(country)


for(const el of resultData) {
  console.log(el)
}

resultData.set('lastResult', 440)
console.log(resultData)
resultData.get('lastResult')
console.log(resultData)
console.log(resultData.delete(country))
