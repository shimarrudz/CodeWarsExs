function countBits(number) {
    // Convert the interger to its binary representation and count '1's
    // toString(2) coverts a number to a binnary string
    return number.toString(2).split('0').join('').length;
}

// Example:
console.log(countBits(1234)); // Output: 5