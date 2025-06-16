class ReplaceWordsSimple {
  private dictionary: string[];
  private sentence: string;

  constructor() {
    const dictInput: string | null = prompt("Enter dictionary words (comma separated):");
    const sentenceInput: string | null = prompt("Enter the sentence:");

    this.dictionary = dictInput ? dictInput.split(",").map(word => word.trim()) : [];
    this.sentence = sentenceInput ?? "";
  }

  // Method to replace derivatives with roots
  replaceWords(): void {
    const dict: string[] = this.dictionary;
    const words: string[] = this.sentence.split(" ");
    const newWords: string[] = [];

    for (const word of words) {
      let replaced: string = word;

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
