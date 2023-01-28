const names = ['Elphas', 'Jayden', 'Miphi', 'Kane']
// index
console.log(names[2])
// iteration 
for (const el of names) {
  console.log(el)
}
// length
names.push('Cole');
console.log(names.length)

const findJulie = names.findIndex(el => el === 'Kane')
console.log(findJulie)
// splice 
const spliceOne = names.splice(2, 1)
console.log(names)