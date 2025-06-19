"use strict";
class LongestRepeatedSubstring {
    constructor(text) {
        this.text = text;
    }
    getMaxRepeatedSubstringLength() {
        const text = this.text;
        const n = text.length;
        const count = {};
        // Count total occurrences of each character
        for (let i = 0; i < n; i++) {
            const char = text[i];
            if (count[char] === undefined) {
                count[char] = 1;
            }
            else {
                count[char] = count[char] + 1;
            }
        }
        let maxLen = 0;
        for (let i = 0; i < n;) {
            const char = text[i];
            let j = i;
            // Move j forward as long as the character is the same
            while (j < n && text[j] === char) {
                j++;
            }
            const currentLength = j - i;
            // Look ahead to see if another same char block exists
            let k = j + 1;
            while (k < n && text[k] === char) {
                k++;
            }
            const mergedLength = k - i;
            let canAddOne = 0;
            if (count[char] > mergedLength) {
                canAddOne = 1;
            }
            let option1 = mergedLength + canAddOne;
            let option2 = currentLength;
            if (count[char] > currentLength) {
                option2 = currentLength + 1;
            }
            if (option1 > maxLen) {
                maxLen = option1;
            }
            if (option2 > maxLen) {
                maxLen = option2;
            }
            i = j;
        }
        return maxLen;
    }
}
const input = "ababa";
const lrs = new LongestRepeatedSubstring(input);
console.log(lrs.getMaxRepeatedSubstringLength()); // Output: 3
