"use strict";
class ReplaceWordsSimple {
    constructor() {
        const dictInput = prompt("Enter dictionary words (comma separated):");
        const sentenceInput = prompt("Enter the sentence:");
        this.dictionary = dictInput ? dictInput.split(",").map(word => word.trim()) : [];
        this.sentence = sentenceInput !== null && sentenceInput !== void 0 ? sentenceInput : "";
    }
    // Method to replace derivatives with roots
    replaceWords() {
        const dict = this.dictionary;
        const words = this.sentence.split(" ");
        const newWords = [];
        for (const word of words) {
            let replaced = word;
            for (const root of dict) {
                if (word.startsWith(root) && root.length < replaced.length) {
                    replaced = root;
                }
            }
            newWords.push(replaced);
        }
        console.log("After Replacement:", newWords.join(" "));
    }
}
// Create object of the class
const obj = new ReplaceWordsSimple();
// Call the method
obj.replaceWords();
