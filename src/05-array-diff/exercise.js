function arrayDiff(a, b) {
    // Use the filter method to iterate throug 'a' and keep only elements no present in 'b'
    return a.filter(data => !b.includes(data));
}

console.log(arrayDiff([1, 2], [1])); // Output: [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // Output: [1, 3]