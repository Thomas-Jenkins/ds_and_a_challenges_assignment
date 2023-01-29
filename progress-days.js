// To complete this challenge I need to calculate how many time the next number in an array is larger than the last.
// I will need to declare a counter Variable. 
// I will need to loop through the miles variable.
// Then on each iteration of the loop I will compare the current index with the next index. 
// If the next index is larger than the current index. Then I will increment a counter variable. 
// Once the loop is complete I will return the the counter. 
function progressDays(miles) {
    let counter = 0;
    for (let i = 0; i < miles.length; ++i) {
        if (miles[i + 1] > miles[i]) {
            ++counter;
        }
    }
    return counter;
}

console.log('Test Case: [10, 11, 12, 9, 10], Expected Output: 3, Output: ', progressDays([10, 11, 12, 9, 10]));
console.log('Test Case: [6, 5, 4, 3, 2, 9], Expected Output: 1, Output: ', progressDays([6, 5, 4, 3, 2, 9]));
console.log('Test Case: [9, 9], Expected Output: 0, Output: ', progressDays([9, 9]));