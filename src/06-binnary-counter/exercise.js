function countBits(number) {
    // Convert the interger to its binary representation and count '1's
    // toString(2) coverts a number to a binnary string
    // split('0') to divide the string in an array that separate '0' and '1's
    // join('') to unify the substrings in a only string, removing all '0's then we got '11111'
    return number.toString(2).split('0').join('').length;
}

// Example:
console.log(countBits(1234)); // Output: 5