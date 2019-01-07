
//-----------------------------------Change in coins

//This is a excersice that I had to solve to apply for an apprenticeship program

// let payment = [0.25, 0.25, 0.25, 0.25, 1.00]
// let price = 1.87


// let changeInCoins = (price, payment) =>{
//   let theChange = [0,0,0,0]
//   let totalPayment = 0 


//   for(let i = 0; i < payment.length; i++){
//     totalPayment += payment[i]
//   }

//   let change = (totalPayment - price).toFixed(2)

//   while(change > 0){
//     if((change - 0.25).toFixed(2) >= 0){
//       change = (change - 0.25).toFixed(2)
//       theChange[3] += 1

//     } else if((change - 0.10).toFixed(2) >= 0){
//       change = (change - 0.10).toFixed(2)    
//       theChange[2] += 1
//     }else if((change - 0.05).toFixed(2) >= 0){
//       change = (change - 0.05).toFixed(2)
//       theChange[1] += 1
//     } else if((change - 0.01).toFixed(2) >= 0){
//       change = (change - 0.01).toFixed(2)
//       theChange[0] += 1
//     }
//   }

//   return theChange

// }


// changeInCoins(price, payment)


// ====>>> better practice

// let payment = [0.25, 0.25, 0.25, 0.25, 1.00];
// let price = 1.87;

// const adjustChange = (change, denomination, theChange, changeIndex) => {
//   change -= (denomination).toFixed(2);
//   theChange[changeIndex] += 1;
//   return change;
// };

// const checkChange = (change, denomination) => {
//   return (change - denomination).toFixed(2) >= 0;
// }

// const changeInCoins = (price, payment) => {
//   let theChange = [0, 0, 0, 0];
//   let totalPayment = 0;

//   for (let i = 0; i < payment.length; i++) {
//     totalPayment += payment[i];
//   }

//   let change = (totalPayment - price).toFixed(2);

//   while (change > 0) {
//     if (checkChange(change, 0.25)) {
//       change = adjustChange(change, 0.25, theChange, 3);
//     } else if (checkChange(change, 0.10)) {
//       change = adjustChange(change, 0.10, theChange, 2);
//     } else if (checkChange(change, 0.05)) {
//       change = adjustChange(change, 0.05, theChange, 1);
//     } else if (checkChange(change, 0.01)) {
//       change = adjustChange(change, 0.01, theChange, 0);
//     }
//   }

//   return theChange;
// }

// changeInCoins(price, payment);
