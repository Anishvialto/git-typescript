"use strict";
class WordTransformation {
    constructor(word1, word2) {
        this.word1 = word1;
        this.word2 = word2;
    }
    // How many characters need to be deleted to make both words the same.
    minDeletionsToEqual() {
        let common = 0; // count how many characters are shared between the two words
        let used = Array(this.word2.length).fill(false);
        // keep track of which letters in word2 have already been matched
        for (let i = 0; i < this.word1.length; i++) {
            for (let j = 0; j < this.word2.length; j++) {
                if (this.word1[i] === this.word2[j] && !used[j]) {
                    common++;
                    used[j] = true;
                    break;
                }
            }
        }
        // Total characters in both words: word1.length + word2.length
        // Subtract 2 * common because we don’t need to delete those common letters
        // The rest must be deleted
        return this.word1.length + this.word2.length - 2 * common;
    }
}
// Example usage:
const transformation = new WordTransformation("sea", "eat");
console.log(transformation.minDeletionsToEqual()); // Output: 2
