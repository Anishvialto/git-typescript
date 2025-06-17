class SmallestSubsequence {
  private s: string;

  constructor(s: string) {
    this.s = s;
  }

  public getSmallestSubsequence(): string {
    const stack: string[] = [];
    const seen: Set<string> = new Set();
    const lastIndex: Record<string, number> = {};

    // Step 1: Store the last index of each character
    for (let i = 0; i < this.s.length; i++) {
      lastIndex[this.s[i]] = i;
    }

    // Step 2: Build the result using a stack
    for (let i = 0; i < this.s.length; i++) {
      const char: string = this.s[i];

      if (seen.has(char)) continue;

      // Remove characters from stack if:
      // - They are bigger than current char
      // - They will appear again later
      while (
        stack.length > 0 &&
        char < stack[stack.length - 1] &&
        lastIndex[stack[stack.length - 1]] > i
      ) {
        seen.delete(stack.pop() as string);
      }

      stack.push(char);
      seen.add(char);
    }

    return stack.join('');
  }
}
const example1 = new SmallestSubsequence("bcabc");
console.log(example1.getSmallestSubsequence()); // Output: "abc"

const example2 = new SmallestSubsequence("cbacdcbc");
console.log(example2.getSmallestSubsequence()); // Output: "acdb"
