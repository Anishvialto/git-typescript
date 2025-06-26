let z: string = "aababcaab";
let maxLetters: number = 2;
let minSize: number = 3;
let maxSize: number = 4;

let freq: { [key: string]: number } = {}; // Frequency map
let maxCount: number = 0;

// Only using minSize for efficiency
for (let i: number = 0; i <= z.length - minSize; i++) {
    let substr: string = z.slice(i, i + minSize);

    // Count unique characters
    let unique: { [char: string]: boolean } = {};
    let uniqueCount: number = 0;

    for (let char of substr) {
        if (!unique[char]) {
            unique[char] = true;
            uniqueCount++;
        }
    }

    if (uniqueCount <= maxLetters) {
        freq[substr] = (freq[substr] || 0) + 1;
        if (freq[substr] > maxCount) {
            maxCount = freq[substr];
        }
    }
}

console.log(maxCount); // Output: 2