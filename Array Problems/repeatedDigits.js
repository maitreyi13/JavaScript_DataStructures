//Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array

let repeatedDigitArray = new Array();

function checkPalindrome(number) {
    let reverseNumber = number.toString().split("").reverse();
    if (number == reverseNumber.join("")) {
        return true;
    }
    else {
        return false;
    }
}

for(let index = 0 ; index <= 100 ; index++){
    if(index > 10 && checkPalindrome(index))
        repeatedDigitArray.push(index);
}

console.log("The repeated digits are : " + repeatedDigitArray);