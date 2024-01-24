function isIsogram(str) {
    str = str.toLowerCase();

    const charCount = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (charCount[char]) {
            return false;
        }

        charCount[char] = true
    }
    return true;
}