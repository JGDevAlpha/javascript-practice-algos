// Instructions:
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// e.g. [1, 2, 3, 4, -11, -12, -13, -14, -15]
// returns [4, -65]


function countPositivesSumNegatives(numbersArray) {
    const positives = [];
    let negatives = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > 0) {
            positives.push(numbersArray[i]);
        } else {
            negatives += numbersArray[i];
        }
    }
    return [positives.length, negatives];
}


// DO NOT TOUCH TESTS BELOW
console.log(
    countPositivesSumNegatives(
        [1, 2, 3, 4, 5, 6, 7, -11, -12])[0] === 7 ?
        '✅ 01 - Test Passed' : '❌ 01 - Test Failed'
);

console.log(
    countPositivesSumNegatives(
        [1, 2, 3, 4, 5, 6, 7, -11, -12])[1] === -23 ?
        '✅ 01 - Test Passed' : '❌ 01 - Test Failed'
);
