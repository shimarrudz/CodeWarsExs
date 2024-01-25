function getMiddle(word) {
    // Absolve word length in a const
    const length = word.length;

    // Check if the length is odd or even
    if (length % 2 === 1) {
        // If odd, return the middle character
        // Math floor rouds the number down
        const middleIndex = Math.floor(length / 2);
        // CharAt is used to return an specific char by the index
        return word.charAt(middleIndex);        
    } else {
        const middleIndex = length / 2 - 1;
        // Slice function is used to return an part to another
        return word.slice(middleIndex, middleIndex + 2);
    }
}

console.log(getMiddle("test"));     // Output: "es"
console.log(getMiddle("testing"));  // Output: "t"
console.log(getMiddle("middle"));   // Output: "dd"
console.log(getMiddle("A"));        // Output: "A"
