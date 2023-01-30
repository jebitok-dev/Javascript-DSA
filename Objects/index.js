const person = {
  firstName: 'Tom', age: 28, hobbies: ['swimming', 'music', 'coding'], greet() {console.log('Hi, I am ' + this.firstName + " " + this.lastName)}
}

person.lastName = 'Aquils'

// can't iterate
console.log(person.age)
console.log(person.firstName)
console.log(person.hobbies[1])
console.log(person)
// method
person.greet()


