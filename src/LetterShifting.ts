class LetterShifting {
  private s: string;
  private shifts: number[];

  constructor(s: string, shifts: number[]) {
    this.s = s;
    this.shifts = shifts;
  }

  public shiftLetters(): string {
    let totalShift: number = 0;
    const result: string[] = [];
    const n: number = this.shifts.length;

    // Process shifts from end to start
    for (let i = n - 1; i >= 0; i--) {
      totalShift = (totalShift + this.shifts[i]) % 26;

      const charCode: number = this.s.charCodeAt(i) - 97; // 'a' = 97
      const shiftedChar: string = String.fromCharCode(((charCode + totalShift) % 26) + 97);

      result[i] = shiftedChar;
    }

    return result.join('');
  }
}

// ✅ Example usage:
const s: string = "abc";
const shifts: number[] = [3, 5, 9];

const obj = new LetterShifting(s, shifts);
console.log(obj.shiftLetters()); // Output: "rpl"
