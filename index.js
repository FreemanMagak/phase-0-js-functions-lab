function calculateTax(amount){
    let taxValue = amount * 0.1;
    return taxValue;
}

console.log(calculateTax(200))




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };