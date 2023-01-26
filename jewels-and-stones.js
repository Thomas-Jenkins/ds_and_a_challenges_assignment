// function countJewels(jewels, stones) {
  //To complete this challenge I will need to compare each of the letters in the stones string to the jewels each of the letters in the jewels string. 
  //I think I can do this by looping through the stones string and for each letter, looping through the jewels string. If there is a match i can increment a stonesThatAreJewels count. Then once the stones loop has completed returning the count. 

  //loop through the stones string
//   let stonesThatAreJewels = 0; 
//   for (let char in stones) {
//     for (let letter in jewels) {
//         if (char === letter) {
//             stonesThatAreJewels++;
//         }
//     }
//   }
//   return stonesThatAreJewels;
// }

//This solution has failed. Returning 2, when the test case should return 3.
// console.log(countJewels('aA', 'aAAbbbb'));
// console.log(countJewels('z', 'ZZ'));

//to test why this is happening, I am going to console.log char and letter in their respective loops. 

// let stonesThatAreJewels = 0; 
// for (let char in stones) {
//     console.log('char', char.value)
//   for (let letter in jewels) {
//     console.log('letter', letter.value);
//       if (char === letter) {
//           stonesThatAreJewels++;
//       }
//   }
// }
// return stonesThatAreJewels;
// }
// console.log(countJewels('aA', 'aAAbbbb'));

//The console logs have revealed to me that that the for in loop is returning a Number rather than the letter of the string. Keeping with the same idea of the loop of jewels within the loop of stones. I will use a standard for loop. 
// let stonesThatAreJewels = 0;
// for (let i = 0; i < stones.length; ++i) {
//     for (let t = 0; t < jewels.length; ++t) {
//         if (stones[i] === jewels[t]) {
//             ++stonesThatAreJewels;
//         }
//     }
// }
// return stonesThatAreJewels;
// }

// console.log(countJewels('aA', 'aAAbbbb'));

//the nested standard for loop with an if statement incrementing the stonesThatAreJewels counter proves the first test case.

// console.log('Test Case One = 3', countJewels('aA', 'aAAbbbb'));
// console.log('Test Case Two = 0', countJewels('z', 'ZZ'));

//This function successfully fulfills the requirements of the challenge. 


function countJewels(jewels, stones) {
let stonesThatAreJewels = 0;
for (let i = 0; i < stones.length; ++i) {
    for (let t = 0; t < jewels.length; ++t) {
        if (stones[i] === jewels[t]) {
            ++stonesThatAreJewels;
        }
    }
}
return stonesThatAreJewels;
}

console.log('Test Case One = 3', countJewels('aA', 'aAAbbbb'));
console.log('Test Case Two = 0', countJewels('z', 'ZZ'));