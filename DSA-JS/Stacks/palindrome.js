var letters = []; //stack

var word = "racecar"; //palindrome
var reverseWord = "";

// palindrome word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i])
}

for(var i = 0; i < word.length; i++) {
  reverseWord += letters.pop(); //racecard
}

if(reverseWord === word) {
  console.log(word + " is a palindrome")
} else {
  console.log(word + " is not a palindrome")
}