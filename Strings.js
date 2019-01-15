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
