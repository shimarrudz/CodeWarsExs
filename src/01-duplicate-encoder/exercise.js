function duplicateEncode(word) {
    word = word.toLowerCase();
    
    let result = '';
    const charCount = {};
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (charCount[char] === 1) {
        result += '(';
      } else {
        result += ')';
      }
    }
    
    return result;
  }
  

console.log(duplicateEncode("din"));       // Deve retornar "((("
console.log(duplicateEncode("recede"));    // Deve retornar "()()()"
console.log(duplicateEncode("Success"));   // Deve retornar ")())())"
console.log(duplicateEncode("(( @"));      // Deve retornar "))(("