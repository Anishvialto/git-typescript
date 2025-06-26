"use strict";
let z = "aababcaab";
let maxLetters = 2;
let minSize = 3;
let maxSize = 4;
let freq = {}; // Frequency map
let maxCount = 0;
// Only using minSize for efficiency
for (let i = 0; i <= z.length - minSize; i++) {
    let substr = z.slice(i, i + minSize);
    // Count unique characters
    let unique = {};
    let uniqueCount = 0;
    for (let char of substr) {
        if (!unique[char]) {
            unique[char] = true;
            uniqueCount++;
        }
    }
    if (uniqueCount <= maxLetters) {
        freq[substr] = (freq[substr] || 0) + 1;
        if (freq[substr] > maxCount) {
            maxCount = freq[substr];
        }
    }
}
console.log(maxCount); // Output: 2
