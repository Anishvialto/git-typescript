class VerticalPrinter {
  private words: string[];

  constructor(s: string) {
    this.words = s.split(' ');
  }

  printVertically(): string[] {
    const words = this.words;

    // Find the length of the longest word
    let maxLen = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLen) {
        maxLen = words[i].length;
      }
    }

    const result: string[] = [];

    // For each column index (0 to maxLen-1)
    for (let i = 0; i < maxLen; i++) {
      let verticalWord = '';

      // For each word, add the character at position i or space if none
      for (let j = 0; j < words.length; j++) {
        if (i < words[j].length) {
          verticalWord += words[j][i];
        } else {
          verticalWord += ' ';
        }
      }

      // Remove trailing spaces manually:
      let lastCharIndex = verticalWord.length - 1;
      while (lastCharIndex >= 0 && verticalWord[lastCharIndex] === ' ') {
        lastCharIndex--;
      }

      verticalWord = verticalWord.substring(0, lastCharIndex + 1);

      result.push(verticalWord);
    }

    return result;
  }
}

// Example usage:
const vp1 = new VerticalPrinter("HOW ARE YOU");
console.log(vp1.printVertically());  // ["HAY", "ORO", "WEU"]

const vp2 = new VerticalPrinter("TO BE OR NOT TO BE");
console.log(vp2.printVertically());  // ["TBONTB", "OEROOE", "   T"]
