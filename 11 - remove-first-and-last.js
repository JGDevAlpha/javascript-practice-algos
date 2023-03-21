// Instructions:
// Return the string passed as a parameter with the first and last character removed.

// e.g. 'hello' --> 'ell'

function wordFormatter(word) {
     const letters = word.split('');
     letters.splice(0,1);
     letters.splice(letters.length - 1, 1);
     const newWord = letters.join('');
     return newWord;
}

// DO NOT TOUCH TESTS BELOW
console.log(wordFormatter('hello') === 'ell' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(wordFormatter('tiger') === 'ige' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(wordFormatter('chocolate') === 'hocolat' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')