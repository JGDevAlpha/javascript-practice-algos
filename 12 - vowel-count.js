// Instructions:
// Return the count of vowels within the string
// The vowels counted will be a,e,i,o,u
// e.g. elephant --> 3

function vowelCount(string) {
    let vowels = 0;
    const letters = string.split('');
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === 'a' || letters[i] === 'e' || letters[i] === 'i' || letters[i] === 'o' || letters[i] === 'u') {
            vowels++;
        };
    };
    return vowels;
}

// DO NOT TOUCH TESTS BELOW
console.log(vowelCount('elephant') === 3 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(vowelCount('pizza') === 2 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(vowelCount('magic') === 2 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')