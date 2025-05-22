"use strict";
class DecodedString {
    constructor(s, k) {
        this.s = s;
        this.k = k;
    }
    // Function to find the kth letter in the decoded string
    kthLetter() {
        let size = 0; // Holds the total length of the decoded string
        let i;
        // Step 1: Calculate the total size of the decoded string
        for (i = 0; i < this.s.length; i++) {
            const ch = this.s[i];
            if (isNaN(Number(ch))) {
                // If character is a letter, increase size by 1
                size += 1;
            }
            else {
                // If character is a digit, multiply current size
                size *= Number(ch);
            }
        }
        // Step 2: Traverse backwards to find the kth letter
        for (i = this.s.length - 1; i >= 0; i--) {
            const ch = this.s[i];
            this.k %= size;
            if (this.k === 0 && isNaN(Number(ch))) {
                // If we land on a letter, and k matches, return it
                return ch;
            }
            if (!isNaN(Number(ch))) {
                // If digit, reduce the size accordingly
                size /= Number(ch);
            }
            else {
                // If letter, just decrease size
                size -= 1;
            }
        }
        return ""; // Fallback
    }
}
// Example usage
const s = "leet2code3";
const k = 10;
const decoder = new DecodedString(s, k);
const result = decoder.kthLetter();
console.log("Output =", result);
