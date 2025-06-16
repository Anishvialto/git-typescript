"use strict";
class WordFrequency {
    constructor(words, k) {
        this.words = words;
        this.k = k;
    }
    topKFrequent() {
        const wordCount = {};
        // Count the frequency of each word
        this.words.forEach(word => {
            wordCount[word] = (wordCount[word] || 0) + 1;
        });
        // Sort by frequency (descending), then by alphabetical order (ascending)
        return Object.keys(wordCount)
            .sort((a, b) => {
            const freqDiff = wordCount[b] - wordCount[a];
            return freqDiff !== 0 ? freqDiff : a.localeCompare(b);
        })
            .slice(0, this.k);
    }
}
const words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
const k = 3;
const wf = new WordFrequency(words, k);
console.log(wf.topKFrequent()); // Output: ['the', 'is', 'sunny']
