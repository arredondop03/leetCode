//-----------------------------------Reverse String
//Runtime 72 ms

var reverseString = function(s) {
  return s
    .split("")
    .reverse()
    .join("");
};

//-----------------------------------Reverse Integer
//Runtime 96 ms
var reverse = function(x) {
  let num = x
    .toString()
    .split("")
    .reverse();
  console.log(num[0]);

  while (num[0] == 0) {
    num.splice(0, 1);
  }

  if (num.includes("-")) {
    num.splice(num.indexOf("-"), 1);
    num.unshift("-");
  }

  if (num.join("") > 2147483647 || num.join("") < -2147483647) {
    return 0;
  } else {
    return num.join("");
  }
};

//better solution - found it in leetcode, here for reference :D
//Runtime 72 ms

// var reverse = function (num) {
//   if (Number.MAX_SAFE_INTEGER < num || Number.MIN_SAFE_INTEGER > num) {
//     return 0;
//   }

//   let number;
//   let isPositiveNumber = true;

//   if (num < 0) {
//     isPositiveNumber = false;
//     number = Math.abs(num);
//   } else {
//     number = num;
//   }

//   let result = 0;

//   108

//   while

//     while (number !== 0) {
//       const tail = number % 10;
//       result = result * 10 + tail;
//       number = Math.floor(number / 10);
//     }

//   if (!isPositiveNumber) {
//     result = result - (result * 2);
//   }

//   if (result > Math.pow(2, 31) || result < Math.pow(-2, 31)) {
//     return 0;
//   }

//   return result;
// };

//-----------------------------------First Unique Character
//Runtime 1308 ms

// let s = 'aaaddddas'

// let firstUniqueCharacter = (s) =>{
// s = s.split('')
// for(let i = 0; i <s.length; i++){
//   let theChar = s[i]
//   s.splice(i,1)
//   if(s.indexOf(theChar) === -1){
//     return i
//   } else {
//     s.splice(i,0,theChar)
//   }
// }
// return -1
// }

// firstUniqueCharacter(s)

//-----------------------------------Valid Anagram
//Runtime 76 ms

// let isAnagram = function(s, t) {
//   const obj = {};
//   let word1 = s;
//   let word2 = t;

//   if (word1.length !== word2.length) {
//     return false;
//   } else {
//     for (let i = 97; i < 123; i++) {
//       obj[i] = 0;
//     }
//     for (let i = 0; i < word1.length; i++) {
//       obj[word1.charCodeAt(i)] = obj[word1.charCodeAt(i)] + 1;
//     }
//     for (let i = 0; i < word2.length; i++) {
//       obj[word2.charCodeAt(i)] = obj[word2.charCodeAt(i)] - 1;
//     }
//     for (let i = 97; i < 123; i++) {
//       if (obj[i] !== 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// };



//-----------------------------------Valid Palindrome
//Runtime 96ms

// let isAlpha = (char) => {
//   let code = char.charCodeAt()
//   if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
//     return true
//   }
//   return false
// }

// let isPalindrome = (s) => {
//   s = s.toLowerCase().split('')
//   let i = 0, j = s.length - 1
//   while(i < j){
//     if(!isAlpha(s[i])){
//       i++
//     }
//     if(!isAlpha(s[j])){
//       j--
//     }
//     if(isAlpha(s[i]) && isAlpha(s[j])){
//       if(s[i] === s[j]){
//         i++
//         j--
//       } else {
//         return false
//       }
//     }
//   }
//   return true
// }

// isPalindrome('hey...hhkky ,eh')


// ---------------------Implement strStr()
//Runtime 72 ms

// var strStr = function(haystack, needle) {
//   return haystack.indexOf(needle)
// };






