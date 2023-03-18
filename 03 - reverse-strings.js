// Instructions:
// Complete the solution so that it reverses the string passed into it.
// e.g. 
// 1. 'world'  =>  'dlrow'
// 2. 'word'   =>  'drow'

const  reverseString = (string) => {
    const reversedName = string.split('').reverse().join('');
    return reversedName;
};


// DO NOT TOUCH TESTS BELOW
console.log(reverseString('world') === 'dlrow' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed');
console.log(reverseString('word') === 'drow' ? '✅ 02 - Test Passed' : '❌ 02 - Test Failed');