//-----------------------------------Rotate array

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// let nums = [1,2,3,4,5,6] 
// var k = 3
// var otherNums = []


// for(let i = 0 ; i < k ; i++){
//   otherNums.push(nums[nums.length - 1])
//   nums.splice(nums.length - 1 ,1)
//   nums.unshift(otherNums[0])
//   otherNums.pop()
// }


// console.log(nums)
// console.log(otherNums)

//-----------------------------------Contains duplicates
//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

//=========Best solution so far - Runtime: 84 ms

// let nums2 = [1,2,3,4]
// let aja = {}
// for(let i = 0; i < nums2.length; i++){
// aja[nums2[i]] = 'h'
  
// }
// if(nums2.length !== Object.keys(aja).length){
//   console.log('nah')
// } else {
  // console.log('yeap')
// }


//=========Less good solution - Runtime: 980 ms

// let nums3 = [1,2,3,4]

// function myFunction(nums3){
//     for (let i = 0 ; i < nums3.length ; i++){
//       let firstNum = nums3[i]
//       for(let j = i+1 ; j < nums3.length  ; j++){
//         if(nums3[i] == nums3[j] ){
//           return true
//         } 
//       }
//     }
//     return false
//   }


//=========Trying to use RegEx to solve this problem (hasn't worked)

// var temp = ['is', 'hey'];
// // for(let i = i < tem.length; i++){
    // var reg = new RegExp('' + input + '');
// var count = (temp.join().match(`/is/g`) || []).length;

// // }
// console.log(count);


// function FindString(i) {
//     var reg = new RegExp('' + i + '');
//     var temp = 'heyyyyqyyyy'
// var count = (temp.match(reg) || []).length;
// return count
// }

// console.log(FindString('yyyy'))






//-----------------------------------Plus One


//=========Best solution!!!!!!!! beats 100% of submitions in leetCode 1!!! - Runtime: 52 ms

// var plusOne = function(digits) {
// let carrier = null
// for(let i = digits.length-1; i>=0; i--){
// if(carrier === null || carrier === 1){
//   if(carrier===null){
//     digits[i]+=1
//   } 
//   if(carrier === 1){
//     digits[i]+=carrier
//     carrier = 0
//   }
//   if(digits[i] > 9){
//     carrier=1
//     let aja = digits[i].toString()
//     digits.splice(i,1,Number(aja.split('').splice(1,1)))
//     if(digits[0] === 0){
//       digits.unshift(1)
//     }
//   }else{
//     carrier = 0
//   }
// }

// }  
//   return digits 
  
// };

  
//-----------------------------------Move Zeroes
//Runtime 60ms - 80ms 
//I realized that the results change for every submition
// let nums = [0,0,0,4,0,0]

// for(let i = nums.length; i >=0; i--){
//   if(nums[i] === 0){
//       nums.splice(i,1)
//       nums.push(0)
//   }
// }

// console.log(nums)

//-----------------------------------Intersection of Two Arrays II
//Runtime 56 ms
// var intersect = function(nums1, nums2) {
//   let arr = []
//   if(nums1.length === 0 || nums2.length === 0){
//     return arr
//   }else{
//     for(let i = 0; i<nums2.length; i++){
//       let index = nums1.indexOf(nums2[i])
//       if( index > -1 ){
//         arr.push(nums2[i])
//         nums1.splice(index, 1)
//       }
//     }
//     return arr
//   }
// };


//-----------------------------------Two Sum
//Runtime 172 ms

// let nums = [2, 7, 11, 15]
// let target = 9

// let twoSum = (nums, target) => {
//   if(nums.length === 0){
//   return []
//   } else {
//     for(let i = 0; i <nums.length; i++){
//       let otherIndex = nums.indexOf(target - nums[i])
//       if(otherIndex > -1 && otherIndex !== i){
//         return [i, otherIndex]
//       }
//     }
//   }
// };

// console.log(twoSum(nums,target))






//-----------------------------------Valid Array
//Runtime 84 ms

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function(board) {
 
    

//   let noDotsBigArr = []
//   let noDotsBigArrVer = []

//     for(let i=0; i<board.length; i++){
//       noDotsBigArr = board[i].filter((eachArr)=>{
//           return eachArr !== '.'
//       })
//       setArr = new Set(noDotsBigArr)
//       if(setArr.size === noDotsBigArr.length){
//         noDotsBigArr = []
//       } else if(setArr.size !== noDotsBigArr.length) {
//         return false
//       }
//     }

//     let verticalArr = []

//     for(let j = 0; j <board.length ; j++){
//     for(let i = 0; i<board.length; i++){
//       if(board[i][j] !== '.'){
//         verticalArr.push(board[i][j])
//       }
//     }
//     let setArr = new Set(verticalArr)
//     if(setArr.size !== verticalArr.length){
//       return false
//     } else {
//       verticalArr = []
//     }
//   }

//   let quadrant = []


// for(let i = 0 ; i < 10; i+=3){

//     for(let j = 0 * i ; j < 3; j++){
//       // console.log(j)
//       if(board[j][0] !== '.'){
//         quadrant.push(board[j][0])
//       }
//       if(board[j][1] !== '.'){
//         quadrant.push(board[j][1])
//       }
//       if(board[j][2] !== '.'){
//         quadrant.push(board[j][2])
//       }

//     }

//     let setArr = new Set(quadrant)
//     if(setArr.size !== quadrant.length ){
//       return false 
//     } else {
//       quadrant = []
//     }

// }


//   let counter = 0;
//   let numbers = [];

//     for(let j= 0; j < 9; j++){
//       for(let i =0; i < 3; i++){
//         counter++;
//         // console.log(counter)
//         if(board[j][i] !== '.'){
//           numbers.push(board[j][i])
//           // console.log(numbers, counter)
//         }
//         if(counter === 9){
//           let noDots = new Set(numbers)
//           if(noDots.size === numbers.length){
//             counter = 0
//             numbers = []
//           }else{
//             return false
//           }
//         }


//       }
//     }
//     for(let j= 0; j < 9; j++){
//       for(let i =3; i < 6; i++){
//         counter++;

//         if(board[j][i] !== '.'){
//           numbers.push(board[j][i])

//         }
//         if(counter === 9){
//           let noDots = new Set(numbers)
//           if(noDots.size === numbers.length){
//             counter = 0
//             numbers = []
//           }else{
//             return false
//           }
//         }

//       }

      
//     }

//     for(let j= 0; j < 9; j++){
//       for(let i =6; i < 9; i++){
//         counter++;

//         if(board[j][i] !== '.'){
//           numbers.push(board[j][i])

//         }
//         if(counter === 9){
//           let noDots = new Set(numbers)
//           if(noDots.size === numbers.length){
//             counter = 0
//             numbers = []
//           }else{
//             return false
//           }
//         }

//       }

      
//     }
//      return true
// };



//-----------------------------------Car parking spot

//This is a excersice that I had to solve to apply for an apprenticeship program


// let n = [
//   [1,1,1,1,1],
//   [1,1,1,1,1],
//   [1,1,1,1,1],
//   [1,1,1,1,1],
//   [1,1,1,1,0],
// ]

// function carParking(n, available) {

//     let spot = []
//     for (let i = 0, j = 0; j < n.length; i++) {

//         if (n[i][j] === 0) {
//             spot.push(i + 1, j + 1)
//             console.log(spot)
//             return spot
//         }
//         if (i === n.length-1) {
//             j++
//             i = 0
//         }

//     }

// }

// carParking(n)

