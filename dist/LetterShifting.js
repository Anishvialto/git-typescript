"use strict";
class LetterShifting {
    constructor(s, shifts) {
        this.s = s;
        this.shifts = shifts;
    }
    shiftLetters() {
        let totalShift = 0;
        const result = [];
        const n = this.shifts.length;
        // Process shifts from end to start
        for (let i = n - 1; i >= 0; i--) {
            totalShift = (totalShift + this.shifts[i]) % 26;
            const charCode = this.s.charCodeAt(i) - 97; // 'a' = 97
            const shiftedChar = String.fromCharCode(((charCode + totalShift) % 26) + 97);
            result[i] = shiftedChar;
        }
        return result.join('');
    }
}
// ✅ Example usage:
const s = "abc";
const shifts = [3, 5, 9];
const obj = new LetterShifting(s, shifts);
console.log(obj.shiftLetters()); // Output: "rpl"
