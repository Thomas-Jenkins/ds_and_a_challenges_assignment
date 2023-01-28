// In this challenge I will need to compare an array of morse codes for the alphabet to the words that have been provided in the test cases. Upon comparison I will need to concatenate the code into a single string, then compare that string with the other strings created by the other words. Then I will need to check, how many of those words in morse code have the same pattern. 

//To do this, I plan to loop through the alphabet constant, which I will declare to be the lowercase alphabet, and the word provided, then find the index of the letter in the alphabet constant and compare it to the index of the codes constant. Using an array of the codes index I will pull the individual code into an array with the others and join the array. Once that is done for each word in the input, I will loop through them and if the joined codes match I will increment a variable. Though, potentially i will need to add additional logic to create a dynamic number of variables depending on the number of matching codes.

const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

function uniqueWords(words) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let dividedArray = [];
    let codeFromWords = [];
    for (let i = 0; i < words.length; ++i) {
        let letterToNumberArray = [];
        for (let t = 0; t < words[i].length; ++t) {
            for (let letter of alphabet) {
                if (letter === words[i][t]) {
                    letterToNumberArray.push(alphabet.indexOf(letter));
                }
            }
        } 
        dividedArray.push(letterToNumberArray);
    }
    for (let i = 0; i < dividedArray.length; ++i) {
        let codeFromNumberArray = [];
        for (let t = 0; t < dividedArray[i].length; ++t) {
            let temp = dividedArray[i][t];
            for (let j = 0; j < alphabet.length; ++j) {
                if (temp === j) {
                    codeFromNumberArray.push(codes[j]);
                }
            }
        }
        let temp2 = codeFromNumberArray.join('');
        codeFromWords.push(temp2);
    }
    let matchesCounter = 0;
    for (let i = 0; i < codeFromWords.length; ++i) {
        // console.log(codeFromWords[i], i);
        if (codeFromWords[i] === codeFromWords[i + 1]) {
            matchesCounter++;
        }     
    }
   let finalResults = makeSet(codeFromWords);
    return finalResults;
}

function makeSet(codeFromWords) {
    return new Set(codeFromWords).size;
}

console.log('Test Case One: ["gin","zen","gig","msg"] Expected: 2 Returned: ', uniqueWords(["gin","zen","gig","msg"]));
console.log('Test Case One: ["a"] Expected: 1 Returned: ', uniqueWords(["a"]));
