"use strict";
// Longest Repeating Character Replacement in TypeScript
// Define a class to solve the problem
class RepeatingChar {
    // Constructor takes inputs as parameters
    constructor(s, k) {
        this.s = s;
        this.k = k;
    }
    // Main function to find the longest repeating character substring
    findLongest() {
        let count = {}; // Dictionary to count characters
        let maxCount = 0; // Highest frequency of any character in current window
        let left = 0; // Left pointer of the sliding window
        let result = 0; // Store the longest valid window length
        // Loop through the string with the right pointer
        for (let right = 0; right < this.s.length; right++) {
            const char = this.s[right];
            // Count occurrences of current character
            count[char] = (count[char] || 0) + 1;
            // Update the max count of any character in current window
            maxCount = Math.max(maxCount, count[char]);
            // If we need more than k changes, shrink the window from the left
            if ((right - left + 1) - maxCount > this.k) {
                count[this.s[left]]--; // Remove the leftmost character from count
                left++; // Move the left pointer
            }
            // Update the result with the current window size
            result = Math.max(result, right - left + 1);
        }
        // Return the length of the longest valid window
        return result;
    }
}
// Example usage
const inputString = "AABABBA"; // Replace with your test string
const kChanges = 1; // Replace with your allowed changes
// Create the object with given inputs
const obj = new RepeatingChar(inputString, kChanges);
// Get and print the result
const longest = obj.findLongest();
console.log(`Longest repeating characters with ${kChanges} change(s): ${longest}`);
