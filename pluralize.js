//In this challenge, I need to add 's' to the end of a word in an array ONLY if the word is duplicated. 
// First I will need to loop through the input variable 'words'.
// Then I will need to determine if the word is unique or duplicate. 
// To do that, I will create a new array that I will push the word to if it has any duplicates. 
// when the word is pushed I will also push the 's' and then join them. 
// finally I will push the array to a second array, then I will make a set of the final array, and return the set. 
function pluralize(words) {
    let tempArray = [];
    let resultsArray = [];
    let duplicateCounter = words.reduce(function(obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
    }, {});
    let temp = duplicateCounter;
    for (let key in temp) {
        if (temp[key] > 1) {
            tempArray.push(key);
            tempArray.push('s');
            let tempTwo = tempArray.join('');
            resultsArray.push(tempTwo);
        } else if (temp[key] === 1) {
            resultsArray.push(key);
        }
    }
    return resultsArray;
}

console.log('Test Case One: ["cow", "pig", "cow", "cow"]. Expected: [ \'cows\', \'pig\' ], Output: ', pluralize(["cow", "pig", "cow", "cow"]));
console.log('Test Case Two: ["table", "table", "table"]. Expected: [ \'tables\'], Output: ', pluralize(["table", "table", "table"]));
console.log('Test Case Three: ["chair", "pencil", "arm"]. Expected: [ \'chair\', \'pencil\', \'arm\'], Output: ', pluralize(["chair", "pencil", "arm"]));









// let tempArray = [];
// let tempArrayTwo = [];
// for (let i = 0; i < words.length; ++i) {
//     for (let t = 0; t < words.length; ++t) {
//         if (words[i] === words[t + 1]) {
//             tempArray.push(words[i]);
//             tempArray.push('s');
//             let tempVar = tempArray.join('');
//             tempArray = [];
//             tempArrayTwo.push(tempVar);
//             tempVar = null;
//         } 
//     }
// }
// console.log(tempArrayTwo);