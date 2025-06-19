class LongestRepeatedSubstring 
{
  private text: string;
  constructor(text: string) 
  {
    this.text = text;
  }

  public getMaxRepeatedSubstringLength(): number 
  {
    const text: string = this.text;
    const n: number = text.length;

    const count: { [key: string]: number } = {};

    // Count total occurrences of each character
    for (let i = 0; i < n; i++)
         {
      const char = text[i];
      if (count[char] === undefined)
         {
        count[char] = 1;
      } else {
        count[char] = count[char] + 1;
      }
    }

    let maxLen: number = 0;

    for (let i = 0; i < n; ) {
      const char: string = text[i];
      let j: number = i;

      // Move j forward as long as the character is the same
      while (j < n && text[j] === char) {
        j++;
      }

      const currentLength: number = j - i;

      // Look ahead to see if another same char block exists
      let k: number = j + 1;
      while (k < n && text[k] === char) {
        k++;
      }

      const mergedLength: number = k - i;

      let canAddOne: number = 0;
      if (count[char] > mergedLength) {
        canAddOne = 1;
      }

      let option1: number = mergedLength + canAddOne;
      let option2: number = currentLength;
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
const input: string = "ababa";
const lrs = new LongestRepeatedSubstring(input);
console.log(lrs.getMaxRepeatedSubstringLength()); // Output: 3
