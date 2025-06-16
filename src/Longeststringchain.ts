class LongestStringChain {
  private words: string[];

  constructor(words: string[]) {
    this.words = words;
  }

  public longestStrChain(): number {
    // Step 1: Sort words by increasing length
    this.words.sort((a, b) => a.length - b.length);

    const dp: Map<string, number> = new Map(); // Stores longest chain ending with each word
    let maxLength: number = 1;

    for (const word of this.words) {
      let currentMax: number = 1;

      // Try removing one letter at every position to find predecessors
      for (let i = 0; i < word.length; i++) {
        const predecessor: string = word.slice(0, i) + word.slice(i + 1);

        if (dp.has(predecessor)) {
          currentMax = Math.max(currentMax, (dp.get(predecessor) || 0) + 1);
        }
      }

      dp.set(word, currentMax); // Update chain length for current word
      maxLength = Math.max(maxLength, currentMax); // Track global max chain length
    }

    return maxLength;
  }
}
const words: string[] = ["a", "b", "ba", "bca", "bda", "bdca"];
const chain = new LongestStringChain(words);
console.log(chain.longestStrChain()); // Output: 4
