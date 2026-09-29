//Sample function 1
function calculateTax(amount){
    let taxValue = amount * 0.1;
    return taxValue;
}

console.log(calculateTax(200))

//Sample function 2
function convertToUpperCase(text){
    return text.toUpperCase();
}

console.log(convertToUpperCase("it is john"));

//Sample function 3
function findMaximum(num1, num2){
    return Math.max(num1, num2);
}

console.log(findMaximum(10, 20));

//Sample function 4
function isPalindrome(word){
    let reversedStr = word.split('').reverse().join('');
    return word === reversedStr;
}

console.log(isPalindrome("racecar"));

//Sample function 5
function calculateDiscountedPrice(originalPrice, discountPercentage){
    let discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    return discountedPrice;
}

console.log(calculateDiscountedPrice(100, 20));


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };