// Instructions:
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation) {
    if (employed && !vacation) {
        return true;
    } else {
        return false;
    }
}


// DO NOT TOUCH TESTS BELOW

// setAlarm(true, true) -> false
console.log(setAlarm(true, true) ? '❌ 01 - Test Failed' : '✅ 01 - Test Passed')

// setAlarm(false, true) -> false
console.log(setAlarm(false, true) ? '❌ 01 - Test Failed' : '✅ 01 - Test Passed')

// setAlarm(false, false) -> false
console.log(setAlarm(false, false) ? '❌ 01 - Test Failed' : '✅ 01 - Test Passed')

// setAlarm(true, false) -> true
console.log(setAlarm(true, false) ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')
