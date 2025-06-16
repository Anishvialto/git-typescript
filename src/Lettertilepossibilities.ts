class TilePossibilities {
  private tiles: string;
  private result: number;

  constructor(tiles: string) {
    this.tiles = tiles;
    this.result = 0;
  }

  public numTilePossibilities(): number {
    const freq: number[] = new Array(26).fill(0);

    for (const char of this.tiles) {
      freq[char.charCodeAt(0) - 65]++; // 'A' is ASCII 65
    }

    this.backtrack(freq);
    return this.result;
  }

  private backtrack(freq: number[]): void {
    for (let i = 0; i < 26; i++) {
      if (freq[i] === 0) continue;

      this.result++;       // Count the current sequence
      freq[i]--;           // Use the current character
      this.backtrack(freq);
      freq[i]++;           // Backtrack
    }
  }
}
const tp1 = new TilePossibilities("AAB");
console.log(tp1.numTilePossibilities()); // Output: 8

const tp2 = new TilePossibilities("AAABBC");
console.log(tp2.numTilePossibilities()); // Output: 188
