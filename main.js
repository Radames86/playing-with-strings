/******************
 * YOUR CODE HERE *
 ******************/
//=== 1 ===
function xify(str){
  let result = ""
  for(let i = 0; i < str.length; i++){
    result = result + "x"
  }
  return result
}
//=== 2 ===
function yellingChars(str){
  let result = ""
  for(let i = 0; i < str.length; i++){
    if(i === str.length){
      result = result + str[i]
    }else{
      result = result + str[i] + "!"
    }
  }
  return result
}
//=== 3 ===
function indexedChars(str){
  let result = ""
  for(let i = 0; i < str.length; i++){
    result = result + i + str[i] 
  }
  return result
}
//=== 4 ===
function numberedChars(str){
  let result = ""
  for(let i = 0; i < str.length; i++){
    result = result + "(" + (i + 1)  + ")" + str[i]
  }
  return result
}
//console.log(numberedChars("hello"))

//=== 5 ===
function exclaim(sentence){
   let result = ""
  for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === '?' || sentence[i] === '.'){
      result = result + '!'
    }else{
      result = result + sentence[i]
    }
    
  }
  return result
}
//console.log(exclaim('What are you doing? Are you a fool?'))
//console.log(exclaim('This is fine.'))

//=== 6 ===
function repeatIt(str, n){
  let result = ""
  for(let i = 0; i < n; i++){
    result = result + str
  }
  return result
}
//console.log(repeatIt('beetlejuice', 3))
//console.log(repeatIt ('oh hi!', 8))

//=== 7 ===
 function truncate(str){
  if (str.length <= 18) {
    return str;
  }
  let result = '';
  for (let i = 0; i < 15; i++) {
    result += str[i];
  }
  return result + '...';
 }
//console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'))
//console.log(truncate("Well, that's just, like, your opinion man."))

//=== 8 ===
function emailify(name){
  let firstName = ''
  let lastName = ''
  let spaceFound = false;
  for(let i = 0; i < name.length; i++){
    if(name[i] === ' '){
      spaceFound = true;
    }else{
      if(spaceFound){
        lastName = lastName + name[i].toLowerCase()
      }else{
        firstName = firstName + name[i].toLowerCase()
      }
    }
  }
  return firstName[0] + lastName + '.prsvr@gmail.com'
}
//console.log(emailify('kyle rose'))
//console.log(emailify('Jason Doty'))
//console.log(emailify('Alice Smith'))

//=== 9 ===
function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
//console.log(reverse('kyle'))
//console.log(reverse('rose'))

//=== 10 ===
function onlyVowels(word){
  let result = ""
  for(let i = 0; i < word.length; i++){
    let char = word[i].toLowerCase();
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
      result += word[i]
    }
  }
  return result
}
// console.log(onlyVowels('Kyle Rose'))
// console.log(onlyVowels('quickly'))
// console.log(onlyVowels('Jason Doty'))

//=== 11 ===
function crazyCase(str){
  let result = " "
  for(let i = 0; i < str.length; i++){
    if(i % 2 === 0){
      result = result + str[i].toLowerCase();
    } else {
      result = result + str[i].toUpperCase();
    }
  }
  return result
}
// console.log(crazyCase('hello'))
// console.log(crazyCase('multiple words here'))
// console.log(crazyCase('YELLING'))

//=== 12 ===
function titleCase(str) {
  let result = ""
  let capitalizeNext = true
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char === " ") {
      capitalizeNext = true
      result += char
    } else if (capitalizeNext) {
      result += char.toUpperCase()
      capitalizeNext = false
    } else {
      result += char.toLowerCase()
    }
  }
  return result
}
// console.log(titleCase('return of the king'))
// console.log(titleCase('peRseVere CODe'))

//=== 13 ===
function camelCase(str) {
  let result = ''; 
  let bigLetters = false; 

  for (let i = 0; i < str.length; i++) {
    let word = str[i];

    if (word === ' ') {
      bigLetters = true; 
    } else {
      if (bigLetters) {
        result = result + word.toUpperCase(); 
        bigLetters = false; 
      } else {
        result = result + word.toLowerCase(); 
      }
    }
  }

  return result; 
}

// console.log(camelCase('oh Hello')) 
// console.log(camelCase('well yeah of course'))
// console.log(camelCase('Boy howdy')) 

//=== 14 ===
function crazyCase2ReturnOfCrazyCase(str){
  let result = ""
  let letterIndex = 0
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    if(char === " "){
      result += char
    }else {
      if (letterIndex % 2 === 0){
        result += char.toLowerCase()
      }else {
        result += char.toUpperCase()
      }
      letterIndex++
    }
  }
  return result
}
// console.log(crazyCase2ReturnOfCrazyCase('multiple words here'))
// console.log(crazyCase2ReturnOfCrazyCase('crazy stuff'))
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
