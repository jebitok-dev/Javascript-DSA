function processData(input) {
  if(!input || typeof input !== 'string') {
    return;
  }


  let arr = input.split('\n').slice();
  arr.forEach(theString => {
  let string1 = "";
  let string2 = "";
  for(let i = 0; i < theString.length; i++) {
    if(i % 2 === 0) {
      string1 = string1 + theString[i];
    } else {
      string2 = string2 + theString[i];
    }
  }
  console.log(`${string1} ${string2}`)
})
}

processData("twoxbet");
processData("hackerrank");