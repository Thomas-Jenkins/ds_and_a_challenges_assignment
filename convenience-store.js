// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.


console.log('Expected: False ',changeEnough([2, 100, 0, 0], 14.11));
console.log('Expected: True ',changeEnough([0, 0, 20, 5], 0.75));
console.log('Expected: True ',changeEnough([30, 40, 20, 5], 12.55));
console.log('Expected: False ',changeEnough([10, 0, 0, 50], 3.85));
console.log('Expected: False ',changeEnough([1, 0, 5, 219], 19.99));


function changeEnough(coins, amount) {
let quarters = coins[0] * .25;
let dimes = coins[1] * .1;
let nickels = coins[2] * .05;
let pennies = coins[3] * .01;

let total = quarters + dimes + nickels + pennies;
 if (total > amount) {
    return true;
 } else {
    return false;
 }
}

