"use strict";
class Repeater {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    minRepeats() {
        // Calculate minimum repeats needed so repeated a is at least length of b
        const repeatCount = Math.ceil(this.b.length / this.a.length);
        let repeatedString = this.a.repeat(repeatCount);
        if (repeatedString.includes(this.b)) {
            return repeatCount;
        }
        repeatedString = this.a.repeat(repeatCount + 1);
        if (repeatedString.includes(this.b)) {
            return repeatCount + 1;
        }
        return -1;
    }
}
// Prompt input returns string | null, so we handle that safely
const aInput = prompt("Enter string a: ");
const bInput = prompt("Enter string b: ");
if (aInput !== null && bInput !== null) {
    const repeater = new Repeater(aInput, bInput);
    const result = repeater.minRepeats();
    console.log("Minimum repetitions: " + result);
}
else {
    console.log("Invalid input.");
}
